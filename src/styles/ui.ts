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


// About page composition.
export const aboutUi = {
  heroSection: 'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-8 max-mobile:pb-10',
  eyebrow: 'mb-4 flex items-center gap-3 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  eyebrowRule: 'h-px w-10 shrink-0 bg-sea',
  eyebrowRuleTeal: 'h-px w-10 shrink-0 bg-teal',
  heroTitle: 'max-w-[800px] text-[clamp(3rem,5vw,4.5rem)] font-black leading-[1.03] tracking-[-.04em] max-mobile:text-[2.8rem]',
  heroLede: 'mt-5 max-w-[720px] text-lede leading-[1.62] max-mobile:text-base',
  storySection: 'py-[76px] max-mobile:py-14',
  storyGrid: 'grid grid-cols-[.95fr_1.05fr] items-center gap-16 max-tablet:grid-cols-1 max-tablet:gap-9',
  storyMedia: 'relative',
  storyFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  storyImage: 'aspect-[1.22] w-full object-cover object-[62%_center] max-tablet:aspect-[16/9]',
  storyHeading: 'max-w-[620px]',
  ownerTitle: 'mt-6 text-nav font-extrabold uppercase tracking-[.1em] text-sea-dark',
  ownerIntro: 'mt-3 max-w-[680px] text-lede leading-[1.62]',
  storyParagraph: 'mt-4 max-w-[680px] leading-[1.68] text-ink-soft',
  checkGrid: 'mt-12 grid grid-cols-3 border-y border-line max-tablet:grid-cols-1 max-tablet:border-b-0',
  checkItem: 'flex min-h-[94px] items-center gap-4 px-7 py-5 font-[700] leading-[1.5] max-tablet:border-b max-tablet:border-line max-tablet:px-0',
  checkItemBorder: 'border-l border-line max-tablet:border-l-0',
  checkIcon: 'flex size-7 shrink-0 items-center justify-center rounded-full bg-seafoam text-teal',
} as const;

// Commercial page composition. Keep unique visual values out of page templates.
export const commercialUi = {
  heroSection: 'border-b border-line bg-white pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[1.08fr_.92fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroMedia: 'relative order-1 max-mobile:order-2',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  heroImage: 'aspect-[1.2] w-full object-cover object-left max-mobile:aspect-[1.55]',
  heroCopy: 'order-2 max-mobile:order-1',
  eyebrowRow: 'flex items-center gap-3',
  eyebrowRule: 'h-px w-10 shrink-0 bg-teal',
  heroTitle: 'max-w-[700px] text-[clamp(2.9rem,4.8vw,4.35rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.75rem]',
  heroLede: 'mt-6 max-w-[610px] text-lede leading-[1.62] max-mobile:mt-4',
  fitNote: 'mt-4 max-w-[590px] border-l-[3px] border-teal pl-4 text-[.93rem] font-[650] leading-[1.52] text-ink-soft',
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  checklistSection: 'border-b border-line bg-mist/55 py-[74px] max-mobile:py-14',
  checklistHeader: 'flex items-end justify-between gap-12 border-b border-line pb-7 max-tablet:items-start max-mobile:flex-col max-mobile:gap-3',
  checklistAccent: 'h-1 w-10 rounded-full bg-accent',
  checklistHeading: 'max-w-[580px]',
  checklistIntro: 'max-w-[450px] text-[1rem] leading-[1.65] text-ink-soft',
  checklistGrid: 'm-0 grid list-none grid-cols-3 p-0 max-tablet:grid-cols-2 max-mobile:grid-cols-1',
  checklistItemBase: 'min-h-[160px] border-b border-line py-6 text-[.98rem] leading-[1.62]',
  checklistItemNonFirst: 'border-l pl-7 max-tablet:border-l-0 max-tablet:pl-0',
  checklistItemFirst: 'pr-7 max-tablet:pr-0',
  checklistItemMiddle: 'px-7 max-tablet:px-0',
  checklistItemLast: 'pl-7 max-tablet:pl-0',
  checklistItemTabletOdd: 'max-tablet:border-l max-tablet:pl-7 max-mobile:border-l-0 max-mobile:pl-0',
  checklistItemTabletEven: 'max-tablet:pr-7 max-mobile:pr-0',
  checklistIcon: 'mb-4 flex size-8 items-center justify-center rounded-full bg-seafoam text-teal',
  checklistIconGlyph: 'size-[18px]',
  pricingSection: 'border-y border-line bg-white py-[70px] max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[.78fr_1.22fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  darkEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  pricingTitle: 'text-[clamp(2.5rem,4.4vw,3.9rem)] tracking-[-.045em] text-ink',
  pricingCopy: 'mt-5 max-w-[470px] text-[1.02rem] leading-[1.68] text-ink-soft',
  factorList: 'mt-6 grid list-none grid-cols-2 gap-x-6 gap-y-3 border-t border-teal/20 pt-5 text-[.92rem] font-[700] text-ink max-mobile:grid-cols-1',
  factorItem: 'flex items-center gap-2.5',
  optionsTitle: 'text-[clamp(1.85rem,3vw,2.45rem)] text-ink',
  optionsIntro: 'mt-3 max-w-[650px] text-[.96rem] leading-[1.62] text-ink-soft',
  optionGroups: 'mt-6 grid gap-7',
  optionGroupHeading: 'mb-2 text-[.82rem] font-extrabold uppercase tracking-[.1em] text-sea-dark',
  optionsList: 'm-0 list-none border-t border-line p-0',
  optionItemBase: 'grid grid-cols-[28px_1fr] border-b border-line py-[16px] text-ink-soft',
  
  optionText: 'font-[700]',
  actionIcon: 'size-[18px]',
  optionPlus: 'font-black text-sea-dark',
} as const;

