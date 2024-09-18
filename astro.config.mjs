import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://valentramos.github.io',
  base: 'fan',
  output: "static",
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
});