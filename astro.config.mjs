import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beachlinecleaners.com',
  build: {
    format: 'file'
  },
  trailingSlash: 'never',
  integrations: [sitemap()]
});