export const commercialChecklistItemClass = (index: number) => [
  index % 3 !== 0 ? commercialUi.checklistItemNonFirst : commercialUi.checklistItemFirst,
  index % 3 === 1 ? commercialUi.checklistItemMiddle : '',
  index % 3 === 2 ? commercialUi.checklistItemLast : '',
  index % 2 === 1 ? commercialUi.checklistItemTabletOdd : commercialUi.checklistItemTabletEven,
].filter(Boolean).join(' ');


// Deep-cleaning page composition.
export const deepUi = {
  heroSection: 'border-b border-line bg-white pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  eyebrowRule: 'h-px w-10 shrink-0 bg-teal',
  heroTitle: 'max-w-[700px] text-[clamp(3rem,5vw,4.6rem)] leading-[1.02] tracking-[-.045em] max-mobile:text-[2.85rem]',
  heroLede: 'mt-6 max-w-[620px] text-lede leading-[1.62] max-mobile:mt-4',
  fitNote: 'mt-4 max-w-[590px] border-l-[3px] border-accent pl-4 text-[.93rem] font-[650] leading-[1.52] text-ink-soft',
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  heroMedia: 'relative',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  heroImage: 'aspect-[1.16] w-full object-cover object-center max-mobile:aspect-[1.48]',
  actionIcon: 'size-[18px]',
  scopeSection: 'bg-ocean py-[74px] text-white max-mobile:py-14',
  scopeGrid: 'grid grid-cols-[.62fr_1.38fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-8',
  darkEyebrow: 'mb-3 text-eyebrow font-extrabold uppercase tracking-[.12em] text-cyan',
  darkEyebrowRule: 'h-px w-10 bg-cyan',
  scopeHeading: 'max-w-[470px] text-[clamp(2.2rem,3.5vw,3.1rem)] leading-[1.08] tracking-[-.035em] text-white',
  scopeIntro: 'mt-5 max-w-[470px] text-[.98rem] leading-[1.65] text-white/72',
  scopeList: 'm-0 grid list-none grid-cols-2 border-t border-white/20 p-0 max-mobile:grid-cols-1',
  scopeItemBase: 'grid min-h-[118px] grid-cols-[30px_1fr] items-start gap-3 border-b border-white/20 py-5 text-[1rem] leading-[1.62] text-white/82',
  scopeItemEven: 'pr-8 max-mobile:pr-0',
  scopeItemOdd: 'border-l border-white/20 pl-8 max-mobile:border-l-0 max-mobile:pl-0',
  scopeIcon: 'mt-[2px] text-cyan',
  pricingSection: 'py-[70px] max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[.9fr_1.1fr] items-start gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricePanel: 'self-start border-t-4 border-accent pt-6',
  lightEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  priceTitle: 'text-[clamp(2.45rem,4.2vw,3.7rem)] tracking-[-.045em]',
  priceCopy: 'mt-4 max-w-[520px] text-[1.02rem] leading-[1.65]',
  factorList: 'mt-6 grid list-none grid-cols-2 gap-x-7 gap-y-3 border-t border-teal/20 pt-5 text-[.94rem] font-[700] text-ink max-mobile:grid-cols-1',
  factorItem: 'flex items-center gap-2.5',
  addonsPanel: 'rounded-panel border-l-4 border-teal bg-seafoam px-8 py-8 max-mobile:px-6',
  addonsTitle: 'text-[clamp(1.85rem,3vw,2.45rem)]',
  addonsIntro: 'mt-3 max-w-[590px] text-[.98rem] leading-[1.6] text-ink-soft',
  addonsList: 'mt-5 m-0 list-none border-t border-line p-0',
  addonRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] items-start gap-3 border-b border-line py-[18px]',
  addonLabel: 'font-[700] text-ink',
  addonPrice: 'font-extrabold tabular-nums text-sea-dark',
  addonPlus: 'font-black text-sea-dark',
} as const;


