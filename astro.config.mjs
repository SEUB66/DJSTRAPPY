import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://seub66.github.io",
  base: "/DJSTRAPPY",
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
