// Shared utility strings keep repeated template styling short and consistent.
export const shell = 'mx-auto w-[min(calc(100%-40px),1180px)] max-mobile:w-[min(calc(100%-28px),1180px)] group-[.island-home]/site:max-mobile:w-[calc(100%-36px)]';
export const section = 'py-section max-mobile:py-12';
export const eyebrowRow = 'flex items-center gap-3';
export const eyebrowRuleSea = 'h-px w-10 bg-sea';
export const eyebrowRules = {
  sea: 'h-px w-10 shrink-0 bg-sea',
  teal: 'h-px w-10 shrink-0 bg-teal',
  cyan: 'h-px w-10 shrink-0 bg-cyan',
  accent: 'h-1 w-10 shrink-0 rounded-full bg-accent',
} as const;
export const srOnly = 'sr-only';
export const pageHero = 'border-b border-line bg-mist pt-[56px] pb-[54px] max-mobile:pt-9 max-mobile:pb-10';
export const pageTitle = 'max-w-[860px] text-page-title font-black leading-[1.1] tracking-[-.035em]';
export const eyebrow = 'mb-3 text-eyebrow font-extrabold uppercase tracking-[.13em] text-sea-dark';
export const homeEyebrow = 'mb-[17px] text-eyebrow font-extrabold uppercase tracking-[.11em] text-sea-dark max-mobile:mb-3 max-mobile:text-eyebrow-mobile max-mobile:tracking-[.06em]';
export const lede = 'max-w-[700px] text-lede';
export const pageLede = `${lede} mt-[18px]`;
export const ledeTight = `${lede} mt-3`;
export const split = 'grid grid-cols-[.92fr_1.08fr] items-center gap-16 max-tablet:grid-cols-1 max-tablet:gap-8';
export const splitImage = 'w-full aspect-[1.25] rounded-panel object-cover shadow-[0_18px_55px_rgba(28,65,91,.08)] max-tablet:aspect-[16/9]';
export const details = 'rounded-panel border border-line bg-white px-5 py-[19px] open:border-sea-dark/50';
export const summary = 'flex min-h-6 items-center justify-between gap-4 list-none cursor-pointer font-[850] text-ink hover:text-sea-dark';
export const phone = 'text-small font-[750] text-sea-dark underline';
export const outlineLink = 'inline-flex min-h-11 items-center gap-control-gap text-link font-[750] text-sea-dark underline underline-offset-4';
export const field = 'min-w-0 w-full rounded-lg border border-field-line bg-field px-4 py-3 text-base text-ink placeholder:text-ink-soft transition-[border-color,outline] hover:border-ink-soft focus:border-sea-dark focus:outline-3 focus:outline-sea-dark focus:outline-offset-1 aria-invalid:border-danger aria-invalid:focus:outline-danger';
export const formGroup = 'flex flex-col gap-1.5';
export const formRow = 'grid grid-cols-2 gap-5 max-[601px]:grid-cols-1';

// Shared content-width and list patterns used by editorial/service pages.
export const titleNarrow = 'max-w-[780px]';
export const headingNarrow = 'max-w-[620px]';
export const sectionKicker = 'mt-6 text-nav font-extrabold uppercase tracking-[.1em] text-sea-dark';
export const proseParagraph = 'mt-4 max-w-[680px]';
export const dotList = 'mt-8 border-b border-line';
export const dotListRow = 'grid grid-cols-[14px_1fr] items-center gap-3 border-t border-line py-3.5 font-[700]';
export const dotListMarker = 'size-2 rounded-full bg-teal';


