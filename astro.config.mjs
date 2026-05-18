// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://zeepay-lyart.vercel.app/",
  integrations: [
    mdx(),
    robotsTxt(),
    sitemap({
      entryLimit: 1000,
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
