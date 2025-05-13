import { defineConfig } from "astro/config";
import { SITE } from "./src/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  site: SITE.url,

  vite: {
    plugins: [tailwindcss()],
  },
});