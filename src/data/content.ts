export interface ServiceDetail {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageFocalPoint?: 'center' | 'left' | 'right';
  imageCaption?: string;
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
  ],
  priceRange: '$$',
  defaultMetaDescription: 'Reliable home and vacation-rental cleaning across the Space Coast.',
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
  quoteButton: 'Get a Quote',
  quoteHref: withBase('/quote'),
};

export const footerContent = {
  summary: 'Home, deep, move-in/move-out, vacation-rental, and commercial cleaning across the Space Coast.',
  servicesHeading: 'Services',
  serviceLinks: [
    { title: 'Home Cleaning', href: withBase('/residential-cleaning') },
    { title: 'Commercial Cleaning', href: withBase('/commercial-cleaning') },
    { title: 'Vacation Rentals', href: withBase('/vacation-rental-cleaning') },
    { title: 'Deep Cleaning', href: withBase('/deep-cleaning') },
    { title: 'Move-In / Move-Out', href: withBase('/move-out-cleaning') },
  ],
  companyHeading: 'Company',
  companyLinks: [
    { title: 'About', href: withBase('/about') },
    { title: 'Service Area', href: withBase('/service-area') },
    { title: 'FAQ', href: withBase('/faq') },
    { title: 'Get a Quote', href: withBase('/quote') },
  ],
  copyrightSuffix: 'All rights reserved.',
};

export const mobileActionBarContent = {
  ariaLabel: 'Quick actions',
  callLabel: 'Call',
  textLabel: 'Text',
  quoteLabel: 'Get a Quote',
  quoteHref: withBase('/quote'),
};

export const accessibilityContent = {
  skipToContent: 'Skip to content',
};

export const ctaDefaults = {
  defaultTitle: 'Ready to get started?',
  defaultText: 'Request a quote online or call us to discuss your property, timing, and cleaning needs.',
  quoteButtonText: 'Get a Quote',
  quoteHref: withBase('/quote'),
  callButtonPrefix: 'Call ',
};

export const servicePageDefaults = {
  defaultImageAlt: 'Cleaning service',
  quoteButtonText: 'Get a Quote',
  quoteHref: withBase('/quote'),
  callButtonPrefix: 'Call ',
  includedHeading: 'Typical cleaning checklist',
  includedIntro: 'Your quote confirms which tasks are included for your property.',
  whoHeading: 'Who this is for',
  optionsHeading: 'Options & Add-ons',
  pricingHeading: 'How pricing is determined',
  faqsHeading: 'Service FAQs',
};

export const pricingContent = {
  note: 'Starting prices are a guide. Your quote confirms the total based on property size, layout, condition, frequency, and requested extras before you book.',
  rentalHeading: 'Turnover starting prices',
  propertyColumn: 'Property size',
  priceColumn: 'Per turnover, from',
  rentalIncluded: 'Includes turnover cleaning and beds reset with provided clean linens. Laundry and supply restocking are quoted separately.',
};



export const cleaningVisitGuidance: Record<'preparation' | 'boundaries', { q: string; a: string; open?: boolean }> = {
  preparation: {
    q: 'What should I do before you arrive?',
    a: 'You don’t need to clean first. Put away loose items, pick up clothing and toys, and clear dishes from the sink so we can reach the surfaces and floors. Arrange property access and a safe space for pets. Tell us about delicate surfaces or product preferences. For cabinet-interior cleaning, empty the cabinets first; for rental turnovers, have clean linens ready and confirm checkout/check-in times.',
  },
  boundaries: {
    q: 'What isn’t included in a standard home clean?',
    a: 'Standard cleaning covers reachable surfaces. Baseboard and trim detailing are part of a deep clean. Appliance interiors, empty cabinet interiors, and interior windows are optional extras. Moving heavy furniture or appliances, organizing clutter, washing dishes, and laundry are outside the standard home-cleaning checklist. Rental laundry and restocking can be arranged separately.',
  },
};

