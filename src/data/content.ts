import { pricing, publicPriceLabels } from './pricing';

export interface ServiceDetail {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  quoteHref: string;
  included: string[];
  includedHeading?: string;
  includedIntro?: string;
  who: string;
  options: string[];
  optionsIntro: string;
  pricing: string;
  priceLabel: string;
  pricingRows?: { property: string; price: string }[];
  pricingFactors: string[];
  faqs: { q: string; a: string }[];
}

export const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
export const withBase = (path: string): string => {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('tel:') || path.startsWith('sms:') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  
  
  let cleanPath = path.startsWith('/') ? path : '/' + path;
  if (cleanPath !== '/' && !cleanPath.endsWith('/') && !cleanPath.includes('.')) {
    cleanPath += '/';
  }
  return `${base}${cleanPath}`;


};

export const site = {
  name: 'Beachline Cleaners',
  descriptor: 'Home & Property Cleaning',
  phoneDisplay: '(321) 323-9776',
  phoneHref: 'tel:+13213239776',
  smsHref: 'sms:+13213239776',
  email: 'hello@beachlinecleaners.com',
  areaServed: [
    'Cocoa, FL',
    'Cocoa Beach, FL',
    'Cape Canaveral, FL',
    'Merritt Island, FL',
    'Rockledge, FL',
    'Melbourne, FL',
    'Palm Bay, FL',
    'Viera, FL',
    'Titusville, FL',
  ],
  priceRange: '$$',
  defaultMetaDescription: 'House cleaning, deep cleaning, move-in/move-out service, vacation-rental turnovers, and commercial cleaning across Brevard County.',
};

export const navigationContent = {
  brandHomeAriaLabel: `${site.name} home`,
  menuButton: 'Menu',
  navAriaLabel: 'Primary navigation',
  servicesDropdownLabel: 'Services',
  serviceLinks: [
    { title: 'Home Cleaning', href: withBase('/residential-cleaning') },
    { title: 'Commercial Cleaning', href: withBase('/commercial-cleaning') },
    { title: 'Deep Cleaning', href: withBase('/deep-cleaning') },
    { title: 'Move-In / Move-Out', href: withBase('/move-out-cleaning') },
    { title: 'Vacation Rentals', href: withBase('/vacation-rental-cleaning') },
  ],
  links: [
    { title: 'Service Area', href: withBase('/service-area') },
    { title: 'About', href: withBase('/about') },
    { title: 'FAQ', href: withBase('/faq') },
  ],
  callPrefix: 'Call ',
  quoteButton: 'Request a Quote',
  quoteHref: withBase('/quote'),
};

export const footerContent = {
  summary: 'Local cleaning for homes, moves, vacation rentals, and workspaces across the Space Coast.',
  servicesHeading: 'Services',
  serviceLinks: [
    { title: 'Home Cleaning', href: withBase('/residential-cleaning') },
    { title: 'Deep Cleaning', href: withBase('/deep-cleaning') },
    { title: 'Move-In / Move-Out', href: withBase('/move-out-cleaning') },
    { title: 'Vacation Rentals', href: withBase('/vacation-rental-cleaning') },
    { title: 'Commercial Cleaning', href: withBase('/commercial-cleaning') },
  ],
  companyHeading: 'Company',
  companyLinks: [
    { title: 'About', href: withBase('/about') },
    { title: 'Service Area', href: withBase('/service-area') },
    { title: 'FAQ', href: withBase('/faq') },
    { title: 'Request a Quote', href: withBase('/quote') },
  ],
  copyrightSuffix: 'All rights reserved.',
};

export const mobileActionBarContent = {
  ariaLabel: 'Quick actions',
  callLabel: 'Call',
  textLabel: 'Text',
  quoteLabel: 'Request a Quote',
  quoteHref: withBase('/quote'),
};

export const accessibilityContent = {
  skipToContent: 'Skip to content',
};

export const ctaDefaults = {
  defaultTitle: 'Need a cleaner?',
  defaultText: 'Tell us what you need cleaned and when you need it. We’ll work through the details with you and confirm the price before anything is booked.',
  quoteButtonText: 'Request a Quote',
  quoteHref: withBase('/quote'),
  callButtonPrefix: 'Call ',
};

export const servicePageDefaults = {
  defaultImageAlt: 'Cleaning service',
  quoteButtonText: 'Request a Quote',
  quoteHref: withBase('/quote'),
  callButtonPrefix: 'Call ',
  includedHeading: 'What’s included',
  includedIntro: 'We’ll confirm the checklist for your property before the visit, so you know what’s included.',
  whoHeading: 'Who this is for',
  optionsHeading: 'Options & Add-ons',
  pricingHeading: 'What affects the price',
  faqsHeading: 'Service FAQs',
};

