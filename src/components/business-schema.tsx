import { salon, siteURL } from '@/lib/site';

export function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'BeautySalon',
    name: salon.name, url: siteURL + '/', telephone: '+919980531469',
    address: { '@type': 'PostalAddress', streetAddress: 'No. 15, 2nd Floor, 4th Cross, Kanakapura Main Road, opposite KSIT College', addressLocality: 'Raghuvanahalli, Bengaluru', addressRegion: 'Karnataka', postalCode: '560109', addressCountry: 'IN' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}
