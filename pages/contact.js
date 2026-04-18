import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import PageBanner from "../src/components/PageBanner";
import { getContactContent } from "../src/locales/contactPage";
import Layout from "../src/layout/Layout";

function stripNiceSelectAfterSubjectSelect() {
  if (typeof document === "undefined") return;
  const el = document.getElementById("contact-subject");
  if (!el || !el.isConnected) return;
  el.style.removeProperty("display");
  let n = el.nextElementSibling;
  while (n && n.classList && n.classList.contains("nice-select")) {
    const rem = n;
    n = n.nextElementSibling;
    rem.remove();
  }
}

const Contact = () => {
  const router = useRouter();
  const c = getContactContent(router.locale);

  useLayoutEffect(() => {
    stripNiceSelectAfterSubjectSelect();
    const t0 = window.setTimeout(stripNiceSelectAfterSubjectSelect, 0);
    const t1 = window.setTimeout(stripNiceSelectAfterSubjectSelect, 50);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, [router.pathname, router.locale]);

  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark page-contact-minimal">
      <PageBanner pageKey="contact" pageTitle={c.bannerTitle} plainBackground />
      <section className="contact-information-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="information-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="/assets/images/contact/img-1.jpg"
                  alt={c.infoImageAlt}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="information-one_content-box ml-lg-40">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">{c.infoSub}</span>
                  <h2>{c.infoTitle}</h2>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <i className="far fa-map-marker-alt contact-info-icon" aria-hidden />
                  </div>
                  <div className="info">
                    <h3 className="title">{c.addressHeading}</h3>
                    {c.addressLines.map((line, i) => (
                      <p
                        key={`addr-${i}`}
                        className={i === 0 ? "mb-10" : "mb-0"}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-2.png" alt="" />
                  </div>
                  <div className="info">
                    <h3 className="title">{c.emailLabel}</h3>
                    <p>
                      <a href="mailto:info@visionarygroup.io">
                        info@visionarygroup.io
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section contact-section--vtp pt-120 pb-80">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-5">
              <div className="contact-one_content-box mb-50 mb-lg-0 pr-lg-4 wow fadeInLeft">
                <div className="section-title section-title-left mb-40">
                  <h2>{c.formTitle}</h2>
                </div>
                <p className="vtp-contact-intro">{c.formIntro}</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-one_form-box vtp-contact-card ml-lg-40 mb-50 wow fadeInRight">
                <h3 className="vtp-contact-card__title">{c.formHeading}</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form vtp-contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group vtp-contact-form__field">
                        <label htmlFor="contact-name" className="vtp-contact-form__label">
                          {c.labelName}
                        </label>
                        <div className="vtp-contact-form__input-wrap">
                          <input
                            id="contact-name"
                            type="text"
                            className="form_control"
                            placeholder={c.placeholderName}
                            name="name"
                            required
                            autoComplete="name"
                          />
                          <i className="far fa-user vtp-contact-form__icon" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group vtp-contact-form__field">
                        <label htmlFor="contact-email" className="vtp-contact-form__label">
                          {c.labelEmail}
                        </label>
                        <div className="vtp-contact-form__input-wrap">
                          <input
                            id="contact-email"
                            type="email"
                            className="form_control"
                            placeholder={c.placeholderEmail}
                            name="email"
                            required
                            autoComplete="email"
                          />
                          <i className="far fa-envelope vtp-contact-form__icon" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group vtp-contact-form__field">
                        <label htmlFor="contact-phone" className="vtp-contact-form__label">
                          {c.labelPhone}{" "}
                          <span className="vtp-contact-form__optional">
                            ({c.optionalMark})
                          </span>
                        </label>
                        <div className="vtp-contact-form__input-wrap">
                          <input
                            id="contact-phone"
                            type="tel"
                            className="form_control"
                            placeholder={c.placeholderPhone}
                            name="phone"
                            autoComplete="tel"
                          />
                          <i className="far fa-phone vtp-contact-form__icon" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group vtp-contact-form__field">
                        <label htmlFor="contact-subject" className="vtp-contact-form__label">
                          {c.labelSubject}
                        </label>
                        <div className="vtp-contact-form__input-wrap vtp-contact-form__input-wrap--select">
                          <select
                            id="contact-subject"
                            name="subject"
                            className="form_control vtp-contact-form__select-native"
                            data-vtp-native="true"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled hidden>
                              {c.subjectPlaceholder}
                            </option>
                            <option value="info">{c.subjectInfo}</option>
                            <option value="support">{c.subjectSupport}</option>
                            <option value="project">{c.subjectProject}</option>
                          </select>
                          <i className="far fa-question vtp-contact-form__icon" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group vtp-contact-form__field vtp-contact-form__field--textarea">
                        <label htmlFor="contact-message" className="vtp-contact-form__label">
                          {c.labelMessage}
                        </label>
                        <div className="vtp-contact-form__input-wrap">
                          <textarea
                            id="contact-message"
                            className="form_control"
                            name="message"
                            placeholder={c.placeholderMessage}
                            rows={5}
                            required
                            defaultValue=""
                          />
                          <i className="far fa-pencil vtp-contact-form__icon" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_checkbox vtp-contact-form__consent">
                        <input type="checkbox" name="checkbox" id="check1" />
                        <label htmlFor="check1">
                          <span>{c.consent}</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group mb-0">
                        <button type="submit" className="main-btn btn-blue vtp-contact-form__submit">
                          {c.submit}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
