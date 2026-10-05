import { site, homeContent, servicesDetail, pricingContent, aboutContent, faqContent, serviceAreaContent, quoteContent } from './content';
import { pricing, PRICING_VERSION } from './pricing';

const section = (title: string, text: string) => `## ${title}\n\n${text}`;
const bullets = (items: string[]) => items.map(item => `- ${item}`).join('\n');
const questions = (items: { q: string; a: string }[]) => items.map(item => `### ${item.q}\n\n${item.a}`).join('\n\n');
const rentalPricing = () => section(pricingContent.rentalHeading, [
  `| ${pricingContent.propertyColumn} | ${pricingContent.priceColumn} |`,
  '| --- | --- |',
  ...servicesDetail.vacationRental.pricingRows!.map(row => `| ${row.property} | ${row.price} |`),
].join('\n') + `\n\n${servicesDetail.vacationRental.pricing}\n\n### Quote factors\n\n${bullets(servicesDetail.vacationRental.pricingFactors)}`);

// These paths match the public HTML pages. Quote confirmation is intentionally excluded.
const homeServices = [homeContent.servicesSection.featuredService, ...homeContent.servicesSection.services];

export const agentPages = [
  { slug: 'index', path: '/', title: site.name },
  ...homeServices.map(service => ({
    slug: service.href.split('/').filter(Boolean).at(-1)!, path: service.href, title: service.title,
  })),
  { slug: 'about', path: '/about/', title: aboutContent.metaTitle },
  { slug: 'service-area', path: '/service-area/', title: serviceAreaContent.metaTitle },
  { slug: 'faq', path: '/faq/', title: faqContent.metaTitle },
  { slug: 'quote', path: '/quote/', title: quoteContent.metaTitle },
];

const serviceBySlug = {
  'residential-cleaning': servicesDetail.residential,
  'deep-cleaning': servicesDetail.deep,
  'move-out-cleaning': servicesDetail.moveOut,
  'vacation-rental-cleaning': servicesDetail.vacationRental,
  'commercial-cleaning': servicesDetail.commercial,
};