// Commercial page composition. Keep unique visual values out of page templates.
export const commercialUi = {
  heroSection: 'border-b border-line bg-white pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[1.08fr_.92fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroMedia: 'relative order-1 pb-3 pl-3 max-mobile:order-2',
  heroAccent: 'absolute bottom-0 left-0 h-20 w-28 rounded-panel bg-accent',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  heroImage: 'aspect-[1.2] w-full object-cover object-left max-mobile:aspect-[1.55]',
  heroCopy: 'order-2 max-mobile:order-1',
  heroTitle: 'max-w-[700px] text-[clamp(2.9rem,4.8vw,4.35rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.75rem]',
  heroLede: 'mt-6 max-w-[610px] text-lede leading-[1.62] max-mobile:mt-4',
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  eyebrowRule: 'h-px w-10 shrink-0 bg-teal',
  checklistSection: 'border-b border-line bg-mist/55 py-[76px] max-mobile:py-14',
  checklistHeader: 'flex items-end justify-between gap-12 border-b border-line pb-7 max-tablet:items-start max-mobile:flex-col max-mobile:gap-3',
  checklistAccent: 'h-1 w-10 rounded-full bg-accent',
  checklistHeading: 'max-w-[580px]',
  checklistIntro: 'max-w-[450px] text-[1rem] leading-[1.65]',
  checklistGrid: 'm-0 grid list-none grid-cols-3 p-0 max-tablet:grid-cols-2 max-mobile:grid-cols-1',
  checklistItemBase: 'min-h-[160px] border-b border-line py-6 text-[.98rem] leading-[1.62]',
  checklistItemNonFirst: 'border-l pl-7 max-tablet:border-l-0 max-tablet:pl-0',
  checklistItemFirst: 'pr-7 max-tablet:pr-0',
  checklistItemMiddle: 'px-7 max-tablet:px-0',
  checklistItemLast: 'pl-7 max-tablet:pl-0',
  checklistItemTabletOdd: 'max-tablet:border-l max-tablet:pl-7 max-mobile:border-l-0 max-mobile:pl-0',
  checklistItemTabletEven: 'max-tablet:pr-7 max-mobile:pr-0',
  checklistIcon: 'mb-4 flex size-8 items-center justify-center rounded-full bg-accent text-white shadow-accent-dot',
  pricingSection: 'bg-ocean py-[70px] text-white max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[.72fr_1.28fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  darkEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-cyan',
  pricingTitle: 'text-[clamp(2.5rem,4.4vw,3.9rem)] tracking-[-.045em] text-white',
  pricingCopy: 'mt-5 max-w-[470px] text-[1.02rem] leading-[1.68] text-white/72',
  optionsTitle: 'text-[clamp(1.85rem,3vw,2.45rem)] text-white',
  optionsGrid: 'mt-6 m-0 grid list-none grid-cols-2 border-t border-white/20 p-0 max-mobile:grid-cols-1',
  optionItemBase: 'grid grid-cols-[28px_1fr] border-b border-white/20 py-[18px] text-white/80',
  optionItemEven: 'pr-7 max-mobile:pr-0',
  optionItemOdd: 'border-l border-white/20 pl-7 max-mobile:border-l-0 max-mobile:pl-0',
  optionText: 'font-[700]',
  actionIcon: 'size-[18px]',
  optionPlus: 'font-black text-cyan',
} as const;

export const commercialChecklistItemClass = (index: number) => [
  index % 3 !== 0 ? commercialUi.checklistItemNonFirst : commercialUi.checklistItemFirst,
  index % 3 === 1 ? commercialUi.checklistItemMiddle : '',
  index % 3 === 2 ? commercialUi.checklistItemLast : '',
  index % 2 === 1 ? commercialUi.checklistItemTabletOdd : commercialUi.checklistItemTabletEven,
].filter(Boolean).join(' ');

export const commercialOptionItemClass = (index: number) =>
  index % 2 === 0 ? commercialUi.optionItemEven : commercialUi.optionItemOdd;

