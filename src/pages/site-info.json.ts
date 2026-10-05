import type { APIRoute } from 'astro';
import { site, homeContent, servicesDetail } from '../data/content';
import { PRICING_VERSION, publicPriceLabels, pricing } from '../data/pricing';

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
    priceRange: site.priceRange,
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
          additionalProperty: detail ? [{
            '@type': 'PropertyValue',
            name: 'Public pricing',
            value: detail.priceLabel,
          }] : undefined,
        };
      }),
    },
    beachlinePricing: {
      version: PRICING_VERSION,
      publicPrices: publicPriceLabels,
      automaticEstimateServices: ['Home Cleaning', 'Deep Cleaning', 'Move-In / Move-Out', 'Vacation Rentals'],
      homeAutomaticLimits: {
        bedrooms: pricing.home.limits.bedrooms,
        fullBathrooms: pricing.home.limits.fullBathrooms,
        squareFeet: pricing.home.limits.squareFeet,
      },
      vacationRentalTiers: pricing.vacationRental.tiers.map((tier) => ({
        layout: tier.label,
        price: tier.price === null ? 'Custom quote' : `$${tier.price} per turnover`,
      })),
      publicAddOns: {
        insideOven: `+$${pricing.addOns.oven}`,
        insideRefrigerator: `+$${pricing.addOns.refrigerator}`,
        emptyCabinetInteriors: `from +$${pricing.addOns.cabinetInteriorsFrom}`,
        interiorWindowGlass: `+$${pricing.addOns.standardWindow} per standard window`,
        vacationRentalLaundry: `+$${pricing.vacationRental.laundryPerLoad} per load`,
        vacationRentalRestocking: `+$${pricing.vacationRental.restockingPerTurnover} per turnover`,
      },
      commercial: pricing.commercial.publicLabel,
      confirmationRequired: 'Scope, final price, and availability are confirmed before booking.',
    },
  }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
