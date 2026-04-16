/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  // Ne pas désactiver le cache Webpack en dev : ça peut produire des graphs de chunks
  // incohérents (ex. « Cannot find module './chunks/vendor-chunks/next.js' ») et des 500.
  // En cas de souci après refacto : `npm run dev:clean` (rm -rf .next && next dev).

  /**
   * Next 14.1+ : le WebSocket HMR (`/_next/webpack-hmr`) vérifie l’origine.
   * Si tu ouvres le site via 127.0.0.1, une IP LAN ou un alias alors que le
   * client tente `ws://localhost:3000`, la connexion peut échouer sans cette liste.
   * Ajoute ton hostname exact si besoin (ex. "mon-mac.local").
   */
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "::1",
    "[::1]",
  ],
};

module.exports = nextConfig;