// FAQ page composition.
export const faqUi = {
  heroSection: 'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-8 max-mobile:pb-10',
  heroEyebrow: 'mb-4 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  heroTitle: 'max-w-[760px] text-[clamp(3rem,5vw,4.5rem)] font-black leading-[1.03] tracking-[-.04em] max-mobile:text-[2.8rem]',
  heroLede: 'mt-5 max-w-[720px] text-lede leading-[1.62] max-mobile:text-base',
  section: 'py-[72px] max-mobile:py-12',
  contentShell: 'max-w-[980px]',
  groups: 'grid gap-10',
  group: 'grid grid-cols-[230px_1fr] gap-12 max-tablet:grid-cols-1 max-tablet:gap-5',
  groupBorder: 'border-t border-line pt-10',
  groupHeadingWrap: 'self-start',
  groupRule: 'mb-4 block h-1 w-10 rounded-full bg-accent',
  groupHeading: 'text-[1.35rem] leading-[1.25]',
  list: 'grid gap-3',
  details: 'rounded-panel border border-line bg-white px-5 py-4 open:border-sea-dark/50 open:bg-mist/20',
  summary: 'flex min-h-6 cursor-pointer list-none items-center justify-between gap-4 font-[850] text-ink hover:text-sea-dark',
  priceBlock: 'mt-4',
  priceList: 'divide-y divide-line',
  priceRow: 'grid grid-cols-[1fr_auto] items-baseline gap-4 py-3 max-[400px]:grid-cols-1 max-[400px]:gap-1',
  priceLabel: 'font-bold',
  priceValue: 'm-0 text-sea-dark tabular-nums',
  answer: 'mt-3 leading-[1.65] text-ink-soft',
  note: 'mt-4 leading-[1.65] text-ink-soft',
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
  servicesSection: 'border-b border-line bg-white py-14 max-mobile:py-10',
  servicesHeading:
    'text-[clamp(1.9rem,3vw,2.65rem)] leading-[1.15] tracking-[-.02em]',
  featuredServiceCard:
    'group/service mt-6 grid grid-cols-[1fr_1fr] overflow-hidden rounded-panel border border-line/80 bg-white shadow-[0_12px_34px_rgba(27,57,79,.08)] max-tablet:grid-cols-1',
  featuredServiceMedia:
    'relative h-[300px] overflow-hidden bg-mist max-tablet:aspect-[1.8] max-tablet:h-auto',
  serviceImage:
    'h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover/service:scale-[1.025]',
  servicePriceBadge:
    'absolute right-4 top-4 rounded-md border border-white/70 bg-white/92 px-3 py-1.5 text-[.73rem] font-extrabold text-ink shadow-sm backdrop-blur-sm',
  featuredServiceBody:
    'flex flex-col justify-center border-l border-line p-8 max-tablet:border-l-0 max-tablet:border-t max-mobile:p-6',
  featuredServiceTitle:
    'text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.08] tracking-[-.03em]',
  featuredServiceText:
    'mt-4 max-w-[520px] text-[.96rem] leading-[1.62] text-ink-soft',
  specialtyServicesGrid:
    'mt-5 grid grid-cols-2 gap-5 max-tablet:grid-cols-1',
  specialtyServiceCard:
    'group/service grid min-w-0 grid-cols-[145px_1fr] overflow-hidden rounded-panel border border-line/80 bg-white transition-[transform,box-shadow,border-color] duration-200 hover:border-sea/25 hover:shadow-[0_12px_30px_rgba(27,57,79,.08)] motion-safe:hover:-translate-y-0.5 max-mobile:grid-cols-1',
  specialtyServiceMedia:
    'min-h-[185px] overflow-hidden bg-mist max-mobile:h-[160px] max-mobile:min-h-0',
  specialtyServiceBody:
    'flex min-w-0 flex-col p-5 max-mobile:p-4',
  specialtyServiceMeta:
    'mb-2 text-[.8rem] font-bold text-sea-dark',
  serviceTitle: 'text-[1.08rem] leading-[1.25] tracking-[-.01em]',
  serviceTitleLink: 'text-ink no-underline hover:text-sea-dark',
  specialtyServiceText:
    'mt-2 text-[.95rem] leading-[1.55] text-ink-soft max-mobile:text-base',
  serviceLink:
    'mt-4 inline-flex w-fit items-center gap-2 text-[.95rem] font-[750] text-sea-dark no-underline underline-offset-4 hover:underline',
  serviceLinkIcon:
    'size-4 transition-transform duration-200 motion-safe:group-hover/service:translate-x-1',
  processSection: 'border-b border-line bg-white py-[76px] max-mobile:py-14',
  processHeader:
    'grid grid-cols-[.72fr_1.28fr] items-end gap-14 border-b border-line pb-8 max-mobile:grid-cols-1 max-mobile:gap-4',
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


// Move-out cleaning page composition.
export const moveOutUi = {
  heroSection: 'border-b border-line bg-white pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[1.07fr_.93fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroMedia: 'relative order-1 max-mobile:order-2',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-mist shadow-image',
  heroImage: 'aspect-[1.18] w-full object-cover object-left max-mobile:aspect-[1.52]',
  heroCopy: 'order-2 max-mobile:order-1',
  eyebrowRow: 'flex items-center gap-3',
  eyebrowRuleSea: 'h-px w-10 shrink-0 bg-sea',
  heroTitle: 'max-w-[690px] text-[clamp(2.9rem,4.8vw,4.35rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.75rem]',
  heroLede: 'mt-6 max-w-[590px] text-lede leading-[1.62] max-mobile:mt-4',
  fitNote: 'mt-4 max-w-[590px] border-l-[3px] border-accent pl-4 text-[.93rem] font-[650] leading-[1.52] text-ink-soft',
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  actionIcon: 'size-[18px]',
  accentRule: 'h-1 w-10 rounded-full bg-accent',
  scopeSection: 'border-b border-line bg-mist/55 py-[74px] max-mobile:py-14',
  scopeGrid: 'grid grid-cols-[.68fr_1.32fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-7',
  scopeHeading: 'max-w-[480px]',
  scopeIntro: 'mt-5 max-w-[470px] text-[.98rem] leading-[1.65] text-ink-soft',
  scopeList: 'm-0 list-none border-t border-line p-0',
  scopeItemBase: 'grid grid-cols-[34px_1fr] items-start gap-4 border-b border-line py-5 text-[1.01rem] leading-[1.6]',
  scopeIcon: 'mt-0.5 flex size-7 items-center justify-center rounded-full bg-accent/12 text-accent',
  scopeIconGlyph: 'size-[17px]',
  pricingSection: 'border-y border-line bg-seafoam py-[68px] max-mobile:py-12',
  pricingGrid: 'grid grid-cols-[.88fr_1.12fr] items-start gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricePanel: 'self-start border-t-4 border-accent pt-6',
  lightEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  priceTitle: 'text-[clamp(2.4rem,4vw,3.6rem)] tracking-[-.04em]',
  priceCopy: 'mt-4 max-w-[490px] text-[1.02rem] leading-[1.66]',
  factorList: 'mt-6 grid list-none grid-cols-2 gap-x-7 gap-y-3 border-t border-teal/20 pt-5 text-[.94rem] font-[700] text-ink max-mobile:grid-cols-1',
  factorItem: 'flex items-center gap-2.5',
  addonsPanel: 'rounded-panel bg-white px-8 py-8 shadow-[0_16px_44px_rgba(28,65,91,.06)] max-mobile:px-6',
  addonsTitle: 'text-[clamp(1.85rem,3vw,2.45rem)]',
  addonsIntro: 'mt-3 max-w-[590px] text-[.98rem] leading-[1.6] text-ink-soft',
  addonsList: 'mt-5 m-0 list-none border-t border-line p-0',
  addonRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] items-start gap-3 border-b border-line py-[18px]',
  optionPlus: 'font-black text-sea-dark',
  addonLabel: 'font-[700] text-ink',
  optionPrice: 'font-extrabold tabular-nums text-sea-dark',
} as const;

