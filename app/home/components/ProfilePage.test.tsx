import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { content } from "@/test/fixtures";
import { ProfilePage } from "./ProfilePage";

describe("ProfilePage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProfilePage data={content} locale="pt-br" />
      </MemoryRouter>
    );
  });

  it("renders the profile header", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Leandro Aparecido de Siqueira" })
    ).toBeVisible();
    expect(screen.getByText("Campinas · São Paulo · Brasil")).toBeVisible();
  });

  it("renders the six numbered sections", () => {
    for (const title of [
      "Sobre mim",
      "Experiência",
      "Educação",
      "Habilidades",
      "Perfil comportamental",
      "Recomendações",
    ]) {
      expect(screen.getByRole("heading", { level: 2, name: title })).toBeVisible();
    }
    expect(screen.getByText("01 — Sobre")).toBeVisible();
  });

  it("renders the behavioral profile", () => {
    expect(screen.getByText("Naturalmente curioso")).toBeVisible();
    expect(screen.getByText("#1")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Orientação ao Cliente" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Confiabilidade" })).toBeVisible();
  });

  it("renders recommendations linking to LinkedIn", () => {
    expect(screen.getByText("Very much a team player.")).toBeVisible();
    const links = [
      screen.getByRole("link", { name: "meu perfil do LinkedIn" }),
      screen.getByRole("link", { name: /Ver no LinkedIn/ }),
    ];
    links.forEach((a) =>
      expect(a).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/leandroaps/details/recommendations/"
      )
    );
  });

  it("hides the separator when an experience has no location", () => {
    expect(screen.getByText("2010 – 2012")).toBeVisible();
    expect(screen.queryByText(/2010 – 2012 ·/)).not.toBeInTheDocument();
  });

  it("renders content from every table", () => {
    expect(screen.getByText("Parágrafo dois.")).toBeVisible();
    expect(screen.getByText("20+")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Venturus" })).toBeVisible();
    expect(screen.getByText("Jun 2023 – Mai 2026 · Campinas, SP")).toBeVisible();
    expect(screen.getByText("Engenharia da Computação")).toBeVisible();
    expect(screen.getByText("TypeScript")).toBeVisible();
  });
});
