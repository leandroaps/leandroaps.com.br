import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leandro A. Siqueira — Senior Front-End Engineer" },
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
