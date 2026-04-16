import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../../src/components/FintexAccordion";
import PageBanner from "../../src/components/PageBanner";
import { getServicesCatalog } from "../../src/locales/servicesCatalog";
import { getServiceDetailsPage } from "../../src/locales/serviceDetailsContent";
import Layout from "../../src/layout/Layout";

export async function getServerSideProps({ params, locale }) {
  const data = getServiceDetailsPage(params.slug, locale || "fr");
  if (!data) {
    return { notFound: true };
  }
  return { props: { data } };
}

const ServiceDetailSlug = ({ data }) => {
  const router = useRouter();
  const [active, setActive] = useState("event-0");
  const catalog = getServicesCatalog(router.locale);
  const others = catalog.filter((s) => s.slug !== data.slug).slice(0, 4);

  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <div className="vtp-service-details">
      <PageBanner pageTitle={data.title} bgImage={data.heroImage} />
      <section className="solution-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-one_content-box mr-lg-100 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInDown">
                  <span className="sub-title">{data.solution.sub}</span>
                  <h2>{data.solution.h2}</h2>
                </div>
                <p className="mb-30">{data.solution.lead}</p>
                {data.solution.features.map((f, i) => (
                  <div
                    key={f.title}
                    className="features-item-three animate-hover-icon d-flex mb-20 wow fadeInUp"
                    data-wow-delay={`.${2 + i}s`}
                  >
                    <div className="icon">
                      <i
                        className={
                          i === 0 ? data.icon : "fas fa-circle-check"
                        }
                        aria-hidden
                      />
                    </div>
                    <div className="text">
                      <h4 className="title">{f.title}</h4>
                      <p>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="solution-one_image-box p-r mb-50">
                <img
                  src={data.heroImage}
                  className="solution-img-one wow fadeInRight"
                  alt=""
                />
                <img
                  src="/assets/images/gallery/solution-2.jpg"
                  className="solution-img-two wow fadeInLeft"
                  alt=""
                />
                <div className="company-card text-center wow fadeInUp">
                  <h5 className="title">Visionary Tech Partners</h5>
                  <img src="/assets/images/logo/vtp-logo.png" alt="VTP" style={{ maxHeight: 48 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="management-section pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="management-one_img-box mb-50 wow fadeInLeft">
                <img src="/assets/images/gallery/img-4.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="management-one_content-box content-box-gap mb-50 ml-lg-40 wow fadeInRight">
                <div className="section-title section-title-left mb-25">
                  <span className="sub-title">{data.management.sub}</span>
                  <h2>{data.management.h2}</h2>
                </div>
                <p>{data.management.p}</p>
                <ul className="check-style-three mb-25">
                  <li>{data.management.li1}</li>
                  <li>{data.management.li2}</li>
                </ul>
                <div className="management-button">
                  <Link legacyBehavior href="/about" locale={router.locale}>
                    <a className="main-btn btn-blue vtp-management-cta">
                      {data.ui.mgmtBtn}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section-four light-gray-bg vtp-other-offers pt-80 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">{data.ui.otherOffers}</span>
                <h2>{data.ui.otherOffersLead}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {others.map((s, i) => (
              <div key={s.slug} className="col-xl-3 col-md-6 col-sm-12">
                <div
                  className="service-item-two service-item-two--vtp animate-hover-icon text-center mb-40 wow fadeInUp"
                  data-wow-delay={`.${2 + i}s`}
                >
                  <div className="icon">
                    <i className={s.icon} />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link
                        legacyBehavior
                        href={`/service-details/${s.slug}`}
                        locale={router.locale}
                      >
                        <a>{s.title}</a>
                      </Link>
                    </h3>
                    <p>{s.description}</p>
                    <Link
                      legacyBehavior
                      href={`/service-details/${s.slug}`}
                      locale={router.locale}
                    >
                      <a className="btn-link">{data.ui.readMore}</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="optimization-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">{data.optimization.sub}</span>
                  <h2>{data.optimization.h2}</h2>
                </div>
                <p>{data.optimization.p}</p>
                <ul className="check-style-three">
                  {data.optimization.checks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className="optimization-button">
                  <Link legacyBehavior href="/contact" locale={router.locale}>
                    <a className="main-btn btn-blue vtp-optimization-cta">
                      {data.ui.contactCta}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                <img
                  src="/assets/images/gallery/optimization-1.jpg"
                  className="optimization-img-one"
                  alt=""
                />
                <div className="big-logo">
                  <Link legacyBehavior href="/" locale={router.locale}>
                    <a>
                      <img src="/assets/images/logo/vtp-logo.png" alt="VTP" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section light-gray-bg pt-125 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">{data.ui.faqSub}</span>
                <h2>{data.ui.faqTitle}</h2>
              </div>
            </div>
          </div>
          <div className="faq-accordion-two wow fadeInUp" id="accordionOne">
            <Accordion defaultActiveKey={active}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="accordion mb-50">
                    {data.faqs.map(
                      (faq, i) =>
                        i <= 1 && (
                          <FintexAccordion
                            key={faq.title}
                            active={active}
                            onClick={() => setActive(`event-${i}`)}
                            title={faq.title}
                            body={faq.body}
                            eventName={`event-${i}`}
                          />
                        )
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion mb-50">
                    {data.faqs.map(
                      (faq, i) =>
                        i > 1 && (
                          <FintexAccordion
                            key={faq.title}
                            active={active}
                            onClick={() => setActive(`event-${i}`)}
                            title={faq.title}
                            body={faq.body}
                            eventName={`event-${i}`}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default ServiceDetailSlug;