// Deep-cleaning page composition.
export const deepUi = {
  heroSection: 'border-b border-line bg-white pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  eyebrowRule: 'h-px w-10 shrink-0 bg-teal',
  heroTitle: 'max-w-[700px] text-[clamp(3rem,5vw,4.6rem)] leading-[1.02] tracking-[-.045em] max-mobile:text-[2.85rem]',
  heroLede: 'mt-6 max-w-[620px] text-lede leading-[1.62] max-mobile:mt-4',
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  heroMedia: 'relative pb-6 pl-6 max-mobile:pb-4 max-mobile:pl-4',
  heroAccent: 'absolute inset-x-0 bottom-0 top-8 rounded-panel bg-accent',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  heroImage: 'aspect-[1.16] w-full object-cover object-center max-mobile:aspect-[1.48]',
  actionIcon: 'size-[18px]',
  scopeSection: 'bg-ocean py-[76px] text-white max-mobile:py-14',
  scopeGrid: 'grid grid-cols-[.62fr_1.38fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-8',
  darkEyebrow: 'mb-3 text-eyebrow font-extrabold uppercase tracking-[.12em] text-cyan',
  darkEyebrowRule: 'h-px w-10 bg-cyan',
  scopeHeading: 'max-w-[470px] text-[clamp(2.2rem,3.5vw,3.1rem)] leading-[1.08] tracking-[-.035em] text-white',
  scopeList: 'm-0 grid list-none grid-cols-2 border-t border-white/20 p-0 max-mobile:grid-cols-1',
  scopeItemBase: 'grid grid-cols-[30px_1fr] items-start gap-3 border-b border-white/20 py-5 text-[1rem] leading-[1.62] text-white/82',
  scopeItemEven: 'pr-8 max-mobile:pr-0',
  scopeItemOdd: 'border-l border-white/20 pl-8 max-mobile:border-l-0 max-mobile:pl-0',
  scopeIcon: 'mt-[2px] text-cyan',
  pricingSection: 'py-[72px] max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[.9fr_1.1fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricePanel: 'self-start border-t-4 border-accent pt-6',
  lightEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  priceTitle: 'text-[clamp(2.45rem,4.2vw,3.7rem)] tracking-[-.045em]',
  priceCopy: 'mt-5 max-w-[520px] text-[1.04rem] leading-[1.68]',
  addonsPanel: 'rounded-panel border-l-4 border-teal bg-seafoam px-8 py-8 max-mobile:px-6',
  addonsTitle: 'text-[clamp(1.85rem,3vw,2.45rem)]',
  addonsList: 'mt-6 m-0 list-none border-t border-line p-0',
  addonRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 border-b border-line py-[18px]',
  addonLabel: 'font-[700] text-ink',
  addonPrice: 'font-extrabold tabular-nums text-sea-dark',
  addonPlus: 'font-black text-sea-dark',
} as const;


// FAQ page composition.
export const faqUi = {
  contentShell: 'max-w-[900px]',
  list: 'grid gap-3',
  priceBlock: 'mt-4',
  priceList: 'divide-y divide-line',
  priceRow: 'grid grid-cols-[1fr_auto] items-baseline gap-4 py-3 max-[400px]:grid-cols-1 max-[400px]:gap-1',
  priceLabel: 'font-bold',
  priceValue: 'm-0 text-sea-dark tabular-nums',
  answer: 'mt-3',
  note: 'mt-4',
} as const;

