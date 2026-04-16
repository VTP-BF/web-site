import Link from "next/link";
import { useRouter } from "next/router";

const IMAGES_BY_KEY = {
  about: "/assets/images/bg/page-banner-about.jpg",
  services: "/assets/images/bg/page-banner-services.jpg",
  contact: "/assets/images/bg/page-banner-contact.jpg",
};

/** Anciennes pages : `pageName` français / anglais → image bannière VTP. */
const LEGACY_PAGE_NAME_TO_KEY = {
  "À Propos": "about",
  "Nos Services": "services",
  "Contact Us": "contact",
  Contact: "contact",
};

const PageBanner = ({
  pageTitle,
  pageName,
  /** about | services | contact — prioritaire pour l’image de fond */
  pageKey,
  bgImage,
  /** Si true, n’affiche pas le dernier fil d’Ariane (évite de répéter le même libellé que le titre H1). */
  omitActiveBreadcrumb,
  /** Libellé du fil d’Ariane actif (sinon `pageName`). */
  breadcrumbLabel,
}) => {
  const router = useRouter();
  const resolvedKey =
    pageKey || (pageName && LEGACY_PAGE_NAME_TO_KEY[pageName]) || null;
  const imageUrl =
    bgImage ||
    (resolvedKey && IMAGES_BY_KEY[resolvedKey]) ||
    "/assets/images/bg/page-banner-vtp.jpg";
  const isContact =
    resolvedKey === "contact" ||
    pageName === "Contact" ||
    pageName === "Contact Us";
  const heading = pageTitle ?? pageName;
  const homeLabel = router.locale === "en" ? "Home" : "Accueil";
  const activeCrumb = breadcrumbLabel ?? pageName;

  return (
    <section
      className={`page-banner bg_cover p-r z-1${isContact ? " page-banner--contact" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center">
              <h1 className="page-title">{heading}</h1>
              <ul className="breadcrumb-link">
                <li>
                  <Link legacyBehavior href="/" locale={router.locale}>
                    <a>{homeLabel}</a>
                  </Link>
                </li>
                {!omitActiveBreadcrumb && activeCrumb ? (
                  <li className="active">{activeCrumb}</li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
