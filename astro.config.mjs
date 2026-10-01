import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beachlinecleaners.com',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !['/quote-success/', '/404/', '/404.html'].includes(new URL(page).pathname) })],
  vite: { plugins: [tailwindcss()] }
});