// Homepage composition.
export const indexUi = {
  heroSection:
    'home-hero border-b border-line bg-white pt-14 pb-14 max-mobile:pt-8 max-mobile:pb-10',
  heroGrid:
    'home-hero-grid grid grid-cols-[.94fr_1.06fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-8',
  heroCopy: 'home-hero-copy',
  eyebrowRow: 'flex items-center gap-3',
  eyebrowRuleSea: 'h-px w-10 shrink-0 bg-sea',
  heroTitle:
    'max-w-[720px] text-[clamp(3rem,5vw,4.55rem)] leading-[1.03] tracking-[-.04em] text-balance max-mobile:text-[2.8rem]',
  heroDescription:
    'mt-5 max-w-[560px] text-[1.12rem] leading-[1.62] max-mobile:text-base',
  heroServiceArea:
    'mt-3 max-w-[590px] text-[.9rem] leading-[1.55] text-ink-soft',
  estimatorForm:
    'hero-estimator mt-7 mb-4 grid grid-cols-[1fr_1.25fr] gap-3 rounded-panel border border-line bg-mist/45 p-4 max-mobile:grid-cols-1 max-mobile:p-3',
  fieldLabel: 'mb-1.5 block text-[.78rem] font-[750] text-ink-soft',
  fieldControl:
    'min-h-11 min-w-0 w-full rounded-md border border-field-line bg-white px-3 py-2 text-label text-ink placeholder:text-ink-soft hover:border-ink-soft focus-visible:outline-3 focus-visible:outline-sea-dark focus-visible:outline-offset-2',
  estimatorSubmit: 'col-span-full w-full',
  actionIcon: 'size-[18px]',
  phoneLink:
    'inline-flex items-center gap-2 text-[.9rem] font-[700] text-sea-dark underline underline-offset-4',
  phoneIcon: 'size-4',
  heroMedia:
    'home-hero-media overflow-hidden rounded-panel bg-mist shadow-[0_18px_50px_rgba(27,57,79,.08)]',
  heroImage:
    'aspect-[1.14] w-full object-cover object-[62%_center] max-mobile:aspect-[1.5] max-mobile:object-center',
  trustStrip: 'border-b border-line bg-mist/35',
  trustGrid:
    'grid grid-cols-4 divide-x divide-line py-3.5 max-mobile:grid-cols-2 max-mobile:divide-x-0 max-mobile:gap-y-3',
  trustItem:
    'flex items-center justify-center gap-2 px-5 text-[.84rem] font-[750] first:pl-0 last:pr-0 max-mobile:justify-start max-mobile:px-0',
  trustIcon: 'size-[17px] shrink-0 text-teal',
  servicesSection: 'border-b border-line bg-white py-[88px] max-mobile:py-14',
  servicesHeader:
    'grid grid-cols-[.72fr_1.28fr] items-end gap-16 max-tablet:grid-cols-1 max-tablet:gap-4',
  servicesKicker:
    'text-[.7rem] font-extrabold uppercase tracking-[.15em] text-sea-dark',
  servicesHeading:
    'mt-2 text-[clamp(2.15rem,3.5vw,3rem)] leading-[1.08] tracking-[-.035em]',
  servicesIntro:
    'max-w-[520px] justify-self-end text-[.98rem] leading-[1.62] text-ink-soft max-tablet:justify-self-start',
  servicesGrid:
    'mt-10 grid grid-cols-2 gap-6 min-[900px]:grid-cols-3 max-mobile:grid-cols-1',
  serviceCard:
    'group/service flex min-w-0 flex-col overflow-hidden rounded-panel border border-line/80 bg-white shadow-[0_10px_32px_rgba(27,57,79,.07)] transition-[transform,box-shadow,border-color] duration-200 hover:border-sea/25 hover:shadow-[0_15px_38px_rgba(27,57,79,.11)] motion-safe:hover:-translate-y-1',
  serviceCardWide: 'min-[900px]:col-span-2',
  serviceMedia: 'relative aspect-[1.55] overflow-hidden bg-mist',
  serviceMediaWide: 'min-[900px]:aspect-[2.45]',
  serviceImage:
    'h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover/service:scale-[1.025]',
  servicePriceBadge:
    'absolute right-3 top-3 rounded-md border border-white/70 bg-white/90 px-3 py-1.5 text-[.73rem] font-extrabold text-ink shadow-sm backdrop-blur-sm',
  serviceCardBody: 'flex grow flex-col p-5',
  serviceTitle: 'text-[1.06rem] leading-[1.25] tracking-[-.01em]',
  serviceTitleLink: 'text-ink no-underline hover:text-sea-dark',
  serviceText: 'mt-2 max-w-[520px] text-[.88rem] leading-[1.55] text-ink-soft',
  serviceLink:
    'mt-5 inline-flex w-fit items-center gap-2 text-[.82rem] font-[750] text-sea-dark no-underline underline-offset-4 hover:underline',
  serviceLinkIcon:
    'size-4 transition-transform duration-200 motion-safe:group-hover/service:translate-x-1',
  expectSection: 'border-b border-line bg-mist/45 py-12 max-mobile:py-10',
  expectGrid:
    'grid grid-cols-[.78fr_1.35fr_auto] items-center gap-10 max-tablet:grid-cols-1 max-tablet:gap-6',
  expectHeading: 'max-w-[430px] text-[1.65rem] leading-[1.18] tracking-[-.02em]',
  expectIntro: 'mt-2 max-w-[500px] text-[.93rem] leading-[1.55]',
  expectItems: 'grid grid-cols-2 gap-3 max-mobile:grid-cols-1',
  expectItem: 'flex gap-3 rounded-xl border border-line bg-white p-4',
  expectIconWrap:
    'mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-sea-dark',
  expectIcon: 'size-4',
  expectItemTitle: 'text-[.96rem]',
  expectItemText: 'mt-1 max-w-[330px] text-[.85rem] leading-[1.5]',
  expectLinks:
    'flex min-w-max flex-col items-start gap-2 max-tablet:min-w-0 max-tablet:flex-row max-tablet:flex-wrap max-tablet:gap-x-6',
  secondaryLink:
    'inline-flex min-h-10 items-center gap-2 text-[.86rem] font-[750] text-sea-dark underline underline-offset-4',
  aboutLink: 'text-[.84rem] font-[650] text-sea-dark underline underline-offset-4',
  processSection: 'border-b border-line bg-white py-[76px] max-mobile:py-14',
  processHeader:
    'grid grid-cols-[.72fr_1.28fr] items-end gap-14 border-b border-line pb-8 max-mobile:grid-cols-1 max-mobile:gap-4',
  processEyebrow:
    'mb-3 flex items-center gap-3 text-[.7rem] font-extrabold uppercase tracking-[.15em] text-sea-dark',
  processEyebrowRule: 'h-px w-10 bg-teal',
  processHeading:
    'max-w-[610px] text-[clamp(2.2rem,3.8vw,3.25rem)] leading-[1.08] tracking-[-.035em]',
  processIntro:
    'max-w-[540px] justify-self-end text-[.98rem] leading-[1.62] text-ink-soft max-mobile:justify-self-start',
  processList:
    'm-0 grid list-none grid-cols-3 gap-10 p-0 max-tablet:grid-cols-1 max-tablet:gap-0',
  processItem: 'relative border-b border-line py-8 first:pl-0 max-tablet:py-6',
  processNumber: 'mb-4 block text-[.68rem] font-extrabold tracking-[.14em] text-teal',
  processStepBar: 'mb-5 block h-1 w-10 rounded-full bg-accent',
  processStepTitle: 'mb-2 text-[1.15rem]',
  processStepText: 'max-w-[340px] text-[.9rem] leading-[1.58] text-ink-soft',
  contactSection: 'border-b border-line bg-seafoam py-10 max-mobile:py-9',
  contactGrid:
    'flex items-center justify-between gap-8 max-tablet:flex-col max-tablet:items-start',
  contactEyebrow:
    'mb-3 text-[.7rem] font-extrabold uppercase tracking-[.14em] text-sea-dark',
  contactText: 'mt-3 max-w-[540px] text-[.94rem] leading-[1.55]',
  contactActions: 'flex shrink-0 flex-wrap items-center gap-4',
  contactPhone: 'text-[.9rem] font-[700] text-sea-dark underline underline-offset-4',
} as const;

