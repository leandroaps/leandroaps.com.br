import resumeContent from "@/content/resume.json";
import { Welcome } from "@/home/home";
import type { ResumeData } from "@/home/types";
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

export function loader(): ResumeData {
  return resumeContent as ResumeData;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome data={loaderData} />;
}
