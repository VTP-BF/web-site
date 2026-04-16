export function getAboutContent(locale) {
  const en = locale === "en";
  return {
    bannerTitle: en ? "About" : "À Propos",
    introSub: en ? "Who we are" : "Qui Nous Sommes",
    introTitle: "Visionary Tech Partners",
    introLead: en
      ? "Visionary Tech Partners (VTP) is a technology consulting firm built by experts in cybersecurity, data science, software engineering, and DevOps/DevSecOps. We help organizations modernize their digital ecosystem with secure, scalable, future-ready solutions."
      : "Visionary Tech Partners (VTP) est une firme de conseil technologique créée par une équipe d'experts en cybersécurité, science des données, développement logiciel et ingénierie DevOps/DevSecOps. Nous aidons les organisations à moderniser leur écosystème numérique avec des solutions sécurisées, évolutives et prêtes pour l'avenir.",
    introBullets: en
      ? [
          "Cybersecurity & threat management",
          "Cloud engineering & DevOps/DevSecOps",
          "Software development & automation",
        ]
      : [
          "Cybersécurité & Gestion des Menaces",
          "Ingénierie Cloud & DevOps/DevSecOps",
          "Développement Logiciel & Automatisation",
        ],
    ctaContact: en ? "Contact us" : "Contactez-Nous",
    mainImageAlt: en
      ? "Visionary Tech Partners — IT solutions, consulting, and digital transformation"
      : "Visionary Tech Partners — solutions IT, conseil et transformation digitale",
    quote: en
      ? "Accelerate global digital maturity through intelligent technology solutions."
      : "Accélérer la maturité numérique mondiale grâce à des solutions technologiques intelligentes.",
    stats: en
      ? [
          {
            end: 35,
            label:
              "Years of combined professional experience we bring through our team and senior network (portfolio)",
          },
          {
            end: 7,
            label:
              "Expertise pillars covered by our VTP service catalogue — from data & AI to cloud, security, and consulting",
          },
          {
            end: 3,
            omitPlus: true,
            label:
              "Operating principles: technical rigor, transparency with clients, and knowledge transfer from day one",
          },
        ]
      : [
          {
            end: 35,
            label:
              "Années d’expérience professionnelle cumulée portée par l’équipe et notre réseau de séniors (portefeuille)",
          },
          {
            end: 7,
            label:
              "Piliers d’expertise couverts par notre catalogue d’offres VTP — données & IA, cloud, cybersécurité, conseil…",
          },
          {
            end: 3,
            omitPlus: true,
            label:
              "Engagements porteurs : exigence technique, transparence avec nos interlocuteurs, transmission des savoirs",
          },
        ],
    missionVisionTitle: en ? "Mission & vision" : "Mission & Vision",
    tabMission: en ? "Our mission" : "Notre Mission",
    tabVision: en ? "Our vision" : "Notre Vision",
    missionP1: en
      ? "Our mission is to empower businesses and institutions with secure, innovative, scalable technology that drives transformation, efficiency, and financial inclusion."
      : "Notre mission est d'autonomiser les entreprises et les institutions avec des solutions technologiques sécurisées, innovantes et évolutives qui favorisent la transformation, l'efficacité et l'inclusion financière.",
    missionP2: en
      ? "Accelerate global digital maturity by empowering organizations with intelligent software, scalable cloud architectures, and proactive threat management built for the future of work."
      : "Accélérer la maturité numérique mondiale en autonomisant les organisations avec des logiciels intelligents, des architectures cloud évolutives et une gestion proactive des menaces conçue pour l'avenir du travail.",
    visionP1: en
      ? "To be the global reference for digital trust and operational resilience, delivering end-to-end modernization through secure identity platforms, elite cloud DevOps, and strategic IT consulting."
      : "Être la référence mondiale en matière de confiance numérique et de résilience opérationnelle, en offrant une modernisation de bout en bout grâce à des plateformes d'identité sécurisées, un DevOps cloud d'élite et un conseil IT stratégique.",
    missionImgAlt: en ? "Our mission — VTP team" : "Notre mission - Équipe VTP",
    visionImgAlt: en ? "Our vision — VTP team" : "Notre vision - Équipe VTP",
    logoAlt: "Visionary Tech Partners",
    valuesTitle: en ? "Core values" : "Valeurs Fondamentales",
    values: en
      ? [
          {
            icon: "flaticon-idea-1",
            title: "Innovation",
            text: "We challenge the status quo and push boundaries to build modern, scalable, high-impact solutions.",
          },
          {
            icon: "flaticon-support",
            title: "Integrity",
            text: "We operate with transparency, honesty, and accountability — always doing what is right for clients and communities.",
          },
          {
            icon: "flaticon-target",
            title: "Resilience",
            text: "We design systems and strategies that withstand pressure, adapt to change, and support long-term sustainability.",
          },
          {
            icon: "flaticon-medal",
            title: "Excellence",
            text: "We uphold the highest standards in engineering, cybersecurity, and consulting — delivering work we are proud of.",
          },
          {
            icon: "flaticon-friend",
            title: "Collaboration",
            text: "We believe success is built through strong partnerships, shared vision, and interdisciplinary teamwork.",
          },
          {
            icon: "flaticon-global",
            title: "Global impact",
            text: "We build technology that supports economic growth, financial inclusion, and stronger digital ecosystems across borders.",
          },
        ]
      : [
          {
            icon: "flaticon-idea-1",
            title: "Innovation",
            text: "Nous remettons en question le statu quo et repoussons les limites pour créer des solutions modernes, évolutives et impactantes.",
          },
          {
            icon: "flaticon-support",
            title: "Intégrité",
            text: "Nous opérons avec transparence, honnêteté et responsabilité — toujours faire ce qui est juste pour nos clients et nos communautés.",
          },
          {
            icon: "flaticon-target",
            title: "Résilience",
            text: "Nous concevons des systèmes et stratégies qui peuvent résister à la pression, s'adapter au changement et soutenir la durabilité à long terme.",
          },
          {
            icon: "flaticon-medal",
            title: "Excellence",
            text: "Nous maintenons les plus hauts standards en ingénierie, cybersécurité et conseil — livrant un travail dont nous sommes fiers.",
          },
          {
            icon: "flaticon-friend",
            title: "Collaboration",
            text: "Nous croyons que le succès se construit grâce à des partenariats solides, une vision partagée et un travail d'équipe interdisciplinaire.",
          },
          {
            icon: "flaticon-global",
            title: "Impact Mondial",
            text: "Nous nous engageons à construire une technologie qui favorise la croissance économique, l'inclusion financière et des écosystèmes numériques plus forts à travers les frontières.",
          },
        ],
    servicesTitle: en ? "Our services" : "Nos Services",
    strategicTitle: en ? "Strategic focus" : "Focus Stratégique",
    strategicLead: en
      ? "VTP is uniquely positioned at the intersection of U.S. enterprise standards and Africa’s emerging digital economies. We focus on building resilient systems that support financial inclusion, government modernization, and cross-border digital trust."
      : "VTP est positionné de manière unique pour opérer à l'intersection des standards des entreprises américaines et des économies numériques émergentes de l'Afrique. Nous nous concentrons sur la construction de systèmes résilients qui soutiennent l'inclusion financière, la modernisation gouvernementale et la confiance numérique transfrontalière.",
    ctaTitle: en
      ? "Your tech partner for transformation. Let’s talk."
      : "Votre partenaire tech pour la transformation. Parlons-en maintenant.",
    ctaButton: en ? "Contact us" : "Contactez-nous",
    historyTitle: en
      ? "Visionary Tech Partners timeline"
      : "Historique Visionary Tech Partners",
    history: en
      ? [
          {
            ribbon: "Nov. 2025",
            title: "Launch",
            body: "Creation of Visionary Tech Partners. Start of technology consulting, cybersecurity, and IT modernization for businesses and institutions.",
            imgAlt: "VTP launch",
          },
          {
            ribbon: "2025",
            title: "Service rollout",
            body: "Rollout of our services: software development, cloud & DevOps engineering, cybersecurity, data analytics, and digital transformation consulting.",
            imgAlt: "Service rollout",
          },
          {
            ribbon: "2026",
            title: "Outlook",
            body: "Strengthening our presence and partnerships, with a focus on financial inclusion and digital trust across markets.",
            imgAlt: "Outlook",
          },
        ]
      : [
          {
            ribbon: "Nov. 2025",
            title: "Lancement",
            body: "Création de Visionary Tech Partners. Début des activités de conseil en technologie, cybersécurité et modernisation IT au service des entreprises et des institutions.",
            imgAlt: "Lancement VTP",
          },
          {
            ribbon: "2025",
            title: "Déploiement des offres",
            body: "Mise en place de nos services : développement logiciel, ingénierie cloud & DevOps, cybersécurité, analyse de données et conseil en transformation digitale.",
            imgAlt: "Déploiement des offres",
          },
          {
            ribbon: "2026",
            title: "Perspectives",
            body: "Renforcement de notre présence et de nos partenariats, avec un focus sur l'inclusion financière et la confiance numérique entre les marchés.",
            imgAlt: "Perspectives",
          },
        ],
    contactSub: en ? "Contact" : "Contact",
    emailLabel: en ? "Email" : "Email",
    webLabel: en ? "Website" : "Site Web",
  };
}