// Shared service-page primitives used by the remaining service templates.
export const serviceUi = {
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  eyebrowRow: 'flex items-center gap-3',
  eyebrowRuleSea: 'h-px w-10 shrink-0 bg-sea',
  accentRule: 'h-1 w-10 rounded-full bg-accent',
  actionIcon: 'size-[18px]',
  lightEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  optionPlus: 'font-black text-sea-dark',
  optionPrice: 'font-extrabold tabular-nums text-sea-dark',
} as const;

// Move-out cleaning page composition.
export const moveOutUi = {
  heroSection: 'border-b border-line bg-white pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[1.07fr_.93fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroMedia: 'relative order-1 pb-3 pl-3 max-mobile:order-2',
  heroAccent: 'absolute bottom-0 left-0 h-20 w-28 rounded-panel bg-accent',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  heroImage: 'aspect-[1.18] w-full object-cover object-left max-mobile:aspect-[1.52]',
  heroCopy: 'order-2 max-mobile:order-1',
  heroTitle: 'max-w-[690px] text-[clamp(2.9rem,4.8vw,4.35rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.75rem]',
  heroLede: 'mt-6 max-w-[590px] text-lede leading-[1.62] max-mobile:mt-4',
  scopeSection: 'border-b border-line bg-mist/55 py-[76px] max-mobile:py-14',
  scopeGrid: 'grid grid-cols-[.68fr_1.32fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-7',
  scopeHeading: 'max-w-[480px]',
  scopeList: 'm-0 grid list-none grid-cols-2 border-t border-line p-0 max-mobile:grid-cols-1',
  scopeItemBase: 'grid min-h-[98px] grid-cols-[30px_1fr] items-start gap-3 border-b border-line py-5 text-[1.01rem] leading-[1.6]',
  scopeItemEven: 'pr-8 max-mobile:pr-0',
  scopeItemOdd: 'border-l pl-8 max-mobile:border-l-0 max-mobile:pl-0',
  scopeIcon: 'mt-0.5 text-accent',
  pricingSection: 'py-[70px] max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[.75fr_1.25fr] items-start gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  priceTitle: 'text-[clamp(2.4rem,4vw,3.6rem)] tracking-[-.04em]',
  priceCopy: 'mt-4 max-w-[470px] text-[1.02rem] leading-[1.66]',
  addonsPanel: 'border-l border-line pl-10 max-tablet:border-l-0 max-tablet:border-t max-tablet:pl-0 max-tablet:pt-8',
  addonsTitle: 'text-[clamp(1.85rem,3vw,2.45rem)]',
  addonsList: 'mt-6 m-0 grid list-none grid-cols-2 gap-x-8 border-y border-line p-0 max-mobile:grid-cols-1',
  addonRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 py-5 font-[700] text-ink',
  addonSecond: 'border-l border-line pl-8 max-mobile:border-l-0 max-mobile:border-t max-mobile:pl-0',
} as const;

