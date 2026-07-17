import resumeContent from "@/content/resume.pt-br.json";
import { Welcome } from "@/home/home";
import type { ResumeData } from "@/home/types";
import type { Route } from "./+types/home.pt-br";

export function meta() {
  return [
    { title: "Leandro Aparecido de Siqueira — Engenheiro Front-End Sênior" },
    {
      name: "description",
      content:
        "Engenheiro Front-End Sênior especializado em React & TypeScript, com mais de 20 anos construindo produtos web escaláveis. Líder Técnico e praticante de metodologias ágeis, baseado em Campinas, Brasil.",
    },
  ];
}

export function loader(): ResumeData {
  return resumeContent as ResumeData;
}

export default function HomePtBr({ loaderData }: Route.ComponentProps) {
  return <Welcome data={loaderData} />;
}
