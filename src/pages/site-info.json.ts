import type { APIRoute } from 'astro';
import { site, homeContent, servicesDetail } from '../data/content';

const homeServices = [homeContent.servicesSection.featuredService, ...homeContent.servicesSection.services];
const serviceDetailByHref = new Map([
  ['/residential-cleaning/', servicesDetail.residential],
  ['/deep-cleaning/', servicesDetail.deep],
  ['/move-out-cleaning/', servicesDetail.moveOut],
  ['/vacation-rental-cleaning/', servicesDetail.vacationRental],
  ['/commercial-cleaning/', servicesDetail.commercial],
]);

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
      itemListElement: homeServices.map(service => {
        const pathname = new URL(service.href, url).pathname;
        const detail = serviceDetailByHref.get(pathname);
        return {
          '@type': 'Service',
          name: service.title,
          description: detail?.intro ?? service.text,
          url: new URL(service.href, url).href,
        };
      }),
    },
  }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
