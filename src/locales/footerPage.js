/**
 * Textes du footer VTP (Footer3) — FR / EN selon la locale Next.js.
 */

const fr = {
  logoAlt: "VTP - Visionary Tech Partners",
  tagline:
    "Solutions IT innovantes pour transformer votre infrastructure technologique et optimiser vos processus métier.",
  servicesTitle: "Expertises",
  servicesLinks: [
    { href: "/#services", label: "Solutions IT", isNext: false },
    { href: "/#services", label: "Infrastructure cloud", isNext: false },
    { href: "/#services", label: "Cybersécurité", isNext: false },
    { href: "/#services", label: "IA & MLOps", isNext: false },
    { href: "/services", label: "Catalogue complet", isNext: true },
  ],
  resourcesTitle: "Liens utiles",
  resourcesLinks: [
    { href: "/", label: "Accueil", isNext: true },
    { href: "/about", label: "À propos", isNext: true },
    { href: "/services", label: "Voir l'offre", isNext: true },
    { href: "/contact", label: "Contact", isNext: true },
  ],
  contactTitle: "Contact",
  copyright: "Tous droits réservés",
};

const en = {
  logoAlt: "VTP - Visionary Tech Partners",
  tagline:
    "Innovative IT solutions to transform your technology stack and streamline your business processes.",
  servicesTitle: "Core expertise",
  servicesLinks: [
    { href: "/#services", label: "IT solutions", isNext: false },
    { href: "/#services", label: "Cloud infrastructure", isNext: false },
    { href: "/#services", label: "Cybersecurity", isNext: false },
    { href: "/#services", label: "AI & MLOps", isNext: false },
    { href: "/services", label: "Full service catalog", isNext: true },
  ],
  resourcesTitle: "Resources",
  resourcesLinks: [
    { href: "/", label: "Home", isNext: true },
    { href: "/about", label: "About", isNext: true },
    { href: "/services", label: "Our offering", isNext: true },
    { href: "/contact", label: "Contact", isNext: true },
  ],
  contactTitle: "Contact",
  copyright: "All rights reserved",
};

export function getFooterContent(locale) {
  return locale === "en" ? en : fr;
}