// Residential cleaning page composition.
export const residentialUi = {
  heroSection: 'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[.92fr_1.08fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroTitle: 'max-w-[700px] text-[clamp(3rem,5vw,4.5rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.85rem]',
  heroLede: 'mt-6 max-w-[620px] text-lede leading-[1.62] max-mobile:mt-4',
  cadence: 'mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-sea-dark/15 py-4 text-[.92rem] font-[750] text-sea-dark',
  cadenceDot: 'size-1 rounded-full bg-teal/55',
  heroMedia: 'relative pb-3 pr-3',
  heroAccent: 'absolute bottom-0 right-0 h-24 w-24 rounded-panel bg-accent',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-white shadow-image',
  heroImage: 'aspect-[1.08] w-full object-cover object-[30%_center] max-mobile:aspect-[1.5] max-mobile:object-center',
  scopeSection: 'py-[78px] max-mobile:py-14',
  scopeHeader: 'flex items-end justify-between gap-10 border-b border-line pb-7 max-tablet:items-start max-mobile:flex-col max-mobile:gap-3',
  scopeHeading: 'max-w-[560px]',
  scopeIntro: 'max-w-[470px] text-[1rem] leading-[1.65] text-ink-soft',
  scopeList: 'm-0 grid list-none grid-cols-2 p-0 max-mobile:grid-cols-1',
  scopeItemBase: 'grid min-h-[104px] grid-cols-[34px_1fr] items-start gap-4 border-b border-line py-6 text-[1.02rem] leading-[1.58]',
  scopeItemEven: 'pr-10 max-mobile:pr-0',
  scopeItemOdd: 'border-l pl-10 max-mobile:border-l-0 max-mobile:pl-0',
  scopeIcon: 'mt-0.5 flex size-7 items-center justify-center rounded-full bg-cyan/20 text-teal',
  scopeIconGlyph: 'size-[17px]',
  pricingSection: 'border-y border-line bg-seafoam py-[68px] max-mobile:py-12',
  pricingGrid: 'grid grid-cols-[.82fr_1.18fr] items-start gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricePanel: 'border-l-4 border-accent pl-7 max-mobile:pl-5',
  priceTitle: 'text-[clamp(2.35rem,4vw,3.55rem)] tracking-[-.04em]',
  priceCopy: 'mt-4 max-w-[480px] text-[1.02rem] leading-[1.65]',
  addonsHeader: 'flex items-end justify-between gap-6 border-b border-line pb-4',
  addonsTitle: 'text-[clamp(1.8rem,3vw,2.35rem)]',
  addonsDecoration: 'hidden h-8 w-8 rounded-full border border-teal/30 bg-white/45 max-mobile:hidden',
  addonsList: 'm-0 list-none p-0',
  addonRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] items-start gap-3 border-b border-line py-[18px]',
  addonLabel: 'font-[700] text-ink',
} as const;