export const pricingContent = {
  note: 'Starting prices are baseline estimates. We’ll confirm the final scope, price, and availability before booking.',
  rentalHeading: 'Turnover starting prices',
  propertyColumn: 'Property size',
  priceColumn: 'Per turnover, from',
  rentalIncluded: `Includes turnover cleaning and beds reset with provided clean linens. Laundry is $${pricing.vacationRental.laundryPerLoad} per load; owner-provided supply restocking is $${pricing.vacationRental.restockingPerTurnover} per turnover.`,
};



export const cleaningVisitGuidance: Record<'preparation' | 'boundaries', { q: string; a: string; open?: boolean }> = {
  preparation: {
    q: 'What should I do before you arrive?',
    a: 'You don’t need to clean first. Pick up loose items, clothing, and toys, and clear dishes from the sink so we can reach the surfaces and floors. Tell us about pets, delicate surfaces, or product preferences. We’ll arrange access ahead of time. If cabinet interiors are included, empty them before we arrive. For move-out cleaning, plan the visit after belongings, furniture, and trash are removed whenever possible.',
  },
  boundaries: {
    q: 'What does a standard home clean cover, and when would I need a deep clean?',
    a: 'Standard cleaning covers routine kitchen and bathroom surfaces, reachable dusting, floors, mirrors, trash, and a basic room reset. A deep clean includes that routine work plus buildup and detailed areas such as baseboards, reachable trim, fans, fixtures, and window tracks. Appliance interiors, empty cabinet interiors, and interior window glass are optional add-ons. Moving heavy furniture or appliances, organizing clutter, washing dishes, and laundry are outside the standard home-cleaning checklist.',
  },
};

