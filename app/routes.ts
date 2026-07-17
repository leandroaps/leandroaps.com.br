import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("pt-br", "routes/home.pt-br.tsx"),
] satisfies RouteConfig;
