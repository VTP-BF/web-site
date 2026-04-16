import Link from "next/link";
import { useRouter } from "next/router";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import { getAboutContent } from "../src/locales/aboutPage";
import { getServicesCatalog } from "../src/locales/servicesCatalog";
import Layout from "../src/layout/Layout";

const STAT_WOW = [".2s", ".25s", ".3s"];

const About = () => {
  const router = useRouter();
  const t = getAboutContent(router.locale);
  const serviceTiles = getServicesCatalog(router.locale);

  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <PageBanner
        pageKey="about"
        pageTitle={t.bannerTitle}
        omitActiveBreadcrumb
      />
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">{t.introSub}</span>
                  <h2>{t.introTitle}</h2>
                </div>
                <p>{t.introLead}</p>
                <ul className="check-style-one mb-30">
                  {t.introBullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/contact" locale={router.locale}>
                    <a className="main-btn btn-blue">{t.ctaContact}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <img src="/assets/images/about/about-vtp.jpg" alt={t.mainImageAlt} />
                </div>
                <div className="quote-box-four text-white">
                  <h3>{t.quote}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fact-section">
        <div className="container">
          <div className="row">
            {t.stats.map((stat, i) => (
              <div key={stat.label} className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-counter-item-two mb-40">
                  <div
                    className="text d-flex align-items-center wow fadeInUp"
                    data-wow-delay={STAT_WOW[i]}
                  >
                    <h2 className="number">
                      <Counter end={stat.end} />+
                    </h2>
                    <h5>{stat.label}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_image-box p-r mb-50">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="/assets/images/about/about-mission.jpg"
                      className="about-one-img wow fadeInUp"
                      alt={t.missionImgAlt}
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/assets/images/about/about-vision.jpg"
                      className="about-two-img wow fadeInDown"
                      alt={t.visionImgAlt}
                    />
                  </div>
                </div>
                <div className="big-logo big-logo-vtp">
                  <Link legacyBehavior href="/" locale={router.locale}>
                    <a className="big-logo-vtp__frame">
                      <img
                        src="/assets/images/logo/vtp-logo.png"
                        alt={t.logoAlt}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box mb-50">
                <div className="section-title section-title-left wow fadeInDown">
                  <h2>{t.missionVisionTitle}</h2>
                </div>
                <div className="tab-content-box wow fadeInUp">
                  <ul className="nav nav-tabs mb-20">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#mission"
                      >
                        {t.tabMission}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#vision">
                        {t.tabVision}
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mb-30">
                    <div className="tab-pane fade show active" id="mission">
                      <div className="content-box">
                        <p>{t.missionP1}</p>
                        <p className="mt-20">{t.missionP2}</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="vision">
                      <div className="content-box">
                        <p>{t.visionP1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section features-section--surface-light pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{t.valuesSub}</span>
                <h2>{t.valuesTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {t.values.map((v) => (
              <div key={v.title} className="col-lg-4 col-md-6 col-sm-12 mb-30">
                <div className="features-item-two text-center wow fadeInUp">
                  <div className="icon">
                    <i className={v.icon} />
                  </div>
                  <div className="text">
                    <h3 className="title">{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="service-section-three light-gray-bg pt-125 pb-100 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">{t.servicesSub}</span>
                <h2>{t.servicesTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceTiles.map((svc) => (
              <div key={svc.title} className="col-lg-4 col-md-6 col-sm-12 mb-30">
                <div
                  className="service-item-three bg_cover p-r z-1 text-center wow fadeInUp"
                  style={{ backgroundImage: `url(${svc.img})` }}
                >
                  <div className="icon">
                    <i className={svc.icon} />
                  </div>
                  <div className="text">
                    <h3 className="title">{svc.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-section pt-90 pb-80 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{t.strategicSub}</span>
                <h2>{t.strategicTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-content-box text-center mb-50 wow fadeInUp">
                <p>{t.strategicLead}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cta-section cta-section-vtp bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(/assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>{t.ctaTitle}</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="team-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/contact" locale={router.locale}>
                  <a className="main-btn filled-btn filled-white">{t.ctaButton}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="history-section pt-125 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{t.historySub}</span>
                <h2>{t.historyTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="history-timeline">
                {t.history.map((h, i) => (
                  <div
                    key={h.title}
                    className="single-history-item mb-80 wow fadeInUp"
                    data-wow-delay={`.${2 + i}s`}
                  >
                    <div className="history-img">
                      <img
                        src={
                          i === 0
                            ? "/assets/images/about/history-lancement.jpg"
                            : i === 1
                              ? "/assets/images/about/history-deploiement.jpg"
                              : "/assets/images/about/history-perspectives.jpg"
                        }
                        alt={h.imgAlt}
                      />
                    </div>
                    <div className="history-content">
                      <h4 className="title">
                        <span className="ribbon">{h.ribbon}</span> {h.title}
                      </h4>
                      <p>{h.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-info-section pt-125 pb-100 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{t.contactSub}</span>
                <h2>{t.contactTitle}</h2>
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
                      <h4>{t.emailLabel}</h4>
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
                      <h4>{t.phoneLabel}</h4>
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
                      <h4>{t.webLabel}</h4>
                      <p>
                        <a href="https://www.vtpg.com" target="_blank" rel="noopener noreferrer">
                          www.vtpg.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
