import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// Published on GitHub Pages as a project site: https://valentramos.github.io/fan/
// Internal links and assets must use `withBase()` (src/lib/utils.ts) so they include this base.
export default defineConfig({
  site: 'https://valentramos.github.io',
  base: '/fan',
  output: "static",
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
});
