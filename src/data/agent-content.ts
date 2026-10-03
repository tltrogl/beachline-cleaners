import { site, homeContent, servicesDetail, pricingContent, aboutContent, faqContent, serviceAreaContent, quoteContent } from './content';

const section = (title: string, text: string) => `## ${title}\n\n${text}`;
const bullets = (items: string[]) => items.map(item => `- ${item}`).join('\n');
const questions = (items: { q: string; a: string }[]) => items.map(item => `### ${item.q}\n\n${item.a}`).join('\n\n');
const rentalPricing = () => section(pricingContent.rentalHeading, [
  `| ${pricingContent.propertyColumn} | ${pricingContent.priceColumn} |`,
  '| --- | --- |',
  ...servicesDetail.vacationRental.pricingRows!.map(row => `| ${row.property} | ${row.price} |`),
].join('\n') + `\n\n${servicesDetail.vacationRental.pricing}`);

// These paths match the public HTML pages. Quote confirmation is intentionally excluded.
export const agentPages = [
  { slug: 'index', path: '/', title: site.name },
  ...homeContent.servicesSection.services.map(service => ({
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
    body = [
      service.intro,
      section('What’s included', bullets(service.included)),
      ...(service.pricingRows ? [rentalPricing()] : [section('Price', `${service.priceLabel}\n\n${service.pricing}`)]),
      section(service.priceLabel === 'Custom quote' ? 'Options' : 'Add-ons', bullets(service.options)),
    ];
  } else if (slug === 'index') {
    body = [homeContent.hero.title, homeContent.hero.description, homeContent.hero.serviceArea,
      section(homeContent.servicesSection.eyebrow, homeContent.servicesSection.services.map(service =>
        `- [${service.title}](${absolute(service.href)}): ${service.priceLabel}. ${service.text}`).join('\n')),
      section(homeContent.processSection.heading, `${homeContent.processSection.intro}\n\n` + homeContent.processSection.steps.map(step => `### ${step.title}\n\n${step.text}`).join('\n\n')),
      section(homeContent.expectSection.heading, `${homeContent.expectSection.intro}\n\n${homeContent.expectSection.items.map(item => `### ${item.title}\n\n${item.text}`).join('\n\n')}`),
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
      section(quoteContent.aside.detailsHeading, bullets(quoteContent.aside.detailsList)),
      section('Quote form details', bullets([
        quoteContent.form.name.label, quoteContent.form.phone.label,
        quoteContent.form.email.label, quoteContent.form.location.label,
        quoteContent.form.service.label,
        quoteContent.form.size.label, quoteContent.form.frequency.label,
        quoteContent.form.notes.label,
      ]) + `\n\n${quoteContent.form.notes.placeholder}`),
      ...quoteContent.form.serviceFields.map(group => section(group.legend, bullets(group.fields.map(field => field.label)))),
      section('Available services', bullets(quoteContent.form.service.options.map(option => option.label))),
      ...quoteContent.form.extras.map(group => section(group.label, `${group.hint}\n\n${bullets(group.options.map(option => option.label))}`)),
      section('Submitting a request', `Use the [quote form](${absolute(page.path)}) to send a request. Scope, availability, and pricing are confirmed afterward.`),
      quoteContent.form.privacyDisclosure,
    ];
  }
  return [`---\ntitle: ${JSON.stringify(`${page.title} | ${site.name}`)}\nurl: ${JSON.stringify(absolute(page.path))}\n---`,
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
