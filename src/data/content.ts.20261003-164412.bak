export interface ServiceDetail {
  metaTitle: string;
  metaDescription: string;
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
  rentalIncluded: 'Includes turnover cleaning and beds reset with provided clean linens. Laundry is $25 per load; owner-provided supply restocking is $25 per turnover.',
};



export const cleaningVisitGuidance: Record<'preparation' | 'boundaries', { q: string; a: string; open?: boolean }> = {
  preparation: {
    q: 'What should I do before you arrive?',
    a: 'You don’t need to clean first. Pick up loose items, clothing, and toys, and clear dishes from the sink so we can reach the surfaces and floors. Tell us about pets, delicate surfaces, or product preferences. We’ll arrange access ahead of time. If cabinet interiors are included in your clean, empty them before we arrive.',
  },
  boundaries: {
    q: 'What isn’t included in a standard home clean?',
    a: 'Standard cleaning covers reachable surfaces. Baseboard and trim detailing are part of a deep clean. Appliance interiors, empty cabinet interiors, and interior windows are optional add-ons with prices listed on the service pages. Moving heavy furniture or appliances, organizing clutter, washing dishes, and laundry are outside the standard home-cleaning checklist.',
  },
};

export const servicesDetail: Record<'residential' | 'deep' | 'moveOut' | 'vacationRental' | 'commercial', ServiceDetail> = {
  residential: {
    metaTitle: 'House Cleaning in Brevard County',
    metaDescription: 'One-time, weekly, and biweekly house cleaning in Brevard County. Kitchens, bathrooms, floors, dusting, and living areas, with scope and price confirmed before booking.',
    priceLabel: 'From $125 per visit',
    quoteHref: `${withBase('/quote')}?service=residential`,
    eyebrow: 'Home cleaning',
    title: 'Home Cleaning',
    intro: 'Routine cleaning for kitchens, bathrooms, floors, dusting, and living areas, available one time, weekly, or biweekly.',
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
    optionsIntro: 'Add these only if you need them. The standard clean does not require any add-ons.',
    options: [
      'Inside oven — +$45',
      'Inside refrigerator — +$55',
      'Inside cabinets (empty) — from +$60',
      'Interior windows — +$10 each',
    ],
    pricing: 'Price depends on home size, bedrooms and bathrooms, current condition, and cleaning frequency.',
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
    metaTitle: 'Deep Cleaning in Brevard County',
    metaDescription: 'Deep cleaning for homes in Brevard County, including baseboards, trim, fixtures, and reachable detail work. Tell us what needs attention for a clear quote.',
    priceLabel: 'From $275 per visit',
    quoteHref: `${withBase('/quote')}?service=deep`,
    eyebrow: 'Deep cleaning',
    title: 'Deep Cleaning',
    intro: 'Detailed cleaning for buildup, baseboards, trim, fixtures, window tracks, and other reachable detail work.',
    image: withBase('/images/cleaner-refrigerator.webp'),
    imageAlt: 'Man wiping the inside of a refrigerator',
    imageFocalPoint: 'right',
    imageCaption: 'Refrigerator interior cleaning is available as a $55 add-on.',
    included: [
      'Kitchen and bathroom cleaning, including detailed scrubbing and accessible grout',
      'Reachable dusting, mirrors, floors, trash removal, and a basic room reset',
      'Extra attention to buildup on accessible surfaces',
      'Baseboards, reachable trim, doors, frames, and fixtures',
      'Ceiling fans, reachable light fixtures, vent covers, switches, and door handles',
      'Window sills and tracks, plus dusting of blinds',
    ],
    who: 'A good fit when the house has fallen behind, hasn’t had a thorough cleaning in a while, or needs extra attention before guests arrive. Tell us where the trouble spots are and we’ll quote the work accordingly.',
    optionsIntro: 'Deep cleaning already covers the detailed surface work above. Add these interior tasks only if you need them.',
    options: [
      'Inside oven — +$45',
      'Inside refrigerator — +$55',
      'Cabinet interiors (empty) — from +$60',
      'Interior window glass — +$10 each',
    ],
    pricing: 'Price depends on property size, current condition, and the amount of detail work required.',
    pricingFactors: ['Square footage', 'Bedrooms & bathrooms', 'Condition & buildup', 'Requested detail work'],
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
    priceLabel: 'From $350 per visit',
    quoteHref: `${withBase('/quote')}?service=move`,
    eyebrow: 'Move-in / move-out',
    title: 'Move-In / Move-Out Cleaning',
    intro: 'Detailed cleaning for empty homes before a move-in, move-out inspection, listing, closing, or handoff.',
    image: withBase('/images/cleaner-move-out.webp'),
    imageAlt: 'Man vacuuming an empty waterfront condo',
    imageFocalPoint: 'left',
    included: [
      'Kitchen and bathroom detail cleaning',
      'Inside empty kitchen and bathroom cabinets and drawers',
      'Baseboards, doors, reachable trim, fixtures, window sills and tracks',
      'Dusting and floor cleaning throughout empty rooms',
      'Cleaning of light dust and small debris remaining after the move',
    ],
    who: 'For renters getting ready for an inspection, owners preparing a property for sale or handoff, and anyone who would rather move into a home that has already been cleaned.',
    optionsIntro: 'Empty cabinet and drawer interiors are already included. Add these only if your handoff requires them.',
    options: [
      'Inside oven — +$45',
      'Inside refrigerator — +$55',
      'Interior window glass — +$10 each',
    ],
    pricing: 'Price depends on property size, layout, and current condition.',
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
    metaTitle: 'Vacation Rental Cleaning in Brevard County',
    metaDescription: 'Vacation rental turnovers in Brevard County around checkout and check-in windows. Cleaning, reset, and beds with provided clean linens; laundry by arrangement.',
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
    title: 'Vacation Rental Cleaning',
    intro: 'Between-stay cleaning and resets built around your checkout and check-in window.',
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
    optionsIntro: 'Add turnover support when the property needs it. Laundry uses on-site machines; restocking pricing assumes owner-provided supplies are already at the property.',
    options: [
      'Laundry — +$25 per load',
      'Owner-provided supply restocking — +$25 per turnover',
      'Off-season deep clean — from $275',
    ],
    pricing: 'Turnover price depends on property size, condition, checkout-to-check-in timing, and any laundry or restocking arrangements.',
    pricingFactors: ['Property size', 'Turnover frequency', 'Checkout-to-check-in window', 'Laundry / linen needs', 'Restocking needs'],
    faqs: [
      {
        q: 'Can you handle linens and restocking for rentals?',
        a: 'Beds are reset with provided clean linens. Laundry is $25 per load when on-site machines are available. Restocking owner-provided supplies is $25 per turnover. We’ll confirm the setup and storage locations before service begins.',
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
    priceLabel: 'Custom quote',
    quoteHref: `${withBase('/quote')}?service=commercial`,
    eyebrow: 'Commercial cleaning',
    title: 'Commercial Cleaning',
    intro: 'Routine cleaning for small offices, professional suites, retail spaces, and shared work areas.',
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
    location: 'Space Coast, FL • Cocoa • Cocoa Beach • Merritt Island',
    title: 'A clean home. More time for you.',
    description: 'Owner-operated cleaning for your home. Choose recurring visits, a one-time clean, or a deeper reset.',
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
    eyebrow: 'What we do',
    linkText: 'See service details',
    services: [
      {
        image: servicesDetail.residential.image,
        imageAlt: servicesDetail.residential.imageAlt,
        title: 'Home Cleaning',
        label: 'Regular upkeep',
        priceLabel: servicesDetail.residential.priceLabel,
        href: withBase('/residential-cleaning'),
        text: 'Routine cleaning for kitchens, bathrooms, floors, dusting, and living areas—one time or on a regular schedule.',
      },
      {
        image: withBase('/images/deep-cleaning-kitchen.jpg'),
        imageAlt: 'Gloved hand wiping a kitchen stovetop during a deep clean',
        title: 'Deep Cleaning',
        label: 'Catch-up clean',
        priceLabel: servicesDetail.deep.priceLabel,
        href: withBase('/deep-cleaning'),
        text: 'A more detailed clean for buildup, baseboards, trim, fans, window tracks, fixtures, and other reachable detail work.',
      },
      {
        image: withBase('/images/move-out-empty-room.jpg'),
        imageAlt: 'Freshly cleaned empty room ready for move-in or move-out',
        title: 'Move-In / Move-Out',
        label: 'Moving',
        priceLabel: servicesDetail.moveOut.priceLabel,
        href: withBase('/move-out-cleaning'),
        text: 'Detailed empty-home cleaning for a move, inspection, handoff, listing, or closing—including empty cabinet and drawer interiors.',
      },
      {
        image: withBase('/images/turnover-active.jpg'),
        imageAlt: 'Cleaner resetting a bed during a vacation rental turnover',
        title: 'Vacation Rentals',
        label: 'Guest turnovers',
        priceLabel: servicesDetail.vacationRental.priceLabel,
        href: withBase('/vacation-rental-cleaning'),
        text: 'Cleaning, reset, completion photos, and condition notes between guest stays, built around checkout and check-in times.',
      },
      {
        image: servicesDetail.commercial.image,
        imageAlt: servicesDetail.commercial.imageAlt,
        title: 'Commercial Cleaning',
        label: 'Workspaces',
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
    eyebrow: 'Before we arrive',
    heading: 'Supplies and access, sorted ahead of time.',
    intro: 'We bring the standard supplies and work out property access before the appointment.',
    items: [
      { title: 'Supplies included', text: 'Tell us about delicate surfaces or product preferences.' },
      { title: 'Access arranged', text: 'You can be home or out; we’ll agree on access beforehand.' },
    ],
    aboutText: 'How we work',
    aboutHref: withBase('/about'),
    faqText: 'Getting ready for your clean',
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
  metaTitle: 'About Our Cleaning Service',
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
      a: 'Standard cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, and trash. A deep clean adds attention to buildup and detail work, including baseboards, reachable trim, fans, and window tracks. Appliance interiors, empty cabinet interiors, and interior window glass are optional add-ons with prices listed on the service pages.',
    },
    {
      q: 'Can I request a standard clean without add-ons?',
      a: 'Yes. Choose Home Cleaning and leave the optional extras unchecked. Standard cleaning covers kitchen and bathroom surfaces, reachable dusting, floors, trash removal, and a basic room reset. We’ll confirm the price for your home and available dates before booking.',
    },
    {
      q: 'Can you handle linens and restocking for rentals?',
      a: 'Have clean linens ready for each turnover. Laundry is $25 per load when on-site machines are available, and restocking owner-provided supplies is $25 per turnover. We’ll confirm where supplies are stored before service starts.',
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
  metaTitle: 'Cleaning Service Areas in Brevard County',
  metaDescription: 'View our cleaning service area covering Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, Rockledge, Melbourne, Palm Bay, Viera, and Titusville.',
  hero: {
    eyebrow: 'Service area',
    title: 'Local cleaning across the Space Coast.',
    lede: 'Cleaning for homes, vacation rentals, moves, and workspaces in the Brevard County communities listed below.',
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
  coverageHeading: 'Choose the cleaning you need.',
  coverageIntro: 'Explore what’s included in each service before requesting a quote.',
  services: [
    {
      title: 'Homes & moves',
      text: 'Recurring home cleaning, deep cleaning, and empty-property move cleans.',
      href: withBase('/residential-cleaning'),
      linkText: 'Explore home cleaning',
    },
    {
      title: 'Vacation rentals',
      text: 'Turnover cleaning between guest stays, with linen and restocking needs agreed in advance.',
      href: withBase('/vacation-rental-cleaning'),
      linkText: 'Explore rental turnovers',
    },
    {
      title: 'Offices & workspaces',
      text: 'Cleaning for offices and workspaces, with a checklist and schedule agreed before the first visit.',
      href: withBase('/commercial-cleaning'),
      linkText: 'Explore commercial cleaning',
    },
  ],
  cta: {
    title: 'Not sure if you\'re in range?',
    text: 'Send your town or ZIP code and preferred dates, or call us. We’ll confirm coverage and availability before booking.',
  },
};

export const quoteContent = {
  metaTitle: 'Request a Cleaning Quote',
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
        hint: 'Just need the standard service? Leave these unchecked. Prices below are added to the base service price.',
        options: [
          { name: 'extra_oven', label: 'Inside oven (+$45)' },
          { name: 'extra_fridge', label: 'Inside refrigerator (+$55)' },
          { name: 'extra_cabinets', label: 'Inside cabinets, empty (from +$60; included with move cleaning)', services: ['residential', 'deep'] },
          { name: 'extra_windows', label: 'Interior windows (+$10 each)' },
        ],
      },
      {
        id: 'rental-extras',
        services: ['vacation'],
        label: 'Optional vacation-rental extras',
        hint: 'Beds are reset with provided clean linens. Laundry uses on-site machines; restocking assumes owner-provided supplies are at the property.',
        options: [
          { name: 'extra_laundry', label: 'Laundry (+$25 per load)' },
          { name: 'extra_restocking', label: 'Owner-provided supply restocking (+$25 per turnover)' },
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


