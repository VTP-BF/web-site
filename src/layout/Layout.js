import { Fragment, useEffect } from "react";
import niceSelect from "../utils/niceSelectVtp";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
import { stripNiceSelectWidgets } from "../utils/niceSelectInit";
import { animation } from "../utils";

const Layout = ({ children, header, footer, extraBodyCls, singleMenus }) => {
  useEffect(() => {
    document.querySelector("body").className = extraBodyCls
      ? extraBodyCls
      : "fintex";

    // Initialiser WOW.js pour les animations au scroll
    animation();

    const id = requestAnimationFrame(() => {
      stripNiceSelectWidgets();
      niceSelect({ withoutwide: true });
    });

    return () => {
      cancelAnimationFrame(id);
      stripNiceSelectWidgets();
    };
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <Header header={header} singleMenus={singleMenus} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default Layout;
