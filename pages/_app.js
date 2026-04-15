import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Visionary Tech Partners (VTP) | Visionary Group</title>
        <meta
          name="description"
          content="Visionary Tech Partners — solutions IT, cloud, cybersécurité et IA. Groupe Visionary."
        />
        <meta property="og:site_name" content="Visionary Tech Partners" />
        <meta property="og:title" content="Visionary Tech Partners (VTP) | Visionary Group" />
        <meta
          property="og:url"
          content="https://www.visionarygroup.io"
        />
        <link rel="canonical" href="https://www.visionarygroup.io" />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
