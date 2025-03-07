export default function JsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'PropertyManagementCompany',
    name: 'TPG Management',
    url: 'https://www.tpgmanagement.net',
    logo: 'https://www.tpgmanagement.net/logo.png',
    description: 'Professional property management services across New Jersey counties',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 212',
      addressLocality: 'Holmdel',
      addressRegion: 'NJ',
      postalCode: '07733',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '732-978-9390',
      email: 'leads@tpgcompanies.net',
      contactType: 'customer service'
    },
    areaServed: [
      'Monmouth',
      'Middlesex',
      'Union',
      'Somerset',
      'Essex',
      'Hudson'
    ],
    sameAs: [
      // Future Social Media URLs
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
} 