export const animation = () => {
  if (typeof window === "undefined") return;
  /* WOW UMD utilise }).call(this) : sous Webpack this ≠ window → MutationObserver factice.
     src/vendor/wow.js est une copie patchée avec .call(window). */
  require("./vendor/wow.js");
  if (typeof window.WOW !== "function") return;

  window.__vtpWowInstance?.stop?.();

  const instance = new window.WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  window.__vtpWowInstance = instance;
  instance.init();
};

// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header-navigation");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("sticky");
        } else {
          stick.classList.remove("sticky");
        }
      }
    }
  });
};
