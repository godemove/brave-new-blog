import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: SITE.url,
});
