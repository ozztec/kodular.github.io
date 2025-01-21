import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kodular-github-io.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [yaml()]
  },
  experimental: {
    redirects: true
  },
  redirects: {
    '/account': 'https://account.kodular-github-io.vercel.app/',
    '/ide': 'https://ide.kodular-github-io.vercel.app/',
    '/store': 'https://store.kodular-github-io.vercel.app/',
  }
});
