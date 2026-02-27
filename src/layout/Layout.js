import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
import { animation } from "../utils";

const Layout = ({ children, header, footer, extraBodyCls, singleMenus }) => {
  useEffect(() => {
    document.querySelector("body").className = extraBodyCls
      ? extraBodyCls
      : "fintex";

    // Initialiser WOW.js pour les animations au scroll
    animation();

    return () => {
      niceSelect({ withoutwide: true });
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
