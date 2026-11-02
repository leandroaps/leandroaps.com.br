import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/", "/profile", "/pt-br", "/pt-br/perfil"],
} satisfies Config;
