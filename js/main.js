/* Small enhancements. The site works fine without this file — everything
   here is optional polish layered on top of working HTML. */

(function () {
  "use strict";

  /* --- Mobile navigation toggle ----------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    // The menu is only collapsible on small screens, so start it hidden
    // there and let CSS show it again on wide viewports.
    var small = window.matchMedia("(max-width: 640px)");

    function sync() {
      links.hidden = small.matches;
      toggle.setAttribute("aria-expanded", "false");
    }

    sync();
    small.addEventListener("change", sync);

    toggle.addEventListener("click", function () {
      var open = links.hidden;
      links.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Escape closes the menu and returns focus to the button.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && small.matches && !links.hidden) {
        links.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* --- Footer year ------------------------------------------------------- */
  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
