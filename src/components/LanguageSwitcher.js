import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitcher = ({ className = "" }) => {
  const router = useRouter();
  const href = { pathname: router.pathname, query: router.query };
  const ariaNav =
    router.locale === "en" ? "Language selection" : "Choix de la langue";

  return (
    <div
      className={`lang-switch d-flex align-items-center ${className}`.trim()}
      role="navigation"
      aria-label={ariaNav}
    >
      <span className="lang-switch__icon-prefix" aria-hidden="true">
        <i className="fas fa-globe"></i>
      </span>
      <Link href={href} locale="fr" legacyBehavior>
        <a
          className={`lang-switch__btn ${
            router.locale === "fr" ? "is-active" : ""
          }`}
          hrefLang="fr"
          aria-label="Français"
          title="Français"
        >
          fr
        </a>
      </Link>
      <span className="lang-switch__separator" aria-hidden="true">|</span>
      <Link href={href} locale="en" legacyBehavior>
        <a
          className={`lang-switch__btn ${
            router.locale === "en" ? "is-active" : ""
          }`}
          hrefLang="en"
          aria-label="English"
          title="English"
        >
          en
        </a>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
