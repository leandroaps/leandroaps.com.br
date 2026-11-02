import { Welcome } from "@/home/home";
import { getResume } from "@/lib/resume.server";
import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Leandro Aparecido de Siqueira — Senior Front-End Engineer" },
    {
      name: "description",
      content:
        "Senior Front-End Engineer specializing in React & TypeScript with 20+ years building scalable web products. Technical Lead, Agile practitioner, based in Campinas, Brazil.",
    },
  ];
}

export function loader() {
  return getResume("en");
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome data={loaderData} />;
}
