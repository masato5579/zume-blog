import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  output: "static",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    mode: 'directory'  // Cloudflare Pages で動作するように変更
  }),
});
