import { HomePage } from "@/home/components/HomePage";
import { getContent } from "@/lib/resume.server";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/home.pt-br";

export const meta: Route.MetaFunction = () => pageMeta("pt-br", "home");

export function loader() {
  return getContent("pt-br");
}

export default function HomePtBr({ loaderData }: Route.ComponentProps) {
  return <HomePage data={loaderData} locale="pt-br" />;
}
