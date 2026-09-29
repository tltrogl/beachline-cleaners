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
  who: string;
  options: string[];
  optionsIntro: string;
  pricing: string;
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
    { title: 'Recurring Cleaning', href: withBase('/residential-cleaning') },
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
    { title: 'Recurring Cleaning', href: withBase('/residential-cleaning') },
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
  includedHeading: 'What’s included',
  includedIntro: 'Your cleaning plan may include:',
  whoHeading: 'Who this is for',
  optionsHeading: 'Options & Add-ons',
  pricingHeading: 'How pricing is determined',
  faqsHeading: 'Service FAQs',
};



export const servicesDetail: Record<'residential' | 'deep' | 'moveOut' | 'vacationRental' | 'commercial', ServiceDetail> = {
  residential: {
    quoteHref: `${withBase('/quote')}?service=residential`,
    eyebrow: 'Residential cleaning',
    title: 'Home cleaning that stays simple.',
    intro: 'Recurring and one-time cleaning for homes that need consistent attention without the hassle.',
    image: withBase('/images/cleaner-living-room.webp'),
    imageAlt: 'Man vacuuming a furnished coastal living room',
    imageFocalPoint: 'left',
    included: [
      'Kitchen surfaces, sink, appliance exteriors, and floors',
      'Bathroom fixtures, mirrors, counters, and floors',
      'Dusting reachable surfaces throughout the home',
      'Vacuuming and mopping appropriate floor surfaces',
      'Trash removal and basic room reset',
      'Customized priorities when agreed in advance',
    ],
    who: 'A good fit for homes that need recurring maintenance or a one-time reset. Weekly, biweekly, and one-time service can be quoted based on the home and requested scope.',
    optionsIntro: 'Add occasional tasks to your regular visit. Appliance interiors, cabinet interiors, and interior windows are quoted separately.',
    options: [
      'Inside refrigerator and oven',
      'Inside cabinets (if emptied)',
      'Interior windows',
    ],
    pricing: 'Pricing is determined by the size of the home, the number of bedrooms and bathrooms, and the frequency of service. Homes that have not been professionally cleaned recently may need an initial deep clean before moving to recurring maintenance service.',
    pricingFactors: ['Square footage', 'Bed / Bath count', 'Condition & buildup', 'Cleaning frequency'],
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
    quoteHref: `${withBase('/quote')}?service=deep`,
    eyebrow: 'Deep cleaning',
    title: 'A more detailed reset.',
    intro: 'For spaces that need more than a maintenance clean—whether it’s buildup, a seasonal reset, or the first professional cleaning in a while.',
    image: withBase('/images/cleaner-refrigerator.webp'),
    imageAlt: 'Man wiping the inside of a refrigerator',
    imageFocalPoint: 'right',
    imageCaption: 'Refrigerator interiors are an optional add-on, quoted separately.',
    included: [
      'Everything included in standard home cleaning',
      'More detailed attention to buildup and neglected surfaces',
      'Baseboards and accessible trim',
      'Detailed kitchen and bathroom cleaning',
      'Reachable doors, frames, and fixtures',
    ],
    who: 'For seasonal cleaning, preparation before visitors arrive, or a home with buildup that routine cleaning will not address. Tell us which rooms and surfaces need the most attention.',
    optionsIntro: 'A deep clean includes detailed work on accessible surfaces. Add these interior tasks to the quote if you need them:',
    options: [
      'Oven and refrigerator interior detailing',
      'Cabinet interiors',
      'Interior windows and sills',
    ],
    pricing: 'Deep cleaning can vary dramatically from one property to another, so the quote is based on size, current condition, and requested scope rather than a one-size-fits-all price.',
    pricingFactors: ['Square footage', 'Bed / Bath count', 'Condition & buildup', 'Requested detail work'],
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
    quoteHref: `${withBase('/quote')}?service=move`,
    eyebrow: 'Move-in / move-out',
    title: 'Leave the cleaning to us.',
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
    pricing: 'Quotes are determined by property size, layout, and current condition, with optional appliance or cabinet detailing confirmed upfront before work begins.',
    pricingFactors: ['Square footage', 'Property layout', 'Current condition', 'Appliance & cabinet extras'],
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
    quoteHref: `${withBase('/quote')}?service=vacation`,
    eyebrow: 'Vacation rental cleaning',
    title: 'Guest-ready turnovers without the guesswork.',
    intro: 'Turnovers planned around checkout and check-in. Agree on property access, clean linens, restocking, and how problems will be reported before the first visit.',
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
    optionsIntro: 'Confirm who supplies clean linens and restocking items, where they are stored, and which tasks belong in each turnover:',
    options: [
      'Linen and laundry coordination (by arrangement)',
      'Supply restocking (by arrangement)',
      'Deep cleaning during off-season',
    ],
    pricing: 'Turnover quotes depend on property size, condition, the agreed cleaning checklist, and any linen or restocking arrangements. Confirm the scope and rate before booking.',
    pricingFactors: ['Property size', 'Turnover frequency', 'Linen service', 'Restocking requirements'],
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
      },    ],
  },
  commercial: {
    quoteHref: `${withBase('/quote')}?service=commercial`,
    eyebrow: 'Commercial cleaning',
    title: 'Dependable cleaning for your workspace.',
    intro: 'Professional cleaning services for offices, workspaces, and commercial properties. We create a clean, welcoming environment for your team and clients.',
    image: withBase('/images/cleaner-office.webp'),
    imageAlt: 'Man wiping a desk in a bright professional office',
    imageFocalPoint: 'left',
    included: [
      'Dusting and wiping of desks, tables, and common surfaces',
      'Vacuuming and mopping of all floors and break areas',
      'Trash removal and recycling management',
      'Restroom cleaning and restocking',
      'Kitchen/breakroom wipe-down and sanitization',
    ],
    who: 'A great fit for professional offices, retail spaces, and commercial properties that need reliable, high-quality cleaning on a consistent schedule.',
    optionsIntro: 'Plan visits around your opening hours, busy areas, and building access. Discuss the schedule and any additional detail work when requesting a quote:',
    options: [
      'Daily, weekly, or custom recurring schedules',
      'After-hours and weekend cleaning',
      'Deep cleaning for high-traffic areas',
    ],
    pricing: 'Commercial cleaning quotes are customized based on the size of your facility, the frequency of service, and any specific requirements your business has.',
    pricingFactors: ['Square footage', 'Facility type', 'Service frequency', 'Restrooms & common areas', 'Required scope'],
    faqs: [
      {
        q: 'Do you clean after hours?',
        a: 'Yes, we offer flexible scheduling including after-hours and weekend cleaning to minimize disruption to your business operations.',
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
    title: 'A cleaner home. More time for everything else.',
    description: 'Locally owned, owner-operated home cleaning in Cocoa Beach and surrounding Brevard County.',
    ctaButton: 'Get a Quote',
    quoteHref: withBase('/quote'),
    callPrefix: 'Call ',
  },
  trustStrip: {
    ariaLabel: 'Key service assurances',
    items: [
      'Local & owner-operated',
      'Supplies provided',
      'Checklist-based cleaning',
      'Direct communication',
    ],
  },
  servicesSection: {
    heading: 'Our cleaning services.',
    linkText: 'What’s included',
    services: [
      {
        image: withBase('/images/cleaner-living-room.webp'),
        imageAlt: 'Man vacuuming a furnished coastal living room',
        title: 'Recurring Cleaning',
        href: withBase('/residential-cleaning'),
        text: 'Kitchens, bathrooms, floors, and common areas on a regular schedule.',
      },
      {
        image: withBase('/images/deep-cleaning-kitchen.jpg'),
        imageAlt: 'Cleaner detailing a refrigerator during a deep clean',
        title: 'Deep Cleaning',
        href: withBase('/deep-cleaning'),
        text: 'Detailed reset for buildup, overlooked areas, and seasonal resets.',
      },
      {
        image: withBase('/images/move-out-empty-room.jpg'),
        imageAlt: 'Freshly cleaned empty room ready for move-in or move-out',
        title: 'Move-In / Move-Out',
        href: withBase('/move-out-cleaning'),
        text: 'Empty-property cleaning for handoffs, closings, and fresh starts.',
      },
      {
        image: withBase('/images/turnover-active.jpg'),
        imageAlt: 'Cleaner resetting a bed during a vacation rental turnover',
        title: 'Vacation Rentals',
        href: withBase('/vacation-rental-cleaning'),
        text: 'Turnover cleaning between guest stays with your timeline in mind.',
      },
      {
        image: withBase('/images/cleaner-office.webp'),
        imageAlt: 'Man wiping a desk in a bright professional office',
        title: 'Commercial Cleaning',
        href: withBase('/commercial-cleaning'),
        text: 'Offices, workspaces, and commercial properties on a reliable schedule.',
      },
    ],
  },
  processSection: {
    eyebrow: 'How it works',
    heading: 'Simple, reliable cleaning from quote to finish.',
    steps: [
      {
        title: 'Request a Quote',
        text: 'Share your property details and preferred schedule. We\'ll confirm scope and pricing.',
      },
      {
        title: 'We Clean to a Checklist',
        text: 'Room-by-room cleaning based on the plan agreed when booking.',
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
    description: 'Tell us your turnover window and what the property needs. Discuss linen changes, restocking, and completion photos when agreeing on the scope.',
    linkText: 'Explore vacation rental cleaning',
    linkHref: withBase('/vacation-rental-cleaning'),
  },
  expectSection: {
    eyebrow: 'Why Beachline',
    heading: 'Clear service. No guesswork.',
    intro: 'The basics are agreed before the visit so you know who is coming, what is being cleaned, and how to reach us.',
    items: [
      { title: 'Owner-operated', text: 'You deal directly with the local person responsible for scheduling and service.' },
      { title: 'Scope confirmed first', text: 'We agree on the cleaning plan, requested extras, and pricing before the visit.' },
      { title: 'Supplies provided', text: 'Standard cleaning supplies and equipment are brought for the job.' },
      { title: 'Checklist-based cleaning', text: 'Each visit follows the room-by-room scope agreed when you book.' },
    ],
    aboutText: 'How we work',
    aboutHref: withBase('/about'),
    faqText: 'Read common questions',
    faqHref: withBase('/faq'),
  },
  contactBanner: {
    heading: 'Need a cleaner in Brevard County?',
    text: 'Tell us about the property and the cleaning you need, and we’ll confirm the next step.',
    ctaButton: 'Get a Quote',
    quoteHref: withBase('/quote'),
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
    imageSrc: withBase('/images/after_clean.jpg'),
    imageAlt: 'A freshly cleaned home, bright and organized',
    eyebrow: 'Our Story',
    heading: 'Locally owned and operated on the Space Coast.',
    ownerTitle: 'Local & Owner-Operated',
    ownerIntro: 'Beachline Cleaners is a locally owned, owner-operated cleaning service for homes and vacation rentals across the Space Coast.',
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
  coverageHeading: 'Cleaning for your property',
  coverageIntro: 'Across Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, and Rockledge, the quote starts with your property and the visit you need. Availability is confirmed for your address and requested dates.',
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
  lede: 'Share a few details and we\'ll follow up with a quote, usually within one business day.',
  trustPillsAriaLabel: 'Quote assurances',
  trustPills: [
    'Local & owner-operated',
    'Checklist-based service',
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
      label: 'ZIP Code or Property Address',
      placeholder: 'e.g. 32922 or Cocoa Beach',
    },
    service: {
      label: 'Service Type',
      placeholder: 'Select a service...',
      options: [
      { value: 'residential', label: 'Residential Cleaning' },
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
      label: 'Frequency / Preferred Date (Optional)',
      placeholder: 'Weekly, One-time, Specific Date...',
    },
    notes: {
      label: 'Additional Notes (Optional)',
      placeholder: 'Any specific areas of focus or condition details...',
    },
    submitButton: 'Send Quote Request',
    detailsToggle: 'Add property details (optional)',
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
  metaDescription: 'Your cleaning quote request has been received. We will follow up shortly.',
  eyebrow: 'Request received',
  title: 'We\u2019ve got your details.',
  lede: 'We\u2019ll review your request and follow up within one business day by phone or email. If you need to reach us sooner, call or text anytime.',
  returnButtonText: 'Return Home',
  returnButtonHref: withBase('/'),
};


