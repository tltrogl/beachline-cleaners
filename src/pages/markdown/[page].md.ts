import type { APIRoute, GetStaticPaths } from 'astro';
import { agentPages, pageMarkdown } from '../../data/agent-content';

export const getStaticPaths: GetStaticPaths = () => agentPages.map(page => ({
  params: { page: page.slug },
}));

export const GET: APIRoute = ({ params, site }) => new Response(
  pageMarkdown(params.page!, site ?? new URL('https://beachlinecleaners.com')),
  { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
);