export const servicesDetail: Record<'residential' | 'deep' | 'moveOut' | 'vacationRental' | 'commercial', ServiceDetail> = {
  residential: {
    metaTitle: 'House Cleaning in Brevard County',
    metaDescription: 'One-time, weekly, biweekly, and every-4-weeks house cleaning in Brevard County, with scope and price confirmed before booking.',
    priceLabel: publicPriceLabels.home,
    quoteHref: `${withBase('/quote')}?service=residential`,
    eyebrow: 'Home cleaning · Brevard County',
    title: 'Home Cleaning',
    intro: 'Routine cleaning for kitchens, bathrooms, floors, dusting, and living areas across Brevard County.',
    image: withBase('/images/cleaner-living-room.webp'),
    imageAlt: 'Man vacuuming a furnished coastal living room',
    includedHeading: 'What’s included',
    includedIntro: 'Your standard clean covers the everyday surfaces and spaces below. No add-ons required.',
    included: [
      'Kitchen: Counters, sink, cabinet fronts, appliance exteriors, and floors',
      'Bathrooms: Toilets, showers, tubs, sinks, mirrors, counters, fixtures, and floors',
      'Bedrooms & living areas: Dusting reachable surfaces and cleaning mirrors',
      'Floors: Vacuuming and mopping appropriate floor surfaces',
      'Finishing touches: Trash removal and basic room reset',
    ],
    who: 'Book a one-time clean to catch up, or choose weekly, biweekly, or every-4-weeks visits for routine upkeep.',
    optionsIntro: 'Add these only if you need them. The standard clean does not require any add-ons.',
    options: [
      `Inside oven — +$${pricing.addOns.oven}`,
      `Inside refrigerator — +$${pricing.addOns.refrigerator}`,
      `Inside cabinets (empty) — from +$${pricing.addOns.cabinetInteriorsFrom}`,
      `Interior windows — +$${pricing.addOns.standardWindow} each`,
    ],
    pricing: 'Actual pricing varies by home size, bathrooms, frequency, and selected extras. A first visit can still be a standard clean; substantial buildup or deep-detail work is better matched to Deep Cleaning.',
    pricingFactors: ['Square footage', 'Bedrooms & bathrooms', 'Cleaning frequency', 'Selected extras'],
    faqs: [
      cleaningVisitGuidance.preparation,
      cleaningVisitGuidance.boundaries,
      {
        q: 'Do I need to be home?',
        a: 'Either is fine. If you’ll be out, we’ll agree on secure property access before the appointment.',
      },
      {
        q: 'Do you bring supplies?',
        a: 'We bring standard cleaning supplies and equipment for routine service. If your home has delicate surfaces, product preferences, or sensitivities, tell us before the visit.',
      },
      {
        q: 'What if I have pets?',
        a: 'Pets are welcome. If your pet may become anxious, act aggressively, or get in the way, please keep them in a secure area during the clean.',
      },
    ],
  },
  deep: {
    metaTitle: 'Deep Cleaning in Brevard County',
    metaDescription: 'Deep cleaning for homes in Brevard County with buildup or overdue detail work, including baseboards, trim, fixtures, window tracks, and other reachable areas.',
    priceLabel: publicPriceLabels.deep,
    quoteHref: `${withBase('/quote')}?service=deep`,
    eyebrow: 'Deep cleaning · Brevard County',
    title: 'Deep Cleaning',
    intro: 'A more detailed clean for homes with buildup or overdue detail work—baseboards, trim, fixtures, window tracks, and other reachable areas.',
    image: withBase('/images/deep-cleaning-kitchen.jpg'),
    imageAlt: 'Gloved hand wiping a kitchen stovetop during a deep clean',
    includedHeading: 'What a deep clean adds.',
    includedIntro: 'Includes the routine Home Cleaning scope, then adds focused detail work where dust and buildup collect.',
    included: [
      'Buildup: Extra attention to reachable kitchen and bathroom surfaces, including accessible grout',
      'Trim & baseboards: Baseboards, reachable trim, doors, and frames',
      'Fixtures & touchpoints: Ceiling fans, reachable light fixtures, vent covers, switches, and door handles',
      'Windows & blinds: Window sills and tracks, plus dusting of blinds',
    ],
    who: 'Best when routine cleaning is not enough—especially for buildup, overdue detail work, or a reset before guests arrive.',
    optionsIntro: 'Deep cleaning already covers the detailed surface work above. Add these interior tasks only if you need them.',
    options: [
      `Inside oven — +$${pricing.addOns.oven}`,
      `Inside refrigerator — +$${pricing.addOns.refrigerator}`,
      `Cabinet interiors (empty) — from +$${pricing.addOns.cabinetInteriorsFrom}`,
      `Interior window glass — +$${pricing.addOns.standardWindow} each`,
    ],
    pricing: 'Pricing is calculated from the one-time Home Cleaning estimate plus the deep-clean scope and any selected extras.',
    pricingFactors: ['Square footage', 'Bedrooms & bathrooms', 'Selected extras'],
    faqs: [
      {
        q: 'What’s the difference between standard and deep cleaning?',
        a: 'Standard cleaning covers routine surfaces, kitchens, bathrooms, floors, and trash. Deep cleaning includes that work plus buildup and detailed areas. Appliance interiors, empty cabinet interiors, and interior window glass are optional add-ons with prices listed on the service page.',
      },
      {
        q: 'How long does a deep clean take?',
        a: 'It depends on the size of the property, the amount of buildup, and what we agree to clean. We can give you a better idea once we know the condition and scope.',
      },
      {
        q: 'Do I need to supply the equipment?',
        a: 'We bring standard cleaning supplies and equipment. Let us know in advance about delicate surfaces or any products you want us to avoid or use.',
      },
    ],
  },
  moveOut: {
    metaTitle: 'Move-In / Move-Out Cleaning in Brevard County',
    metaDescription: 'Cleaning for empty homes in Brevard County before a move, inspection, closing, or handoff. Empty cabinet and drawer interiors included; timing confirmed before booking.',
    priceLabel: publicPriceLabels.move,
    quoteHref: `${withBase('/quote')}?service=move`,
    eyebrow: 'Move-in / move-out',
    title: 'Move-In / Move-Out Cleaning',
    intro: 'Detailed cleaning for an empty home before move-in, move-out inspection, listing, closing, or handoff.',
    image: withBase('/images/cleaner-move-out.webp'),
    imageAlt: 'Man vacuuming an empty waterfront condo',
    includedHeading: 'Empty-home cleaning.',
    includedIntro: 'The property should be empty or substantially empty so we can reach the full move-clean scope.',
    included: [
      'Kitchen & baths: Detailed cleaning of kitchen and bathroom surfaces, fixtures, and floors',
      'Cabinets & drawers: Interiors of empty kitchen and bathroom cabinets and drawers',
      'Trim & tracks: Baseboards, doors, reachable trim, fixtures, window sills, and tracks',
      'Empty rooms: Dusting and floor cleaning throughout cleared rooms',
      'Move debris: Light dust and small debris remaining after the move',
    ],
    who: 'Best scheduled after belongings, furniture, and trash are out so we can reach the full property before inspection, closing, handoff, or move-in.',
    optionsIntro: 'Empty cabinet and drawer interiors are already included. Add these only if your handoff requires them.',
    options: [
      `Inside oven — +$${pricing.addOns.oven}`,
      `Inside refrigerator — +$${pricing.addOns.refrigerator}`,
      `Interior window glass — +$${pricing.addOns.standardWindow} each`,
    ],
    pricing: 'Move-in and move-out pricing uses the same empty-property formula when the scope is the same.',
    pricingFactors: ['Square footage', 'Bedrooms & bathrooms', 'Empty-property scope', 'Selected extras'],
    faqs: [
      {
        q: 'Do properties need to be completely empty?',
        a: 'Plan the clean for after belongings, furniture, and trash have been removed so we can reach the whole property. If furniture or belongings will still be there, tell us when you request a quote.',
      },
      {
        q: 'Does move-out cleaning guarantee I get my deposit back?',
        a: 'No. Your landlord or property manager decides how your deposit is handled. Share their cleaning checklist when requesting a quote so we can confirm which tasks we can cover.',
      },
      {
        q: 'How much notice do I need to give for a move-out clean?',
        a: 'Book as early as you can, especially near the end of the month. We’ll confirm availability based on your move date and the scope of work.',
      },
    ],
  },
  vacationRental: {
    metaTitle: 'Vacation Rental Cleaning in Brevard County',
    metaDescription: 'Vacation rental turnovers in Brevard County around checkout and check-in windows. Cleaning, reset, and beds with provided clean linens; laundry by arrangement.',
    priceLabel: publicPriceLabels.vacationRental,
    pricingRows: pricing.vacationRental.tiers.map((tier) => ({
      property: tier.label,
      price: tier.price === null ? 'Custom quote' : `$${tier.price}`,
    })),
    quoteHref: `${withBase('/quote')}?service=vacation`,
    eyebrow: 'Vacation rental cleaning',
    title: 'Vacation Rental Cleaning',
    intro: 'Between-stay cleaning and resets built around your checkout and check-in window.',
    image: withBase('/images/cleaner-rental-turnover.webp'),
    imageAlt: 'Man wiping a kitchen counter while holding a clipboard in a coastal rental',
    includedHeading: 'Turnover essentials.',
    includedIntro: 'Each turnover covers the guest-ready reset and reporting tasks below.',
    included: [
      'Cleaning: Full turnover clean of kitchens, bathrooms, bedrooms, and living areas',
      'Linen reset: Beds reset with owner-provided clean linens',
      'Room reset: Trash removal and basic room reset',
      'Completion photos: Photos after each turnover',
      'Condition notes: Notes on visible property-condition or maintenance concerns',
    ],
    who: 'Set the property routine once—checkout and check-in timing, access, linens, reset details, and reporting—then reuse it for each stay.',
    optionsIntro: 'Add turnover support when the property needs it. Laundry uses on-site machines; restocking pricing assumes owner-provided supplies are already at the property.',
    options: [
      `Laundry — +$${pricing.vacationRental.laundryPerLoad} per load`,
      `Owner-provided supply restocking — +$${pricing.vacationRental.restockingPerTurnover} per turnover`,
      'Shopping / purchasing supplies — custom',
      'Same-day / last-minute rush — custom, subject to availability',
      'Seasonal / heavy reset — Deep Cleaning or custom scope',
    ],
    pricing: 'Published turnover tiers cover normal guest turnovers. Laundry and owner-provided restocking are added separately; rush, unusual layouts, or heavy resets are quoted manually.',
    pricingFactors: ['Property tier', 'Laundry loads', 'Restocking', 'Rush or unusual scope'],
    faqs: [
      {
        q: 'Can you handle linens and restocking for rentals?',
        a: `Beds are reset with provided clean linens. Laundry is $${pricing.vacationRental.laundryPerLoad} per load when on-site machines are available. Restocking owner-provided supplies is $${pricing.vacationRental.restockingPerTurnover} per turnover. We’ll confirm the setup and storage locations before service begins.`,
      },
      {
        q: 'What happens if a guest leaves a mess or damage?',
        a: 'If we find an excessive mess, missing item, or possible damage, we’ll flag it and follow the reporting process agreed for the property. Any extra cleaning outside the normal turnover scope can be discussed before additional work is done.',
      },
      {
        q: 'Do you offer same-day turnovers?',
        a: 'Same-day turnovers between checkout and check-in are available by arrangement depending on schedule availability. We recommend booking turnover windows in advance.',
      },
      {
        q: 'Can you follow my property checklist?',
        a: 'Yes. Send the property checklist, reset expectations, access instructions, and anything that needs to be handled a particular way. We’ll confirm the agreed turnover scope before service starts.',
      },
      {
        q: 'How do you access the rental?',
        a: 'We’ll agree on secure property access before service starts, whether that is a lockbox, smart lock, front desk, property manager, or another arrangement that works for the property.',
      },
    ],
  },
  commercial: {
    metaTitle: 'Commercial Cleaning in Brevard County',
    metaDescription: 'Cleaning for small offices, retail spaces, and shared work areas in Brevard County. Agree on the checklist, access, schedule, and price before service begins.',
    priceLabel: publicPriceLabels.commercial,
    quoteHref: `${withBase('/quote')}?service=commercial`,
    eyebrow: 'Commercial cleaning',
    title: 'Commercial Cleaning',
    intro: 'Routine cleaning for small offices, professional suites, retail spaces, and shared work areas.',
    image: withBase('/images/cleaner-office.webp'),
    imageAlt: 'Man wiping a desk in a bright professional office',
    includedHeading: 'Routine cleaning scope.',
    includedIntro: 'Choose the tasks your space needs from the routine checklist below.',
    included: [
      'Work areas: Dusting and wiping reachable surfaces in offices, reception areas, conference rooms, and shared spaces',
      'Restrooms: Toilets, sinks, counters, mirrors, fixtures, and floors',
      'Breakroom: Counters, sinks, tables, appliance exteriors, and floors',
      'Floors: Vacuuming carpets and mopping suitable hard-floor surfaces',
      'Waste: Trash removal, with recycling handled according to the property arrangement',
      'Touchpoints: Frequently touched surfaces such as door handles and light switches',
    ],
    who: 'For small offices, professional suites, retail spaces, and shared work areas that need one-time or recurring cleaning.',
    optionsIntro: 'Choose the schedule that fits the space, then add any detail work or supply support you need.',
    options: [
      'Recurring weekly, biweekly, or custom schedules by arrangement',
      'After-hours or weekend visits, subject to availability',
      'Detail cleaning for baseboards, trim, fixtures, and buildup',
      'Interior entry-door and other accessible interior glass',
      'Restocking restroom and breakroom supplies by arrangement',
    ],
    pricing: 'Custom pricing is based on space size and layout, cleaning frequency, requested hours, and the agreed checklist.',
    pricingFactors: ['Square footage', 'Facility type & layout', 'Service frequency', 'Restrooms & shared areas', 'Cleaning hours & access', 'Agreed checklist'],
    faqs: [
      {
        q: 'Do you clean after hours?',
        a: 'After-hours or weekend cleaning can be arranged when availability and building access allow it. Include your preferred cleaning window with the quote request.',
      },
      {
        q: 'Can we customize the cleaning checklist?',
        a: 'Yes. Commercial service is based on an agreed checklist for your space. Tell us which areas matter most, any tasks that need special attention, and how often you want them handled.',
      },
      {
        q: 'Do you bring cleaning supplies and equipment?',
        a: 'We bring standard cleaning supplies and equipment for the agreed service. If the property requires specific products or has delicate surfaces, tell us before the first visit.',
      },
      {
        q: 'How do you handle keys, alarms, or building access?',
        a: 'We work out access before service starts. If the building uses keys, codes, an alarm, a front desk, or another access process, include that when we set up the schedule. Do not send door or alarm codes through the quote form.',
      },
      {
        q: 'Can I request a one-time commercial clean?',
        a: 'Yes. One-time cleaning can be quoted along with recurring service. Tell us the condition of the space and whether you need routine cleaning or more detailed work so we can price the scope correctly.',
      },
    ],
  },
};

