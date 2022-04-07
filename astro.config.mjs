import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [tailwind(), sitemap()],
});
