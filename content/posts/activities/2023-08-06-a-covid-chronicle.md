---
layout: post
title:  "A covid chronicle"
date:   2023-08-06
comments: true
tags: activities
bsky: 3lelf6yu64k2q
---

## The initial signs

Unfortunately, on the last day of a trip to Alaska, I started feeling a throat infection coming on. This was, however, not to be a simple throat infection.
A few hours after I'd gotten back home (a day later) a fever of 102.3 had built up.

## A citizen scientist

A day later, I decided this might be a good opportunity to chronicle the progression of the disease, and collect some actual data. I started recording my temperature, and the medicines I took. We've had a spike in citizen journalism with the advent of the internet, it would be nice to also have a spike in the number of citizen scientists! Here's a quick graph of what the five days battling with the fever looked like. By day 6, I was fever-free.   

![A graph of COVID temperatures vs time](/assets/images/covidTemps.png)

**Notes**
The green dots indicate when I took medicines (details two sections below).  
Day 1 is not graphed.  
Day 2 starts at 11 AM.  
Day 6 ends at 5:15 PM.

## Interesting observations

I decided not to take medicines when my temperature was under 102, as I'd read some recommendations that it might be better to let your body do its thing. A higher temperature lets the immune system function better. I noticed that medicines steeply bring down the temperature, but once it wears off, the body temperature rises as sharply. The third time I took medicine I took it just before the body temperature crossed 102, as I noticed the medicine took around an hour to take effect - the body temperature didn't drop till about an hour after I'd taken the acetaminophen.  

Temperatures didn't correlate with how I felt. I distinctly remember feeling better at 103 than at 102, and sometimes felt worse at 98 than 99. My core body temperature is usually lower than 98, so a 98.6 left me feeling somewhat feverish.

You're still infectious after the fever's gone. Need the antigen test to return a negative before you can end isolation.

## Medicines taken