// Vacation-rental cleaning page composition.
export const rentalUi = {
  heroSection: 'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroTitle: 'max-w-[720px] text-[clamp(2.9rem,4.8vw,4.35rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.75rem]',
  heroLede: 'mt-6 max-w-[610px] text-lede leading-[1.62] max-mobile:mt-4',
  heroMedia: 'relative pb-3 pr-3',
  heroAccent: 'absolute bottom-0 right-0 h-20 w-32 rounded-panel bg-accent',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-white shadow-image',
  heroImage: 'aspect-[1.14] w-full object-cover object-[70%_center] max-mobile:aspect-[1.5]',
  scopeSection: 'py-[76px] max-mobile:py-14',
  scopeGrid: 'grid grid-cols-[.58fr_1.42fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-7',
  scopeHeading: 'max-w-[430px]',
  scopeList: 'm-0 grid list-none grid-cols-2 gap-x-8 border-t border-line p-0 max-mobile:grid-cols-1',
  scopeItemBase: 'grid min-h-[96px] grid-cols-[30px_1fr] items-start gap-3 border-b border-line py-5 text-[1.01rem] leading-[1.58]',
  scopeItemEven: 'pr-2',
  scopeItemOdd: 'border-l pl-8 max-mobile:border-l-0 max-mobile:pl-0',
  scopeIcon: 'mt-0.5 text-teal',
  pricingSection: 'border-y border-line bg-seafoam py-[70px] max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[1.12fr_.88fr] gap-14 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricingHeader: 'flex items-end justify-between gap-6',
  pricingTitle: 'text-[clamp(2.1rem,3.5vw,3rem)] tracking-[-.035em]',
  priceLabel: 'hidden text-[1rem] font-[750] text-sea-dark wide:block',
  tableWrap: 'mt-6 overflow-hidden rounded-panel border border-line border-t-4 border-t-accent bg-white',
  table: 'w-full border-collapse text-left text-small',
  tableHead: 'bg-mist/55',
  tableRow: 'border-b border-line',
  tableRowBody: 'border-b border-line last:border-b-0',
  tableHeadCellFirst: 'px-6 py-4 pr-4 font-bold max-mobile:px-4',
  tableHeadCell: 'px-6 py-4 font-bold max-mobile:px-4',
  tableBodyCellFirst: 'px-6 py-4 pr-4 font-normal max-mobile:px-4',
  tableBodyCell: 'px-6 py-4 font-bold text-sea-dark max-mobile:px-4',
  pricingCopy: 'mt-4 max-w-[690px] text-[1rem] leading-[1.65]',
  supportPanel: 'self-start rounded-panel bg-ocean px-8 py-8 text-white max-mobile:px-6',
  supportEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-cyan',
  supportTitle: 'text-[clamp(1.85rem,3vw,2.45rem)] text-white',
  supportList: 'mt-6 m-0 list-none border-t border-white/20 p-0',
  supportRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 border-b border-white/20 py-[18px] text-white/82',
  supportPlus: 'font-black text-cyan',
  supportLabel: 'font-[700]',
  supportPrice: 'font-extrabold tabular-nums text-white',
} as const;

// Service-area page composition.
export const serviceAreaUi = {
  heroSection:
    'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-8 max-mobile:pb-10',
  heroGrid:
    'grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-tablet:gap-10 max-mobile:grid-cols-1 max-mobile:gap-8',
  eyebrow:
    'mb-4 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  heroTitle:
    'max-w-[680px] text-[clamp(3rem,5vw,4.5rem)] font-black leading-[1.03] tracking-[-.04em] max-mobile:text-[2.8rem]',
  heroLede:
    'mt-5 max-w-[620px] text-lede leading-[1.62] max-mobile:text-base',
  heroActions: 'mt-7 flex flex-wrap items-center gap-5',
  phoneLink:
    'inline-flex min-h-11 items-center text-link font-[750] text-sea-dark underline underline-offset-4',
  areaPanel:
    'relative overflow-hidden rounded-panel border border-line bg-white px-7 py-7 shadow-image-soft max-mobile:px-5 max-mobile:py-6',
  areaAccent: 'absolute inset-x-0 top-0 h-1 bg-accent',
  areaKicker:
    'text-[.72rem] font-extrabold uppercase tracking-[.14em] text-teal',
  areaHeading:
    'mt-2 text-[clamp(1.8rem,3vw,2.35rem)] leading-[1.12] tracking-[-.025em]',
  cityList:
    'mt-5 grid list-none grid-cols-2 border-t border-line p-0 max-[430px]:grid-cols-1',
  city:
    'border-b border-line py-3 pr-5 text-[.96rem] font-[750] text-ink even:border-l even:pl-5 max-[430px]:border-l-0 max-[430px]:pl-0',
  areaNote:
    'mt-4 max-w-[620px] text-[.88rem] leading-[1.55] text-ink-soft',
  servicesSection: 'bg-white py-[72px] max-mobile:py-12',
  servicesHeader:
    'grid grid-cols-[.8fr_1.2fr] items-end gap-14 border-b border-line pb-7 max-tablet:grid-cols-1 max-tablet:gap-3',
  servicesEyebrow:
    'mb-3 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  servicesHeading:
    'max-w-[560px] text-[clamp(2.25rem,3.8vw,3.35rem)] leading-[1.08] tracking-[-.035em]',
  coverageIntro:
    'max-w-[620px] justify-self-end text-[1rem] leading-[1.65] text-ink-soft max-tablet:justify-self-start',
  services:
    'grid grid-cols-3 gap-x-10 border-b border-line max-tablet:grid-cols-2 max-tablet:gap-x-8 max-mobile:grid-cols-1',
  service: 'relative border-t border-line py-7',
  serviceRule: 'mb-5 block h-1 w-10 rounded-full bg-accent',
  serviceTitle: 'text-[1.22rem] leading-[1.25]',
  serviceText:
    'mt-2 max-w-[360px] text-[.94rem] leading-[1.58] text-ink-soft',
  serviceLink:
    'mt-4 inline-flex items-center gap-2 text-[.92rem] font-[750] text-sea-dark underline underline-offset-4',
} as const;

// Quote-success page composition.
export const quoteSuccessUi = {
  shell: 'max-w-[640px]',
  card: 'px-6 py-12 text-center',
  iconWrap: 'mb-6 inline-flex size-[72px] items-center justify-center rounded-full border border-line bg-white text-sea',
  title: 'mb-4 text-[clamp(2rem,4vw,3rem)]',
  actions: 'mt-8 flex flex-wrap items-center justify-center gap-4',
} as const;

// Quote page composition.
export const quoteUi = {
  section: 'bg-mist/50',
  layout: 'grid grid-cols-[1fr_340px] items-start gap-[70px] max-tablet:grid-cols-1',
  eyebrowRow: 'flex items-center gap-3',
  eyebrowRule: 'h-px w-10 bg-sea',
  title: 'mb-4 max-w-[720px] text-[clamp(2rem,3.5vw,3rem)] font-black leading-[1.12] tracking-[-.035em]',
  lede: 'mt-4',
  contactRow: 'mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-small',
  contactLink: 'inline-flex min-h-11 items-center font-bold text-sea-dark underline',
  trustPills: 'mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[.86rem] font-[750] text-sea-dark',
  form: 'quote-form mt-7 grid max-w-[600px] gap-5',
  hidden: 'hidden',
  label: 'text-label font-bold',
  fieldset: 'm-0 min-w-0 border-0 p-0',
  fieldsetLegend: 'mb-3 text-label font-bold',
  fieldGrid: 'grid gap-4',
  simpleLabel: 'text-label',
  extrasLegend: 'text-label font-bold',
  hint: 'mt-2 text-sm text-ink-soft',
  optionsGrid: 'mt-3 grid grid-cols-2 gap-x-4 max-mobile:grid-cols-1',
  optionLabel: 'flex min-h-11 cursor-pointer items-center gap-3 py-2 text-label',
  checkbox: 'size-5 shrink-0 accent-sea-dark focus-visible:outline-3 focus-visible:outline-sea-dark focus-visible:outline-offset-2',
  details: 'form-details-toggle mt-1',
  detailsSummary: 'inline-flex list-none items-center gap-1.5 text-compact-action font-bold text-sea-dark',
  detailsBody: 'mt-5 grid gap-5',
  privacy: 'text-sm text-ink-soft',
  submit: 'submit-btn mt-2.5 w-full',
  status: 'submission-status text-sm text-ink-soft',
  aside: 'sticky top-[110px] border-y border-line bg-white/70 px-6 py-7 max-tablet:hidden',
  asideHeading: 'mb-3',
  asideDescription: 'mb-5 mt-4',
  asideActions: 'grid gap-2.5',
  asideButton: 'w-full',
  asideDetailsHeading: 'mt-8 mb-3 text-[1.1rem]',
  asideList: 'mt-3 list-disc pl-5 text-small text-ink-soft',
  actionIcon: 'size-[18px]',
  validationError: 'text-sm text-danger',
} as const;