export const homeContent = {
  metaTitleSuffix: 'House Cleaning in Brevard County',
  metaDescription: 'House cleaning, deep cleaning, move-in/move-out service, vacation-rental turnovers, and commercial cleaning across Brevard County and the Space Coast.',
  hero: {
    imageSrc: withBase('/images/cleaner-counter.webp'),
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: 'Man wiping a kitchen counter in a bright coastal home',
    eyebrow: 'LOCAL CLEANING • BREVARD COUNTY',
    title: 'A clean home. More time for you.',
    description: 'Owner-operated cleaning for homes and properties, from routine upkeep to one-time and deep cleans.',
    serviceArea: 'Serving Brevard County and the Space Coast.',
    ctaButton: 'Request a Quote',
    quoteHref: withBase('/quote'),
    callPrefix: 'Call ',
    estimator: {
      locationLabel: 'Where do you need cleaning?',
      locationPlaceholder: 'ZIP code or town',
      serviceLabel: 'What type of cleaning?',
      phonePrompt: 'Rather talk it through?',
    },
  },
  trustStrip: {
    ariaLabel: 'Key service assurances',
    items: [
      'Local & owner-operated',
      'Scope & price agreed first',
      'Standard supplies included',
      'Call or text us directly',
    ],
  },
  servicesSection: {
    heading: 'Our services',
    linkText: 'See service details',
    featuredService: {
      image: servicesDetail.residential.image,
      imageAlt: servicesDetail.residential.imageAlt,
      title: 'Home Cleaning',
      priceLabel: servicesDetail.residential.priceLabel,
      href: withBase('/residential-cleaning'),
      text: 'Routine cleaning for kitchens, bathrooms, floors, dusting, and living areas—one time or on a regular schedule.',
    },
    services: [
      {
        image: withBase('/images/deep-cleaning-kitchen.jpg'),
        imageAlt: 'Gloved hand wiping a kitchen stovetop during a deep clean',
        title: 'Deep Cleaning',
        priceLabel: servicesDetail.deep.priceLabel,
        href: withBase('/deep-cleaning'),
        text: 'A more detailed clean for buildup, baseboards, trim, fans, window tracks, fixtures, and other reachable detail work.',
      },
      {
        image: withBase('/images/move-out-empty-room.jpg'),
        imageAlt: 'Freshly cleaned empty room ready for move-in or move-out',
        title: 'Move-In / Move-Out',
        priceLabel: servicesDetail.moveOut.priceLabel,
        href: withBase('/move-out-cleaning'),
        text: 'Detailed empty-home cleaning for a move, inspection, handoff, listing, or closing—including empty cabinet and drawer interiors.',
      },
      {
        image: withBase('/images/turnover-active.jpg'),
        imageAlt: 'Cleaner resetting a bed during a vacation rental turnover',
        title: 'Vacation Rentals',
        priceLabel: servicesDetail.vacationRental.priceLabel,
        href: withBase('/vacation-rental-cleaning'),
        text: 'Cleaning, reset, completion photos, and condition notes between guest stays, built around checkout and check-in times.',
      },
      {
        image: servicesDetail.commercial.image,
        imageAlt: servicesDetail.commercial.imageAlt,
        title: 'Commercial Cleaning',
        priceLabel: servicesDetail.commercial.priceLabel,
        href: withBase('/commercial-cleaning'),
        text: 'Routine cleaning for small offices, professional suites, retail spaces, restrooms, and breakrooms on an agreed checklist and schedule.',
      },
    ],
  },
  processSection: {
    heading: 'How it works',
    intro: 'A quote request starts the conversation. Your appointment is confirmed separately.',
    steps: [
      {
        title: 'Tell Us What You Need',
        text: 'Send your location, the type of cleaning you need, and the dates that work for you.',
      },
      {
        title: 'Work Out the Details',
        text: 'Review the cleaning tasks, price, and available dates with us before you book.',
      },
      {
        title: 'Come Back to a Clean Space',
        text: 'We handle the cleaning we agreed on. If anything needs attention afterward, call or text us directly.',
      },
    ],
  },
  contactBanner: {
    eyebrow: 'Need a cleaner?',
    heading: 'Ready to get the cleaning off your list?',
    text: 'Send a quote request, or call or text us about the property and the dates you have in mind.',
    ctaButton: 'Request a Quote',
    quoteHref: withBase('/quote'),
    callPrefix: 'Call ',
  },
};

