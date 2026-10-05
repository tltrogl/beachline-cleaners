import { colorTokens } from '../data/design-tokens';

export const prerender = true;

export function GET() {
  const primary = colorTokens['sea-dark'];
  const secondary = colorTokens.teal;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs><clipPath id="mark"><circle cx="50" cy="50" r="50"/></clipPath></defs>
  <g clip-path="url(#mark)">
    <circle cx="50" cy="50" r="50" fill="${primary}"/>
    <path d="M-5 67C24 54 58 57 105 43V105H-5Z" fill="${secondary}"/>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