export const servicesDetail: Record<'residential' | 'deep' | 'moveOut' | 'vacationRental' | 'commercial', ServiceDetail> = {
  residential: {
    priceLabel: 'From $125 per visit',
    quoteHref: `${withBase('/quote')}?service=residential`,
    eyebrow: 'Residential cleaning',
    title: 'One-time and recurring home cleaning.',
    intro: 'Cleaning for kitchens, bathrooms, floors, and living areas. Arrange a one-time visit or discuss a weekly or biweekly schedule.',
    image: withBase('/images/cleaner-living-room.webp'),
    imageAlt: 'Man vacuuming a furnished coastal living room',
    imageFocalPoint: 'left',
    includedHeading: 'What’s included in a standard clean',
    includedIntro: 'Our standard home clean covers the tasks below. Optional extras are available if you need them; no add-ons are required.',
    included: [
      'Kitchen counters, sink, cabinet fronts, appliance exteriors, and floors',
      'Bathroom toilets, showers, tubs, sinks, mirrors, counters, fixtures, and floors',
      'Dusting reachable surfaces and cleaning mirrors in bedrooms and living areas',
      'Vacuuming and mopping appropriate floor surfaces',
      'Trash removal and basic room reset',
    ],
    who: 'A good fit for homes that need recurring maintenance or a one-time reset. Weekly, biweekly, and one-time service can be quoted based on the home and requested scope.',
    optionsIntro: 'Need something extra? Appliance interiors, empty cabinet interiors, and interior windows can be added to your visit and are quoted separately. You can book a standard clean without any of these extras.',
    options: [
      'Inside refrigerator and oven',
      'Inside cabinets (if emptied)',
      'Interior windows',
    ],
    pricing: 'Pricing is determined by the size of the home, the number of bedrooms and bathrooms, and the frequency of service. Homes that have not been professionally cleaned recently may need an initial deep clean before moving to recurring maintenance service.',
    pricingFactors: ['Square footage', 'Bed / Bath count', 'Condition & buildup', 'Cleaning frequency'],
    faqs: [
      cleaningVisitGuidance.preparation,
      cleaningVisitGuidance.boundaries,
      {
        q: 'Do I need to be home?',
        a: 'Let us know whether you plan to be home. If you will be out, agree on secure property access before the appointment.',
      },
      {
        q: 'Do you bring supplies?',
        a: 'We bring standard cleaning supplies and equipment for routine service. If your home has delicate surfaces, product preferences, or sensitivities, tell us before the visit.',
      },
      {
        q: 'What if I have pets?',
        a: 'Pets are welcome. Please secure any pet that is aggressive, highly anxious, or likely to interfere with cleaning so the visit can be completed safely.',
      },
    ],
  },
  deep: {
    priceLabel: 'From $275 per visit',
    quoteHref: `${withBase('/quote')}?service=deep`,
    eyebrow: 'Deep cleaning',
    title: 'Deep cleaning for buildup and overlooked areas.',
    intro: 'For spaces that need more than a maintenance clean—whether it’s buildup, a seasonal reset, or the first professional cleaning in a while.',
    image: withBase('/images/cleaner-refrigerator.webp'),
    imageAlt: 'Man wiping the inside of a refrigerator',
    imageFocalPoint: 'right',
    imageCaption: 'Refrigerator interiors are an optional add-on, quoted separately.',
    included: [
      'Everything included in standard home cleaning',
      'Extra attention to buildup on accessible surfaces',
      'Baseboards and accessible trim',
      'Detailed scrubbing of kitchen and bathroom surfaces',
      'Reachable doors, frames, and fixtures',
    ],
    who: 'For seasonal cleaning, preparation before visitors arrive, or a home with buildup that routine cleaning will not address. Tell us which rooms and surfaces need the most attention.',
    optionsIntro: 'A deep clean includes detailed work on accessible surfaces. Add these interior tasks to the quote if you need them:',
    options: [
      'Oven and refrigerator interior detailing',
      'Cabinet interiors',
      'Interior windows and sills',
    ],
    pricing: 'Your quote depends on property size, the amount of buildup, and the detail work you need. Appliance interiors, cabinet interiors, and interior windows are quoted separately.',
    pricingFactors: ['Square footage', 'Bed / Bath count', 'Condition & buildup', 'Requested detail work'],
    faqs: [
      {
        q: 'What’s the difference between standard and deep cleaning?',
        a: 'Routine cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, and trash. A deep clean adds more attention to buildup, accessible baseboards and trim, doors, frames, and fixtures. Appliance interiors, cabinet interiors, and interior windows are optional extras.',
      },
      {
        q: 'How long does a deep clean take?',
        a: 'The time needed depends on property size, buildup, and the agreed scope. Discuss an estimated duration when arranging your clean.',
      },
      {
        q: 'Do I need to supply the equipment?',
        a: 'We bring standard cleaning supplies and equipment. Let us know in advance about delicate surfaces or any products you want us to avoid or use.',
      },
    ],
  },
  moveOut: {
    priceLabel: 'From $350 per visit',
    quoteHref: `${withBase('/quote')}?service=move`,
    eyebrow: 'Move-in / move-out',
    title: 'Cleaning for an empty home and a fresh start.',
    intro: 'Detailed cleaning for empty properties, new tenants, listings, closings, and fresh starts.',
    image: withBase('/images/cleaner-move-out.webp'),
    imageAlt: 'Man vacuuming an empty waterfront condo',
    imageFocalPoint: 'left',
    included: [
      'Kitchen and bathroom detail cleaning',
      'Baseboards, doors, reachable trim, and floors',
      'Empty-room dusting and surface cleaning',
      'Removal of light dust and debris left from moving out',
    ],
    who: 'A good fit for renters preparing for a move-out inspection, homeowners getting a property ready for sale, or new occupants who want the space cleaned before moving in.',
    optionsIntro: 'Share any cleaning requirements for your handoff or inspection. These tasks can be added to the empty-property clean:',
    options: [
      'Inside refrigerator and oven',
      'Inside all kitchen and bathroom cabinets',
      'Interior windows',
    ],
    pricing: 'Your quote depends on the property’s size, layout, and condition. Tell us if you also need appliance interiors, cabinet interiors, or interior windows cleaned.',
    pricingFactors: ['Square footage', 'Property layout', 'Current condition', 'Appliance & cabinet extras'],
    faqs: [
      {
        q: 'Do properties need to be completely empty?',
        a: 'Yes, move-out cleaning is most efficient and thorough after all belongings, furniture, and trash have been removed. If substantial contents remain, let us know before quoting.',
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
    priceLabel: 'From $125 per turnover',
    pricingRows: [
      { property: 'Studio / 1 bedroom / 1 bathroom', price: '$125' },
      { property: '2 bedrooms / 2 bathrooms', price: '$150' },
      { property: '3 bedrooms / 2 bathrooms', price: '$175' },
      { property: '4 bedrooms / 3 bathrooms', price: '$225' },
      { property: 'Larger or other layouts', price: 'Custom quote' },
    ],
    quoteHref: `${withBase('/quote')}?service=vacation`,
    eyebrow: 'Vacation rental cleaning',
    title: 'Guest-ready turnovers without the guesswork.',
    intro: 'Cleaning between guest stays, planned around your checkout and check-in times. Tell us about the property, the turnover window, and any linen or restocking needs.',
    image: withBase('/images/cleaner-rental-turnover.webp'),
    imageAlt: 'Man wiping a kitchen counter while holding a clipboard in a coastal rental',
    imageFocalPoint: 'right',
    included: [
      'Full turnover clean of kitchens, bathrooms, bedrooms, and living areas',
      'Beds reset with provided clean linens',
      'Trash removal and room reset',
      'Completion photos on request',
      'Property-condition and maintenance notes',
    ],
    who: 'For hosts and property managers coordinating the gap between guest stays. Share your checkout and check-in times, access arrangements, linen storage, and the contact to notify about damage or missing supplies.',
    optionsIntro: 'Beds are reset with provided clean linens. Laundry and restocking need separate arrangements: confirm who supplies the items, where they are stored, and what the turnover price includes.',
    options: [
      'Linen and laundry coordination (by arrangement)',
      'Supply restocking (by arrangement)',
      'Deep cleaning during off-season',
    ],
    pricing: 'Your turnover quote depends on property size, condition, cleaning tasks, and any laundry or restocking arrangements. Tell us the time available between checkout and check-in.',
    pricingFactors: ['Property size', 'Turnover frequency', 'Linen service', 'Restocking requirements'],
    faqs: [
      {
        q: 'Can you handle linens and restocking for rentals?',
        a: 'Beds are reset with provided clean linens. Laundry and supply restocking are quoted separately by arrangement. We’ll confirm your laundry setup, storage locations, and replenishment preferences before service begins.',
      },
      {
        q: 'What happens if a guest leaves a mess or damage?',
        a: 'If we find an excessive mess, missing item, or possible damage, we’ll flag it and follow the reporting process agreed for the property. Any extra cleaning outside the normal turnover scope can be discussed before additional work is done.',
      },
      {
        q: 'Do you offer same-day turnovers?',
        a: 'Same-day turnovers between checkout and check-in are available by arrangement depending on schedule availability. We recommend booking turnover windows in advance.',
      },    ],
  },
  commercial: {
    priceLabel: 'Custom quote',
    quoteHref: `${withBase('/quote')}?service=commercial`,
    eyebrow: 'Commercial cleaning',
    title: 'Dependable cleaning for your workspace.',
    intro: 'Cleaning for offices, shared work areas, restrooms, and breakrooms. Tell us about your facility and preferred cleaning hours so we can discuss a suitable checklist and schedule.',
    image: withBase('/images/cleaner-office.webp'),
    imageAlt: 'Man wiping a desk in a bright professional office',
    imageFocalPoint: 'left',
    included: [
      'Dusting and wiping of desks, tables, and common surfaces',
      'Vacuuming and mopping suitable floor surfaces and break areas',
      'Trash removal; recycling arrangements discussed in advance',
      'Restroom cleaning; restocking by arrangement',
      'Wiping kitchen and breakroom surfaces',
    ],
    who: 'For offices, retail spaces, and other workspaces looking for scheduled cleaning. Share your facility type, busy areas, and access requirements when requesting a quote.',
    optionsIntro: 'Ask about scheduling and additional cleaning tasks. If you need restocking, confirm who provides the consumables before the first visit.',
    options: [
      'Recurring schedules by arrangement',
      'After-hours or weekend visits, subject to availability',
      'Deep cleaning for high-traffic areas',
    ],
    pricing: 'Commercial cleaning quotes are customized based on the size of your facility, the frequency of service, and any specific requirements your business has.',
    pricingFactors: ['Square footage', 'Facility type', 'Service frequency', 'Restrooms & common areas', 'Required scope'],
    faqs: [
      {
        q: 'Do you clean after hours?',
        a: 'After-hours or weekend cleaning can be discussed based on your building access, requested schedule, and availability.',
      },
      {
        q: 'Can we customize the cleaning checklist?',
        a: 'Yes, we work with you to develop a custom cleaning plan that addresses the specific needs of your workspace and team.',
      },
    ],
  },
};

export const homeContent = {
  metaTitleSuffix: 'House Cleaning in Brevard County',
  metaDescription: 'Residential house cleaning, deep cleaning, move-in/out service, vacation-rental turnovers, and commercial cleaning in Cocoa Beach and surrounding Brevard County.',
  hero: {
    imageSrc: withBase('/images/cleaner-counter.webp'),
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: 'Man wiping a kitchen counter in a bright coastal home',
    eyebrow: 'HOUSE CLEANING • DEEP CLEANING • VACATION RENTALS',
    location: 'Space Coast, FL • Cocoa • Cocoa Beach • Merritt Island',
    title: 'A clean home. More time for you.',
    description: 'Owner-operated cleaning for your home. Choose recurring visits, a one-time clean, or a deeper reset.',
    serviceArea: 'Serving Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, and Rockledge. Nearby locations by request.',
    ctaButton: 'Continue to quote request',
    quoteHref: withBase('/quote'),
    callPrefix: 'Call ',
  },
  trustStrip: {
    ariaLabel: 'Key service assurances',
    items: [
      'Local & owner-operated',
      'Quotes based on your property',
      'Room-by-room cleaning',
      'Direct communication',
    ],
  },
  servicesSection: {
    heading: 'Our cleaning services.',
    intro: 'Choose a one-time or recurring home clean, or explore cleaning for a move, rental turnover, or workspace.',
    linkText: 'See cleaning tasks',
    services: [
      {
        image: withBase('/images/cleaner-living-room.webp'),
        imageAlt: 'Man vacuuming a furnished coastal living room',
        title: 'Home Cleaning',
        priceLabel: servicesDetail.residential.priceLabel,
        href: withBase('/residential-cleaning'),
        text: 'One-time and recurring cleaning for kitchens, bathrooms, floors, and living areas.',
      },
      {
        image: withBase('/images/deep-cleaning-kitchen.jpg'),
        imageAlt: 'Cleaner detailing a refrigerator during a deep clean',
        title: 'Deep Cleaning',
        priceLabel: servicesDetail.deep.priceLabel,
        href: withBase('/deep-cleaning'),
        text: 'Detailed reset for buildup, overlooked areas, and seasonal resets.',
      },
      {
        image: withBase('/images/move-out-empty-room.jpg'),
        imageAlt: 'Freshly cleaned empty room ready for move-in or move-out',
        title: 'Move-In / Move-Out',
        priceLabel: servicesDetail.moveOut.priceLabel,
        href: withBase('/move-out-cleaning'),
        text: 'Empty-property cleaning for handoffs, closings, and fresh starts.',
      },
      {
        image: withBase('/images/turnover-active.jpg'),
        imageAlt: 'Cleaner resetting a bed during a vacation rental turnover',
        title: 'Vacation Rentals',
        priceLabel: servicesDetail.vacationRental.priceLabel,
        href: withBase('/vacation-rental-cleaning'),
        text: 'Turnover cleaning between guest stays with your timeline in mind.',
      },
      {
        image: withBase('/images/cleaner-office.webp'),
        imageAlt: 'Man wiping a desk in a bright professional office',
        title: 'Commercial Cleaning',
        priceLabel: servicesDetail.commercial.priceLabel,
        href: withBase('/commercial-cleaning'),
        text: 'Offices, workspaces, and commercial properties on a reliable schedule.',
      },
    ],
  },
  standardCleanSection: {
    heading: 'What’s included in a standard clean.',
    intro: 'Our standard home clean covers the areas below. We confirm your price and appointment before booking.',
    extrasHint: 'Need baseboard detailing or the inside of an appliance cleaned? Ask about a deep clean or optional extras.',
    areas: [
      { title: 'Kitchen', text: 'Counters, appliance exteriors, sinks, cabinet fronts, and floors.' },
      { title: 'Bathrooms', text: 'Toilets, showers, tubs, mirrors, counters, fixtures, and floors.' },
      { title: 'Bedrooms', text: 'Reachable surfaces, mirrors, floors, and a basic room reset.' },
      { title: 'Living areas', text: 'Reachable surfaces, furniture-area dusting, vacuuming, and mopping.' },
      { title: 'Floors & finishing', text: 'Vacuuming carpets, mopping hard floors, trash removal, and final room-by-room checks.' },
    ],
  },
  processSection: {
    eyebrow: 'How it works',
    heading: 'How to arrange your clean.',
    intro: 'A quote request starts the conversation. Your appointment is confirmed separately.',
    steps: [
      {
        title: 'Request a Quote',
        text: 'Tell us your location, the service you need, and your preferred dates.',
      },
      {
        title: 'Agree on the Details',
        text: 'We’ll follow up to discuss the cleaning tasks, price, access, and appointment time.',
      },
      {
        title: 'Enjoy Your Space',
        text: 'Walk into a clean home. Reach out if anything needs attention.',
      },
    ],
  },
  rentalSection: {
    imageSrc: withBase('/images/rental-bedroom.jpg'),
    imageWidth: 1000,
    imageHeight: 1000,
    imageAlt: 'Guest-ready bedroom prepared for the next vacation-rental stay',
    eyebrow: 'For hosts & property managers',
    heading: 'Cleaning between checkout and check-in.',
    description: 'Share your checkout and check-in times. We’ll discuss the cleaning checklist, clean linens, restocking, and any completion photos you need.',
    linkText: 'See turnover pricing & details',
    linkHref: withBase('/vacation-rental-cleaning'),
  },
  expectSection: {
    eyebrow: 'Your visit',
    heading: 'Supplies and access, sorted.',
    intro: 'We bring standard cleaning supplies and agree on property access before your appointment. See our FAQ for preparation advice, pets, and special requests.',
    items: [
      { title: 'Supplies', text: 'We bring standard cleaning supplies and equipment. Tell us about delicate surfaces or product preferences.' },
      { title: 'Property access', text: 'You can be home or out. We’ll agree on secure access before the appointment.' },
    ],
    aboutText: 'How we work',
    aboutHref: withBase('/about'),
    faqText: 'Read common questions',
    faqHref: withBase('/faq'),
  },
  contactBanner: {
    heading: 'Need a cleaner in Brevard County?',
    text: 'Request a quote for your property, or call to discuss the service and dates you need.',
    ctaButton: 'Get a Quote',
    quoteHref: withBase('/quote'),
    callPrefix: 'Call ',
  },
};

export const aboutContent = {
  metaTitle: 'About',
  metaDescription: 'Learn about Beachline Cleaners, an owner-operated cleaning service for homes, vacation rentals, and workspaces in Brevard County.',
  hero: {
    eyebrow: 'About',
    title: 'Local cleaning. A direct point of contact.',
    lede: 'Cleaning for homes, vacation rentals, and workspaces in Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, and Rockledge.',
  },
  story: {
    imageSrc: withBase('/images/after_clean.jpg'),
    imageAlt: 'A freshly cleaned home, bright and organized',
    eyebrow: 'How we work',
    heading: 'Talk with the person arranging your clean.',
    ownerTitle: 'Based in Brevard County',
    ownerIntro: 'Beachline Cleaners is an independent, owner-operated business. Call or text us to discuss your property and the cleaning you need.',
    paragraphs: [
      'We’ll ask about your property, the rooms that need attention, and any extras you want included. The cleaning plan, price, and timing are agreed before the visit.',
      'Tell us about pets, delicate surfaces, or product preferences when arranging your clean. If you’ll be out, we’ll agree on how to access the property before the appointment.',
    ],
    checks: [
      'Cleaning checklist agreed before the visit',
      'Appliance interiors and other extras quoted separately',
      'Standard cleaning supplies and equipment provided',
    ],
  },
};

export const faqContent = {
  metaTitle: 'FAQ',
  metaDescription: 'Answers to common questions about our quotes, supplies, recurring cleaning, and vacation rental turnovers.',
  hero: {
    eyebrow: 'FAQ',
    title: 'Common questions.',
    lede: 'The details people usually want to know before booking.',
  },
  faqs: [
    cleaningVisitGuidance.preparation,
    cleaningVisitGuidance.boundaries,
    {
      q: 'Does requesting a quote book an appointment?',
      a: 'No. We’ll follow up to discuss the cleaning tasks, price, and available dates. Your appointment is confirmed separately.',
    },
    {
      q: 'What should I tell you before the visit?',
      a: 'Tell us about your priorities, pets, delicate surfaces, and product preferences. If you’ll be out, arrange secure access before the appointment. For move-out cleaning, let us know if furniture or belongings will remain.',
    },
    {
      q: 'How is pricing determined?',
      a: `Home cleaning: ${servicesDetail.residential.priceLabel}. Deep cleaning: ${servicesDetail.deep.priceLabel}. Move-in/move-out: ${servicesDetail.moveOut.priceLabel}. Vacation rentals: ${servicesDetail.vacationRental.priceLabel}. Commercial work is quoted individually. ${pricingContent.note} Deep cleans and move cleans may require photos or additional details for an accurate quote.`,
      open: true,
    },
    {
      q: 'Do I need to be home?',
      a: 'No. If you will be out, we will agree on secure property access before the appointment. If you prefer to be home, that is completely fine too.',
    },
    {
      q: 'Do you bring supplies?',
      a: 'We bring standard cleaning supplies and equipment. If you have delicate surfaces or specific product preferences, let us know before the visit.',
    },
    {
      q: 'What if I have pets?',
      a: 'Pets are welcome. Please secure any pet that is aggressive, highly anxious, or likely to interfere with cleaning so the visit can be completed safely.',
    },
    {
      q: 'What’s the difference between standard and deep cleaning?',
      a: 'Routine cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, and trash. A deep clean adds attention to buildup, accessible baseboards and trim, doors, frames, and fixtures. Appliance interiors, cabinet interiors, and interior windows are optional extras.',
    },
    {
      q: 'Can I request a standard clean without add-ons?',
      a: 'Yes. Choose Home Cleaning and leave the optional extras unchecked. Standard cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, trash removal, and a basic room reset. We’ll confirm the price for your home and available dates before booking.',
    },
    {
      q: 'Can you handle linens/restocking for rentals?',
      a: 'Beds are reset with provided clean linens. Laundry and supply restocking are quoted separately by arrangement. We’ll confirm laundry access, storage locations, and the replenishment checklist before service begins.',
    },
    {
      q: 'How do I cancel or reschedule?',
      a: 'Call or text us as soon as you know your plans have changed. Any cancellation or lockout terms will be confirmed before you book.',
    },
  ],
};

export const serviceAreaContent = {
  metaTitle: 'Service Area',
  metaDescription: 'View our cleaning service area covering Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, and Rockledge.',
  hero: {
    eyebrow: 'Service area',
    title: 'Focused on the Space Coast.',
    lede: 'We serve Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, and Rockledge. Contact us about nearby addresses.',
  },
  areas: [
    'Cocoa',
    'Cocoa Beach',
    'Cape Canaveral',
    'Merritt Island',
    'Rockledge',
    'Nearby areas by request',
  ],
  coverageHeading: 'Cleaning for your property',
  coverageIntro: 'Request home, move-in/move-out, vacation-rental, or commercial cleaning in our listed service areas. Include your town or ZIP code and preferred dates so we can check availability.',
  services: [
    {
      title: 'Homes & moves',
      text: 'Tell us whether you need recurring home cleaning, a deep clean, or an empty-property clean before moving. Include your town or ZIP code and preferred date.',
      href: withBase('/residential-cleaning'),
      linkText: 'Explore home cleaning',
    },
    {
      title: 'Vacation rentals',
      text: 'Share the property location and the gap between checkout and check-in. Linen arrangements, building access, and restocking are agreed for each property.',
      href: withBase('/vacation-rental-cleaning'),
      linkText: 'Explore rental turnovers',
    },
    {
      title: 'Offices & workspaces',
      text: 'Include your facility type, approximate size, and preferred cleaning hours. We will discuss the scope and schedule before confirming a visit.',
      href: withBase('/commercial-cleaning'),
      linkText: 'Explore commercial cleaning',
    },
  ],
  cta: {
    title: 'Not sure if you\'re in range?',
    text: 'Call us with your property address or ZIP code and we’ll confirm availability.',
  },
};

export const quoteContent = {
  metaTitle: 'Get a Quote',
  metaDescription: 'Request a cleaning quote online or call to discuss your property and availability.',
  eyebrow: 'Request a quote',
  title: 'Tell us what you need cleaned.',
  lede: 'Tell us about your property and preferred dates. We’ll follow up by phone or email to discuss the cleaning tasks, price, and availability. Sending a request does not reserve an appointment.',
  trustPillsAriaLabel: 'Quote assurances',
  trustPills: [
    'Local & owner-operated',
    'Cleaning tasks agreed before service',
    'Direct communication',
  ],
  form: {
    formspreeEndpoint: 'https://formspree.io/f/xzzenlyg',
    privacyDisclosure: 'This form sends your contact and property details to Beachline Cleaners through Formspree to handle your quote request. Do not include door codes, payment details, or other sensitive information.',
    nameAttr: 'quote',
    actionAttr: withBase('/quote-success'),
    honeypotLabel: 'Don’t fill this out if you\'re human:',
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
      { value: 'commercial', label: 'Commercial Cleaning' },
      { value: 'deep', label: 'Deep Cleaning' },
      { value: 'move', label: 'Move-in / Move-out' },
      { value: 'vacation', label: 'Vacation Rental' },
      { value: 'other', label: 'Other' },
      ],
    },
    bedsBaths: {
      label: 'Bedrooms / Bathrooms (Optional)',
      placeholder: 'e.g. 3 bed, 2 bath',
    },
    size: {
      label: 'Approximate Size (sq ft) (Optional)',
      placeholder: 'e.g. 1800',
    },
    frequency: {
      label: 'Preferred Date / Cleaning Frequency (Optional)',
      placeholder: 'e.g. October 15, one-time or biweekly',
    },
    extras: [
      {
        id: 'home-extras',
        services: ['residential', 'deep', 'move'],
        label: 'Home, deep & move cleaning extras (optional)',
        hint: 'Just need the standard service? Leave these unchecked. Selected extras are quoted separately.',
        options: [
          { name: 'extra_oven', label: 'Inside oven' },
          { name: 'extra_fridge', label: 'Inside refrigerator' },
          { name: 'extra_cabinets', label: 'Inside cabinets (empty)' },
          { name: 'extra_windows', label: 'Interior windows' },
        ],
      },
      {
        id: 'rental-extras',
        services: ['vacation'],
        label: 'Vacation rental extras (optional)',
        hint: 'Beds are reset with provided clean linens. Laundry and supply restocking are quoted separately by arrangement.',
        options: [
          { name: 'extra_laundry', label: 'Laundry' },
          { name: 'extra_restocking', label: 'Supply restocking' },
        ],
      },
    ],
    notes: {
      label: 'Additional Notes (Optional)',
      placeholder: 'Priorities, buildup, or extras. For rentals, include checkout/check-in times and laundry or restocking needs. Please do not include door codes.',
    },
    submitButton: 'Send Quote Request',
    detailsToggle: 'Add cleaning priorities or rental details (optional)',
  },
  aside: {
    heading: 'Prefer to talk or text?',
    description: 'Call or text us about the property, service, and dates you have in mind.',
    callPrefix: 'Call ',
    textPrefix: 'Text ',
    textButton: `Text ${site.phoneDisplay}`,
    textHref: site.smsHref,
    detailsHeading: 'A few details to have ready',
    detailsList: [
      'Your address or ZIP code',
      'Property size and number of beds/baths',
      'Service type and priorities',
      'Preferred dates or frequency',
    ],
  },
};

export const quoteSuccessContent = {
  metaTitle: 'Quote Request Received',
  metaDescription: 'Your cleaning quote request has been received. We will follow up by phone or email to discuss the details.',
  eyebrow: 'Request received',
  title: 'We\u2019ve got your details.',
  lede: 'We’ll review your request and follow up by phone or email to discuss the cleaning tasks, price, and availability. Your appointment is not booked yet. Call or text us if you need to add or change any details.',
  returnButtonText: 'Return Home',
  returnButtonHref: withBase('/'),
};


