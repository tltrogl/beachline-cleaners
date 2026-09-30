import type { APIRoute } from 'astro';
import { siteGuide } from '../data/agent-content';

export const GET: APIRoute = ({ site }) => new Response(
  siteGuide(site ?? new URL('https://beachlinecleaners.com')),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