// Residential cleaning page composition.
export const residentialUi = {
  heroSection: 'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  heroTitle: 'max-w-[700px] text-[clamp(3rem,5vw,4.5rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.85rem]',
  heroLede: 'mt-6 max-w-[620px] text-lede leading-[1.62] max-mobile:mt-4',
  cadence: 'mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-sea-dark/15 py-4 text-[.92rem] text-sea-dark',
  cadenceLabel: 'font-[780]',
  cadenceDot: 'size-1 rounded-full bg-teal/55',
  heroPrice: 'mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-base font-extrabold text-ocean',
  heroMedia: 'relative',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-white shadow-image',
  heroImage: 'aspect-[1.08] w-full object-cover object-[30%_center] max-mobile:aspect-[1.45] max-mobile:object-center',
  scopeSection: 'bg-white py-16 max-mobile:py-10',
  scopeHeader: 'flex items-end justify-between gap-10 max-tablet:items-start max-mobile:flex-col max-mobile:gap-3',
  scopeHeading: 'max-w-[560px]',
  scopeIntro: 'max-w-[500px] text-[1rem] leading-[1.65] text-ink-soft',
  scopeList: 'mb-0 mt-9 grid list-none grid-cols-2 gap-x-14 gap-y-7 p-0 max-mobile:mt-7 max-mobile:grid-cols-1 max-mobile:gap-y-5',
  scopeItemBase: 'grid grid-cols-[40px_1fr] items-start gap-4',
  scopeItemTitle: 'text-[1.08rem] leading-[1.35] text-ocean',
  scopeItemText: 'mt-1.5 text-base leading-[1.6] text-ink-soft',
  scopeIcon: 'flex size-10 items-center justify-center rounded-[14px] bg-seafoam text-teal',
  scopeIconGlyph: 'size-5',
  pricingSection: 'border-y border-line bg-seafoam py-[68px] max-mobile:py-12',
  pricingGrid: 'grid grid-cols-[.9fr_1.1fr] items-start gap-16 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricePanel: 'rounded-panel border-t-4 border-accent bg-white p-7 shadow-image-soft max-mobile:p-5',
  priceEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  priceTitle: 'text-[clamp(2rem,3.1vw,2.75rem)] leading-[1.12] tracking-[-.035em] text-ocean',
  priceCopy: 'mt-4 max-w-[480px] text-[1.02rem] leading-[1.65]',
  factorList: 'mt-6 grid list-none grid-cols-2 gap-x-7 gap-y-3 border-t border-teal/20 pt-5 text-[.94rem] font-[700] text-ink max-mobile:grid-cols-1',
  factorItem: 'flex items-center gap-2.5',
  addonsHeader: 'border-b border-line pb-5',
  addonsEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
  addonsTitle: 'text-[clamp(1.8rem,3vw,2.35rem)]',
  addonsIntro: 'mt-3 max-w-[590px] text-[.98rem] leading-[1.6] text-ink-soft',
  addonsList: 'm-0 list-none p-0',
  addonRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] items-start gap-3 border-b border-line py-[18px]',
  addonPlus: 'font-black text-sea-dark',
  addonLabel: 'font-[700] text-ink',
  addonPrice: 'font-extrabold tabular-nums text-sea-dark',
} as const;

