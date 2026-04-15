import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitcher = ({ className = "" }) => {
  const router = useRouter();
  const href = { pathname: router.pathname, query: router.query };

  return (
    <div
      className={`lang-switch d-flex align-items-center ${className}`.trim()}
      role="navigation"
      aria-label="Choix de la langue"
    >
      <Link href={href} locale="fr" legacyBehavior>
        <a
          className={`lang-switch__btn ${router.locale === "fr" ? "is-active" : ""}`}
          hrefLang="fr"
        >
          Français
        </a>
      </Link>
      <span className="lang-switch__sep" aria-hidden>
        |
      </span>
      <Link href={href} locale="en" legacyBehavior>
        <a
          className={`lang-switch__btn ${router.locale === "en" ? "is-active" : ""}`}
          hrefLang="en"
        >
          English
        </a>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
