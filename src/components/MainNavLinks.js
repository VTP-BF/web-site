import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getNavLabels } from "../locales/navBar";

const items = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/contact", key: "contact" },
];

/**
 * @param {"desktop" | "mobile"} variant
 */
const MainNavLinks = ({ variant }) => {
  const router = useRouter();
  const n = getNavLabels(router.locale);
  const { pathname } = router;

  const navClass =
    variant === "desktop"
      ? "main-menu d-none d-xl-block"
      : "main-menu d-block d-xl-none";

  return (
    <Fragment>
      <nav className={navClass}>
        <ul>
          {items.map(({ href, key }) => {
            const isActive = pathname === href;
            const label = n[key];
            return (
              <li className="menu-item" key={key}>
                <Link legacyBehavior href={href} locale={router.locale}>
                  <a className={isActive ? "active" : undefined}>{label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default MainNavLinks;
