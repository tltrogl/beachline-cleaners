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
  quoteButton: 'Get a Quote',
  quoteHref: withBase('/quote'),
};

export const footerContent = {
  summary: 'Local cleaning for homes, moves, vacation rentals, and workspaces across the Space Coast.',
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
  defaultTitle: 'Need a cleaner?',
  defaultText: 'Tell us what you need cleaned and when you need it. We’ll work through the details with you and confirm the price before anything is booked.',
  quoteButtonText: 'Get a Quote',
  quoteHref: withBase('/quote'),
  callButtonPrefix: 'Call ',
};

export const servicePageDefaults = {
  defaultImageAlt: 'Cleaning service',
  quoteButtonText: 'Get a Quote',
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
  note: 'Starting prices give you a ballpark. We’ll confirm the actual price before you book based on the property, its condition, cleaning frequency, and any extras you want.',
  rentalHeading: 'Turnover starting prices',
  propertyColumn: 'Property size',
  priceColumn: 'Per turnover, from',
  rentalIncluded: 'Includes turnover cleaning and beds reset with provided clean linens. Laundry and supply restocking are quoted separately.',
};



export const cleaningVisitGuidance: Record<'preparation' | 'boundaries', { q: string; a: string; open?: boolean }> = {
  preparation: {
    q: 'What should I do before you arrive?',
    a: 'You don’t need to clean first. Pick up loose items, clothing, and toys, and clear dishes from the sink so we can reach the surfaces and floors. Tell us about pets, delicate surfaces, or product preferences. We’ll arrange access ahead of time. If cabinet interiors are included in your clean, empty them before we arrive.',
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
    eyebrow: 'Home cleaning',
    title: 'Home cleaning that keeps the week from getting away from you.',
    intro: 'We handle the routine cleaning—kitchens, bathrooms, floors, dusting, and living areas—whether you need a one-time clean or regular weekly or biweekly service.',
    image: withBase('/images/cleaner-living-room.webp'),
    imageAlt: 'Man vacuuming a furnished coastal living room',
    imageFocalPoint: 'left',
    includedHeading: 'What’s included in a standard clean',
    includedIntro: 'This is the core home-cleaning checklist. If you need something beyond it, we can add that to the quote—no extras are required.',
    included: [
      'Kitchen counters, sink, cabinet fronts, appliance exteriors, and floors',
      'Bathroom toilets, showers, tubs, sinks, mirrors, counters, fixtures, and floors',
      'Dusting reachable surfaces and cleaning mirrors in bedrooms and living areas',
      'Vacuuming and mopping appropriate floor surfaces',
      'Trash removal and basic room reset',
    ],
    who: 'Book a one-time clean to catch up, or choose weekly or biweekly visits for routine upkeep.',
    optionsIntro: 'Need a little more done? Appliance interiors, empty cabinet interiors, and interior windows can be added to your quote. If you only need the standard clean, leave the extras off.',
    options: [
      'Inside refrigerator and oven',
      'Inside cabinets (if emptied)',
      'Interior windows',
    ],
    pricing: 'We base the quote on the size of the home, bedrooms and bathrooms, current condition, and how often you want service. If there’s heavier buildup, we may recommend starting with a deep clean before moving to regular maintenance.',
    pricingFactors: ['Square footage', 'Bedrooms & bathrooms', 'Condition & buildup', 'Cleaning frequency'],
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
    priceLabel: 'From $275 per visit',
    quoteHref: `${withBase('/quote')}?service=deep`,
    eyebrow: 'Deep cleaning',
    title: 'When a regular clean isn’t enough.',
    intro: 'A more detailed clean for buildup and the areas routine cleaning doesn’t spend as much time on, including baseboards, trim, fixtures, and other reachable detail work.',
    image: withBase('/images/cleaner-refrigerator.webp'),
    imageAlt: 'Man wiping the inside of a refrigerator',
    imageFocalPoint: 'right',
    imageCaption: 'Refrigerator interiors are an optional add-on, quoted separately.',
    included: [
      'Everything included in standard home cleaning',
      'Extra attention to buildup on accessible surfaces',
      'Baseboards, reachable trim, doors, frames, and fixtures',
      'Ceiling fans, reachable light fixtures, vent covers, switches, and door handles',
      'Window sills and tracks, plus dusting of blinds',
      'Detailed scrubbing of kitchen and bathroom surfaces, including grout where accessible',
    ],
    who: 'A good fit when the house has fallen behind, hasn’t had a thorough cleaning in a while, or needs extra attention before guests arrive. Tell us where the trouble spots are and we’ll quote the work accordingly.',
    optionsIntro: 'The deep clean covers more detail on accessible surfaces. If you also want these interior tasks handled, add them to the quote:',
    options: [
      'Oven and refrigerator interior detailing',
      'Cabinet interiors',
      'Interior window glass',
    ],
    pricing: 'Your quote depends on property size, current condition, and the amount of detail work required. Appliance interiors, cabinet interiors, and interior window glass are optional and quoted separately.',
    pricingFactors: ['Square footage', 'Bedrooms & bathrooms', 'Condition & buildup', 'Requested detail work'],
    faqs: [
      {
        q: 'What’s the difference between standard and deep cleaning?',
        a: 'Standard cleaning covers routine surfaces, kitchens, bathrooms, floors, and trash. Deep cleaning includes that work plus buildup and detailed areas. Appliance interiors, cabinet interiors, and interior window glass are quoted separately.',
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
    priceLabel: 'From $350 per visit',
    quoteHref: `${withBase('/quote')}?service=move`,
    eyebrow: 'Move-in / move-out',
    title: 'Leave the empty place clean—or start in one.',
    intro: 'Detailed cleaning for empty homes before a move-in, move-out inspection, listing, closing, or handoff.',
    image: withBase('/images/cleaner-move-out.webp'),
    imageAlt: 'Man vacuuming an empty waterfront condo',
    imageFocalPoint: 'left',
    included: [
      'Everything included in a deep clean, throughout the empty property',
      'Kitchen and bathroom detail cleaning',
      'Inside empty kitchen and bathroom cabinets and drawers',
      'Baseboards, doors, reachable trim, fixtures, window sills and tracks, and floors',
      'Empty-room dusting and surface cleaning',
      'Removal of light dust and debris left from moving out',
    ],
    who: 'For renters getting ready for an inspection, owners preparing a property for sale or handoff, and anyone who would rather move into a home that has already been cleaned.',
    optionsIntro: 'Empty cabinet and drawer interiors are included. Add appliance interiors or interior window glass if your handoff requires them.',
    options: [
      'Inside refrigerator and oven',
      'Interior window glass',
    ],
    pricing: 'Your quote depends on the property’s size, layout, and condition. Empty cabinet and drawer interiors are included. Tell us if you also need appliance interiors or interior window glass cleaned.',
    pricingFactors: ['Square footage', 'Property layout', 'Current condition', 'Appliance & window extras'],
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
    title: 'Turnovers that fit the gap between guests.',
    intro: 'We clean and reset vacation rentals between stays, working around your checkout and check-in window and whatever linen, restocking, access, or photo routine the property needs.',
    image: withBase('/images/cleaner-rental-turnover.webp'),
    imageAlt: 'Man wiping a kitchen counter while holding a clipboard in a coastal rental',
    imageFocalPoint: 'right',
    included: [
      'Full turnover clean of kitchens, bathrooms, bedrooms, and living areas',
      'Beds reset with provided clean linens',
      'Trash removal and room reset',
      'Completion photos after each turnover',
      'Notes on visible property-condition or maintenance concerns',
    ],
    who: 'Share your property routine before the first turnover so you don’t have to explain it again for each stay.',
    optionsIntro: 'Need laundry, restocking, or an off-season deep clean? We’ll confirm the arrangements and price separately.',
    options: [
      'Linen and laundry coordination (by arrangement)',
      'Supply restocking (by arrangement)',
      'Deep cleaning during off-season',
    ],
    pricing: 'Turnover pricing depends on the property size, condition, cleaning checklist, and any laundry or restocking arrangements. The checkout-to-check-in window matters too, so include it when you request a quote.',
    pricingFactors: ['Property size', 'Turnover frequency', 'Checkout-to-check-in window', 'Laundry / linen needs', 'Restocking needs'],
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
    priceLabel: 'Custom quote',
    quoteHref: `${withBase('/quote')}?service=commercial`,
    eyebrow: 'Commercial cleaning',
    title: 'Keep the workspace clean without adding another thing to manage.',
    intro: 'Routine cleaning for small offices, professional suites, retail spaces, and shared work areas. We build the checklist around your space, access requirements, and the schedule that works for the business.',
    image: withBase('/images/cleaner-office.webp'),
    imageAlt: 'Man wiping a desk in a bright professional office',
    imageFocalPoint: 'left',
    includedHeading: 'What routine commercial cleaning can include',
    includedIntro: 'Choose the tasks your space needs from the routine checklist below.',
    included: [
      'Dusting and wiping reachable surfaces in offices, reception areas, conference rooms, and shared spaces',
      'Restroom cleaning, including toilets, sinks, counters, mirrors, fixtures, and floors',
      'Breakroom and kitchenette counters, sinks, tables, appliance exteriors, and floors',
      'Vacuuming carpets and mopping suitable hard-floor surfaces',
      'Trash removal, with recycling handled according to the arrangement for the property',
      'Wiping frequently touched surfaces such as door handles and light switches',
    ],
    who: 'Start with the areas that need attention most, then choose a cleaning schedule that fits your working day.',
    optionsIntro: 'Need more than routine upkeep? Tell us which of these options would help.',
    options: [
      'Recurring weekly, biweekly, or custom schedules by arrangement',
      'After-hours or weekend visits, subject to availability',
      'Detail cleaning for baseboards, trim, fixtures, and buildup',
      'Interior entry-door and other accessible interior glass',
      'Restocking restroom and breakroom supplies by arrangement',
    ],
    pricing: 'Commercial quotes are based on the size and type of space, cleaning frequency, number of restrooms and shared areas, requested cleaning hours, and the final checklist. We confirm the scope and price before the first visit.',
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
  metaDescription: 'House cleaning, deep cleaning, move-in/out service, vacation-rental turnovers, and commercial cleaning in Cocoa Beach and surrounding Brevard County.',
  hero: {
    imageSrc: withBase('/images/cleaner-counter.webp'),
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: 'Man wiping a kitchen counter in a bright coastal home',
    eyebrow: 'LOCAL CLEANING • BREVARD COUNTY',
    location: 'Space Coast, FL • Cocoa • Cocoa Beach • Merritt Island',
    title: 'A clean home without giving up your day.',
    description: 'Local, owner-operated cleaning across the Space Coast for homes, moves, vacation rentals, and small workspaces. Tell us what needs cleaning and we’ll give you a clear quote before you book.',
    serviceArea: 'Serving Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, Rockledge, Melbourne, Palm Bay, Viera, and Titusville, with nearby locations by request.',
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
    eyebrow: 'Cleaning services',
    featuredLabel: 'For your home',
    heading: 'Choose the cleaning you need.',
    intro: 'Regular home cleaning, deeper resets, move cleans, rental turnovers, and small commercial spaces—start with the service that best matches the job.',
    linkText: 'See cleaning tasks',
    services: [
      {
        image: servicesDetail.residential.image,
        imageAlt: servicesDetail.residential.imageAlt,
        title: 'Home Cleaning',
        priceLabel: servicesDetail.residential.priceLabel,
        href: withBase('/residential-cleaning'),
        text: 'Routine cleaning for kitchens, bathrooms, floors, dusting, and living areas—one time or on a regular schedule.',
      },
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
  standardCleanSection: {
    heading: 'What’s included in a standard clean.',
    intro: 'This is the core checklist for a standard home clean. We’ll confirm the price, scope, and appointment before anything is booked.',
    extrasHint: 'Need baseboard detailing or the inside of an appliance cleaned? Ask about a deep clean or optional extras.',
    areas: [
      { title: 'Kitchen', text: 'Counters, sink, cabinet fronts, appliance exteriors, and floors.' },
      { title: 'Bathrooms', text: 'Toilets, showers, tubs, mirrors, counters, fixtures, and floors.' },
      { title: 'Bedrooms', text: 'Reachable surfaces and mirrors, floor cleaning, and a basic room reset.' },
      { title: 'Living areas', text: 'Reachable surfaces and mirrors, plus vacuuming or mopping as appropriate.' },
      { title: 'Floors & finishing', text: 'Vacuuming and mopping appropriate floor surfaces, plus trash removal.' },
    ],
  },
  processSection: {
    eyebrow: 'How it works',
    heading: 'Getting a clean on the calendar is simple.',
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
        text: 'We handle the cleaning we agreed on. If something needs attention afterward, call or text us and let us know.',
      },
    ],
  },
  rentalSection: {
    imageSrc: withBase('/images/rental-bedroom.jpg'),
    imageWidth: 1000,
    imageHeight: 1000,
    imageAlt: 'Guest-ready bedroom prepared for the next vacation-rental stay',
    eyebrow: 'For hosts & property managers',
    heading: 'Keep the turnover moving between guests.',
    description: 'Send the checkout and check-in times along with the property routine. We’ll work out the cleaning checklist, linens, restocking, and access, then provide completion photos after each turnover.',
    linkText: 'See turnover pricing & details',
    linkHref: withBase('/vacation-rental-cleaning'),
  },
  expectSection: {
    eyebrow: 'Your visit',
    heading: 'A little preparation. An easier cleaning day.',
    intro: 'Have pets or questions about getting ready? The FAQ covers what to do before we arrive.',
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
    eyebrow: 'Need a cleaner?',
    heading: 'Ready to get the cleaning off your list?',
    text: 'Send a quote request, or call or text us about the property and the dates you have in mind.',
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
    title: 'A local cleaning business you can reach directly.',
    lede: 'Beachline Cleaners is owner-operated and based in Brevard County, serving homes, vacation rentals, move-in/move-out properties, and workspaces across the Space Coast.',
  },
  story: {
    imageSrc: withBase('/images/after_clean.jpg'),
    imageAlt: 'A freshly cleaned home, bright and organized',
    eyebrow: 'How we work',
    heading: 'Simple communication, start to finish.',
    ownerTitle: 'Based in Brevard County',
    ownerIntro: 'Beachline Cleaners is independently owned and operated in Brevard County. When you call or text, you’re talking directly with the person running the business about the property, what needs cleaning, and the schedule.',
    paragraphs: [
      'Tell us what needs attention and any extras you want included. We’ll agree on the checklist, price, access, and timing before the visit, so you know exactly what was booked.',
      'Have pets, delicate surfaces, or a product preference? Tell us when we set up the clean. If you’ll be out, we’ll work out secure access ahead of time.',
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
    title: 'Questions before you book?',
    lede: 'Here are the things people usually want to know about pricing, supplies, access, scheduling, and what’s included.',
  },
  faqs: [
    cleaningVisitGuidance.preparation,
    cleaningVisitGuidance.boundaries,
    {
      q: 'Does requesting a quote book an appointment?',
      a: 'No. Sending the form starts the conversation. We’ll follow up about the cleaning, price, and available dates, and confirm the appointment separately.',
    },
    {
      q: 'What should I tell you before the visit?',
      a: 'Tell us about your priorities, pets, delicate surfaces, and product preferences. If you’ll be out, arrange secure access before the appointment. For move-out cleaning, let us know if furniture or belongings will remain.',
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
      priceNote: `${pricingContent.note} Deep cleans and move cleans may require photos or additional details for an accurate quote.`,
      a: `Home cleaning: ${servicesDetail.residential.priceLabel}. Deep cleaning: ${servicesDetail.deep.priceLabel}. Move-in/move-out: ${servicesDetail.moveOut.priceLabel}. Vacation rentals: ${servicesDetail.vacationRental.priceLabel}. Commercial work is quoted individually. ${pricingContent.note} Deep cleans and move cleans may require photos or additional details for an accurate quote.`,
      open: true,
    },
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
      q: 'What’s the difference between standard and deep cleaning?',
      a: 'Standard cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, and trash. A deep clean adds attention to buildup and detail work, including baseboards, reachable trim, fans, and window tracks. Appliance interiors, cabinet interiors, and interior window glass are quoted separately with either service.',
    },
    {
      q: 'Can I request a standard clean without add-ons?',
      a: 'Yes. Choose Home Cleaning and leave the optional extras unchecked. Standard cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, trash removal, and a basic room reset. We’ll confirm the price for your home and available dates before booking.',
    },
    {
      q: 'Can you handle linens and restocking for rentals?',
      a: 'Have clean linens ready for each turnover. Laundry and supply restocking are quoted separately by arrangement. We’ll confirm where supplies are stored, what needs restocking, and any laundry arrangements before service starts.',
    },
    {
      q: 'What if something needs attention after the cleaning?',
      a: 'Call or text us and tell us what needs attention. We’ll review it with you against the agreed checklist and discuss the next step.',
    },
    {
      q: 'How do I cancel or reschedule?',
      a: 'Call or text us as soon as you know your plans have changed. Any cancellation or lockout terms will be confirmed before you book.',
    },
  ],
};

export const serviceAreaContent = {
  metaTitle: 'Service Area',
  metaDescription: 'View our cleaning service area covering Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, Rockledge, Melbourne, Palm Bay, Viera, and Titusville.',
  hero: {
    eyebrow: 'Service area',
    title: 'Local cleaning across the Space Coast.',
    lede: 'We serve Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, Rockledge, Melbourne, Palm Bay, Viera, and Titusville. If you’re nearby, send your ZIP code and we’ll tell you if you’re in range.',
  },
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
    'Nearby areas by request',
  ],
  coverageHeading: 'Cleaning for homes, rentals, moves, and workspaces',
  coverageIntro: 'We clean homes, vacation rentals, move-in/move-out properties, and workspaces across the area below. Send your town or ZIP code with your preferred dates and we’ll check availability.',
  services: [
    {
      title: 'Homes & moves',
      text: 'Choose recurring home cleaning, a deep clean, or an empty-property move clean. Include your town or ZIP code and preferred date when you request a quote.',
      href: withBase('/residential-cleaning'),
      linkText: 'Explore home cleaning',
    },
    {
      title: 'Vacation rentals',
      text: 'Share the property location, checkout and check-in times, access details, and any linen or restocking needs.',
      href: withBase('/vacation-rental-cleaning'),
      linkText: 'Explore rental turnovers',
    },
    {
      title: 'Offices & workspaces',
      text: 'Tell us your facility type, approximate size, and preferred cleaning hours. We’ll confirm the checklist and schedule before the first visit.',
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
  metaDescription: 'Request a cleaning quote for homes, move-in/move-out service, vacation rentals, or commercial spaces in Brevard County.',
  eyebrow: 'Request a quote',
  title: 'Get a cleaning quote.',
  lede: 'Tell us what needs cleaning and your preferred dates. We’ll follow up by phone or email to discuss the details. We’ll confirm the price and available dates with you before booking.',
  trustPillsAriaLabel: 'Quote assurances',
  trustPills: [
    'Local & owner-operated',
    'Clear scope and price before booking',
    'Call or text us directly',
  ],
  form: {
    formspreeEndpoint: 'https://formspree.io/f/xzzenlyg',
    emailSubject: 'New Beachline Cleaners Quote Request',
    submittingButton: 'Sending...',
    submittingStatus: 'Sending your quote request...',
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
    serviceFields: [
      { id: 'home-details', services: ['residential', 'deep', 'move', 'vacation'], legend: 'Home or rental details (optional)', fields: [
        { name: 'beds_baths', label: 'Bedrooms / Bathrooms', placeholder: 'e.g. 3 bed, 2 bath' },
      ] },
      { id: 'deep-details', services: ['deep'], legend: 'Deep-clean details (optional)', fields: [
        { name: 'cleaning_condition', label: 'Areas that need extra attention', placeholder: 'e.g. bathroom buildup, baseboards, kitchen grease' },
      ] },
      { id: 'move-details', services: ['move'], legend: 'Move details (optional)', fields: [
        { name: 'move_readiness', label: 'When will the property be empty?', placeholder: 'e.g. empty now, or movers leave October 15' },
        { name: 'handoff_date', label: 'Inspection or handoff deadline', placeholder: 'e.g. October 17, before noon' },
      ] },
      { id: 'rental-details', services: ['vacation'], legend: 'Turnover timing (optional)', fields: [
        { name: 'checkout_time', label: 'Guest checkout', placeholder: 'Date and time' },
        { name: 'checkin_time', label: 'Next guest check-in', placeholder: 'Date and time' },
      ] },
      { id: 'commercial-details', services: ['commercial'], legend: 'Workspace details (optional)', fields: [
        { name: 'workspace_type', label: 'Type of workspace', placeholder: 'e.g. office, shop, professional suite' },
        { name: 'restrooms_shared_areas', label: 'Restrooms and shared areas', placeholder: 'e.g. 2 restrooms, breakroom, reception' },
        { name: 'cleaning_hours_access', label: 'Cleaning hours and access requirements', placeholder: 'e.g. after 6 pm, front-desk check-in; no access codes' },
        { name: 'commercial_priorities', label: 'Cleaning priorities or checklist', placeholder: 'e.g. floors, restrooms, desks; any areas to leave alone' },
      ] },
    ],
    extras: [
      {
        id: 'home-extras',
        services: ['residential', 'deep', 'move'],
        label: 'Optional extras for home, deep & move cleaning',
        hint: 'Just need the standard service? Leave these unchecked. Selected extras are quoted separately.',
        options: [
          { name: 'extra_oven', label: 'Inside oven' },
          { name: 'extra_fridge', label: 'Inside refrigerator' },
          { name: 'extra_cabinets', label: 'Inside cabinets (empty; included with move cleaning)', services: ['residential', 'deep'] },
          { name: 'extra_windows', label: 'Interior windows' },
        ],
      },
      {
        id: 'rental-extras',
        services: ['vacation'],
        label: 'Optional vacation-rental extras',
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
    detailsToggle: 'Add more details (optional)',
  },
  aside: {
    heading: 'Prefer to call or text?',
    description: 'Need cleaning by a specific date? Call or text us to discuss availability before making plans.',
    callPrefix: 'Call ',
    textPrefix: 'Text ',
    textButton: `Text ${site.phoneDisplay}`,
    textHref: site.smsHref,
    detailsHeading: 'A few details to have ready',
    detailsList: [
      'Your address or ZIP code',
      'Property size and layout',
      'Service type and priorities',
      'Preferred dates or frequency',
    ],
  },
};

export const quoteSuccessContent = {
  metaTitle: 'Quote Request Received',
  metaDescription: 'Your cleaning quote request has been received. We will follow up by phone or email to discuss the details.',
  eyebrow: 'Request received',
  title: 'Got it—we have your request.',
  lede: 'We’ll review the details and follow up by phone or email to confirm the cleaning, price, and availability. Your appointment isn’t booked yet. If you forgot something or need to make a change, just call or text us.',
  returnButtonText: 'Return Home',
  returnButtonHref: withBase('/'),
  callPrefix: 'Call ',
};


