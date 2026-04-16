/**
 * /service-details → première fiche offre (alignée sur le catalogue VTP).
 */
export async function getServerSideProps(context) {
  const slug = "data-analytics";
  const { locale, defaultLocale } = context;
  const dest =
    locale === defaultLocale
      ? `/service-details/${slug}`
      : `/${locale}/service-details/${slug}`;
  return {
    redirect: {
      destination: dest,
      permanent: false,
    },
  };
}

export default function ServiceDetailsIndex() {
  return null;
}
