export const PRICING_VERSION = '2026-10-04-v2';

export type HomeFrequency = 'weekly' | 'biweekly' | 'monthly' | 'one-time';
export type VacationTier = 'studio-1-1' | '2-2' | '3-2' | '4-3' | 'custom';

export interface ResidentialExtrasInput {
  oven?: boolean;
  refrigerator?: boolean;
  cabinetInteriors?: boolean;
  standardWindows?: number;
}

export interface EstimateResult {
  status: 'estimated' | 'custom';
  price?: number;
  display: string;
  note?: string;
  requiresConfirmation?: boolean;
}

export const pricing = {
  home: {
    startingPrice: 125,
    baseBiweekly: 140,
    includedBedrooms: 1,
    includedFullBathrooms: 1,
    additionalBedroom: 10,
    additionalFullBathroom: 20,
    halfBathroom: 10,
    sizeAdjustments: [
      { maxSqFt: 1800, amount: 0 },
      { maxSqFt: 2400, amount: 10 },
      { maxSqFt: 3000, amount: 30 },
      { maxSqFt: 3500, amount: 50 },
    ],
    frequencyMultipliers: {
      weekly: 0.9,
      biweekly: 1,
      monthly: 1.2,
      'one-time': 1.35,
    } satisfies Record<HomeFrequency, number>,
    limits: {
      bedrooms: 4,
      fullBathrooms: 3,
      squareFeet: 3500,
    },
  },
  deep: {
    startingPrice: 275,
    deepDetailBase: 85,
    sizeAdjustments: [
      { maxSqFt: 1800, amount: 0 },
      { maxSqFt: 2400, amount: 10 },
      { maxSqFt: 3000, amount: 15 },
      { maxSqFt: 3500, amount: 25 },
    ],
  },
  move: {
    startingPrice: 350,
    base: 350,
    includedBedrooms: 1,
    includedFullBathrooms: 1,
    additionalBedroom: 25,
    additionalFullBathroom: 25,
    halfBathroom: 15,
    sizeAdjustments: [
      { maxSqFt: 1800, amount: 0 },
      { maxSqFt: 2400, amount: 25 },
      { maxSqFt: 3000, amount: 50 },
      { maxSqFt: 3500, amount: 75 },
    ],
    maxSquareFeet: 3500,
  },
  addOns: {
    oven: 45,
    refrigerator: 55,
    cabinetInteriorsFrom: 60,
    standardWindow: 10,
  },
  vacationRental: {
    startingPrice: 125,
    tiers: [
      { id: 'studio-1-1', label: 'Studio / 1 bedroom / 1 bathroom', price: 125 },
      { id: '2-2', label: '2 bedrooms / 2 bathrooms', price: 150 },
      { id: '3-2', label: '3 bedrooms / 2 bathrooms', price: 175 },
      { id: '4-3', label: '4 bedrooms / 3 bathrooms', price: 225 },
      { id: 'custom', label: 'Larger or other layout', price: null },
    ] as const,
    laundryPerLoad: 25,
    restockingPerTurnover: 25,
  },
  commercial: {
    publicLabel: 'Custom quote',
  },
} as const;

export const publicPriceLabels = {
  home: `From $${pricing.home.startingPrice} per visit`,
  deep: `From $${pricing.deep.startingPrice} per visit`,
  move: `From $${pricing.move.startingPrice} per visit`,
  vacationRental: `From $${pricing.vacationRental.startingPrice} per turnover`,
  commercial: pricing.commercial.publicLabel,
} as const;

export const formatMoney = (amount: number): string => `$${Math.round(amount).toLocaleString('en-US')}`;
export const roundToNearestFive = (amount: number): number => Math.round(amount / 5) * 5;

const sizeAdjustment = (
  squareFeet: number,
  tiers: readonly { maxSqFt: number; amount: number }[],
): number | null => {
  if (!Number.isFinite(squareFeet) || squareFeet <= 0) return null;
  return tiers.find((tier) => squareFeet <= tier.maxSqFt)?.amount ?? null;
};

const residentialExtras = (extras: ResidentialExtrasInput = {}) => {
  const standardWindows = Math.max(0, Math.floor(extras.standardWindows ?? 0));
  return {
    amount:
      (extras.oven ? pricing.addOns.oven : 0)
      + (extras.refrigerator ? pricing.addOns.refrigerator : 0)
      + (extras.cabinetInteriors ? pricing.addOns.cabinetInteriorsFrom : 0)
      + standardWindows * pricing.addOns.standardWindow,
    isFrom: Boolean(extras.cabinetInteriors),
  };
};

const customQuote = (note: string): EstimateResult => ({
  status: 'custom',
  display: 'Custom quote',
  note,
});

