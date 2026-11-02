import { HomePage } from "@/home/components/HomePage";
import { getContent } from "@/lib/resume.server";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => pageMeta("en", "home");

export function loader() {
  return getContent("en");
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <HomePage data={loaderData} locale="en" />;
}
