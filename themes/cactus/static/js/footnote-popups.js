// Gwern-style in-window footnote popups for Hugo's default footnote markup.
// Works with: <a class="footnote-ref" href="#fn:1">1</a> and <li id="fn:1">...</li>

document.addEventListener("DOMContentLoaded", () => {
  const refs = Array.from(document.querySelectorAll('a.footnote-ref[href^="#fn:"]'));
  if (!refs.length) return;

  const supportsPointerEvents = typeof window.PointerEvent !== "undefined";

  const popup = document.createElement("div");
  popup.id = "footnote-popup";
  popup.className = "footnote-popup";
  popup.setAttribute("role", "tooltip");
  popup.setAttribute("aria-hidden", "true");

  const popupInner = document.createElement("div");
  popupInner.className = "footnote-popup__inner";
  popup.appendChild(popupInner);
  document.body.appendChild(popup);

  let currentRef = null;
  let hideTimer = null;

  function clearHideTimer() {
    if (hideTimer) window.clearTimeout(hideTimer);
    hideTimer = null;
  }

  function hideSoon(delayMs = 150) {
    clearHideTimer();
    hideTimer = window.setTimeout(() => {
      // If focus is still on the active ref, don't hide.
      if (currentRef && document.activeElement === currentRef) return;
      popup.classList.remove("is-visible");
      popup.setAttribute("aria-hidden", "true");
      currentRef = null;
    }, delayMs);
  }

  function getFootnoteHtml(refEl) {
    const rawHref = refEl.getAttribute("href");
    if (!rawHref) return null;

    // Hugo uses IDs like "fn:6" which contain ":" and are not valid in querySelector("#fn:6").
    // Use getElementById instead.
    let hash = rawHref;
    try {
      // Handles absolute URLs too.
      hash = new URL(refEl.href, window.location.href).hash || rawHref;
    } catch (_) {
      // keep rawHref
    }
    if (!hash.startsWith("#")) return null;
    const id = hash.slice(1);
    if (!id) return null;

    const target = document.getElementById(id);
    if (!target) return null;

    // Clone to avoid mutating the page.
    const clone = target.cloneNode(true);
    // Remove backref links ("↩") and any leading numbering if present.
    clone.querySelectorAll("a.footnote-backref").forEach((a) => a.remove());

    // Prefer the paragraph content; fall back to whole li.
    const p = clone.querySelector("p");
    const html = (p ? p.innerHTML : clone.innerHTML).trim();
    return html || null;
  }

  function positionPopupNear(refEl) {
    const margin = 12;
    const gap = 10;

    // Temporarily show for measurement (but keep invisible).
    popup.style.left = "0px";
    popup.style.top = "0px";
    popup.style.maxWidth = "min(520px, calc(100vw - 24px))";
    popup.style.maxHeight = "min(60vh, 520px)";

    const rect = refEl.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    // Prefer below; if it would overflow, place above.
    let top = rect.bottom + gap;
    if (top + popupRect.height + margin > window.innerHeight) {
      top = rect.top - gap - popupRect.height;
    }
    top = Math.max(margin, Math.min(top, window.innerHeight - popupRect.height - margin));

    // Center horizontally on the ref, clamped within viewport.
    let left = rect.left + rect.width / 2 - popupRect.width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - popupRect.width - margin));

    popup.style.left = `${Math.round(left)}px`;
    popup.style.top = `${Math.round(top)}px`;
  }

  function showFor(refEl) {
    clearHideTimer();
    currentRef = refEl;

    const html = getFootnoteHtml(refEl);
    if (!html) return;

    popupInner.innerHTML = html;
    popup.classList.add("is-visible");
    popup.setAttribute("aria-hidden", "false");
    positionPopupNear(refEl);
  }

  // Keep visible when hovering popup itself.
  popup.addEventListener("mouseenter", () => clearHideTimer());
  popup.addEventListener("mouseleave", () => hideSoon(150));

  refs.forEach((ref) => {
    // Keyboard accessibility
    ref.addEventListener("focus", () => showFor(ref));
    ref.addEventListener("blur", () => hideSoon(0));

    // Hover behavior (prefer Pointer Events, ignore touch pointers).
    if (supportsPointerEvents) {
      ref.addEventListener("pointerenter", (e) => {
        if (e.pointerType === "touch") return;
        showFor(ref);
      });
      ref.addEventListener("pointerleave", (e) => {
        if (e.pointerType === "touch") return;
        hideSoon(150);
      });
    } else {
      ref.addEventListener("mouseenter", () => showFor(ref));
      ref.addEventListener("mouseleave", () => hideSoon(150));
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (currentRef) hideSoon(0);
    },
    { passive: true }
  );
  window.addEventListener("resize", () => {
    if (currentRef) positionPopupNear(currentRef);
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentRef) hideSoon(0);
  });
});


