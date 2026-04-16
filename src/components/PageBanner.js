import {
  PAGE_BANNER_FALLBACK,
  PAGE_BANNER_IMAGES_BY_KEY,
} from "../constants/pageBannerImages";

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
  /** Bannière unie (ex. Contact) : pas d’image de fond, titre blanc seul */
  plainBackground,
}) => {
  const resolvedKey =
    pageKey || (pageName && LEGACY_PAGE_NAME_TO_KEY[pageName]) || null;
  const imageUrl =
    bgImage ||
    (resolvedKey && PAGE_BANNER_IMAGES_BY_KEY[resolvedKey]) ||
    PAGE_BANNER_FALLBACK;
  const isContact =
    resolvedKey === "contact" ||
    pageName === "Contact" ||
    pageName === "Contact Us";
  const heading = pageTitle ?? pageName;
  const usePlain = Boolean(plainBackground);

  return (
    <section
      className={`page-banner p-r z-1${usePlain ? " page-banner--plain" : " bg_cover"}${isContact && !usePlain ? " page-banner--contact" : ""}`}
      style={usePlain ? undefined : { backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center">
              <h1 className="page-title">{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
