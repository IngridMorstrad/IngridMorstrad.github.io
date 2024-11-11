// A local search script with the help of
// [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2015
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
//
// Modified by:
// Pieter Robberechts <http://github.com/probberechts>

/*exported searchFunc*/
var searchFunc = function(path, searchId, contentId) {

  function stripHtml(html) {
    html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
    html = html.replace(/<script([\s\S]*?)<\/script>/gi, "");
    html = html.replace(/<figure([\s\S]*?)<\/figure>/gi, "");
    html = html.replace(/<\/div>/ig, "\n");
    html = html.replace(/<\/li>/ig, "\n");
    html = html.replace(/<li>/ig, "  *  ");
    html = html.replace(/<\/ul>/ig, "\n");
    html = html.replace(/<\/p>/ig, "\n");
    html = html.replace(/<br\s*[\/]?>/gi, "\n");
    html = html.replace(/<[^>]+>/ig, "");
    return html;
  }

  function getAllCombinations(keywords) {
    var i, j, result = [];

    for (i = 0; i < keywords.length; i++) {
        for (j = i + 1; j < keywords.length + 1; j++) {
            result.push(keywords.slice(i, j).join(" "));
        }
    }
    return result;
  }

  fetch(path)
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "application/xml"))
  .then(xmlResponse => {
    const datas = Array.from(xmlResponse.querySelectorAll("entry")).map(entry => ({
      title: entry.querySelector("title") ? entry.querySelector("title").textContent : "Untitled",
      content: entry.querySelector("content") ? entry.querySelector("content").textContent : "",
      url: entry.querySelector("link") ? entry.querySelector("link").getAttribute("href") : "#"
    }));

    const $input = document.getElementById(searchId);
    if (!$input) return;
    const $resultContent = document.getElementById(contentId);

    $input.addEventListener("input", function () {
      const resultList = [];
      const keywords = getAllCombinations(this.value.trim().toLowerCase().split(" "))
        .sort((a, b) => b.split(" ").length - a.split(" ").length);
      $resultContent.innerHTML = "";
      if (this.value.trim().length <= 0) return;

      datas.forEach(data => {
        let matches = 0;
        const dataTitle = data.title.toLowerCase();
        const dataContent = stripHtml(data.content);
        const dataUrl = data.url;
        let firstOccur = -1;

        if (dataContent) {
          keywords.forEach(keyword => {
            const indexTitle = dataTitle.indexOf(keyword);
            const indexContent = dataContent.indexOf(keyword);

            if (indexTitle >= 0 || indexContent >= 0) {
              matches += 1;
              if (firstOccur < 0) firstOccur = indexContent < 0 ? 0 : indexContent;
            }
          });
        }

        if (matches > 0) {
          const searchResult = {
            rank: matches,
            str: `<li><a href='${dataUrl}' class='search-result-title'>${data.title}</a>`
          };

          if (firstOccur >= 0) {
            let start = firstOccur - 20;
            let end = firstOccur + 80;
            start = start < 0 ? 0 : start;
            end = start === 0 ? 100 : end > dataContent.length ? dataContent.length : end;

            let matchContent = dataContent.substring(start, end);
            const regS = new RegExp(keywords.join("|"), "gi");
            matchContent = matchContent.replace(regS, keyword => `<em class="search-keyword">${keyword}</em>`);

            searchResult.str += `<p class="search-result">${matchContent}...</p>`;
          }
          searchResult.str += "</li>";
          resultList.push(searchResult);
        }
      });

      resultList.sort((a, b) => b.rank - a.rank);
      $resultContent.innerHTML = `<ul class="search-result-list">${resultList.map(result => result.str).join("")}</ul>`;
    });
  })
  .catch(error => console.error("Error fetching XML:", error));

};
