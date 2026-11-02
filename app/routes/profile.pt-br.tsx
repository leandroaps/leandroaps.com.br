import { ProfilePage } from "@/home/components/ProfilePage";
import { getContent } from "@/lib/resume.server";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/profile.pt-br";

export const meta: Route.MetaFunction = () => pageMeta("pt-br", "profile");

export function loader() {
  return getContent("pt-br");
}

export default function ProfilePtBr({ loaderData }: Route.ComponentProps) {
  return <ProfilePage data={loaderData} locale="pt-br" />;
}