export const aboutContent = {
  metaTitle: 'About Our Cleaning Service',
  metaDescription: 'Learn about Beachline Cleaners, an owner-operated cleaning service for homes, vacation rentals, and workspaces in Brevard County.',
  hero: {
    eyebrow: 'About',
    title: 'Local cleaning. Direct communication.',
    lede: 'Owner-operated cleaning for homes, vacation rentals, moves, and workspaces across Brevard County.',
  },
  story: {
    imageSrc: withBase('/images/cleaner-counter.webp'),
    imageAlt: 'Cleaner wiping a kitchen counter in a bright coastal home',
    eyebrow: 'How we work',
    heading: 'Simple communication, start to finish.',
    ownerTitle: 'Based in Brevard County',
    ownerIntro: 'When you call or text, you’re talking directly with the person running Beachline Cleaners about the property, scope, and schedule.',
    paragraphs: [
      'Tell us what needs attention and any extras you want included. We’ll agree on the checklist, price, access, and timing before the visit.',
      'Have pets, delicate surfaces, or a product preference? Tell us when we set up the clean. If you’ll be out, we’ll work out secure access ahead of time.',
    ],
    checks: [
      'Cleaning checklist agreed before the visit',
      'Add-on prices shown before booking',
      'Standard cleaning supplies and equipment provided',
    ],
  },
};

