import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Keep in sync with PATHS (app/lib/routes.ts) and prerender (react-router.config.ts).
export default [
  index("routes/home.tsx"),
  route("profile", "routes/profile.tsx"),
  route("pt-br", "routes/home.pt-br.tsx"),
  route("pt-br/perfil", "routes/profile.pt-br.tsx"),
] satisfies RouteConfig;
