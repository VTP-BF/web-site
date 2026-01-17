import Link from "next/link";
import { Fragment } from "react";
const MobileMenu = () => {
  return (
    <Fragment>
      <nav className="main-menu d-block d-xl-none">
        <ul>
          <li className="menu-item">
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link legacyBehavior href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default MobileMenu;