export const faqContent = {
  metaTitle: 'Cleaning FAQs',
  metaDescription: 'Answers about cleaning in Brevard County: quotes, pricing, supplies, preparation, recurring visits, and vacation-rental turnovers.',
  hero: {
    eyebrow: 'FAQ',
    title: 'Questions before you book?',
    lede: 'Here are the things people usually want to know about pricing, supplies, access, scheduling, and what’s included.',
  },
  faqs: [
    {
      q: 'Does requesting a quote book an appointment?',
      a: 'No. Sending the form starts the conversation. We’ll follow up about the cleaning, price, and available dates, and confirm the appointment separately.',
    },
    {
      q: 'How is pricing determined?',
      prices: [
        { service: 'Home cleaning', price: servicesDetail.residential.priceLabel },
        { service: 'Deep cleaning', price: servicesDetail.deep.priceLabel },
        { service: 'Move-in / move-out', price: servicesDetail.moveOut.priceLabel },
        { service: 'Vacation rentals', price: servicesDetail.vacationRental.priceLabel },
        { service: 'Commercial cleaning', price: 'Custom quote' },
      ],
      priceNote: pricingContent.note,
      a: `Home cleaning: ${servicesDetail.residential.priceLabel}. Deep cleaning: ${servicesDetail.deep.priceLabel}. Move-in/move-out: ${servicesDetail.moveOut.priceLabel}. Vacation rentals: ${servicesDetail.vacationRental.priceLabel}. Commercial work is quoted individually. ${pricingContent.note}`,
      open: true,
    },
    {
      q: 'How do I cancel or reschedule?',
      a: 'Call or text us as soon as you know your plans have changed. Any cancellation or lockout terms will be confirmed before you book.',
    },
    cleaningVisitGuidance.preparation,
    {
      q: 'Do I need to be home?',
      a: 'No. You’re welcome to be home, but you don’t have to be. If you’ll be out, we’ll agree on secure property access before the appointment.',
    },
    {
      q: 'Do you bring supplies?',
      a: 'We bring standard cleaning supplies and equipment. If you have delicate surfaces or specific product preferences, let us know before the visit.',
    },
    {
      q: 'What if I have pets?',
      a: 'Pets are welcome. If your pet may become anxious, act aggressively, or get in the way, please keep them in a secure area during the clean.',
    },
    {
      q: 'What if something needs attention after the cleaning?',
      a: 'Call or text us and tell us what needs attention. We’ll review it with you against the agreed checklist and discuss the next step.',
    },
    cleaningVisitGuidance.boundaries,
    {
      q: 'Can you handle linens and restocking for rentals?',
      a: `Have clean linens ready for each turnover. Laundry is $${pricing.vacationRental.laundryPerLoad} per load when on-site machines are available, and restocking owner-provided supplies is $${pricing.vacationRental.restockingPerTurnover} per turnover. We’ll confirm where supplies are stored before service starts.`,
    },
  ],
};

