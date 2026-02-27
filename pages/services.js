import Link from "next/link";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import PageBanner from "../src/components/PageBanner";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";

const Services = () => {
  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <PageBanner pageName={"Nos Services"} />
      <section className="features-section pt-130 pb-100 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Ce Que Nous Proposons</span>
                <h2>Solutions IT Pour Votre Transformation Digitale</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".2s">
                <span className="number">01.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart" />
                </div>
                <div className="text">
                  <h3 className="title">Analyse de Données &amp; Big Data</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".3s">
                <span className="number">02.</span>
                <div className="icon">
                  <i className="flaticon-idea-1" />
                </div>
                <div className="text">
                  <h3 className="title">Ingénierie IA &amp; MLOps</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".4s">
                <span className="number">03.</span>
                <div className="icon">
                  <i className="flaticon-competitive" />
                </div>
                <div className="text">
                  <h3 className="title">Cybersécurité &amp; Gestion des Menaces</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                <span className="number">04.</span>
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="text">
                  <h3 className="title">Ingénierie Cloud &amp; DevOps/DevSecOps</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".6s">
                <span className="number">05.</span>
                <div className="icon">
                  <i className="flaticon-folder-management" />
                </div>
                <div className="text">
                  <h3 className="title">Développement Logiciel &amp; Automatisation</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".7s">
                <span className="number">06.</span>
                <div className="icon">
                  <i className="flaticon-user" />
                </div>
                <div className="text">
                  <h3 className="title">Plateformes d&apos;Identité Numérique &amp; Authentification</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 offset-xl-3">
              <div className="features-item-two mb-30 d-flex align-items-center wow fadeInUp" data-wow-delay=".8s">
                <span className="number">07.</span>
                <div className="icon">
                  <i className="flaticon-planning" />
                </div>
                <div className="text">
                  <h3 className="title">Conseil IT, Modernisation &amp; Automatisation</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Faq Section ======*/}
      <section className="faq-section pb-70 text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/*=== Faq Content Box ===*/}
              <div className="faq-one_content-box mb-50">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">FAQ</span>
                  <h2>Des Questions ? Questions &amp; Réponses</h2>
                </div>
                <div
                  className="faq-accordion-two mb-50 wow fadeInUp"
                  id="accordionOne"
                >
                  <SimpleFaq />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*=== Faq Image Box ===*/}
              <div className="faq-one_image-box ml-lg-70 p-r mb-50 wow fadeInRight">
                <div className="image-overlay" />
                <img src="assets/images/gallery/faq-1.jpg" alt="Support IT et Solutions Technologiques" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      <section className="service-section-three light-gray-bg pt-125 pb-100 p-r z-1">
        <svg
          className="shape shape-one"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="632px"
          height="247px"
        >
          <path
            fillRule="evenodd"
            opacity="0.031"
            fill="rgb(26, 26, 26)"
            d="M-0.001,246.994 L239.553,38.424 L460.976,154.553 L631.850,0.292 L631.850,246.994 L-0.001,246.994 Z"
          />
        </svg>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Nos Services</span>
                <h2>Solutions Business Exceptionnelles</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider One ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== Start CTA Section ======*/}
      <section className="pricing-section pt-125 pb-100 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Devis Personnalisé</span>
                <h2>Solutions IT Sur Mesure Pour Votre Entreprise</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="cta-content-box text-center wow fadeInUp">
                <p className="mb-40" style={{ fontSize: "18px", lineHeight: "1.8" }}>
                  Chaque projet IT est unique. Nous proposons des solutions personnalisées adaptées à vos besoins spécifiques, 
                  votre budget et vos objectifs métier. Contactez-nous pour un audit gratuit et un devis sur mesure.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div className="cta-feature-item">
                      <div className="icon mb-20">
                        <i className="fas fa-clipboard-check" style={{ fontSize: "40px", color: "#007eff" }} />
                      </div>
                      <h4 className="title mb-15">Audit Gratuit</h4>
                      <p>Analyse complète de votre infrastructure IT actuelle</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div className="cta-feature-item">
                      <div className="icon mb-20">
                        <i className="fas fa-file-invoice-dollar" style={{ fontSize: "40px", color: "#007eff" }} />
                      </div>
                      <h4 className="title mb-15">Devis Personnalisé</h4>
                      <p>Proposition adaptée à vos besoins et votre budget</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div className="cta-feature-item">
                      <div className="icon mb-20">
                        <i className="fas fa-headset" style={{ fontSize: "40px", color: "#007eff" }} />
                      </div>
                      <h4 className="title mb-15">Accompagnement</h4>
                      <p>Support dédié tout au long de votre projet</p>
                    </div>
                  </div>
                </div>
                <div className="cta-button mt-50">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-blue" style={{ fontSize: "18px", padding: "15px 40px" }}>
                      Demander un Devis Gratuit
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Faq Section ======*/}
      <section className="features-section pb-90 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Notre Approche</span>
                <h2>Le Chemin Vers le Succès</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item animate-hover-icon mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-business" />
                </div>
                <div className="text">
                  <h4 className="title">Vision</h4>
                  <p>Nous analysons votre contexte métier et technologique pour définir une feuille de route claire, priorisée et réaliste.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item animate-hover-icon mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-folder-management" />
                </div>
                <div className="text">
                  <h4 className="title">Architecture</h4>
                  <p>Nous concevons une architecture moderne et sécurisée (cloud, données, IAM, IA/MLOps) alignée sur vos objectifs.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item animate-hover-icon mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-finance" />
                </div>
                <div className="text">
                  <h4 className="title">Déploiement</h4>
                  <p>Nous déployons vos solutions (logiciels, data, cloud, DevSecOps) avec une démarche agile et hautement automatisée.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item animate-hover-icon mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-profits" />
                </div>
                <div className="text">
                  <h4 className="title">Optimisation</h4>
                  <p>Nous sécurisons vos plateformes 24/7 et optimisons en continu performances et coûts pour maximiser votre ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="feedback-section p-r z-2 pb-130">
        <FeedbackSectionChart />
      </section>
    </Layout>
  );
};
export default Services;
