/**
 * Catalogue des 7 offres (FR / EN) — réutilisable (slider, page Services, tuiles À propos, fiches détail).
 */
const rows = [
  {
    slug: "data-analytics",
    img: "/assets/images/services/service-data-analytics.jpg",
    icon: "flaticon-pie-chart",
    fr: {
      title: "Analyse de Données & Big Data",
      desc: "Analyse de données massives et ingénierie d'insights pour transformer vos données en avantage concurrentiel.",
    },
    en: {
      title: "Data analytics & Big Data",
      desc: "Large-scale analytics and insight engineering to turn data into competitive advantage.",
    },
  },
  {
    slug: "ai-mlops",
    img: "/assets/images/services/service-ia-mlops.jpg",
    icon: "flaticon-idea-1",
    fr: {
      title: "Ingénierie IA & MLOps",
      desc: "Frameworks d'intelligence artificielle et d'opérations ML pour entreprises modernes.",
    },
    en: {
      title: "AI engineering & MLOps",
      desc: "AI frameworks and ML operations for modern enterprises.",
    },
  },
  {
    slug: "cybersecurity",
    img: "/assets/images/services/service-cybersecurite.jpg",
    icon: "flaticon-competitive",
    fr: {
      title: "Cybersécurité & Gestion des Menaces",
      desc: "Sécurité de bout en bout et atténuation des menaces pour protéger vos actifs.",
    },
    en: {
      title: "Cybersecurity & threat management",
      desc: "End-to-end security and threat mitigation to protect your digital assets.",
    },
  },
  {
    slug: "cloud-devops",
    img: "/assets/images/services/service-cloud-devops.jpg",
    icon: "flaticon-database",
    fr: {
      title: "Ingénierie Cloud & DevOps/DevSecOps",
      desc: "Infrastructure cloud et ingénierie DevSecOps pour un déploiement sécurisé et rapide.",
    },
    en: {
      title: "Cloud engineering & DevOps / DevSecOps",
      desc: "Cloud infrastructure and DevSecOps for secure, fast delivery.",
    },
  },
  {
    slug: "software-automation",
    img: "/assets/images/services/service-dev-logiciel.jpg",
    icon: "flaticon-folder-management",
    fr: {
      title: "Développement Logiciel & Automatisation",
      desc: "Solutions sur mesure et automatisation de processus pour optimiser vos opérations.",
    },
    en: {
      title: "Software development & automation",
      desc: "Custom solutions and process automation to streamline operations.",
    },
  },
  {
    slug: "identity-access",
    img: "/assets/images/services/service-identite-numerique.jpg",
    icon: "flaticon-user",
    fr: {
      title: "Plateformes d'Identité Numérique & Authentification",
      desc: "Solutions d'identité numérique et d'authentification pour sécuriser l'accès à vos systèmes.",
    },
    en: {
      title: "Digital identity & authentication platforms",
      desc: "Identity and authentication solutions to secure access to your systems.",
    },
  },
  {
    slug: "consulting-modernization",
    img: "/assets/images/services/service-consulting-it.jpg",
    icon: "flaticon-planning",
    fr: {
      title: "Conseil IT, Modernisation & Automatisation",
      desc: "Stratégie IT et modernisation de l'infrastructure pour aligner la technologie sur vos objectifs.",
    },
    en: {
      title: "IT consulting, modernization & automation",
      desc: "IT strategy and infrastructure modernization aligned with your goals.",
    },
  },
];

export const SERVICE_SLUGS = rows.map((r) => r.slug);

export function getServiceRowBySlug(slug) {
  return rows.find((r) => r.slug === slug) || null;
}

export function getServicesCatalog(locale) {
  const lang = locale === "en" ? "en" : "fr";
  return rows.map((r) => ({
    slug: r.slug,
    img: r.img,
    icon: r.icon,
    title: r[lang].title,
    description: r[lang].desc,
  }));
}
