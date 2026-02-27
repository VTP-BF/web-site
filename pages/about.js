import Link from "next/link";
import Counter from "../src/components/Counter";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const About = () => {
  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <PageBanner pageName={"À Propos"} />
      {/*====== End Breadcrumb Section ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Qui Nous Sommes</span>
                  <h2>Visionary Tech Partners</h2>
                </div>
                <p>
                  Visionary Tech Partners (VTP) est une firme de conseil technologique créée par une équipe d'experts en cybersécurité, science des données, développement logiciel et ingénierie DevOps/DevSecOps. Nous aidons les organisations à moderniser leur écosystème numérique avec des solutions sécurisées, évolutives et prêtes pour l'avenir.
                </p>
                <ul className="check-style-one mb-30">
                  <li>Cybersécurité & Gestion des Menaces</li>
                  <li>Ingénierie Cloud & DevOps/DevSecOps</li>
                  <li>Développement Logiciel & Automatisation</li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-blue">Contactez-Nous</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Image Box ===*/}
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <img src="assets/images/about/about-vtp.jpg" alt="Visionary Tech Partners - Conseil et transformation digitale" />
                </div>
                <div className="quote-box-four text-white">
                  <h3>Accélérer la maturité numérique mondiale grâce à des solutions technologiques intelligentes.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Counter Item ===*/}
              <div className="single-counter-item-two mb-40">
                <div
                  className="text d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h2 className="number">
                    <Counter end={358} />+
                  </h2>
                  <h5>Projects Completed in Last 5 Years</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Counter Item ===*/}
              <div className="single-counter-item-two mb-40">
                <div
                  className="text d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <h2 className="number">
                    <Counter end={536} />+
                  </h2>
                  <h5>Happy Customers Who Trusted</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Counter Item ===*/}
              <div className="single-counter-item-two mb-40">
                <div
                  className="text d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="number">
                    <Counter end={963} />+
                  </h2>
                  <h5>Awards Innning For Success Projects</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-three_image-box p-r mb-50">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/about-mission.jpg"
                      className="about-one-img wow fadeInUp"
                      alt="Notre mission - Équipe VTP"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/about-vision.jpg"
                      className="about-two-img wow fadeInDown"
                      alt="Notre vision - Équipe VTP"
                    />
                  </div>
                </div>
                <div className="big-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logo/big-logo-1.png"
                        alt="Site logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box mb-50">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Notre Plan</span>
                  <h2>Mission & Vision</h2>
                </div>
                <div className="tab-content-box wow fadeInUp">
                  <ul className="nav nav-tabs mb-20">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#mission"
                      >
                        Notre Mission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#vision">
                        Notre Vision
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mb-30">
                    <div className="tab-pane fade show active" id="mission">
                      <div className="content-box">
                        <p>
                          Notre mission est d'autonomiser les entreprises et les institutions avec des solutions technologiques sécurisées, innovantes et évolutives qui favorisent la transformation, l'efficacité et l'inclusion financière.
                        </p>
                        <p className="mt-20">
                          Accélérer la maturité numérique mondiale en autonomisant les organisations avec des logiciels intelligents, des architectures cloud évolutives et une gestion proactive des menaces conçue pour l'avenir du travail.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="vision">
                      <div className="content-box">
                        <p>
                          Être la référence mondiale en matière de confiance numérique et de résilience opérationnelle, en offrant une modernisation de bout en bout grâce à des plateformes d'identité sécurisées, un DevOps cloud d'élite et un conseil IT stratégique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Core Values Section ======*/}
      <section className="features-section pt-130 pb-100 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Nos Valeurs</span>
                <h2>Valeurs Fondamentales</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="features-item-two text-center wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-idea-1" />
                </div>
                <div className="text">
                  <h3 className="title">Innovation</h3>
                  <p>Nous remettons en question le statu quo et repoussons les limites pour créer des solutions modernes, évolutives et impactantes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="features-item-two text-center wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-support" />
                </div>
                <div className="text">
                  <h3 className="title">Intégrité</h3>
                  <p>Nous opérons avec transparence, honnêteté et responsabilité — toujours faire ce qui est juste pour nos clients et nos communautés.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="features-item-two text-center wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="text">
                  <h3 className="title">Résilience</h3>
                  <p>Nous concevons des systèmes et stratégies qui peuvent résister à la pression, s'adapter au changement et soutenir la durabilité à long terme.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="features-item-two text-center wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-medal" />
                </div>
                <div className="text">
                  <h3 className="title">Excellence</h3>
                  <p>Nous maintenons les plus hauts standards en ingénierie, cybersécurité et conseil — livrant un travail dont nous sommes fiers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="features-item-two text-center wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-friend" />
                </div>
                <div className="text">
                  <h3 className="title">Collaboration</h3>
                  <p>Nous croyons que le succès se construit grâce à des partenariats solides, une vision partagée et un travail d'équipe interdisciplinaire.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="features-item-two text-center wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-global" />
                </div>
                <div className="text">
                  <h3 className="title">Impact Mondial</h3>
                  <p>Nous nous engageons à construire une technologie qui favorise la croissance économique, l'inclusion financière et des écosystèmes numériques plus forts à travers les frontières.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Core Values Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="service-section-three light-gray-bg pt-125 pb-100 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Nos Services</span>
                <h2>Nos Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-data-analytics.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-pie-chart" />
                </div>
                <div className="text">
                  <h3 className="title">Analyse de Données & Big Data</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-ia-mlops.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-idea-1" />
                </div>
                <div className="text">
                  <h3 className="title">Ingénierie IA & MLOps</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-cybersecurite.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-competitive" />
                </div>
                <div className="text">
                  <h3 className="title">Cybersécurité & Gestion des Menaces</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-cloud-devops.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="text">
                  <h3 className="title">Ingénierie Cloud & DevOps/DevSecOps</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-dev-logiciel.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-folder-management" />
                </div>
                <div className="text">
                  <h3 className="title">Développement Logiciel & Automatisation</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-identite-numerique.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-user" />
                </div>
                <div className="text">
                  <h3 className="title">Plateformes d'Identité Numérique & Authentification</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <div className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp" style={{ backgroundImage: "url(assets/images/services/service-consulting-it.jpg)" }}>
                <div className="icon">
                  <i className="flaticon-planning" />
                </div>
                <div className="text">
                  <h3 className="title">Conseil IT, Modernisation & Automatisation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Strategic Focus Section ======*/}
      <section className="about-section pt-90 pb-80 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Focus Stratégique</span>
                <h2>Focus Stratégique</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-content-box text-center mb-50 wow fadeInUp">
                <p>
                  VTP est positionné de manière unique pour opérer à l'intersection des standards des entreprises américaines et des économies numériques émergentes de l'Afrique. Nous nous concentrons sur la construction de systèmes résilients qui soutiennent l'inclusion financière, la modernisation gouvernementale et la confiance numérique transfrontalière.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Strategic Focus Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-section cta-section-vtp bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Common Heading ===*/}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>Votre partenaire tech pour la transformation. Parlons-en maintenant.</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== Team Button ===*/}
              <div className="team-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn filled-btn filled-white">Contactez-nous</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start History Section ======*/}
      <section className="history-section pt-125 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Notre Parcours</span>
                <h2>Historique Visionary Tech Partners</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/*=== History Timeline ===*/}
              <div className="history-timeline">
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/about/history-lancement.jpg"
                      alt="Lancement VTP"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">Nov. 2025</span> Lancement
                    </h4>
                    <p>
                      Création de Visionary Tech Partners. Début des activités de conseil en technologie, cybersécurité et modernisation IT au service des entreprises et des institutions.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/about/history-deploiement.jpg"
                      alt="Déploiement des offres"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">2025</span> Déploiement des offres
                    </h4>
                    <p>
                      Mise en place de nos services : développement logiciel, ingénierie cloud & DevOps, cybersécurité, analyse de données et conseil en transformation digitale.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="history-img">
                    <img
                      src="assets/images/about/history-perspectives.jpg"
                      alt="Perspectives"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon">2026</span> Perspectives
                    </h4>
                    <p>
                      Renforcement de notre présence et de nos partenariats, avec un focus sur l&apos;inclusion financière et la confiance numérique entre les marchés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End History Section ======*/}
      {/*====== Start Contact Info Section ======*/}
      <section className="contact-info-section pt-125 pb-100 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Contact</span>
                <h2>Informations de Contact</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-info-box text-center mb-50 wow fadeInUp">
                <div className="row">
                  <div className="col-md-4 mb-30">
                    <div className="icon">
                      <i className="flaticon-email" />
                    </div>
                    <div className="text">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:info@vtpglobal.com">info@vtpglobal.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="text">
                      <h4>Téléphone</h4>
                      <p>
                        <a href="tel:+0000000000">(000) 000-0000</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="icon">
                      <i className="flaticon-website" />
                    </div>
                    <div className="text">
                      <h4>Site Web</h4>
                      <p>
                        <a href="https://www.vtpg.com" target="_blank" rel="noopener noreferrer">www.vtpg.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Info Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <Newsletter />
    </Layout>
  );
};
export default About;
