/**
 * Retire tous les faux `.nice-select` placés après un `<select>` et réaffiche le select.
 * S’applique à tous les selects (y compris `data-vtp-native`) pour nettoyer les doublons
 * laissés par l’ancienne init.
 */
export function stripNiceSelectWidgets() {
  if (typeof document === "undefined") return;
  document.querySelectorAll("select").forEach((sel) => {
    sel.style.removeProperty("display");
    let n = sel.nextElementSibling;
    while (n && n.classList && n.classList.contains("nice-select")) {
      const rem = n;
      n = n.nextElementSibling;
      rem.remove();
    }
  });
}
