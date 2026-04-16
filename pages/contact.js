import { useRouter } from "next/router";
import PageBanner from "../src/components/PageBanner";
import { getContactContent } from "../src/locales/contactPage";
import Layout from "../src/layout/Layout";

const Contact = () => {
  const router = useRouter();
  const c = getContactContent(router.locale);

  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <PageBanner
        pageKey="contact"
        pageTitle={c.bannerTitle}
        breadcrumbLabel={c.bannerBreadcrumb}
      />
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
                    <img src="/assets/images/icon/icon-2.png" alt="" />
                  </div>
                  <div className="info">
                    <h3 className="title">{c.emailLabel}</h3>
                    <p>
                      <a href="mailto:info@vtpglobal.com">
                        info@vtpglobal.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-3.png" alt="" />
                  </div>
                  <div className="info">
                    <h3 className="title">{c.phoneLabel}</h3>
                    <p>
                      <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">{c.formSub}</span>
                  <h2>{c.formTitle}</h2>
                </div>
                <p>{c.formIntro}</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
                <h3 className="form-title text-white mb-30">{c.formHeading}</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-name" className="sr-only">
                          {c.labelName}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          className="form_control"
                          placeholder={c.placeholderName}
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-email" className="sr-only">
                          {c.labelEmail}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          className="form_control"
                          placeholder={c.placeholderEmail}
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-phone" className="sr-only">
                          {c.labelPhone}
                        </label>
                        <input
                          id="contact-phone"
                          type="text"
                          className="form_control"
                          placeholder={c.placeholderPhone}
                          name="phone"
                          required=""
                        />
                        <i className="far fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-subject" className="sr-only">
                          {c.labelSubject}
                        </label>
                        <select id="contact-subject" className="wide" name="subject">
                          <option value="" data-display={c.subjectPlaceholder}>
                            {c.subjectPlaceholder}
                          </option>
                          <option value="info">{c.subjectInfo}</option>
                          <option value="support">{c.subjectSupport}</option>
                          <option value="project">{c.subjectProject}</option>
                        </select>
                        <i className="far fa-question" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label htmlFor="contact-message" className="sr-only">
                          {c.labelMessage}
                        </label>
                        <textarea
                          id="contact-message"
                          className="form_control"
                          name="message"
                          placeholder={c.placeholderMessage}
                          rows={5}
                          defaultValue={""}
                        />
                        <i className="far fa-pencil" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_checkbox">
                        <input type="checkbox" name="checkbox" id="check1" />
                        <label htmlFor="check1">
                          <span>{c.consent}</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button type="submit" className="main-btn btn-blue">
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
