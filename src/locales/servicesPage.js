import { getServicesCatalog } from "./servicesCatalog";

const featureIcons = [
  "flaticon-pie-chart",
  "flaticon-idea-1",
  "flaticon-competitive",
  "flaticon-database",
  "flaticon-folder-management",
  "flaticon-user",
  "flaticon-planning",
];

export function getServicesPageFeatures(locale) {
  const catalog = getServicesCatalog(locale);
  return catalog.map((item, i) => ({
    number: String(i + 1).padStart(2, "0") + ".",
    icon: featureIcons[i],
    title: item.title,
    slug: item.slug,
  }));
}

export function getServicesPageContent(locale) {
  const en = locale === "en";
  return {
    bannerTitle: en ? "Our Services" : "Nos Services",
    bannerBreadcrumb: en ? "Our Services" : "Nos Services",
    heroSub: en ? "What we offer" : "Ce Que Nous Proposons",
    heroTitle: en
      ? "IT solutions for your digital transformation"
      : "Solutions IT Pour Votre Transformation Digitale",
    faqSub: en ? "FAQ" : "FAQ",
    faqTitle: en ? "Questions? Here are some answers" : "Des Questions ? Questions & Réponses",
    faqImageAlt: en
      ? "IT support and technology solutions"
      : "Support IT et Solutions Technologiques",
    sliderSub: en ? "Our services" : "Nos Services",
    sliderTitle: en ? "Outstanding business solutions" : "Solutions Business Exceptionnelles",
    ctaSub: en ? "Custom quote" : "Devis Personnalisé",
    ctaTitle: en
      ? "Tailored IT solutions for your organization"
      : "Solutions IT Sur Mesure Pour Votre Entreprise",
    ctaBody: en
      ? "Every IT project is unique. We deliver customized solutions aligned with your needs, budget, and business goals. Contact us for a free assessment and a tailored quote."
      : "Chaque projet IT est unique. Nous proposons des solutions personnalisées adaptées à vos besoins spécifiques, votre budget et vos objectifs métier. Contactez-nous pour un audit gratuit et un devis sur mesure.",
    ctaCard1Title: en ? "Free assessment" : "Audit Gratuit",
    ctaCard1Text: en
      ? "Full review of your current IT infrastructure"
      : "Analyse complète de votre infrastructure IT actuelle",
    ctaCard2Title: en ? "Tailored quote" : "Devis Personnalisé",
    ctaCard2Text: en
      ? "A proposal aligned with your needs and budget"
      : "Proposition adaptée à vos besoins et votre budget",
    ctaCard3Title: en ? "Dedicated support" : "Accompagnement",
    ctaCard3Text: en
      ? "Support throughout your project"
      : "Support dédié tout au long de votre projet",
    ctaButton: en ? "Request a free quote" : "Demander un Devis Gratuit",
    approachSub: en ? "Our approach" : "Notre Approche",
    approachTitle: en ? "The path to success" : "Le Chemin Vers le Succès",
    steps: [
      {
        icon: "flaticon-business",
        title: en ? "Vision" : "Vision",
        text: en
          ? "We analyze your business and technology context to define a clear, prioritized, and realistic roadmap."
          : "Nous analysons votre contexte métier et technologique pour définir une feuille de route claire, priorisée et réaliste.",
      },
      {
        icon: "flaticon-folder-management",
        title: en ? "Architecture" : "Architecture",
        text: en
          ? "We design a modern, secure architecture (cloud, data, IAM, AI/MLOps) aligned with your goals."
          : "Nous concevons une architecture moderne et sécurisée (cloud, données, IAM, IA/MLOps) alignée sur vos objectifs.",
      },
      {
        icon: "flaticon-finance",
        title: en ? "Deployment" : "Déploiement",
        text: en
          ? "We deploy your solutions (software, data, cloud, DevSecOps) with an agile, highly automated approach."
          : "Nous déployons vos solutions (logiciels, data, cloud, DevSecOps) avec une démarche agile et hautement automatisée.",
      },
      {
        icon: "flaticon-profits",
        title: en ? "Optimization" : "Optimisation",
        text: en
          ? "We secure your platforms 24/7 and continuously optimize performance and cost to maximize ROI."
          : "Nous sécurisons vos plateformes 24/7 et optimisons en continu performances et coûts pour maximiser votre ROI.",
      },
    ],
  };
}
