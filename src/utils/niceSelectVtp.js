/**
 * Remplace `react-nice-select` : ignore `<select data-vtp-native>`, évite les doublons,
 * synchronise la valeur du `<select>` au clic, initialise le libellé affiché une seule fois.
 */
function niceSelect({ withoutwide = undefined } = {}) {
  document.querySelectorAll("select").forEach((element) => {
    if (element.hasAttribute("data-vtp-native")) return;
    if (element.classList.contains("vtp-contact-form__select-native")) return;
    if (element.id === "contact-subject") return;
    if (
      element.nextElementSibling &&
      element.nextElementSibling.classList &&
      element.nextElementSibling.classList.contains("nice-select")
    ) {
      return;
    }

    const options = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    element.style.display = "none";
    const el = document.createElement("div");
    insertAfter(element, el);
    el.className = withoutwide ? "nice-select" : "nice-select wide";
    const ul = document.createElement("ul");
    const span = document.createElement("span");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);

    el.addEventListener("click", (e) => {
      e.stopPropagation();
      el.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });

    options.forEach((opt) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.textContent = opt.textContent;
      li.className = "option";
      const displayFlag =
        opt.getAttribute("data-display") || opt.getAttribute("data-dsplay");
      if (displayFlag) {
        li.classList.add("focus");
      }

      li.addEventListener("click", (e) => {
        e.stopPropagation();
        if (opt.hasAttribute("disabled")) return;
        span.textContent = opt.textContent;
        element.value = opt.value;
        element.dispatchEvent(new Event("change", { bubbles: true }));
        el.classList.remove("open");
      });
    });

    const idx = element.selectedIndex >= 0 ? element.selectedIndex : 0;
    span.textContent = options[idx]?.textContent ?? "";
  });
}

module.exports = niceSelect;
