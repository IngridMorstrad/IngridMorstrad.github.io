document.addEventListener("DOMContentLoaded", function() {
  /**
   * Light/dark theme toggle.
   *
   * - Default: user's OS preference (prefers-color-scheme)
   * - Persist: localStorage ("cactus-theme")
   * - Apply: swap the theme stylesheet href
   */
  const themeToggleButton = document.querySelector("#theme-toggle");
  const themeLink = document.querySelector("#theme-stylesheet");
  const themeConfig = window.__cactusTheme || {};

  function getTheme() {
    const t = document.documentElement.getAttribute("data-theme");
    return t === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);

    if (themeLink && themeConfig.lightHref && themeConfig.darkHref) {
      themeLink.href = next === "dark" ? themeConfig.darkHref : themeConfig.lightHref;
    }

    if (themeConfig.storageKey) {
      try { localStorage.setItem(themeConfig.storageKey, next); } catch (e) {}
    }

    if (themeToggleButton) {
      const label = next === "dark" ? "Switch to light theme" : "Switch to dark theme";
      themeToggleButton.setAttribute("aria-label", label);
      themeToggleButton.setAttribute("title", label);
    }
  }

  if (themeToggleButton) {
    // Initialize labels based on current theme (already applied in <head>)
    setTheme(getTheme());

    themeToggleButton.addEventListener("click", function() {
      const current = getTheme();
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  /**
   * Sets up Justified Gallery if the gallery plugin is available.
   */
  if (window.justifiedGallery) {
    const options = {
      rowHeight: 140,
      margins: 4,
      lastRow: "justify"
    };
    document.querySelectorAll(".article-gallery").forEach(gallery => {
      new window.justifiedGallery(gallery, options);
    });
  }

  /**
   * Shows the responsive navigation menu on mobile.
   */
  const navIcon = document.querySelector("#header > #nav > ul > .icon");
  if (navIcon) {
    navIcon.addEventListener("click", () => {
      document.querySelector("#header > #nav > ul").classList.toggle("responsive");
    });
  }

  /**
   * Controls the different versions of the menu in blog post articles for Desktop, tablet, and mobile.
   */
  if (document.querySelector(".post")) {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector("#menu > #nav");
    const menuIcon = document.querySelectorAll("#menu-icon, #menu-icon-tablet");

    /**
     * Display the menu on hi-res laptops and desktops.
     */
    if (window.innerWidth >= 1440) {
      menu.style.visibility = "visible";
      menuIcon.forEach(icon => icon.classList.add("active"));
    }

    /**
     * Display the menu if the menu icon is clicked.
     */
    menuIcon.forEach(icon => {
      icon.addEventListener("click", function() {
        const visibility = menu.style.visibility;
        menu.style.visibility = visibility === "hidden" ? "visible" : "hidden";
        this.classList.toggle("active", visibility === "hidden");
        return false;
      });
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu) {
      window.addEventListener("scroll", function() {
        const topDistance = menu.getBoundingClientRect().top;

        // Hide only the navigation links on desktop
        if (!nav.offsetParent && topDistance < 50) {
          nav.style.display = "block";
        } else if (nav.offsetParent && topDistance > 100) {
          nav.style.display = "none";
        }

        // On tablet, hide the navigation icon as well and show a "scroll to top" icon instead
        if (!document.querySelector("#menu-icon").offsetParent && topDistance < 50) {
          document.querySelector("#menu-icon-tablet").style.display = "block";
          document.querySelector("#top-icon-tablet").style.display = "none";
        } else if (!document.querySelector("#menu-icon").offsetParent && topDistance > 100) {
          document.querySelector("#menu-icon-tablet").style.display = "none";
          document.querySelector("#top-icon-tablet").style.display = "block";
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards, hide it again after scrolling downwards.
     */
    if (document.querySelector("#footer-post")) {
      let lastScrollTop = 0;
      window.addEventListener("scroll", function() {
        const topDistance = window.scrollY;

        if (topDistance > lastScrollTop) {
          // Downscroll -> hide menu
          document.querySelector("#footer-post").style.display = "none";
        } else {
          // Upscroll -> show menu
          document.querySelector("#footer-post").style.display = "block";
        }
        lastScrollTop = topDistance;

        // Close all submenus on scroll
        document.querySelector("#nav-footer").style.display = "none";
        document.querySelector("#toc-footer").style.display = "none";
        document.querySelector("#share-footer").style.display = "none";

        // Show a "navigation" icon when close to the top of the page, otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          document.querySelector("#actions-footer > #top").style.display = "none";
        } else if (topDistance > 100) {
          document.querySelector("#actions-footer > #top").style.display = "block";
        }
      });
    }
  }
});
