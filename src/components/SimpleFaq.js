import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "./FintexAccordion";

const SimpleFaq = () => {
  const faqsData = [
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
  ];
  const [active, setActive] = useState(`event-0`);
  return (
    <Accordion defaultActiveKey={active} className="accordion">
      {faqsData.map((faq, i) => (
        <FintexAccordion
          key={i}
          active={active}
          onClick={() => setActive(`event-${i}`)}
          title={faq.title}
          body={faq.body}
          eventName={`event-${i}`}
        />
      ))}
    </Accordion>
  );
};
export default SimpleFaq;
