/**
 * Canonical Beachline color values.
 *
 * Keep every site color value here and express it in OKLCH. Components, pages,
 * Tailwind theme aliases, metadata, and generated brand assets should consume
 * these tokens instead of defining raw color values independently.
 */
export const colorTokens = {
  'ink': 'oklch(0.279495 0.036848 260.0310)',
  'ink-soft': 'oklch(0.395783 0.018779 242.2137)',
  'paper': 'oklch(1 0 0)',
  'sand': 'oklch(0.959288 0.014316 84.5834)',
  'mist': 'oklch(0.947201 0.023137 213.6185)',
  'seafoam': 'oklch(0.946871 0.019624 172.7819)',
  'ocean': 'oklch(0.340387 0.056662 216.8098)',
  'deep-ocean': 'oklch(0.287399 0.041398 224.4488)',
  'field-line': 'oklch(0.624760 0.031301 225.0123)',
  'sea': 'oklch(0.684687 0.147869 237.3225)',
  'sea-dark': 'oklch(0.480210 0.104970 237.0755)',
  'cyan': 'oklch(0.816919 0.103267 202.3757)',
  'teal': 'oklch(0.476124 0.084133 215.0523)',
  'accent': 'oklch(0.555436 0.150783 9.2482)',
  'line': 'oklch(0.828097 0.017815 248.0432)',
  'danger': 'oklch(0.500336 0.182051 29.5127)',
  'footer-text': 'oklch(0.977108 0.012486 236.6197)',
  'overlay': 'oklch(0 0 0)',
  'neutral-soft': 'oklch(0.927582 0.005814 264.5313)',
} as const;

export type ColorTokenName = keyof typeof colorTokens;

/** Runtime CSS custom properties consumed by the Tailwind theme in site.css. */
export const colorTokenStyle = Object.entries(colorTokens)
  .map(([name, value]) => `--bl-${name}:${value}`)
  .join(';');
