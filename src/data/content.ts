export interface ServiceDetail {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageFocalPoint?: 'center' | 'right';
  included: string[];
  who: string;
  options: string[];
  pricing: string;
  faqs: { q: string; a: string }[];
}

export const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
export const withBase = (path: string): string => {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('tel:') || path.startsWith('sms:') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const site = {
  name: 'Beachline Cleaners',
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
  summary: 'Home cleaning, vacation-rental turnovers, deep cleans, and move-in/move-out cleaning across the Space Coast.',
  servicesHeading: 'Services',
  serviceLinks: [
    { title: 'Home Cleaning', href: withBase('/residential-cleaning') },
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
  includedHeading: 'What’s included',
  includedIntro: 'Your cleaning plan may include:',
  whoHeading: 'Who this is for',
  optionsHeading: 'Options & Add-ons',
  optionsIntro: 'Customize your clean with specialized interior or property add-ons:',
  pricingHeading: 'How pricing is determined',
  pricingFactors: [
    'Square footage',
    'Bed / Bath count',
    'Condition & buildup',
    'Cleaning frequency',
  ],
  faqsHeading: 'Service FAQs',
};



export const servicesDetail: Record<'residential' | 'deep' | 'moveOut' | 'vacationRental', ServiceDetail> = {
  residential: {
    eyebrow: 'Residential cleaning',
    title: 'Home cleaning that stays simple.',
    intro: 'Recurring and one-time cleaning for homes that need consistent attention without the hassle.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Cleaner wiping interior window shutters',
    included: [
      'Kitchen surfaces, sink, appliance exteriors, and floors',
      'Bathroom fixtures, mirrors, counters, and floors',
      'Dusting reachable surfaces throughout the home',
      'Vacuuming and mopping appropriate floor surfaces',
      'Trash removal and basic room reset',
      'Customized priorities when agreed in advance',
    ],
    who: 'A good fit for homes that need recurring maintenance or a one-time reset. Weekly, biweekly, and one-time service can be quoted based on the home and requested scope.',
    options: [
      'Inside refrigerator and oven',
      'Inside cabinets (if emptied)',
      'Interior windows',
    ],
    pricing: 'Pricing is determined by the size of the home, the number of bedrooms and bathrooms, and the frequency of service. Homes that have not been professionally cleaned recently may need an initial deep clean before moving to recurring maintenance service.',
    faqs: [
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
    eyebrow: 'Deep cleaning',
    title: 'A more detailed reset.',
    intro: 'For spaces that need more than a maintenance clean—whether it’s buildup, a seasonal reset, or the first professional cleaning in a while.',
    image: withBase('/images/deep-cleaning-kitchen.jpg'),
    imageAlt: 'Woman wiping a stainless steel refrigerator with a cloth in a kitchen',
    imageFocalPoint: 'right',
    included: [
      'Everything included in standard home cleaning',
      'More detailed attention to buildup and neglected surfaces',
      'Baseboards and accessible trim',
      'Detailed kitchen and bathroom cleaning',
      'Reachable doors, frames, and fixtures',
    ],
    who: 'Perfect for spring cleaning, preparing for holidays, or resetting a home that hasn\'t had professional attention in several months.',
    options: [
      'Oven and refrigerator interior detailing',
      'Cabinet interiors',
      'Interior windows and sills',
    ],
    pricing: 'Deep cleaning can vary dramatically from one property to another, so the quote is based on size, current condition, and requested scope rather than a one-size-fits-all price.',
    faqs: [
      {
        q: 'What’s the difference between standard and deep cleaning?',
        a: 'Standard cleaning is designed to maintain a home that is already in relatively good condition. Deep cleaning addresses neglected areas, heavy buildup on baseboards or fixtures, and involves much more intensive scrubbing.',
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
    eyebrow: 'Move-in / move-out',
    title: 'Leave the cleaning to us.',
    intro: 'Detailed cleaning for empty properties, new tenants, listings, closings, and fresh starts.',
    image: withBase('/images/move-out-empty-room.jpg'),
    imageAlt: 'Unfurnished room with white walls, windows, and clean wood flooring',
    included: [
      'Kitchen and bathroom detail cleaning',
      'Baseboards, doors, reachable trim, and floors',
      'Empty-room dusting and surface cleaning',
      'Removal of light dust and debris left from moving out',
    ],
    who: 'A good fit for renters preparing for a move-out inspection, homeowners getting a property ready for sale, or new occupants who want the space cleaned before moving in.',
    options: [
      'Inside refrigerator and oven',
      'Inside all kitchen and bathroom cabinets',
      'Interior windows',
    ],
    pricing: 'Quotes are determined by property size, layout, and current condition, with optional appliance or cabinet detailing confirmed upfront before work begins.',
    faqs: [
      {
        q: 'Do properties need to be completely empty?',
        a: 'Yes, move-out cleaning is most efficient and thorough after all belongings, furniture, and trash have been removed. If substantial contents remain, let us know before quoting.',
      },
      {
        q: 'Does move-out cleaning guarantee I get my deposit back?',
        a: 'We provide a thorough, detailed clean designed to satisfy standard lease move-out requirements, though final deposit decisions remain with your property manager or landlord.',
      },
      {
        q: 'How much notice do I need to give for a move-out clean?',
        a: 'Book as early as you can, especially near the end of the month. We’ll confirm availability based on your move date and the scope of work.',
      },
    ],
  },
  vacationRental: {
    eyebrow: 'Vacation rental cleaning',
    title: 'Guest-ready turnovers without the guesswork.',
    intro: 'Turnover cleaning for vacation rentals, hosts, and property managers who need dependable resets between stays.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Neatly made bed with pillows in a bright vacation rental bedroom',
    included: [
      'Full turnover clean of kitchens, bathrooms, bedrooms, and living areas',
      'Beds reset with provided clean linens',
      'Trash removal and room reset',
      'Completion photos on request',
      'Property-condition and maintenance notes',
    ],
    who: 'A good fit for hosts and property managers who need dependable cleaning between guest stays and a clear property-specific turnover routine.',
    options: [
      'Linen and laundry coordination (by arrangement)',
      'Supply restocking (by arrangement)',
      'Deep cleaning during off-season',
    ],
    pricing: 'Turnover quotes depend on property size, condition, the agreed cleaning checklist, and any linen or restocking arrangements. Confirm the scope and rate before booking.',
    faqs: [
      {
        q: 'Can you handle linens and restocking for rentals?',
        a: 'Linen resets and basic supply restocking are available by arrangement. We’ll confirm your laundry setup, storage locations, and replenishment preferences before service begins.',
      },
      {
        q: 'What happens if a guest leaves a mess or damage?',
        a: 'If we find an excessive mess, missing item, or possible damage, we’ll flag it and follow the reporting process agreed for the property. Any extra cleaning outside the normal turnover scope can be discussed before additional work is done.',
      },
      {
        q: 'Do you offer same-day turnovers?',
        a: 'Same-day turnovers between checkout and check-in are available by arrangement depending on schedule availability. We recommend booking turnover windows in advance.',
      },
    ],
  },
};

export const homeContent = {
  metaTitleSuffix: 'Space Coast Cleaning',
  metaDescription: 'Home cleaning, deep cleans, move-in/out service, and vacation-rental turnovers in the Space Coast area. Call Beachline Cleaners to discuss scope and availability.',
  hero: {
    imageSrc: withBase('/images/hero-living-room.jpg'),
    imageWidth: 1920,
    imageHeight: 1440,
    imageAlt: 'A sunlit living room with clean floors, seating, and tropical plants',
    location: 'Space Coast, FL • Cocoa • Cocoa Beach • Merritt Island',
    title: 'Professional cleaning for homes and rentals.',
    description: 'Recurring cleaning, deep cleans, move-out service, and vacation-rental turnovers across the Space Coast.',
    ctaButton: 'Get a Quote',
    quoteHref: withBase('/quote/'),
    callPrefix: 'Call ',
  },
  trustStrip: {
    ariaLabel: 'Key service assurances',
    items: [
      'Locally Owned & Operated',
      'Clear Quotes',
      'Checklist-Based Service',
      'Direct Phone/Text Communication',
    ],
  },
  servicesSection: {
    heading: 'Our cleaning services.',
    linkText: 'What’s included',
    services: [
      {
        title: 'Home Cleaning',
        href: withBase('/residential-cleaning/'),
        text: 'Routine care for kitchens, bathrooms, floors, and the rooms you use every day.',
      },
      {
        title: 'Deep Cleaning',
        href: withBase('/deep-cleaning/'),
        text: 'A more detailed clean for buildup, overlooked areas, and a fresh start.',
      },
      {
        title: 'Vacation Rental Cleaning',
        href: withBase('/vacation-rental-cleaning/'),
        text: 'Cleaning between stays, with your property’s access and turnover timing in mind.',
      },
      {
        title: 'Move-In / Move-Out',
        href: withBase('/move-out-cleaning/'),
        text: 'Cleaning for an empty home before the next move, handoff, or arrival.',
      },
    ],
  },
  processSection: {
    eyebrow: 'How it works',
    heading: 'Simple, reliable cleaning in 3 steps.',
    steps: [
      {
        num: '01',
        title: 'Request a Quote or Call',
        text: 'Tell us your property size, condition, and preferred schedule. We may ask for photos or more details before confirming a quote.',
      },
      {
        num: '02',
        title: 'We Clean to a Checklist',
        text: 'We work through the agreed room-by-room checklist, with attention to the areas and priorities discussed when booking.',
      },
      {
        num: '03',
        title: 'Enjoy Your Fresh Space',
        text: 'Walk in to a clean, refreshed space. If you notice something that needs attention, contact us so we can review it with you.',
      },
    ],
  },
  rentalSection: {
    imageSrc: withBase('/images/rental-bedroom.jpg'),
    imageWidth: 1000,
    imageHeight: 1000,
    imageAlt: 'A made bed in a bright bedroom with plants and a woven pendant light',
    eyebrow: 'For hosts & property managers',
    heading: 'Cleaning between checkout and check-in.',
    description: 'Tell us your turnover window and what the property needs. Discuss linen changes, restocking, and completion photos when agreeing on the scope.',
    linkText: 'Explore vacation rental cleaning',
    linkHref: withBase('/vacation-rental-cleaning/'),
  },
  contactBanner: {
    heading: 'Need a cleaner?',
    text: 'Tell us about the property and the cleaning you need, and we’ll confirm the next step.',
    ctaButton: 'Get a Quote',
    quoteHref: withBase('/quote/'),
    callPrefix: 'Call ',
  },
};

export const aboutContent = {
  metaTitle: 'About',
  metaDescription: 'Learn about Beachline Cleaners, a locally owned independent cleaning business focused on reliable residential and property service.',
  hero: {
    eyebrow: 'About',
    title: 'Cleaning built around reliability.',
    lede: 'A local cleaning company designed to make residential and property cleaning straightforward, consistent, and easy to schedule.',
  },
  story: {
    imageSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Bathroom with a glass shower enclosure, vanity, and tiled floor',
    eyebrow: 'Our Story',
    heading: 'Locally owned and operated on the Space Coast.',
    lead: 'Beachline Cleaners was founded to make dependable cleaning easier to arrange for homes and vacation rentals across the Space Coast.',
    paragraphs: [
      'As an independent, owner-operated service based in Brevard County, we keep communication direct. When you call or message, you’re speaking with the person responsible for scheduling the work and making sure the agreed cleaning plan is followed.',
      'We believe trust is earned by showing up when scheduled, communicating clearly, respecting your home, and following the cleaning plan agreed before the visit.',
    ],
    checks: [
      'Direct communication with your local cleaner',
      'Quotes based on your property and requested scope',
      'Methodical, checklist-driven standards',
      'Careful respect for your property, pets, and privacy',
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
    {
      q: 'How is pricing determined?',
      a: 'We use the property size (square footage and bed/bath count), service type, current condition, frequency, and requested extras to determine the scope and quote. Deep cleans and move cleans may require photos or additional details for an accurate quote.',
      open: true,
    },
    {
      q: 'Do I need to be home?',
      a: 'No, you do not need to be home. Most of our clients provide us with a spare key or a door code so we can clean while they are out or at work. If you prefer to be home, that is completely fine too.',
    },
    {
      q: 'Do you bring supplies?',
      a: 'Yes, we bring all of our own professional-grade cleaning supplies and equipment. If you have specific products you prefer us to use for delicate surfaces, just let us know and leave them out for us.',
    },
    {
      q: 'What if I have pets?',
      a: 'Pets are welcome. Please secure any pet that is aggressive, highly anxious, or likely to interfere with cleaning so the visit can be completed safely.',
    },
    {
      q: 'What’s the difference between standard and deep cleaning?',
      a: 'Standard cleaning focuses on maintaining a space that is already in decent condition—wiping surfaces, vacuuming, mopping, and cleaning bathrooms. Deep cleaning addresses neglected areas, heavy buildup, detailed baseboard and trim cleaning, and intensive scrubbing.',
    },
    {
      q: 'Can you handle linens/restocking for rentals?',
      a: 'Linen resets and basic supply restocking are available by arrangement. We’ll confirm laundry access, storage locations, and the replenishment checklist before service begins.',
    },
    {
      q: 'What is your cancellation and access policy?',
      a: 'If you need to cancel or reschedule, contact us as soon as possible. Access instructions and any cancellation or lockout terms will be confirmed before the appointment is booked.',
    },
  ],
};

export const serviceAreaContent = {
  metaTitle: 'Service Area',
  metaDescription: 'View our cleaning service area covering Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, and Rockledge.',
  hero: {
    eyebrow: 'Service area',
    title: 'Focused on the Space Coast.',
    lede: 'Our initial service area stays intentionally focused so drive time doesn’t get in the way of reliable scheduling.',
  },
  areas: [
    'Cocoa',
    'Cocoa Beach',
    'Cape Canaveral',
    'Merritt Island',
    'Rockledge',
    'Nearby areas by request',
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
  lede: 'Share a few details about the property and the service you need. We may ask for photos or additional information before confirming the scope and price.',
  trustPillsAriaLabel: 'Quote assurances',
  trustPills: [
    'Checklist-based service',
    'Direct communication',
  ],
  form: {
    nameAttr: 'quote',
    actionAttr: withBase('/quote-success/'),
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
      label: 'ZIP Code or Property Address',
      placeholder: 'e.g. 32922 or Cocoa Beach',
    },
    service: {
      label: 'Service Type',
      placeholder: 'Select a service...',
      options: [
      { value: 'residential', label: 'Residential Cleaning' },
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
      label: 'Frequency / Preferred Date (Optional)',
      placeholder: 'Weekly, One-time, Specific Date...',
    },
    notes: {
      label: 'Additional Notes (Optional)',
      placeholder: 'Any specific areas of focus or condition details...',
    },
    submitButton: 'Request Quote',
  },
  aside: {
    heading: 'Prefer to talk or text?',
    description: 'Prefer to talk first? Call or text us about the property, service, and dates you have in mind.',
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
  metaTitle: 'Quote Requested',
  metaDescription: 'Thank you for requesting a cleaning quote.',
  eyebrow: 'Success',
  title: 'We\'ve received your request.',
  lede: 'Thank you for reaching out. We’ll review the details you submitted and follow up using the contact information you provided.',
  returnButtonText: 'Return Home',
  returnButtonHref: withBase('/'),
};