export const serviceAreaContent = {
  metaTitle: 'Cleaning Service Areas in Brevard County',

  metaDescription:
    'Beachline Cleaners serves Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, Rockledge, Melbourne, Palm Bay, Viera, Titusville, and nearby Brevard County areas.',

  hero: {
    eyebrow: 'Service area',
    title: 'Cleaning across Brevard County.',
    lede:
      'Beachline Cleaners serves homes, vacation rentals, moves, and small workspaces throughout the Space Coast communities listed here.',
  },

  areaHeading: 'Where we clean',

  areas: [
    'Cocoa',
    'Cocoa Beach',
    'Cape Canaveral',
    'Merritt Island',
    'Rockledge',
    'Melbourne',
    'Palm Bay',
    'Viera',
    'Titusville',
  ],

  areaNote:
    'Nearby Brevard County areas may be available by request. Send your town or ZIP code and we’ll confirm coverage before booking.',

  coverageEyebrow: 'Cleaning services',

  coverageHeading:
    'Available services.',

  coverageIntro:
    'We offer home, rental, move, and small commercial cleaning across our service area. Availability depends on the property, location, and schedule.',

  services: [
    {
      title: 'Home Cleaning',
      text:
        'Recurring or one-time cleaning for occupied homes.',
      href: withBase('/residential-cleaning'),
      linkText: 'Explore home cleaning',
    },
    {
      title: 'Deep Cleaning',
      text:
        'A more detailed reset for homes that need extra attention.',
      href: withBase('/deep-cleaning'),
      linkText: 'Explore deep cleaning',
    },
    {
      title: 'Move-In / Move-Out',
      text:
        'Cleaning for empty properties before or after a move.',
      href: withBase('/move-out-cleaning'),
      linkText: 'Explore move cleaning',
    },
    {
      title: 'Vacation Rentals',
      text:
        'Turnover cleaning between guest stays, with linen and restocking needs agreed in advance.',
      href: withBase('/vacation-rental-cleaning'),
      linkText: 'Explore rental turnovers',
    },
    {
      title: 'Commercial Cleaning',
      text:
        'Cleaning for small offices, professional suites, retail spaces, and light commercial properties.',
      href: withBase('/commercial-cleaning'),
      linkText: 'Explore commercial cleaning',
    },
  ],

  cta: {
    title: 'Not sure if you’re in range?',
    text:
      'Send your town or ZIP code and preferred dates, or call us. We’ll confirm coverage and availability before booking.',
  },
};

