export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.nirvaancareerinstitute.com/#organization",
    name: "Nirvaan Career Institute",
    alternateName: "Nirvaan Institute Jodhpur",
    description:
      "Nirvaan Career Institute is Jodhpur's premier JEE and NEET coaching institute. Ranked #1 for medical entrance preparation with a consistent record of top-tier selections. Offering expert mentorship for JEE Advanced, NEET-UG, and Foundation programs since 2019.",
    url: "https://www.nirvaancareerinstitute.com",
    telephone: "+91-7737383958",
    email: "admissions@nirvaan.edu.in",
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paota",
      addressLocality: "Jodhpur",
      addressRegion: "Rajasthan",
      postalCode: "342006",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/nirvaan_career_institute",
      "https://www.facebook.com/nirvaan23march",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "520",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
