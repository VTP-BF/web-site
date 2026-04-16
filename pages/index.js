import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import { getHomePageContent } from "../src/locales/homePage";
import { SERVICE_SLUGS } from "../src/locales/servicesCatalog";
import Layout from "../src/layout/Layout";
import { testimonialSliderThree } from "../src/sliderProps";

const Index = () => {
  const router = useRouter();
  const c = getHomePageContent(router.locale);

  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <section className="banner-three p-r z-1">
        <div className="shape shape-one animate-float-x">
          <span>
            <img src="/assets/images/shape/shape-5.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two animate-float-y">
          <span>
            <img src="/assets/images/shape/shape-6.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-three animate-float-y">
          <span>
            <img src="/assets/images/shape/shape-7.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-four animate-float-y">
          <span>
            <img src="/assets/images/shape/shape-8.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-five">
          <span />
        </div>
        <div className="shape shape-six">
          <span>
            <img src="/assets/images/shape/shape-9.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  {c.hero.h1}
                </h1>
                <p className="wow fadeInDown" data-wow-delay=".7s">
                  {c.hero.p}
                </p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <a href="#services" className="main-btn btn-blue">
                    {c.hero.ctaServices}
                  </a>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn filled-btn filled-white">
                      {c.hero.ctaContact}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="hero-img-box hero-img-box-wide hero-img-box-bg wow fadeInRight"
                data-wow-delay=".10s"
                style={{
                  backgroundImage:
                    "url(/assets/images/home/home-hero-software-innovation.png)",
                }}
                role="img"
                aria-label={c.hero.aria}
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
                    <span>{c.fact.expertise}</span>
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
                <h5>{c.fact.partnerLine}</h5>
                <div className="author-thumb-title d-flex align-items-center">
                  <div className="author-thumb">
                    <img
                      src="/assets/images/home/vtp-fact-thumb.png"
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
                        <h5>{c.fact.counterServices}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInUp">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={1} />+
                        </h2>
                        <h5>{c.fact.counterYears}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={100} />%
                        </h2>
                        <h5>{c.fact.counterCommitment}</h5>
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
                  src="/assets/images/gallery/about-section-card.jpg"
                  className="about-img-one"
                  alt="Transformation IT - Visionary Tech Partners"
                />
                <img
                  src="/assets/images/about/about-vtp.jpg"
                  className="about-img-two animate-float-y"
                  alt="VTP - Accompagnement transformation IT"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title text-white wow fadeInDown">
                  <h2>{c.about.h2}</h2>
                </div>
                <p>{c.about.p}</p>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-blue">{c.about.cta}</a>
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
                  <h2>{c.featuresTrust.h2}</h2>
                </div>
                <p>{c.featuresTrust.p}</p>
                <ul className="check-style-one">
                  <li>{c.featuresTrust.li1}</li>
                  <li>{c.featuresTrust.li2}</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn filled-btn filled-white">
                    {c.featuresTrust.cta}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-two_img-box p-r z-1 mb-50 wow fadeInRight">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="/assets/images/home/home-services-trust.jpg"
                  alt={c.featuresTrust.imgAlt}
                />
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
                <span className="sub-title">{c.services.sub}</span>
                <h2>{c.services.h2}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {c.services.items.map((item, i) => {
              const wowClass =
                i % 2 === 0 ? "wow fadeInUp" : "wow fadeInDown";
              const colClass =
                i === 6
                  ? "col-lg-4 col-md-6 col-sm-12 offset-lg-4"
                  : "col-lg-4 col-md-6 col-sm-12";
              return (
                <div key={item.title} className={colClass}>
                  <div
                    className={`service-item-three animate-hover-icon text-center mb-80 ${wowClass}`}
                  >
                    <div className="icon">
                      <i
                        className={
                          [
                            "flaticon-pie-chart",
                            "flaticon-idea-1",
                            "flaticon-competitive",
                            "flaticon-database",
                            "flaticon-folder-management",
                            "flaticon-user",
                            "flaticon-planning",
                          ][i]
                        }
                      />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link
                          legacyBehavior
                          href={`/service-details/${SERVICE_SLUGS[i]}`}
                          locale={router.locale}
                        >
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                      <p>{item.desc}</p>
                      <Link
                        legacyBehavior
                        href={`/service-details/${SERVICE_SLUGS[i]}`}
                        locale={router.locale}
                      >
                        <a className="btn-link">{c.services.learnMore}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
                    src="/assets/images/home/home-features-cost-it.jpg"
                    alt={c.featuresCost.imgAlt}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="features-content-box content-box-gap mb-20">
                  <div className="section-title text-white wow fadeInDown">
                    <h2>{c.featuresCost.h2}</h2>
                  </div>
                  <p>{c.featuresCost.p}</p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-left-box text-white mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-data" />
                        </div>
                        <div className="text">
                          <h4 className="title">{c.featuresCost.cloudTitle}</h4>
                          <p>{c.featuresCost.cloudDesc}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-left-box text-white mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-competitive" />
                        </div>
                        <div className="text">
                          <h4 className="title">{c.featuresCost.secTitle}</h4>
                          <p>{c.featuresCost.secDesc}</p>
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
                  <h2>{c.testimonials.title}</h2>
                </div>
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three mb-60"
                >
                  {c.testimonials.slides.map((slide) => (
                    <div key={slide.authorTitle} className="testimonial-item-three">
                      <div className="testimonial-content">
                        <p>{slide.quote}</p>
                        <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                          <div className="author-thumb-title d-flex align-items-center">
                            <div className="author-thumb">
                              <img
                                src="/assets/images/logo/vtp-logo.png"
                                alt="VTP"
                              />
                            </div>
                            <div className="author-title">
                              <h4>{slide.authorTitle}</h4>
                              <p className="position">{slide.authorRole}</p>
                            </div>
                          </div>
                          <div className="author-rating">
                            <h6>{c.testimonials.priority}</h6>
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
                  ))}
                </Slider>
                <div className="testimonial-dots" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-img-box p-r z-1 mb-50 wow fadeInRight">
                <img src="/assets/images/gallery/map-2.png" alt="" />
                <div className="thumb-marker">
                  <img
                    src="/assets/images/testimonial/marker-thumb.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial section ======*/}
    </Layout>
  );
};

export default Index;
