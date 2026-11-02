import path from "path";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// Chrome DevTools probes this URL on localhost; answer it before it reaches
// the router so it doesn't log "No route matches URL" on every probe.
function chromeDevtoolsWorkspace(): Plugin {
  return {
    name: "chrome-devtools-workspace",
    configureServer(server) {
      server.middlewares.use("/.well-known/appspecific/com.chrome.devtools.json", (_req, res) => {
        res.statusCode = 404;
        res.end();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Expose non-VITE_ vars from .env (e.g. DATABASE_URL) to server-only code such as
  // route loaders, which run at build time for prerendering. Never reaches the client.
  process.env.DATABASE_URL ??= loadEnv(mode, process.cwd(), "").DATABASE_URL;

  return {
    plugins: [
      chromeDevtoolsWorkspace(),
      tailwindcss(),
      reactRouter(),
      ViteImageOptimizer({
        jpg: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { quality: 80 },
        png: { quality: 80 },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./app"),
        "@assets": path.resolve(import.meta.dirname, "./assets"),
        "@hooks": path.resolve(import.meta.dirname, "./app/home/hooks"),
        "@utils": path.resolve(import.meta.dirname, "./app/home/utils"),
      },
    },
  };
});
