import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leandro Aparecido de Siqueira — Senior Front-End Engineer" },
    {
      name: "description",
      content:
        "Senior Front-End Engineer specializing in React & TypeScript with 20+ years building scalable web products. Technical Lead, Agile practitioner, based in Campinas, Brazil.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
