// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://klasse-epoxy.nl',
  trailingSlash: 'never',
  integrations: [react()],
  vite: {
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  },
});