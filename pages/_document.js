import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="/assets/fonts/fontawesome/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/magnific-popup/dist/magnific-popup.css"
        />
        <link rel="stylesheet" href="/assets/vendor/slick/slick.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/jquery-ui/jquery-ui.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/nice-select/css/nice-select.css"
        />
        <link rel="stylesheet" href="/assets/vendor/animate.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