Day 1: ~11 PM. DayQuil  
Day 2: 11 AM. Acetaminophen  
Day 2: 8 PM. NyQuil  
Day 3: 5 AM. NyQuil  
Day 4: No medicine.  
Day 5: 9:30 AM. NyQuil half dose (couldn't take the headache).  

## Things I'd have changed

NyQuil may screw around with your sleep. If you don't have difficulty falling asleep, I'd stick to plain acetaminophen.

If you do have difficulty falling asleep, NyQuil might be alright, but I'd ensure you still stick to your nightly sleep schedule once your temperature is under control. I strongly think (in hindsight) if I'd kept a good sleep schedule at the end of Day 4, I'd have recovered a day earlier. I only slept ~5 hours the fourth night and though my temperature had fallen, when I woke up, it quickly started rising. I made sure to sleep 8 hours the next day.

## Post COVID

A year later, I decided to check my running pace chart for 2023, and spotted this interesting graph. Can you guess when I got COVID?

![A graph showing pace versus time](/assets/images/pace.png)

## Later fevers

02/2025: Sore throat after travelling to India.  
08/2025: Sore throat after travelling back from Denver.  

  <script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
  <style>
    .chart { color: #000000; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin: 0; margin-bottom: 40px; }
  </style>
  <h1>Fever Temperature Logs</h1>
  <div id="charts"></div>

  <script>
    const logs = [
        `
        [2:30 PM, 2/15/2025] Me: 100.7
[4:04 PM, 2/15/2025] Me: 101.1
[5:05 PM, 2/15/2025] Me: 100.9 (Had Tylenol 500 mg)
[5:49 PM, 2/15/2025] Me: 100.8
[6:37 PM, 2/15/2025] Me: 100
[10:35 PM, 2/15/2025] Me: 99.1
[11:58 PM, 2/15/2025] Me: 99.9
[12:18 AM, 2/16/2025] Me: 101
[12:58 AM, 2/16/2025] Me: 100.7
[1:43 AM, 2/16/2025] Me: 100.9
[2:19 AM, 2/16/2025] Me: 100.9
[2:58 AM, 2/16/2025] Me: 101.1
[3:54 AM, 2/16/2025] Me: 101.5
[4:21 AM, 2/16/2025] Me: 101.3
[6:42 AM, 2/16/2025] Me: 100.4
[7:13 AM, 2/16/2025] Me: 100.3
[8:08 AM, 2/16/2025] Me: 100.4
[9:36 AM, 2/16/2025] Me: 99.9
[4:55 PM, 2/16/2025] Me: 97.7
`,
        `
        [6:17 PM, 8/1/2025] Me: 100
[7:11 PM, 8/1/2025] Me: 100.3
[8:13 PM, 8/1/2025] Me: 100.3
[9:36 PM, 8/1/2025] Me: 100.5
[10:29 PM, 8/1/2025] Me: 100.6
[3:33 AM, 8/2/2025] Me: 99.8
[4:27 AM, 8/2/2025] Me: 99.5
[8:42 AM, 8/2/2025] Me: 98.8
[10:07 AM, 8/2/2025] Me: 98
[5:39 PM, 8/2/2025] Me: 98.4
`,
        `
[8:41 AM, 12/30/2025] Me: 101.7
[9:15 AM, 12/30/2025] Me: 100.3
[10:29 AM, 12/30/2025] Me: 100.3
[11:31 AM, 12/30/2025] Me: 99.5
[1:06 PM, 12/30/2025] Me: 99.4
[1:43 PM, 12/30/2025] Me: 99.6 (Had Tylenol 1000 mg)
[4:21 PM, 12/30/2025] Me: 97.9
`
    ];

    function parseWhatsAppBlock(text) {
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      const rx = /^\[(\d{1,2}:\d{2}\s?[AP]M),\s(\d{1,2}\/\d{1,2}\/\d{4})\]\s[^:]+:\s(-?\d+(?:\.\d+)?)(?:\s*\(([^)]+)\))?$/i;
      const points = [];
      for (const line of lines) {
        const m = rx.exec(line);
        if (!m) continue;
        const [, time12, mdy, tempStr, note] = m;
        const dt = new Date(`${mdy} ${time12}`);
        const temp = parseFloat(tempStr);
        if (!Number.isNaN(dt.getTime()) && !Number.isNaN(temp)) {
          points.push({ dt, temp, note: note || '' });
        }
      }
      points.sort((a,b) => a.dt - b.dt);
      return points;
    }

    function to12h(date) {
      let h = date.getHours();
      const m = date.getMinutes().toString().padStart(2,'0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12; if (h === 0) h = 12;
      return `${h}:${m} ${ampm}`;
    }

    function plotLog(points, containerId, title) {
      if (!points.length) return;

      const anchor = new Date(points[0].dt);
      anchor.setHours(0,0,0,0);
      const dayMs = 24*60*60*1000;

      const xVals = [];
      const hoverTexts = [];
      const notes = [];

      for (const p of points) {
        const dayNum = Math.floor((p.dt - anchor)/dayMs) + 1;
        const startOfDay = new Date(p.dt); startOfDay.setHours(0,0,0,0);
        const frac = (p.dt - startOfDay)/dayMs;
        xVals.push(dayNum + frac);
        hoverTexts.push(`Day ${dayNum}, ${to12h(p.dt)}`);
        notes.push(p.note);
      }

      const ys = points.map(p=>p.temp);
      const yMin = Math.min(...ys);
      const yMax = Math.max(...ys);
      const yPad = 1;

      // Ensure full day range is visible: x-axis min at 0.95 and max at last day + 1
      const lastDay = Math.floor((points[points.length-1].dt - anchor)/dayMs) + 1;

      const trace = {
        x: xVals,
        y: ys,
        mode: 'lines+markers+text',
        type: 'scatter',
        text: notes,
        textposition: 'top center',
        customdata: hoverTexts,
        hovertemplate: '<b>%{y:.1f} °F</b><br>%{customdata}<br>%{text}<extra></extra>',
        marker: { size: 8 }
      };

      const shapes = [
      ];
      for(let d=2; d<=lastDay; d++){
        shapes.push({ type:'line', xref:'x', yref:'y', x0:d, x1:d, y0:yMin-yPad, y1:yMax+yPad, line:{width:1, color:'rgba(255,255,255,0.1)'} });
      }

      const layout = {
        title,
        paper_bgcolor:'rgba(0,0,0,0)',
        plot_bgcolor:'rgba(0,0,0,0)',
        margin:{l:50,r:20,t:40,b:50},
        xaxis:{
          tickmode:'array',
          tickvals:Array.from({length:lastDay},(_,i)=>i+1),
          ticktext:Array.from({length:lastDay},(_,i)=>`Day ${i+1}`),
          gridcolor:'rgba(0,0,0,0.22)',
          range:[0.95, lastDay+1]  // <-- extend to include full last day
        },
        yaxis:{
          title:'Temperature (°F)',
          gridcolor:'rgba(0,0,0,0.22)',
          range:[yMin-yPad,yMax+yPad]
        },
        shapes,
        annotations:[{x:lastDay/2, y:100.4, xref:'x', yref:'y', text:'', showarrow:false, font:{size:11}}],
        showlegend:false
      };

      Plotly.newPlot(containerId,[trace],layout,{responsive:true});
    }

    const chartsDiv = document.getElementById('charts');
    logs.forEach((log,idx)=>{
      const points = parseWhatsAppBlock(log);
      const chartId = `chart${idx}`;
      const chartDiv = document.createElement('div');
      chartDiv.className='chart';
      chartDiv.id=chartId;
      chartsDiv.appendChild(chartDiv);
      const firstDate = new Date(points[0].dt);
      const formattedDate = `${(firstDate.getMonth() + 1).toString().padStart(2, '0')}/` +
          `${firstDate.getDate().toString().padStart(2, '0')}/` +
          `${firstDate.getFullYear()}`;
      plotLog(points, chartId, `${formattedDate}`);
    });
  </script>