export const quoteContent = {
  metaTitle: 'Request a Cleaning Quote',
  metaDescription: 'Request a cleaning quote for homes, move-in/move-out service, vacation rentals, or commercial spaces in Brevard County.',
  eyebrow: 'Request a quote',
  title: 'Get a cleaning quote.',
  lede: 'Choose the service and property details for an estimate, then send the request. We’ll confirm scope, price, and availability before booking.',
  form: {
    formspreeEndpoint: 'https://formspree.io/f/xzzenlyg',
    emailSubject: 'New Beachline Cleaners Quote Request',
    submittingButton: 'Sending...',
    submittingStatus: 'Sending your quote request...',
    privacyDisclosure: 'This form sends your contact and property details to Beachline Cleaners through Formspree to handle your quote request. Do not include door codes, payment details, or other sensitive information.',
    actionAttr: withBase('/quote-success'),
    honeypotLabel: 'Don’t fill this out if you’re human:',
    name: {
      label: 'Your Name',
      placeholder: 'First and last name',
    },
    phone: {
      label: 'Phone Number',
      placeholder: '(321) 555-0123',
      title: 'Enter 10–15 digits. Spaces, parentheses, dots, hyphens, and a leading + are allowed.',
      pattern: '(?=(?:[^0-9]*[0-9]){10,15}[^0-9]*$)\\+?[0-9 .\\(\\)\\-]+',
    },
    email: {
      label: 'Email Address (Optional)',
      placeholder: 'name@example.com',
    },
    location: {
      label: 'Town, ZIP Code, or Property Address',
      placeholder: 'e.g. 32922 or Cocoa Beach',
    },
    service: {
      label: 'Service Type',
      placeholder: 'Select a service...',
      options: [
        { value: 'residential', label: 'Home Cleaning' },
        { value: 'deep', label: 'Deep Cleaning' },
        { value: 'move', label: 'Move-In / Move-Out' },
        { value: 'vacation', label: 'Vacation Rental' },
        { value: 'commercial', label: 'Commercial Cleaning' },
        { value: 'other', label: 'Other' },
      ],
    },
    notes: {
      label: 'Additional Notes (Optional)',
      placeholder: 'Anything else we should know about priorities, buildup, access, or extras? Please do not include door or alarm codes.',
    },
    submitButton: 'Send Quote Request',
    detailsToggle: 'Add more details (optional)',
  },
  aside: {
    heading: 'Prefer to call or text?',
    description: 'Need cleaning by a specific date? Call or text us to discuss availability before making plans.',
    callPrefix: 'Call ',
    textButton: `Text ${site.phoneDisplay}`,
    textHref: site.smsHref,
  },
};

export const quoteSuccessContent = {
  metaTitle: 'Quote Request Received',
  metaDescription: 'Your cleaning quote request has been received. We will follow up by phone or email to discuss the details.',
  eyebrow: 'Request received',
  title: 'We received your request.',
  nextHeading: 'What happens next',
  nextText: 'We’ll review the property details, estimate, and requested scope, then follow up by phone or email to confirm price and availability.',
  bookingHeading: 'Appointment not yet booked',
  bookingText: 'Your cleaning is not on the calendar until we confirm the scope, price, and date with you. If you need to add something, call or text us.',
  returnButtonText: 'Go to Homepage',
  returnButtonHref: withBase('/'),
  callPrefix: 'Call ',
};

