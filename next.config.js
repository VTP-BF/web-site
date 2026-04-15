/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  /* Évite les chunks obsolètes (ex. ancien Counter + react-countup) après refacto */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
