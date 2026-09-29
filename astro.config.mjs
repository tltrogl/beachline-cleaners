import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beachlinecleaners.com',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => new URL(page).pathname !== '/quote-success/' })],
  vite: { plugins: [tailwindcss()] }
});

