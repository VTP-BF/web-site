/**
 * Textes page d'accueil (/) — FR par défaut, EN pour locale Next.js "en".
 */
const fr = {
  hero: {
    h1: "Solutions IT pour votre entreprise",
    p: "Nous offrons des services IT de pointe incluant l'IA, la cybersécurité, le cloud et l'automatisation pour propulser votre business vers l'avenir",
    ctaServices: "Découvrir nos Services",
    ctaContact: "Nous Contacter",
    aria:
      "Solutions IT - Software Innovation - Visionary Tech Partners",
  },
  fact: {
    expertise: "Expertise",
    partnerLine: "Votre partenaire tech pour la transformation digitale",
    counterServices: "Services IT",
    counterYears: "An d'activité",
    counterCommitment: "Engagement",
  },
  about: {
    h2: "Transformez votre infrastructure IT pour la moderniser",
    p: "Nous vous accompagnons dans la transformation digitale de votre entreprise avec des solutions IT innovantes, sécurisées et adaptées à vos besoins. De l'automatisation des processus à l'intelligence artificielle, nous mettons la technologie au service de votre croissance.",
    cta: "En savoir plus",
  },
  featuresTrust: {
    h2: "Services IT de confiance pour votre transformation digitale",
    p: "Nous proposons une gamme complète de services IT allant du développement logiciel sur mesure à l'ingénierie cloud, en passant par la cybersécurité et l'analyse de données. Nos solutions sont conçues pour répondre aux défis technologiques modernes.",
    li1: "Solutions sur mesure adaptées à vos besoins",
    li2: "Expertise en cybersécurité et protection des données",
    cta: "En savoir plus",
    imgAlt:
      "Services IT de confiance - Équipe VTP, transformation digitale",
  },
  services: {
    sub: "Nos Services",
    h2: "Services IT exceptionnels pour votre transformation digitale",
    learnMore: "En savoir plus",
    items: [
      {
        title: "Analyse de Données & Big Data",
        desc: "Analyse de données massives et ingénierie d'insights pour transformer vos données en avantage concurrentiel.",
      },
      {
        title: "Ingénierie IA & MLOps",
        desc: "Frameworks d'intelligence artificielle et d'opérations ML pour entreprises modernes.",
      },
      {
        title: "Cybersécurité & Gestion des Menaces",
        desc: "Sécurité de bout en bout et atténuation des menaces pour protéger vos actifs numériques.",
      },
      {
        title: "Ingénierie Cloud & DevOps/DevSecOps",
        desc: "Infrastructure cloud et ingénierie DevSecOps pour un déploiement sécurisé et rapide.",
      },
      {
        title: "Développement Logiciel & Automatisation",
        desc: "Solutions sur mesure et automatisation de processus pour optimiser vos opérations.",
      },
      {
        title: "Plateformes d'Identité Numérique & Authentification",
        desc: "Solutions d'identité numérique et d'authentification pour sécuriser l'accès à vos systèmes.",
      },
      {
        title: "Conseil IT, Modernisation & Automatisation",
        desc: "Stratégie IT et modernisation de l'infrastructure pour aligner la technologie sur vos objectifs.",
      },
    ],
  },
  featuresCost: {
    h2: "Optimisez vos coûts IT et structurez votre avenir technologique",
    p: "Notre approche stratégique vous permet de réduire les coûts opérationnels tout en modernisant votre infrastructure IT. Nous définissons avec vous les priorités technologiques pour maximiser le retour sur investissement et garantir la pérennité de vos systèmes.",
    cloudTitle: "Infrastructure Cloud",
    cloudDesc:
      "Migration et gestion de votre infrastructure cloud pour une agilité et une scalabilité maximales",
    secTitle: "Sécurité 24/7",
    secDesc:
      "Surveillance continue et protection proactive contre les menaces cybernétiques en temps réel",
    imgAlt: "Optimisation et stratégie IT - équipe VTP",
  },
  testimonials: {
    title: "Nos engagements",
    priority: "Priorité",
    slides: [
      {
        quote:
          "Nous nous engageons à respecter les délais convenus et à vous tenir informé à chaque étape. Réactivité, transparence et livraison dans les temps sont au cœur de notre façon de travailler.",
        authorTitle: "Réactivité & délais",
        authorRole: "Respect des engagements et transparence",
      },
      {
        quote:
          "Nous nous appuyons sur des bonnes pratiques et des technologies éprouvées. Qualité du code, sécurité et évolutivité des solutions font partie intégrante de notre offre.",
        authorTitle: "Expertise & qualité",
        authorRole: "Bonnes pratiques et solutions pérennes",
      },
      {
        quote:
          "Nous nous engageons à comprendre vos enjeux et à vous accompagner comme un partenaire. Écoute, conseil et solutions sur mesure pour répondre au plus près à vos besoins.",
        authorTitle: "Partenariat & proximité",
        authorRole: "Écoute et accompagnement personnalisé",
      },
    ],
  },
};

