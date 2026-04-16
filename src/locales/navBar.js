/**
 * Libellés de la barre de navigation principale (FR / EN).
 */

const fr = {
  home: "Accueil",
  about: "À propos",
  services: "Services",
  contact: "Contact",
};

const en = {
  home: "Home",
  about: "About",
  services: "Services",
  contact: "Contact",
};

export function getNavLabels(locale) {
  return locale === "en" ? en : fr;
}
