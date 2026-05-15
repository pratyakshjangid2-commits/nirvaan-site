export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.nirvaancareerinstitute.com/#organization",
    name: "Nirvaan Career Institute",
    alternateName: "Nirvaan Institute Jodhpur",
    description:
      "Nirvaan Career Institute is a leading JEE and NEET coaching institute in Jodhpur, Rajasthan. Ranked #1 for NEET coaching in Jodhpur on BestCoaching.app. Offering JEE Mains, JEE Advanced, NEET-UG, Foundation (Class 9-10), Olympiad, NTSE, and KVPY coaching.",
    url: "https://www.nirvaancareerinstitute.com",
    telephone: "+91-7737383958",
    email: "nirvaaniitaiims@gmail.com",
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
      ratingValue: "4.5",
      reviewCount: "86",
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