const en = {
  hero: {
    h1: "IT solutions for your business",
    p: "We deliver leading IT services—including AI, cybersecurity, cloud, and automation—to move your business forward.",
    ctaServices: "Explore our services",
    ctaContact: "Contact us",
    aria: "IT solutions - software innovation - Visionary Tech Partners",
  },
  fact: {
    expertise: "Expertise",
    partnerLine: "Your technology partner for digital transformation",
    counterServices: "IT services",
    counterYears: "Years in business",
    counterCommitment: "Commitment",
  },
  about: {
    h2: "Modernize your IT infrastructure for the future",
    p: "We support your digital transformation with innovative, secure IT solutions tailored to your needs. From process automation to artificial intelligence, we put technology at the service of your growth.",
    cta: "Learn more",
  },
  featuresTrust: {
    h2: "Trusted IT services for your digital transformation",
    p: "We offer a full range of IT services—from custom software development to cloud engineering, cybersecurity, and data analytics—designed to meet today’s technology challenges.",
    li1: "Tailored solutions aligned with your needs",
    li2: "Deep expertise in cybersecurity and data protection",
    cta: "Learn more",
    imgAlt: "Trusted IT services - VTP team, digital transformation",
  },
  services: {
    sub: "Our services",
    h2: "Outstanding IT services for your digital transformation",
    learnMore: "Learn more",
    items: [
      {
        title: "Data analytics & Big Data",
        desc: "Large-scale analytics and insight engineering to turn data into competitive advantage.",
      },
      {
        title: "AI engineering & MLOps",
        desc: "AI frameworks and ML operations for modern enterprises.",
      },
      {
        title: "Cybersecurity & threat management",
        desc: "End-to-end security and threat mitigation to protect your digital assets.",
      },
      {
        title: "Cloud engineering & DevOps / DevSecOps",
        desc: "Cloud infrastructure and DevSecOps for secure, fast delivery.",
      },
      {
        title: "Software development & automation",
        desc: "Custom solutions and process automation to streamline operations.",
      },
      {
        title: "Digital identity & authentication platforms",
        desc: "Identity and authentication solutions to secure access to your systems.",
      },
      {
        title: "IT consulting, modernization & automation",
        desc: "IT strategy and infrastructure modernization aligned with your goals.",
      },
    ],
  },
  featuresCost: {
    h2: "Optimize IT costs and shape your technology roadmap",
    p: "Our strategic approach helps reduce operating costs while modernizing your IT stack. Together we prioritize initiatives to maximize ROI and long-term resilience.",
    cloudTitle: "Cloud infrastructure",
    cloudDesc:
      "Migration and management of your cloud environment for agility and scale",
    secTitle: "24/7 security",
    secDesc:
      "Continuous monitoring and proactive protection against cyber threats in real time",
    imgAlt: "IT optimization and strategy - VTP team",
  },
  testimonials: {
    title: "Our commitments",
    priority: "Priority",
    slides: [
      {
        quote:
          "We honor agreed timelines and keep you informed at every step. Responsiveness, transparency, and on-time delivery are central to how we work.",
        authorTitle: "Responsiveness & deadlines",
        authorRole: "Reliable delivery and clear communication",
      },
      {
        quote:
          "We rely on proven practices and mature technologies. Code quality, security, and scalability are built into every engagement.",
        authorTitle: "Expertise & quality",
        authorRole: "Best practices and sustainable solutions",
      },
      {
        quote:
          "We invest in understanding your context and act as a true partner. Listening, guidance, and tailored solutions define our relationship.",
        authorTitle: "Partnership & proximity",
        authorRole: "Personalized support and advice",
      },
    ],
  },
};

export function getHomePageContent(locale) {
  return locale === "en" ? en : fr;
}
