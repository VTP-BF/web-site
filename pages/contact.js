import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Contact = () => {
  return (
    <Layout header={3} footer={3} extraBodyCls="home-three-dark">
      <PageBanner pageName={"Contact"} />
      <section className="contact-information-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Information Image Box ===*/}
              <div className="information-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="/assets/images/contact/img-1.jpg"
                  alt="Contact - Visionary Tech Partners"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Information Content Box ===*/}
              <div className="information-one_content-box ml-lg-40">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">Nous contacter</span>
                  <h2>Prêts à travailler ensemble ? Contactez VTP</h2>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-2.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">E-mail</h3>
                    <p>
                      <a href="mailto:info@vtpglobal.com">
                        info@vtpglobal.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-3.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Téléphone</h3>
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
      {/*====== End Contact Information Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Contact Content Box ===*/}
              <div className="contact-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Contact</span>
                  <h2>Une question ? Écrivez-nous</h2>
                </div>
                <p>
                  Vous avez un projet IT, une question sur nos services ou souhaitez
                  échanger sur votre transformation digitale ? Remplissez le formulaire
                  ou contactez-nous directement par e-mail.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== Contact Form Box ===*/}
              <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
                <h3 className="form-title text-white mb-30">Envoyez-nous un message</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-name" className="sr-only">Nom complet</label>
                        <input
                          id="contact-name"
                          type="text"
                          className="form_control"
                          placeholder="Nom complet"
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-email" className="sr-only">Adresse e-mail</label>
                        <input
                          id="contact-email"
                          type="email"
                          className="form_control"
                          placeholder="Adresse e-mail"
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-phone" className="sr-only">Téléphone</label>
                        <input
                          id="contact-phone"
                          type="text"
                          className="form_control"
                          placeholder="Téléphone"
                          name="phone"
                          required=""
                        />
                        <i className="far fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label htmlFor="contact-subject" className="sr-only">Sujet</label>
                        <select id="contact-subject" className="wide" name="subject">
                          <option value="" data-display="Choisir un sujet">Choisir un sujet</option>
                          <option value="info">Demande d&apos;information</option>
                          <option value="support">Support technique</option>
                          <option value="project">Proposition de projet</option>
                        </select>
                        <i className="far fa-question" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label htmlFor="contact-message" className="sr-only">Message</label>
                        <textarea
                          id="contact-message"
                          className="form_control"
                          name="message"
                          placeholder="Votre message"
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
                          <span>
                            J&apos;accepte que mes données soient collectées et traitées.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button type="submit" className="main-btn btn-blue">
                          Envoyer le message
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
      {/*====== End Contact Section ======*/}
    </Layout>
  );
};
export default Contact;
