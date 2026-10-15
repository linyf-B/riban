import { defineConfig } from "astro/config";

const site = process.env.SITE_URL || "https://riban.pages.dev";

export default defineConfig({
  site,
});
