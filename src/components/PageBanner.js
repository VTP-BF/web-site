import Link from "next/link";

const BANNER_IMAGES = {
  "À Propos": "assets/images/bg/page-banner-about.jpg",
  "Nos Services": "assets/images/bg/page-banner-services.jpg",
  "Contact Us": "assets/images/bg/page-banner-contact.jpg",
  Contact: "assets/images/bg/page-banner-contact.jpg",
};

const PageBanner = ({ pageTitle, pageName, bgImage }) => {
  const imageUrl =
    bgImage || (pageName && BANNER_IMAGES[pageName]) || "assets/images/bg/page-banner-vtp.jpg";
  const isContact = pageName === "Contact" || pageName === "Contact Us";
  return (
    <section
      className={`page-banner bg_cover p-r z-1${isContact ? " page-banner--contact" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center">
              <h1 className="page-title">{pageTitle ? pageTitle : pageName}</h1>
              <ul className="breadcrumb-link">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
