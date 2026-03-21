import Link from "next/link";
import Slider from "react-slick";
import { serviceSliderOne } from "../../sliderProps";

const latestServicesData = [
  {
    img: "assets/images/services/service-data-analytics.jpg",
    icon: "flaticon-pie-chart",
    title: "Analyse de Données & Big Data",
    description: "Analyse de données massives et ingénierie d'insights pour transformer vos données en avantage concurrentiel.",
  },
  {
    img: "assets/images/services/service-ia-mlops.jpg",
    icon: "flaticon-idea-1",
    title: "Ingénierie IA & MLOps",
    description: "Frameworks d'intelligence artificielle et d'opérations ML pour entreprises modernes.",
  },
  {
    img: "assets/images/services/service-cybersecurite.jpg",
    icon: "flaticon-competitive",
    title: "Cybersécurité & Gestion des Menaces",
    description: "Sécurité de bout en bout et atténuation des menaces pour protéger vos actifs.",
  },
  {
    img: "assets/images/services/service-cloud-devops.jpg",
    icon: "flaticon-database",
    title: "Ingénierie Cloud & DevOps/DevSecOps",
    description: "Infrastructure cloud et ingénierie DevSecOps pour un déploiement sécurisé et rapide.",
  },
  {
    img: "assets/images/services/service-dev-logiciel.jpg",
    icon: "flaticon-folder-management",
    title: "Développement Logiciel & Automatisation",
    description: "Solutions sur mesure et automatisation de processus pour optimiser vos opérations.",
  },
  {
    img: "assets/images/services/service-identite-numerique.jpg",
    icon: "flaticon-user",
    title: "Plateformes d'Identité Numérique & Authentification",
    description: "Solutions d'identité numérique et d'authentification pour sécuriser l'accès à vos systèmes.",
  },
  {
    img: "assets/images/services/service-consulting-it.jpg",
    icon: "flaticon-planning",
    title: "Conseil IT, Modernisation & Automatisation",
    description: "Stratégie IT et modernisation de l'infrastructure pour aligner la technologie sur vos objectifs.",
  },
];

const LatestServices = () => {
  return (
    <Slider {...serviceSliderOne} className="service-slider-one">
      {latestServicesData.map((item, index) => (
        <div key={index} className="service-item wow fadeInUp">
          <div className="img-holder">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="service-content">
            <div className="text">
              <div className="title-icon d-flex">
                <i className={item.icon} />
                <h3 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>{item.title}</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="hover-text text-white">
              <div className="title-icon d-flex">
                <i className={item.icon} />
                <h3 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>{item.title}</a>
                  </Link>
                </h3>
              </div>
              <p>{item.description}</p>
              <Link legacyBehavior href="/service-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default LatestServices;
