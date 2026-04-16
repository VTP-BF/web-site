import Link from "next/link";
import { useRouter } from "next/router";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import PageBanner from "../src/components/PageBanner";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import {
  getServicesPageContent,
  getServicesPageFeatures,
} from "../src/locales/servicesPage";
import Layout from "../src/layout/Layout";

const FEATURE_WOW_DELAYS = [".2s", ".3s", ".4s", ".5s", ".6s", ".7s", ".8s"];
const APPROACH_WOW_DELAYS = [".2s", ".3s", ".4s", ".5s"];

const Services = () => {
  const router = useRouter();
  const s = getServicesPageContent(router.locale);
  const features = getServicesPageFeatures(router.locale);

  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <PageBanner
        pageKey="services"
        pageTitle={s.bannerTitle}
        breadcrumbLabel={s.bannerBreadcrumb}
      />
      <section className="features-section features-section--surface-light pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{s.heroSub}</span>
                <h2>{s.heroTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {features.map((item, i) => (
              <div
                key={item.title}
                className={`col-xl-6 col-lg-12${i === features.length - 1 ? " offset-xl-3" : ""}`}
              >
                <div
                  className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                  data-wow-delay={FEATURE_WOW_DELAYS[i]}
                >
                  <span className="number">{item.number}</span>
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <div className="text">
                    <h3 className="title">{item.title}</h3>
                  </div>
                  <Link
                    legacyBehavior
                    href={`/service-details/${item.slug}`}
                    locale={router.locale}
                  >
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="faq-section pb-70 text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one_content-box mb-50">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">{s.faqSub}</span>
                  <h2>{s.faqTitle}</h2>
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
              <div className="faq-one_image-box ml-lg-70 p-r mb-50 wow fadeInRight">
                <div className="image-overlay" />
                <img src="/assets/images/gallery/faq-1.jpg" alt={s.faqImageAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">{s.sliderSub}</span>
                <h2>{s.sliderTitle}</h2>
              </div>
            </div>
          </div>
          <LatestServices />
        </div>
      </section>
      <section className="pricing-section pt-125 pb-100 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{s.ctaSub}</span>
                <h2>{s.ctaTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="cta-content-box text-center wow fadeInUp">
                <p className="mb-40" style={{ fontSize: "18px", lineHeight: "1.8" }}>
                  {s.ctaBody}
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div className="cta-feature-item">
                      <div className="icon mb-20">
                        <i className="fas fa-clipboard-check" style={{ fontSize: "40px", color: "#007eff" }} />
                      </div>
                      <h4 className="title mb-15">{s.ctaCard1Title}</h4>
                      <p>{s.ctaCard1Text}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div className="cta-feature-item">
                      <div className="icon mb-20">
                        <i className="fas fa-file-invoice-dollar" style={{ fontSize: "40px", color: "#007eff" }} />
                      </div>
                      <h4 className="title mb-15">{s.ctaCard2Title}</h4>
                      <p>{s.ctaCard2Text}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <div className="cta-feature-item">
                      <div className="icon mb-20">
                        <i className="fas fa-headset" style={{ fontSize: "40px", color: "#007eff" }} />
                      </div>
                      <h4 className="title mb-15">{s.ctaCard3Title}</h4>
                      <p>{s.ctaCard3Text}</p>
                    </div>
                  </div>
                </div>
                <div className="cta-button mt-50">
                  <Link legacyBehavior href="/contact" locale={router.locale}>
                    <a className="main-btn btn-blue" style={{ fontSize: "18px", padding: "15px 40px" }}>
                      {s.ctaButton}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section features-section--surface-light pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{s.approachSub}</span>
                <h2>{s.approachTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {s.steps.map((step, i) => (
              <div key={step.title} className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div
                  className="features-item animate-hover-icon mb-40 wow fadeInUp"
                  data-wow-delay={APPROACH_WOW_DELAYS[i]}
                >
                  <div className="icon">
                    <i className={step.icon} />
                  </div>
                  <div className="text">
                    <h4 className="title">{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="feedback-section p-r z-2 pb-130">
        <FeedbackSectionChart />
      </section>
    </Layout>
  );
};
export default Services;
