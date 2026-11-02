import { ProfilePage } from "@/home/components/ProfilePage";
import { getContent } from "@/lib/resume.server";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/profile";

export const meta: Route.MetaFunction = () => pageMeta("en", "profile");

export function loader() {
  return getContent("en");
}

export default function Profile({ loaderData }: Route.ComponentProps) {
  return <ProfilePage data={loaderData} locale="en" />;
}
