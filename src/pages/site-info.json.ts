import type { APIRoute } from 'astro';
import { site, homeContent } from '../data/content';

export const GET: APIRoute = ({ site: origin }) => {
  const url = origin ?? new URL('https://beachlinecleaners.com');
  return new Response(JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    url: url.href,
    description: site.defaultMetaDescription,
    telephone: site.phoneHref.replace('tel:', ''),
    email: site.email,
    areaServed: site.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning services',
      itemListElement: homeContent.servicesSection.services.map(service => ({
        '@type': 'Service',
        name: service.title,
        description: service.text,
        url: new URL(service.href, url).href,
      })),
    },
  }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