// Vacation-rental cleaning page composition.
export const rentalUi = {
  heroSection: 'border-b border-line bg-mist pt-12 pb-14 max-mobile:pt-7 max-mobile:pb-9',
  heroGrid: 'grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-tablet:gap-9 max-mobile:grid-cols-1 max-mobile:gap-7',
  eyebrowRow: 'flex items-center gap-3',
  eyebrowRuleSea: 'h-px w-10 shrink-0 bg-sea',
  heroTitle: 'max-w-[720px] text-[clamp(2.9rem,4.8vw,4.35rem)] leading-[1.03] tracking-[-.04em] max-mobile:text-[2.75rem]',
  heroLede: 'mt-6 max-w-[610px] text-lede leading-[1.62] max-mobile:mt-4',
  fitNote: 'mt-4 max-w-[590px] border-l-[3px] border-teal pl-4 text-[.93rem] font-[650] leading-[1.52] text-ink-soft',
  heroActions: 'mt-7 flex flex-wrap items-center gap-control-gap',
  actionIcon: 'size-[18px]',
  heroMedia: 'relative',
  heroFigure: 'relative m-0 overflow-hidden rounded-panel bg-white shadow-image',
  heroImage: 'aspect-[1.14] w-full object-cover object-[70%_center] max-mobile:aspect-[1.5]',
  accentRule: 'h-1 w-10 rounded-full bg-accent',
  scopeSection: 'py-[74px] max-mobile:py-14',
  scopeGrid: 'grid grid-cols-[.58fr_1.42fr] gap-16 max-tablet:grid-cols-1 max-tablet:gap-7',
  scopeHeading: 'max-w-[430px]',
  scopeIntro: 'mt-5 max-w-[440px] text-[.98rem] leading-[1.65] text-ink-soft',
  scopeList: 'm-0 list-none border-t border-line p-0',
  scopeItemBase: 'grid grid-cols-[34px_1fr] items-start gap-4 border-b border-line py-5 text-[1.01rem] leading-[1.58]',
  scopeNumber: 'pt-0.5 text-[.72rem] font-extrabold tracking-[.12em] text-teal',
  pricingSection: 'border-y border-line bg-seafoam py-[70px] max-mobile:py-14',
  pricingGrid: 'grid grid-cols-[1.12fr_.88fr] gap-14 max-tablet:grid-cols-1 max-tablet:gap-10',
  pricingHeader: 'flex items-end justify-between gap-6',
  pricingEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-sea-dark',
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
  factorList: 'mt-5 grid list-none grid-cols-2 gap-x-7 gap-y-3 border-t border-teal/20 pt-5 text-[.93rem] font-[700] text-ink max-mobile:grid-cols-1',
  factorItem: 'flex items-center gap-2.5',
  supportPanel: 'self-start rounded-panel bg-ocean px-8 py-8 text-white max-mobile:px-6',
  supportEyebrow: 'mb-2 text-eyebrow font-extrabold uppercase tracking-[.12em] text-cyan',
  supportTitle: 'text-[clamp(1.85rem,3vw,2.45rem)] text-white',
  supportIntro: 'mt-3 text-[.96rem] leading-[1.62] text-white/72',
  supportList: 'mt-5 m-0 list-none border-t border-white/20 p-0',
  supportRow: 'grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 border-b border-white/20 py-[18px] text-white/82 max-[430px]:grid-cols-[30px_1fr] max-[430px]:gap-y-1',
  supportPlus: 'font-black text-cyan',
  supportLabel: 'font-[700]',
  supportPrice: 'font-extrabold tabular-nums text-white max-[430px]:col-start-2',
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
  areaAccent: 'absolute inset-x-0 top-0 h-1 bg-teal',
  areaKicker:
    'text-[.72rem] font-extrabold uppercase tracking-[.14em] text-teal',
  areaHeading:
    'mt-2 text-[clamp(1.8rem,3vw,2.35rem)] leading-[1.12] tracking-[-.025em]',
  cityList:
    'mt-5 grid list-none grid-cols-3 gap-x-6 border-t border-line p-0 max-mobile:grid-cols-2 max-[430px]:grid-cols-1',
  city:
    'border-b border-line py-3 text-[.95rem] font-[750] text-ink',
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
    'grid grid-cols-6 gap-x-10 border-b border-line max-tablet:grid-cols-2 max-tablet:gap-x-8 max-mobile:grid-cols-1',
  service: 'relative border-t border-line py-7',
  serviceTopRow: 'col-span-2 max-tablet:col-span-1',
  serviceBottomRow: 'col-span-3 max-tablet:col-span-1',
  serviceRule: 'mb-5 block h-1 w-10 rounded-full bg-teal',
  serviceTitle: 'text-[1.22rem] leading-[1.25]',
  serviceText:
    'mt-2 max-w-[420px] text-[.94rem] leading-[1.58] text-ink-soft',
  serviceLink:
    'mt-4 inline-flex items-center gap-2 text-[.92rem] font-[750] text-sea-dark underline underline-offset-4',
} as const;

