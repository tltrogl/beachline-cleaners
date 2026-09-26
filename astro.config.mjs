import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://tltrogl.github.io',
  base: process.env.ASTRO_BASE !== undefined ? process.env.ASTRO_BASE : '/boost',
  integrations: [sitemap()]
});