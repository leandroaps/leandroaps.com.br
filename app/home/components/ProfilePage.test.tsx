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

  it("renders the four numbered sections", () => {
    for (const title of ["Sobre mim", "Experiência", "Educação", "Habilidades"]) {
      expect(screen.getByRole("heading", { level: 2, name: title })).toBeVisible();
    }
    expect(screen.getByText("01 — Sobre")).toBeVisible();
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