export const serviceAreaServiceClass = (index: number) =>
  index < 3 ? serviceAreaUi.serviceTopRow : serviceAreaUi.serviceBottomRow;

// Quote-success page composition.
export const quoteSuccessUi = {
  section: 'bg-mist/50 py-[72px] max-mobile:py-12',
  shell: 'max-w-[680px]',
  card: 'rounded-panel border border-line bg-white px-8 py-12 text-center shadow-image-soft max-mobile:px-6 max-mobile:py-10',
  iconWrap: 'mb-6 inline-flex size-[72px] items-center justify-center rounded-full bg-seafoam text-sea-dark',
  title: 'mb-4 text-[clamp(2rem,4vw,3rem)] tracking-[-.035em]',
  actions: 'mt-8 flex flex-wrap items-center justify-center gap-4',
} as const;

// Quote page composition.
export const quoteUi = {
  section: 'bg-mist/40 py-[52px] max-mobile:py-8',
  layout: 'grid grid-cols-[minmax(0,1fr)_320px] items-start gap-[58px] max-tablet:grid-cols-1',
  eyebrowRow: 'mb-3 flex items-center gap-3 text-eyebrow font-extrabold uppercase tracking-[.11em] text-sea-dark',
  eyebrowRule: 'h-px w-10 bg-sea',
  title: 'max-w-[720px] text-[clamp(2.35rem,4vw,3.45rem)] font-black leading-[1.08] tracking-[-.04em]',
  lede: 'mt-3 max-w-[700px] text-[1.06rem] leading-[1.6] text-ink-soft',
  contactRow: 'mt-4 hidden flex-wrap items-center gap-x-5 gap-y-2 text-small max-tablet:flex',
  contactLink: 'inline-flex min-h-11 items-center font-bold text-sea-dark underline underline-offset-4',
  trustPills: 'mt-4 flex flex-wrap gap-2.5 text-[.84rem] font-[750] text-sea-dark',
  form: 'quote-form mt-6 grid max-w-[720px] gap-0 overflow-hidden rounded-panel border border-line bg-white shadow-image-soft',
  hidden: 'hidden',
  label: 'text-label font-bold',
  formSection: 'grid gap-4 border-b border-line px-7 py-6 max-mobile:px-5 max-mobile:py-5',
  formSectionHeader: 'mb-1',
  formSectionKicker: 'mb-1 text-[.72rem] font-extrabold uppercase tracking-[.13em] text-teal',
  formSectionTitle: 'text-[1.22rem] leading-[1.25] tracking-[-.015em]',
  fieldset: 'm-0 min-w-0 border-0 p-0',
  fieldsetLegend: 'mb-3 text-label font-bold',
  fieldGrid: 'grid gap-4',
  fieldGridThree: 'grid grid-cols-3 gap-4 max-[680px]:grid-cols-1',
  simpleLabel: 'text-label font-[700]',
  extrasLegend: 'text-label font-bold',
  hint: 'mt-2 text-sm leading-[1.55] text-ink-soft',
  optionsGrid: 'mt-2 grid grid-cols-2 gap-x-5 max-mobile:grid-cols-1',
  optionLabel: 'flex min-h-11 cursor-pointer items-center gap-3 py-2 text-[.96rem] leading-[1.45]',
  checkbox: 'size-5 shrink-0 accent-sea-dark focus-visible:outline-3 focus-visible:outline-sea-dark focus-visible:outline-offset-2',
  estimatePanel: 'mx-7 my-6 rounded-panel border border-teal/25 bg-seafoam/70 px-6 py-5 max-mobile:mx-5 max-mobile:px-5',
  estimateKicker: 'text-[.72rem] font-extrabold uppercase tracking-[.13em] text-teal',
  estimateHeading: 'mt-1 text-[1.1rem] font-bold text-ink',
  estimatePrice: 'mt-2 text-[clamp(1.8rem,4vw,2.55rem)] font-black leading-[1.08] tracking-[-.035em] text-sea-dark',
  estimateBasis: 'mt-3 max-w-[620px] text-[.9rem] leading-[1.55] text-ink-soft',
  details: 'form-details-toggle mx-7 my-5 rounded-panel border border-line bg-mist/30 px-5 py-4 max-mobile:mx-5',
  detailsSummary: 'inline-flex list-none items-center gap-1.5 text-compact-action font-bold text-sea-dark',
  detailsBody: 'mt-5 grid gap-5',
  privacy: 'mx-7 mt-1 text-sm leading-[1.55] text-ink-soft max-mobile:mx-5',
  submit: 'submit-btn mx-7 mt-4 mb-7 w-[calc(100%-56px)] max-mobile:mx-5 max-mobile:mb-5 max-mobile:w-[calc(100%-40px)]',
  status: 'submission-status mx-7 -mt-3 mb-6 text-sm text-ink-soft max-mobile:mx-5',
  aside: 'sticky top-[110px] overflow-hidden rounded-panel border border-line bg-white px-6 py-7 shadow-image-soft max-tablet:hidden',
  asideHeading: 'mb-3',
  asideDescription: 'mb-5 mt-4 leading-[1.6] text-ink-soft',
  asideActions: 'grid gap-2.5',
  asideButton: 'w-full',
  asideDetailsHeading: 'mt-8 mb-3 text-[1.1rem]',
  asideList: 'mt-3 list-disc pl-5 text-small leading-[1.6] text-ink-soft',
  actionIcon: 'size-[18px]',
  validationError: 'text-sm text-danger',
} as const;