export function pageMarkdown(slug: string, origin: URL): string {
  const page = agentPages.find(page => page.slug === slug);
  if (!page) throw new Error(`Unknown Markdown page: ${slug}`);
  const absolute = (path: string) => new URL(path, origin).href;
  const contact = section('Contact and quotes', [
    `Phone: [${site.phoneDisplay}](${site.phoneHref})`,
    `Text: [${site.phoneDisplay}](${site.smsHref})`,
    `Email: [${site.email}](mailto:${site.email})`,
    `[Request a quote](${absolute('/quote/')})`,
  ].join('\n\n'));
  let body: string[];

  if (Object.hasOwn(serviceBySlug, slug)) {
    const service = serviceBySlug[slug as keyof typeof serviceBySlug];
    const fitHeading = slug === 'residential-cleaning'
      ? 'Scheduling'
      : slug === 'vacation-rental-cleaning'
        ? 'Turnover routine'
        : 'Who this is for';
    body = [
      service.intro,
      section(fitHeading, service.who),
      section(service.includedHeading ?? 'What’s included', `${service.includedIntro ? `${service.includedIntro}\n\n` : ''}${bullets(service.included)}`),
      ...(service.pricingRows
        ? [rentalPricing()]
        : [section('Price', `${service.priceLabel}\n\n${service.pricing}\n\n${bullets(service.pricingFactors)}`)]),
      ...(slug === 'commercial-cleaning'
        ? [
            section('Scheduling', bullets(service.options.slice(0, 2))),
            section('Additional tasks', `${service.optionsIntro}\n\n${bullets(service.options.slice(2))}`),
          ]
        : [section('Add-ons', `${service.optionsIntro}\n\n${bullets(service.options)}`)]),
    ];
  } else if (slug === 'index') {
    body = [homeContent.hero.title, homeContent.hero.description, homeContent.hero.serviceArea,
      section(homeContent.servicesSection.heading, homeServices.map(service =>
        `- [${service.title}](${absolute(service.href)}): ${service.priceLabel}. ${service.text}`).join('\n')),
      section(homeContent.processSection.heading, `${homeContent.processSection.intro}\n\n` + homeContent.processSection.steps.map(step => `### ${step.title}\n\n${step.text}`).join('\n\n')),
      section('Service area', bullets(serviceAreaContent.areas)),
    ];
  } else if (slug === 'about') {
    body = [aboutContent.hero.lede,
      section(aboutContent.story.heading, [aboutContent.story.ownerIntro, ...aboutContent.story.paragraphs, bullets(aboutContent.story.checks)].join('\n\n')),
    ];
  } else if (slug === 'service-area') {
    body = [serviceAreaContent.hero.lede, bullets(serviceAreaContent.areas),
      section(serviceAreaContent.coverageHeading, serviceAreaContent.coverageIntro),
      ...serviceAreaContent.services.map(service => section(service.title, `${service.text}\n\n[${service.linkText}](${absolute(service.href)})`)),
      section(serviceAreaContent.cta.title, serviceAreaContent.cta.text),
    ];
  } else if (slug === 'faq') {
    body = [faqContent.hero.lede, questions(faqContent.faqs)];
  } else {
    body = [quoteContent.lede,
      section('Available services', bullets(quoteContent.form.service.options.map(option => option.label))),
      section('Instant estimate', bullets([
        'Home Cleaning: bedrooms, full bathrooms, half bathrooms, approximate size, frequency, and selected extras.',
        'Deep Cleaning: residential layout and size plus selected extras; priced as a one-time service.',
        'Move-In / Move-Out: residential layout and size for an empty or substantially empty property.',
        'Vacation Rentals: published property tier plus laundry loads and owner-provided supply restocking.',
        'Commercial Cleaning and unsupported configurations: Custom quote.',
        `Pricing model version: ${PRICING_VERSION}.`,
      ])),
      section('Automatic-estimate limits', bullets([
        `Home and Deep: up to ${pricing.home.limits.bedrooms} bedrooms, ${pricing.home.limits.fullBathrooms} full bathrooms, and ${pricing.home.limits.squareFeet.toLocaleString('en-US')} sq ft.`,
        `Move-In / Move-Out: automatic pricing up to ${pricing.move.maxSquareFeet.toLocaleString('en-US')} sq ft when the property is empty or substantially empty.`,
        'Oversized, furnished, rush, unusual-layout, or special-condition requests switch to Custom quote.',
      ])),
      section('Residential add-ons', bullets([
        `Inside oven: +$${pricing.addOns.oven}`,
        `Inside refrigerator: +$${pricing.addOns.refrigerator}`,
        `Empty cabinet interiors: from +$${pricing.addOns.cabinetInteriorsFrom}; already included with Move-In / Move-Out cleaning.`,
        `Interior window glass: +$${pricing.addOns.standardWindow} per standard window; oversized glass/sliders are custom.`,
      ])),
      section('Vacation-rental add-ons', bullets([
        `On-site laundry: +$${pricing.vacationRental.laundryPerLoad} per load.`,
        `Owner-provided supply restocking: +$${pricing.vacationRental.restockingPerTurnover} per turnover.`,
        'Shopping/purchasing supplies and same-day or last-minute rush requests are custom.',
      ])),
      section('Contact details collected', bullets([
        quoteContent.form.name.label,
        quoteContent.form.phone.label,
        quoteContent.form.email.label,
        quoteContent.form.location.label,
        quoteContent.form.notes.label,
      ]) + `\n\n${quoteContent.form.notes.placeholder}`),
      section('Submitting a request', `Use the [quote form](${absolute(page.path)}) to send a request. The displayed estimate and relevant pricing inputs are included with the request. Scope, final price, and availability are confirmed before booking.`),
      quoteContent.form.privacyDisclosure,
    ];
  }

  const documentTitle = page.title === site.name ? site.name : `${page.title} | ${site.name}`;
  return [`---\ntitle: ${JSON.stringify(documentTitle)}\nurl: ${JSON.stringify(absolute(page.path))}\n---`,
    `# ${page.title}`, `Source: [${page.title}](${absolute(page.path)})`, ...body, contact,
  ].join('\n\n') + '\n';
}

export function siteGuide(origin: URL): string {
  const absolute = (path: string) => new URL(path, origin).href;
  return [
    `# ${site.name}`, `> ${homeContent.metaDescription}`,
    section('Contact', `Phone: ${site.phoneDisplay}\n\nEmail: ${site.email}`),
    section('Service area', serviceAreaContent.coverageIntro),
    section('Website pages', agentPages.map(page => `- [${page.title}](${absolute(page.path)})`).join('\n')),
    section('Markdown versions', agentPages.map(page => `- [${page.title}](${absolute(`/markdown/${page.slug}.md`)})`).join('\n')),
    section('Structured resources', [
      `- [Business and service information](${absolute('/site-info.json')})`,
      `- [Sitemap](${absolute('/sitemap-index.xml')})`,
      `- [API documentation](${absolute('/api-docs.txt')})`,
    ].join('\n')),
  ].join('\n\n') + '\n';
}
