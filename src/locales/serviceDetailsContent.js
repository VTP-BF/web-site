import { getServiceRowBySlug } from "./servicesCatalog";

const ui = {
  fr: {
    servicesBreadcrumb: "Nos services",
    readMore: "En savoir plus",
    contactCta: "Nous contacter",
    otherOffers: "Autres offres",
    otherOffersLead: "Découvrez nos autres expertises VTP.",
    faqSub: "FAQ",
    faqTitle: "Questions fréquentes",
    mgmtBtn: "En savoir plus sur VTP",
  },
  en: {
    servicesBreadcrumb: "Our services",
    readMore: "Learn more",
    contactCta: "Contact us",
    otherOffers: "Other offerings",
    otherOffersLead: "Explore more VTP capabilities.",
    faqSub: "FAQ",
    faqTitle: "Frequently asked questions",
    mgmtBtn: "Learn more about VTP",
  },
};

/** Contenu spécifique par slug (FR / EN), aligné sur l’offre catalogue. */
const blocks = {
  "data-analytics": {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "Données fiables, décisions plus rapides",
        lead:
          "Nous structurons vos pipelines de données, qualifions vos sources et industrialisons la production d’indicateurs pour vos équipes métiers et techniques.",
        features: [
          {
            title: "Cadrage & gouvernance data",
            text: "Modèle de données, rôles, sécurité et conformité intégrés dès la conception.",
          },
          {
            title: "Plateformes analytiques",
            text: "Entrepôts, lacs de données et outils BI adaptés à vos volumes et à vos usages.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "De la collecte à la valeur métier",
        p: "Nous accompagnons vos équipes sur l’ensemble du cycle : ingestion, transformation, exposition et adoption des dashboards.",
        li1: "Roadmap data et priorisation des cas d’usage",
        li2: "Industrialisation et monitoring des flux",
      },
      optimization: {
        sub: "Performance",
        h2: "Optimiser coûts, latence et qualité",
        p: "Nous dimensionnons vos ressources cloud et analytiques pour concilier performance, résilience et maîtrise budgétaire.",
        checks: [
          "Audit des pipelines et des requêtes coûteuses",
          "Stratégie de cache et d’agrégation",
          "Observabilité et alertes opérationnelles",
          "Gouvernance des accès et masquage des données sensibles",
        ],
      },
      faqs: [
        {
          title: "Travaillez-vous avec nos outils existants ?",
          body: "Oui. Nous nous intégrons à votre stack (cloud, bases, ETL, BI) et proposons des évolutions progressives plutôt qu’un big-bang risqué.",
        },
        {
          title: "Comment garantir la qualité des données ?",
          body: "Nous mettons en place des contrôles, des règles de validation et des SLA sur les jeux de données critiques, avec traçabilité.",
        },
        {
          title: "Proposez-vous du support après livraison ?",
          body: "Nous pouvons prendre en charge l’exploitation des pipelines, les évolutions et la formation des équipes selon vos besoins.",
        },
        {
          title: "Quel délai pour une première version ?",
          body: "Selon la complexité, une première brique utile peut être livrée en quelques semaines après cadrage et accès aux sources.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "Trusted data, faster decisions",
        lead:
          "We structure pipelines, improve source quality, and industrialize metrics for both business and engineering teams.",
        features: [
          {
            title: "Data framing & governance",
            text: "Data models, roles, security, and compliance baked in from day one.",
          },
          {
            title: "Analytics platforms",
            text: "Warehouses, data lakes, and BI stacks sized for your workloads.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "From ingestion to business value",
        p: "We support the full lifecycle: ingestion, transformation, exposure, and adoption of dashboards.",
        li1: "Data roadmap and use-case prioritization",
        li2: "Flow industrialization and monitoring",
      },
      optimization: {
        sub: "Performance",
        h2: "Optimize cost, latency, and quality",
        p: "We right-size cloud and analytics resources for performance, resilience, and budget control.",
        checks: [
          "Pipeline and expensive query reviews",
          "Caching and aggregation strategy",
          "Operational observability and alerts",
          "Access governance and sensitive data masking",
        ],
      },
      faqs: [
        {
          title: "Can you work with our existing tools?",
          body: "Yes. We integrate with your stack (cloud, databases, ETL, BI) and favor incremental evolution over risky big-bang rewrites.",
        },
        {
          title: "How do you ensure data quality?",
          body: "We add validation rules, controls, and SLAs on critical datasets with clear traceability.",
        },
        {
          title: "Do you provide post-delivery support?",
          body: "We can operate pipelines, implement changes, and train teams depending on your needs.",
        },
        {
          title: "How fast is a first usable release?",
          body: "After scoping and access, a first valuable slice can often ship within weeks, depending on complexity.",
        },
      ],
    },
  },
  "ai-mlops": {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "IA utile, industrialisable et maîtrisée",
        lead:
          "Nous passons du prototype à la production : pipelines MLOps, monitoring des modèles et intégration dans vos applications métiers.",
        features: [
          {
            title: "Cas d’usage & données",
            text: "Sélection des signaux pertinents, préparation des jeux et validation des hypothèses avec vos équipes.",
          },
          {
            title: "MLOps & exploitation",
            text: "CI/CD pour modèles, versioning, déploiement sécurisé et observabilité des performances.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "De l’expérimentation à l’échelle",
        p: "Nous alignons l’IA sur vos objectifs : ROI, conformité et capacité interne à maintenir les solutions.",
        li1: "Architecture cible et choix technologiques",
        li2: "Transfert de compétences et documentation",
      },
      optimization: {
        sub: "Fiabilité",
        h2: "Réduire les risques en production",
        p: "Tests, biais, explicabilité et sécurité sont intégrés pour des services IA durables.",
        checks: [
          "Plans de retraining et seuils d’alerte",
          "Contrôles de dérive et qualité des prédictions",
          "Séparation des environnements dev / prod",
          "Journalisation et audit des décisions automatisées",
        ],
      },
      faqs: [
        {
          title: "Travaillez-vous avec nos équipes data science ?",
          body: "Oui, en complément ou en pilotage : nous adaptons notre niveau d’implication à votre maturité.",
        },
        {
          title: "Quels clouds ou frameworks supportez-vous ?",
          body: "Nous intervenons sur les principaux clouds et stacks open source ou éditeurs, selon votre contexte.",
        },
        {
          title: "Comment gérer la conformité (RGPD, etc.) ?",
          body: "Nous intégrons la protection des données, la minimisation et la traçabilité dès la conception des flux.",
        },
        {
          title: "Proposez-vous du MLOps clé en main ?",
          body: "Nous pouvons concevoir et déployer la plateforme MLOps, ou renforcer votre existant.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "Useful AI, built for production",
        lead:
          "We move from prototype to production with MLOps pipelines, model monitoring, and integration into business apps.",
        features: [
          {
            title: "Use cases & data",
            text: "Relevant signals, dataset preparation, and hypothesis validation with your teams.",
          },
          {
            title: "MLOps & operations",
            text: "Model CI/CD, versioning, secure deployment, and performance observability.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "From experimentation to scale",
        p: "We align AI with ROI, compliance, and your ability to maintain solutions long term.",
        li1: "Target architecture and technology choices",
        li2: "Knowledge transfer and documentation",
      },
      optimization: {
        sub: "Reliability",
        h2: "Reduce production risk",
        p: "Testing, bias, explainability, and security are built in for sustainable AI services.",
        checks: [
          "Retraining plans and alert thresholds",
          "Drift monitoring and prediction quality checks",
          "Separated dev / prod environments",
          "Logging and audit of automated decisions",
        ],
      },
      faqs: [
        {
          title: "Can you work with our data science team?",
          body: "Yes—complementary or lead—we adapt to your maturity and capacity.",
        },
        {
          title: "Which clouds or frameworks do you support?",
          body: "We work across major clouds and common open-source or vendor stacks.",
        },
        {
          title: "How do you handle compliance (GDPR, etc.)?",
          body: "We embed data protection, minimization, and traceability from the design of flows.",
        },
        {
          title: "Do you deliver turnkey MLOps?",
          body: "We can design and deploy the platform or strengthen what you already run.",
        },
      ],
    },
  },
  cybersecurity: {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "Réduire la surface d’attaque, renforcer la résilience",
        lead:
          "Audits, durcissement, détection et réponse : nous priorisons les mesures à fort impact selon votre secteur et votre exposition.",
        features: [
          {
            title: "Évaluation & priorisation",
            text: "Cartographie des actifs, scénarios de menace et plan d’actions pragmatique.",
          },
          {
            title: "Mise en œuvre",
            text: "Contrôles d’accès, segmentation, chiffrement, supervision et playbooks d’incident.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "Sécurité alignée sur le risque métier",
        p: "Nous traduisons les exigences réglementaires et les bonnes pratiques en chantiers concrets pour vos équipes.",
        li1: "Plans de remédiation et indicateurs de suivi",
        li2: "Sensibilisation et exercices de crise",
      },
      optimization: {
        sub: "Amélioration continue",
        h2: "Mesurer et faire progresser la posture",
        p: "Tableaux de bord, revues périodiques et tests pour valider l’efficacité des contrôles.",
        checks: [
          "Revues de configuration et durcissement",
          "Corrélation des journaux et détection",
          "Gestion des vulnérabilités et correctifs",
          "Zero trust progressif lorsque pertinent",
        ],
      },
      faqs: [
        {
          title: "Intervenez-vous sur le cloud et le poste de travail ?",
          body: "Oui : identités, endpoints, réseaux et charges cloud font partie des périmètres habituels.",
        },
        {
          title: "Proposez-vous des audits de conformité ?",
          body: "Nous aidons à structurer les preuves et les écarts par rapport aux référentiels applicables à votre secteur.",
        },
        {
          title: "Comment réagir en cas d’incident ?",
          body: "Nous pouvons préparer des playbooks, former les équipes et assister lors de la gestion de crise.",
        },
        {
          title: "Travaillez-vous avec nos fournisseurs ?",
          body: "Oui, en coordination avec vos partenaires pour sécuriser la chaîne de sous-traitance.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "Shrink attack surface, improve resilience",
        lead:
          "Assessments, hardening, detection, and response—we prioritize high-impact controls for your sector and exposure.",
        features: [
          {
            title: "Assessment & prioritization",
            text: "Asset mapping, threat scenarios, and a pragmatic action plan.",
          },
          {
            title: "Implementation",
            text: "Access controls, segmentation, encryption, monitoring, and incident playbooks.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "Security aligned with business risk",
        p: "We turn regulatory expectations and best practices into concrete workstreams for your teams.",
        li1: "Remediation plans and KPI tracking",
        li2: "Awareness programs and crisis exercises",
      },
      optimization: {
        sub: "Continuous improvement",
        h2: "Measure and mature your posture",
        p: "Dashboards, periodic reviews, and testing to validate control effectiveness.",
        checks: [
          "Configuration reviews and hardening",
          "Log correlation and detection",
          "Vulnerability and patch management",
          "Progressive zero trust where relevant",
        ],
      },
      faqs: [
        {
          title: "Do you cover cloud and endpoints?",
          body: "Yes—identities, endpoints, networks, and cloud workloads are common scopes.",
        },
        {
          title: "Do you support compliance-oriented audits?",
          body: "We help structure evidence and gaps against frameworks relevant to your sector.",
        },
        {
          title: "How do you handle incidents?",
          body: "We can prepare playbooks, train teams, and assist during crisis management.",
        },
        {
          title: "Will you work with our vendors?",
          body: "Yes, coordinating with partners to secure the supply chain.",
        },
      ],
    },
  },
  "cloud-devops": {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "Cloud maîtrisé, livraisons plus sûres",
        lead:
          "Nous concevons des architectures cloud résilientes et des chaînes CI/CD intégrant la sécurité (DevSecOps) pour accélérer sans fragiliser.",
        features: [
          {
            title: "Stratégie & landing zone",
            text: "Comptes, réseaux, identités et politiques de base alignées sur vos contraintes.",
          },
          {
            title: "Automatisation",
            text: "Infrastructure as code, pipelines et contrôles de sécurité automatisés.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "Migration et exploitation au quotidien",
        p: "Nous accompagnons le transfert vers le cloud et l’optimisation des coûts et de la disponibilité.",
        li1: "Plans de migration par vagues",
        li2: "Runbooks et observabilité",
      },
      optimization: {
        sub: "Exploitation",
        h2: "Fiabiliser et réduire les coûts cloud",
        p: "Bonnes pratiques de dimensionnement, réservation, tagging et revues financières.",
        checks: [
          "Politiques de sauvegarde et reprise d’activité",
          "Secrets et gestion des accès",
          "Qualité des déploiements et rollbacks",
          "FinOps et budgets par équipe",
        ],
      },
      faqs: [
        {
          title: "Multi-cloud ou hybride ?",
          body: "Oui, nous concevons des architectures cohérentes avec vos contraintes de souveraineté ou de legacy.",
        },
        {
          title: "Kubernetes et conteneurs ?",
          body: "Nous intervenons sur l’orchestration, la sécurité des images et l’exploitation des clusters.",
        },
        {
          title: "Comment intégrer la sécurité dans la CI/CD ?",
          body: "Analyses de code, scans de dépendances, politiques de déploiement et garde-fous automatisés.",
        },
        {
          title: "Accompagnez-vous les équipes internes ?",
          body: "Oui, avec transfert de compétences et documentation pour autonomiser vos squads.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "Controlled cloud, safer releases",
        lead:
          "We design resilient cloud architectures and CI/CD with security embedded (DevSecOps) to accelerate safely.",
        features: [
          {
            title: "Strategy & landing zone",
            text: "Accounts, networking, identities, and baseline policies aligned to your constraints.",
          },
          {
            title: "Automation",
            text: "Infrastructure as code, pipelines, and automated security controls.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "Migration and day-two operations",
        p: "We support cloud adoption, cost optimization, and availability improvements.",
        li1: "Phased migration plans",
        li2: "Runbooks and observability",
      },
      optimization: {
        sub: "Operations",
        h2: "Stabilize and reduce cloud spend",
        p: "Sizing, reservations, tagging, and financial reviews.",
        checks: [
          "Backup and disaster recovery policies",
          "Secrets and access management",
          "Deployment quality and rollbacks",
          "FinOps and team-level budgets",
        ],
      },
      faqs: [
        {
          title: "Multi-cloud or hybrid?",
          body: "Yes—we design coherent architectures with sovereignty or legacy constraints.",
        },
        {
          title: "Kubernetes and containers?",
          body: "We work on orchestration, image security, and cluster operations.",
        },
        {
          title: "How is security integrated into CI/CD?",
          body: "Code analysis, dependency scanning, deployment policies, and automated guardrails.",
        },
        {
          title: "Do you coach internal teams?",
          body: "Yes—with documentation and enablement so squads stay autonomous.",
        },
      ],
    },
  },
  "software-automation": {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "Logiciel sur mesure et automatisation durable",
        lead:
          "Nous développons des applications et API fiables, intégrées à vos systèmes, avec des parcours utilisateurs clairs et une dette technique maîtrisée.",
        features: [
          {
            title: "Conception & qualité",
            text: "Ateliers, backlog priorisé, tests automatisés et revues de code systématiques.",
          },
          {
            title: "Intégration",
            text: "Connecteurs, files d’événements et orchestration des processus métier.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "Du besoin au run",
        p: "Nous couvrons la construction, la mise en production et l’évolution fonctionnelle.",
        li1: "Documentation et transfert",
        li2: "Supervision et correctifs",
      },
      optimization: {
        sub: "Efficacité",
        h2: "Automatiser sans complexifier",
        p: "Nous ciblons les tâches à forte valeur et mesurons le gain pour vos équipes.",
        checks: [
          "Réduction des tâches manuelles répétitives",
          "APIs stables et versionnées",
          "Observabilité applicative",
          "Roadmap d’évolution budgétée",
        ],
      },
      faqs: [
        {
          title: "Technologies utilisées ?",
          body: "Nous choisissons la stack en fonction de vos contraintes : web, mobile, backend, intégration.",
        },
        {
          title: "Pouvez-vous reprendre un existant ?",
          body: "Oui : refonte progressive, encapsulation ou remplacement selon le niveau de risque.",
        },
        {
          title: "SLA et maintenance ?",
          body: "Des modalités de support peuvent être définies selon la criticité des applications.",
        },
        {
          title: "Intégration avec l’IA ou la data ?",
          body: "Oui, nous branchons vos workflows sur des services analytiques ou IA lorsque c’est pertinent.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "Custom software and lasting automation",
        lead:
          "We build reliable apps and APIs integrated with your systems, clear UX, and controlled technical debt.",
        features: [
          {
            title: "Design & quality",
            text: "Workshops, prioritized backlog, automated tests, and systematic code reviews.",
          },
          {
            title: "Integration",
            text: "Connectors, event queues, and orchestration of business processes.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "From need to run",
        p: "We cover build, release, and ongoing functional evolution.",
        li1: "Documentation and handover",
        li2: "Monitoring and fixes",
      },
      optimization: {
        sub: "Efficiency",
        h2: "Automate without overcomplicating",
        p: "We target high-value tasks and measure gains for your teams.",
        checks: [
          "Fewer repetitive manual tasks",
          "Stable, versioned APIs",
          "Application observability",
          "Budgeted evolution roadmap",
        ],
      },
      faqs: [
        {
          title: "Which technologies?",
          body: "We pick stacks based on constraints: web, mobile, backend, integration.",
        },
        {
          title: "Can you take over legacy systems?",
          body: "Yes—progressive modernization, encapsulation, or replacement based on risk.",
        },
        {
          title: "SLAs and maintenance?",
          body: "Support models can match the criticality of your applications.",
        },
        {
          title: "Integration with AI or data?",
          body: "Yes—we connect workflows to analytics or AI services when it makes sense.",
        },
      ],
    },
  },
  "identity-access": {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "Identités fortes, accès maîtrisés",
        lead:
          "IAM, MFA, fédération et gestion du cycle de vie des comptes : nous sécurisons l’accès à vos applications critiques.",
        features: [
          {
            title: "Politiques & rôles",
            text: "Moindre privilège, séparation des fonctions et revues d’accès régulières.",
          },
          {
            title: "Expérience utilisateur",
            text: "Parcours d’authentification fluides sans sacrifier la sécurité.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "Conformité et adoption",
        p: "Nous alignons IAM sur vos processus RH et IT pour limiter les frictions.",
        li1: "Cartographie des applications et des identités",
        li2: "Plans de déploiement MFA et récupération",
      },
      optimization: {
        sub: "Durcissement",
        h2: "Réduire les comptes orphelins et les accès excessifs",
        p: "Automatisation des revues, alertes et intégration avec votre annuaire.",
        checks: [
          "Provisioning / deprovisioning",
          "SSO et fédération",
          "Journalisation des authentifications",
          "Contrôles sur les comptes privilégiés",
        ],
      },
      faqs: [
        {
          title: "Cloud et applications SaaS ?",
          body: "Oui, nous couvrons les intégrations courantes et les modèles hybrides.",
        },
        {
          title: "RGPD et traçabilité ?",
          body: "Nous intégrons les exigences légales dans les flux d’identité et de consentement.",
        },
        {
          title: "Migration depuis un IAM existant ?",
          body: "Nous planifions des bascules par vagues pour limiter l’impact utilisateur.",
        },
        {
          title: "Gestion des accès externes ?",
          body: "Oui : partenaires, prestataires et accès temporaires peuvent être couverts.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "Strong identities, controlled access",
        lead:
          "IAM, MFA, federation, and account lifecycle—we secure access to critical applications.",
        features: [
          {
            title: "Policies & roles",
            text: "Least privilege, segregation of duties, and periodic access reviews.",
          },
          {
            title: "User experience",
            text: "Smooth authentication flows without sacrificing security.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "Compliance and adoption",
        p: "We align IAM with HR and IT processes to reduce friction.",
        li1: "Application and identity mapping",
        li2: "MFA rollout and recovery plans",
      },
      optimization: {
        sub: "Hardening",
        h2: "Reduce orphan accounts and excessive access",
        p: "Automated reviews, alerts, and directory integration.",
        checks: [
          "Provisioning / deprovisioning",
          "SSO and federation",
          "Authentication logging",
          "Privileged access controls",
        ],
      },
      faqs: [
        {
          title: "Cloud and SaaS apps?",
          body: "Yes—we cover common integrations and hybrid models.",
        },
        {
          title: "GDPR and traceability?",
          body: "We embed legal requirements into identity and consent flows.",
        },
        {
          title: "Migration from existing IAM?",
          body: "We plan phased cutovers to limit user impact.",
        },
        {
          title: "External access?",
          body: "Yes—partners, vendors, and temporary access can be covered.",
        },
      ],
    },
  },
  "consulting-modernization": {
    fr: {
      solution: {
        sub: "Notre approche",
        h2: "Stratégie IT, modernisation et automatisation",
        lead:
          "Nous cadrons vos investissements, rationalisons le legacy et définissons une trajectoire réaliste avec quick wins et chantiers structurants.",
        features: [
          {
            title: "Diagnostic & priorisation",
            text: "Cartographie applicative, dette technique, coûts et risques.",
          },
          {
            title: "Feuille de route",
            text: "Programme de transformation, gouvernance et indicateurs de succès.",
          },
        ],
      },
      management: {
        sub: "Livrables",
        h2: "Aligner IT et métier",
        p: "Nous facilitons la décision avec des arbitrages clairs et des business cases.",
        li1: "Plans directeurs et budgets cibles",
        li2: "Accompagnement au changement",
      },
      optimization: {
        sub: "Valeur",
        h2: "Mesurer le ROI des initiatives",
        p: "Indicateurs de valeur, réduction des coûts et amélioration de la vélocité.",
        checks: [
          "Rationalisation du portefeuille applicatif",
          "Industrialisation des bonnes pratiques",
          "KPIs de livraison et de qualité",
          "Cadence de pilotage avec les métiers",
        ],
      },
      faqs: [
        {
          title: "Intervenez-vous côté organisation ?",
          body: "Oui : gouvernance, rôles, processus et accompagnement des équipes.",
        },
        {
          title: "Quelle granularité des livrables ?",
          body: "Du diagnostic flash au programme multi-annuel, selon vos besoins.",
        },
        {
          title: "Sectoriel public / privé ?",
          body: "Nous adaptons nos recommandations aux contraintes sectorielles.",
        },
        {
          title: "Lien avec vos partenaires intégrateurs ?",
          body: "Nous pouvons piloter ou coordonner les RFP et la mise en œuvre.",
        },
      ],
    },
    en: {
      solution: {
        sub: "Our approach",
        h2: "IT strategy, modernization, and automation",
        lead:
          "We frame investments, rationalize legacy, and define a realistic roadmap with quick wins and structural initiatives.",
        features: [
          {
            title: "Assessment & prioritization",
            text: "Application mapping, technical debt, costs, and risks.",
          },
          {
            title: "Roadmap",
            text: "Transformation program, governance, and success metrics.",
          },
        ],
      },
      management: {
        sub: "Deliverables",
        h2: "Align IT and business",
        p: "We support decisions with clear trade-offs and business cases.",
        li1: "Master plans and target budgets",
        li2: "Change management support",
      },
      optimization: {
        sub: "Value",
        h2: "Measure initiative ROI",
        p: "Value metrics, cost reduction, and delivery velocity improvements.",
        checks: [
          "Application portfolio rationalization",
          "Good practice industrialization",
          "Delivery and quality KPIs",
          "Business steering cadence",
        ],
      },
      faqs: [
        {
          title: "Do you cover organization?",
          body: "Yes—governance, roles, processes, and team enablement.",
        },
        {
          title: "How granular are deliverables?",
          body: "From flash diagnostics to multi-year programs, depending on needs.",
        },
        {
          title: "Public vs private sector?",
          body: "We tailor recommendations to sector constraints.",
        },
        {
          title: "Working with integrators?",
          body: "We can steer or coordinate RFPs and implementation.",
        },
      ],
    },
  },
};

export function getServiceDetailsPage(slug, locale) {
  const row = getServiceRowBySlug(slug);
  const lang = locale === "en" ? "en" : "fr";
  if (!row || !blocks[slug]) return null;
  const t = row[lang];
  const b = blocks[slug][lang];
  return {
    slug,
    title: t.title,
    shortDesc: t.desc,
    heroImage: row.img,
    icon: row.icon,
    ...b,
    ui: ui[lang],
  };
}