export function estimateHome(input: {
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms?: number;
  squareFeet: number;
  frequency: HomeFrequency;
  extras?: ResidentialExtrasInput;
}): EstimateResult {
  const bedrooms = input.bedrooms === 0 ? 1 : Math.floor(input.bedrooms);
  const fullBathrooms = Math.floor(input.fullBathrooms);
  const halfBathrooms = Math.max(0, Math.floor(input.halfBathrooms ?? 0));

  if (
    bedrooms < 1
    || fullBathrooms < 1
    || bedrooms > pricing.home.limits.bedrooms
    || fullBathrooms > pricing.home.limits.fullBathrooms
    || input.squareFeet > pricing.home.limits.squareFeet
  ) {
    return customQuote('This home is outside the automatic estimate limits.');
  }

  const size = sizeAdjustment(input.squareFeet, pricing.home.sizeAdjustments);
  if (size === null) return customQuote('We need a little more property information before pricing this clean.');

  const biweekly =
    pricing.home.baseBiweekly
    + Math.max(0, bedrooms - pricing.home.includedBedrooms) * pricing.home.additionalBedroom
    + Math.max(0, fullBathrooms - pricing.home.includedFullBathrooms) * pricing.home.additionalFullBathroom
    + halfBathrooms * pricing.home.halfBathroom
    + size;

  const baseVisitPrice = roundToNearestFive(biweekly * pricing.home.frequencyMultipliers[input.frequency]);
  const extras = residentialExtras(input.extras);
  const price = baseVisitPrice + extras.amount;

  return {
    status: 'estimated',
    price,
    display: `${extras.isFrom ? 'From ' : ''}${formatMoney(price)} per visit`,
    requiresConfirmation: extras.isFrom,
    note: extras.isFrom
      ? 'Cabinet-interior pricing starts at the amount included here and is confirmed with the final scope.'
      : undefined,
  };
}

export function estimateDeep(input: {
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms?: number;
  squareFeet: number;
  extras?: ResidentialExtrasInput;
}): EstimateResult {
  const home = estimateHome({ ...input, frequency: 'one-time', extras: {} });
  if (home.status === 'custom' || home.price === undefined) return home;

  const deepSize = sizeAdjustment(input.squareFeet, pricing.deep.sizeAdjustments);
  if (deepSize === null) return customQuote('This home is outside the automatic estimate limits.');

  const extras = residentialExtras(input.extras);
  const price = home.price + pricing.deep.deepDetailBase + deepSize + extras.amount;
  return {
    status: 'estimated',
    price,
    display: `${extras.isFrom ? 'From ' : ''}${formatMoney(price)} per visit`,
    requiresConfirmation: extras.isFrom,
    note: extras.isFrom
      ? 'Cabinet-interior pricing starts at the amount included here and is confirmed with the final scope.'
      : undefined,
  };
}

export function estimateMove(input: {
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms?: number;
  squareFeet: number;
  isEmpty: boolean;
  customCondition?: boolean;
  extras?: Omit<ResidentialExtrasInput, 'cabinetInteriors'>;
}): EstimateResult {
  if (!input.isEmpty) return customQuote('Furnished or not-yet-empty move cleans need a custom quote.');
  if (input.customCondition) return customQuote('Construction cleanup, excessive debris, severe buildup, or unusual conditions need a custom quote.');

  const bedrooms = input.bedrooms === 0 ? 1 : Math.floor(input.bedrooms);
  const fullBathrooms = Math.floor(input.fullBathrooms);
  const halfBathrooms = Math.max(0, Math.floor(input.halfBathrooms ?? 0));
  if (bedrooms < 1 || fullBathrooms < 1 || input.squareFeet > pricing.move.maxSquareFeet) {
    return customQuote('This property is outside the automatic move-clean estimate limits.');
  }

  const size = sizeAdjustment(input.squareFeet, pricing.move.sizeAdjustments);
  if (size === null) return customQuote('We need a little more property information before pricing this move clean.');

  const extras = residentialExtras(input.extras);
  const price =
    pricing.move.base
    + Math.max(0, bedrooms - pricing.move.includedBedrooms) * pricing.move.additionalBedroom
    + Math.max(0, fullBathrooms - pricing.move.includedFullBathrooms) * pricing.move.additionalFullBathroom
    + halfBathrooms * pricing.move.halfBathroom
    + size
    + extras.amount;

  return {
    status: 'estimated',
    price,
    display: `${formatMoney(price)} per visit`,
  };
}

export function estimateVacationRental(input: {
  tier: VacationTier;
  laundryLoads?: number;
  restocking?: boolean;
  customCondition?: boolean;
}): EstimateResult {
  if (input.customCondition || input.tier === 'custom') {
    return customQuote('This turnover needs a quick review before we can price it accurately.');
  }

  const tier = pricing.vacationRental.tiers.find((item) => item.id === input.tier);
  if (!tier || tier.price === null) return customQuote('This turnover needs a custom quote.');

  const laundryLoads = Math.max(0, Math.floor(input.laundryLoads ?? 0));
  const price = tier.price
    + laundryLoads * pricing.vacationRental.laundryPerLoad
    + (input.restocking ? pricing.vacationRental.restockingPerTurnover : 0);

  return {
    status: 'estimated',
    price,
    display: `${formatMoney(price)} per turnover`,
  };
}
