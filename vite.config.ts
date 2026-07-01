import path from "path";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), ViteImageOptimizer({
    jpg: { quality: 80 },
    jpeg: { quality: 80 },
    webp: { quality: 80 },
    png: { quality: 80 },
  }), cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
});