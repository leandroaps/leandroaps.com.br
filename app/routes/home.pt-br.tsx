import { Welcome } from "@/home/home";
import { getResume } from "@/lib/resume.server";
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

export function loader() {
  return getResume("pt-br");
}

export default function HomePtBr({ loaderData }: Route.ComponentProps) {
  return <Welcome data={loaderData} />;
}
