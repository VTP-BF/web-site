import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import { testimonialSliderThree } from "../src/sliderProps";
const Index = () => {
  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <section className="banner-three p-r z-1">
        <div className="shape shape-one animate-float-x">
          <span>
            <img src="assets/images/shape/shape-5.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two animate-float-y">
          <span>
            <img src="assets/images/shape/shape-6.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-three animate-float-y">
          <span>
            <img src="assets/images/shape/shape-7.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-four animate-float-y">
          <span>
            <img src="assets/images/shape/shape-8.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-five">
          <span />
        </div>
        <div className="shape shape-six">
          <span>
            <img src="assets/images/shape/shape-9.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  Solutions IT pour votre entreprise
                </h1>
                <p className="wow fadeInDown" data-wow-delay=".7s">
                  Nous offrons des services IT de pointe incluant l'IA, la cybersécurité,
                  le cloud et l'automatisation pour propulser votre business vers l'avenir
                </p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <a href="#services" className="main-btn btn-blue">
                    Découvrir nos Services
                  </a>
                  <a href="/contact" className="main-btn filled-btn filled-white">
                    Nous Contacter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="hero-img-box hero-img-box-wide hero-img-box-bg wow fadeInRight"
                data-wow-delay=".10s"
                style={{ backgroundImage: "url(assets/images/home/home-hero-software-innovation.png)" }}
                role="img"
                aria-label="Solutions IT - Software Innovation - Visionary Tech Partners"
              />
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section-three p-r z-1 pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="author-rating-box-two mb-40 wow fadeInUp">
                <ul className="rating">
                  <li>
                    <span>Expertise</span>
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h5>Votre partenaire tech pour la transformation digitale</h5>
                <div className="author-thumb-title d-flex align-items-center">
                  <div className="author-thumb">
                    <img
                      src="assets/images/home/vtp-fact-thumb.png"
                      alt="Visionary Tech Partners"
                    />
                  </div>
                  <div className="author-title">
                    <h5>Visionary Tech Partners</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="fact-wrapper ml-lg-55">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={7} />+
                        </h2>
                        <h5>Services IT</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInUp">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={1} />+
                        </h2>
                        <h5>An d&apos;activité</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={100} />%
                        </h2>
                        <h5>Engagement</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start About section ======*/}
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-six_image-box p-r z-1 mb-50 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/gallery/about-section-card.jpg"
                  className="about-img-one"
                  alt="Transformation IT - Visionary Tech Partners"
                />
                <img
                  src="assets/images/about/about-vtp.jpg"
                  className="about-img-two animate-float-y"
                  alt="VTP - Accompagnement transformation IT"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title text-white wow fadeInDown">
                  <h2>Transformez votre infrastructure IT pour la moderniser</h2>
                </div>
                <p>
                  Nous vous accompagnons dans la transformation digitale de votre entreprise
                  avec des solutions IT innovantes, sécurisées et adaptées à vos besoins.
                  De l'automatisation des processus à l'intelligence artificielle,
                  nous mettons la technologie au service de votre croissance.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-blue">En savoir plus</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About section ======*/}
      {/*====== Start Features section ======*/}
      <section className="features-section-two pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="features-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title text-white wow fadeInDown">
                  <h2>Services IT de confiance pour votre transformation digitale</h2>
                </div>
                <p>
                  Nous proposons une gamme complète de services IT allant du développement
                  logiciel sur mesure à l'ingénierie cloud, en passant par la cybersécurité
                  et l'analyse de données. Nos solutions sont conçues pour répondre
                  aux défis technologiques modernes.
                </p>
                <ul className="check-style-one">
                  <li>Solutions sur mesure adaptées à vos besoins</li>
                  <li>Expertise en cybersécurité et protection des données</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn filled-btn filled-white">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-two_img-box p-r z-1 mb-50 wow fadeInRight">
                <div className="shape shape-one">
                  <span />
                </div>
                <img src="assets/images/home/home-services-trust.jpg" alt="Services IT de confiance - Équipe VTP, transformation digitale" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features section ======*/}
      {/*====== Start Service section ======*/}
      <section className="service-section pb-50" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-white text-center mb-110 wow fadeInDown">
                <span className="sub-title">Nos Services</span>
                <h2>Services IT exceptionnels pour votre transformation digitale</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-pie-chart" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Analyse de Données &amp; Big Data</a>
                    </Link>
                  </h3>
                  <p>Analyse de données massives et ingénierie d&apos;insights pour transformer vos données en avantage concurrentiel.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-idea-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Ingénierie IA &amp; MLOps</a>
                    </Link>
                  </h3>
                  <p>Frameworks d&apos;intelligence artificielle et d&apos;opérations ML pour entreprises modernes.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-competitive" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Cybersécurité &amp; Gestion des Menaces</a>
                    </Link>
                  </h3>
                  <p>Sécurité de bout en bout et atténuation des menaces pour protéger vos actifs numériques.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Ingénierie Cloud &amp; DevOps/DevSecOps</a>
                    </Link>
                  </h3>
                  <p>Infrastructure cloud et ingénierie DevSecOps pour un déploiement sécurisé et rapide.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-folder-management" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Développement Logiciel &amp; Automatisation</a>
                    </Link>
                  </h3>
                  <p>Solutions sur mesure et automatisation de processus pour optimiser vos opérations.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-user" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Plateformes d&apos;Identité Numérique &amp; Authentification</a>
                    </Link>
                  </h3>
                  <p>Solutions d&apos;identité numérique et d&apos;authentification pour sécuriser l&apos;accès à vos systèmes.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 offset-lg-4">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-planning" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/services">
                      <a>Conseil IT, Modernisation &amp; Automatisation</a>
                    </Link>
                  </h3>
                  <p>Stratégie IT et modernisation de l&apos;infrastructure pour aligner la technologie sur vos objectifs.</p>
                  <Link legacyBehavior href="/services">
                    <a className="btn-link">En savoir plus</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service section ======*/}
      {/*====== Start Features section ======*/}
      <section className="features-section-two">
        <div className="container">
          <div className="features-wrapper wow fadeInDown">
            <div className="row">
              <div className="col-lg-5">
                <div className="features-two_img-box p-r z-1 mb-50">
                  <div className="shape shape-one">
                    <span />
                  </div>
                  <img
                    src="assets/images/home/home-features-cost-it.jpg"
                    alt="Optimisation et stratégie IT - équipe VTP"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="features-content-box content-box-gap mb-20">
                  <div className="section-title text-white wow fadeInDown">
                    <h2>
                      Optimisez vos coûts IT et structurez votre avenir technologique
                    </h2>
                  </div>
                  <p>
                    Notre approche stratégique vous permet de réduire les coûts opérationnels
                    tout en modernisant votre infrastructure IT. Nous définissons avec vous
                    les priorités technologiques pour maximiser le retour sur investissement
                    et garantir la pérennité de vos systèmes.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-left-box text-white mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-data" />
                        </div>
                        <div className="text">
                          <h4 className="title">Infrastructure Cloud</h4>
                          <p>
                            Migration et gestion de votre infrastructure cloud pour
                            une agilité et une scalabilité maximales
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-left-box text-white mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-competitive" />
                        </div>
                        <div className="text">
                          <h4 className="title">Sécurité 24/7</h4>
                          <p>
                            Surveillance continue et protection proactive contre
                            les menaces cybernétiques en temps réel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features section ======*/}
      {/*====== Start Testimonial section ======*/}
      <section className="testimonial-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-wrapper-three mr-lg-70 mb-50 wow fadeInLeft">
                <div className="section-title text-white">
                  <h2>Nos engagements</h2>
                </div>
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three mb-60"
                >
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        Nous nous engageons à respecter les délais convenus et à
                        vous tenir informé à chaque étape. Réactivité, transparence
                        et livraison dans les temps sont au cœur de notre façon de travailler.
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
                          <div className="author-thumb">
                            <img
                              src="assets/images/logo/vtp-logo.png"
                              alt="VTP"
                            />
                          </div>
                          <div className="author-title">
                            <h4>Réactivité &amp; délais</h4>
                            <p className="position">Respect des engagements et transparence</p>
                          </div>
                        </div>
                        <div className="author-rating">
                          <h6>Priorité</h6>
                          <ul className="rating">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        Nous nous appuyons sur des bonnes pratiques et des technologies
                        éprouvées. Qualité du code, sécurité et évolutivité des solutions
                        font partie intégrante de notre offre.
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
                          <div className="author-thumb">
                            <img
                              src="assets/images/logo/vtp-logo.png"
                              alt="VTP"
                            />
                          </div>
                          <div className="author-title">
                            <h4>Expertise &amp; qualité</h4>
                            <p className="position">Bonnes pratiques et solutions pérennes</p>
                          </div>
                        </div>
                        <div className="author-rating">
                          <h6>Priorité</h6>
                          <ul className="rating">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        Nous nous engageons à comprendre vos enjeux et à vous accompagner
                        comme un partenaire. Écoute, conseil et solutions sur mesure
                        pour répondre au plus près à vos besoins.
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
                          <div className="author-thumb">
                            <img
                              src="assets/images/logo/vtp-logo.png"
                              alt="VTP"
                            />
                          </div>
                          <div className="author-title">
                            <h4>Partenariat &amp; proximité</h4>
                            <p className="position">Écoute et accompagnement personnalisé</p>
                          </div>
                        </div>
                        <div className="author-rating">
                          <h6>Priorité</h6>
                          <ul className="rating">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="testimonial-dots" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-img-box p-r z-1 mb-50 wow fadeInRight">
                <img src="assets/images/gallery/map-2.png" alt="" />
                <div className="thumb-marker">
                  <img
                    src="assets/images/testimonial/marker-thumb.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial section ======*/}
      {/*====== Start Newsletter section ======*/}
      <section className="newsletter-seciton">
        <div className="container">
          <div className="newsletter-wrapper-one pt-70 pb-70 wow fadeInDown">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center text-white mb-50">
                  <h2>Restez informé de nos actualités</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="newsletter-from-two">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <span className="input-box">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Votre nom"
                          name="name"
                        />
                        <i className="far fa-user" />
                      </span>
                      <span className="input-box">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Votre adresse e-mail"
                          name="email"
                        />
                        <i className="far fa-envelope" />
                      </span>
                      <div className="form-btn">
                        <button className="main-btn btn-blue">S&apos;inscrire</button>
                      </div>
                    </div>
                    <div className="form_checkbox_two text-center mt-30">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="check1"
                        defaultChecked=""
                      />
                      <label htmlFor="check1">
                        <span>
                          Inscrivez-vous pour recevoir en avant-première nos
                          actualités IT et nos offres.
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
