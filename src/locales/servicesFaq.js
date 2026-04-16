const faqs = {
  fr: [
    {
      title: "Proposez-vous des logiciels sur mesure ?",
      body:
        "Oui. Nous concevons et développons des logiciels adaptés à vos processus : applications web, outils métier, automatisation des tâches et intégration avec vos systèmes existants. Chaque solution est pensée pour évoluer avec votre activité.",
    },
    {
      title: "Comment intégrez-vous l’IA et le MLOps ?",
      body:
        "Nous vous accompagnons de la définition du cas d’usage jusqu’au déploiement en production : modèles de machine learning, pipelines MLOps, intégration dans vos applications et maintenance des performances dans le temps.",
    },
    {
      title: "Qu’offrez-vous en cybersécurité ?",
      body:
        "Nous proposons des audits de sécurité, la mise en place de bonnes pratiques (sécurisation des accès, chiffrement, conformité), la formation des équipes et l’accompagnement pour obtenir ou maintenir des certifications adaptées à votre secteur.",
    },
    {
      title: "Cloud et DevSecOps : par où commencer ?",
      body:
        "Nous définissons avec vous une stratégie cloud (migration, hybride ou multi-cloud) et des pratiques DevSecOps (CI/CD, conteneurs, sécurité intégrée) pour livrer plus vite tout en renforçant la qualité et la sécurité.",
    },
  ],
  en: [
    {
      title: "Do you build custom software?",
      body:
        "Yes. We design and build software tailored to your processes: web applications, business tools, task automation, and integration with your existing systems. Every solution is built to grow with your organization.",
    },
    {
      title: "How do you integrate AI and MLOps?",
      body:
        "We support you from use-case definition through production deployment: machine learning models, MLOps pipelines, integration into your applications, and ongoing performance monitoring.",
    },
    {
      title: "What do you offer in cybersecurity?",
      body:
        "We provide security audits, implementation of best practices (access control, encryption, compliance), team training, and guidance to obtain or maintain certifications suited to your sector.",
    },
    {
      title: "Cloud and DevSecOps: where do we start?",
      body:
        "Together we define a cloud strategy (migration, hybrid, or multi-cloud) and DevSecOps practices (CI/CD, containers, security by design) to ship faster while improving quality and security.",
    },
  ],
};

export function getServicesFaq(locale) {
  return locale === "en" ? faqs.en : faqs.fr;
}
