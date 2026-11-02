import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { content } from "@/test/fixtures";
import { HomePage } from "./HomePage";

function renderHome() {
  return render(
    <MemoryRouter>
      <HomePage data={content} locale="pt-br" />
    </MemoryRouter>
  );
}

describe("HomePage", () => {
  it("renders the hero copy from the content", () => {
    renderHome();
    expect(screen.getByRole("heading", { level: 1, name: "Leandro A. Siqueira" })).toBeVisible();
    expect(screen.getByText("Tecnologia, educação e projetos com propósito.")).toBeVisible();
    expect(screen.getByRole("link", { name: /Ver projetos/ })).toHaveAttribute("href", "#projetos");
    expect(screen.getByRole("link", { name: "Conhecer meu perfil" })).toHaveAttribute(
      "href",
      "/pt-br/perfil"
    );
  });

  it("renders the projects section under the locale's anchor", () => {
    const { container } = renderHome();
    expect(container.querySelector("section#projetos")).not.toBeNull();
  });

  it("shows each project's name and domain as text", () => {
    renderHome();
    expect(screen.getByRole("heading", { name: "GAEL" })).toBeVisible();
    expect(screen.getByText("gael.org.br")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Bernardo" })).toBeVisible();
    expect(screen.getByText("bernardo.pet")).toBeVisible();
    expect(screen.queryByRole("img", { name: "Bernardo" })).not.toBeInTheDocument();
  });

  it("renders work projects without a URL as plain cards with the company", () => {
    renderHome();
    const heading = screen.getByRole("heading", { name: "Ferramentas de Operação de Data Center" });
    expect(heading.closest("a")).toBeNull();
    expect(heading.closest("article")).not.toBeNull();
    expect(screen.getByText("UOL DIVEO")).toBeVisible();
  });

  it("shows each project's role", () => {
    renderHome();
    expect(screen.getByText("Colaborador")).toBeVisible();
    expect(screen.getByText("Founder")).toBeVisible();
  });

  it("links each article to Medium and offers a link to all articles", () => {
    renderHome();
    expect(screen.getByRole("heading", { level: 2, name: "Artigos" })).toBeVisible();
    expect(
      screen.getByRole("link", { name: /Understanding the JavaScript Event Loop/ })
    ).toHaveAttribute("href", "https://medium.com/@leandroaps/event-loop");
    expect(screen.getByText("5 jan 2026")).toBeVisible();
    expect(screen.getByRole("link", { name: /Ver todos no Medium/ })).toHaveAttribute(
      "href",
      "https://medium.com/@leandroaps"
    );
  });

  it("no longer renders the in-progress block", () => {
    renderHome();
    expect(screen.queryByText("Em desenvolvimento")).not.toBeInTheDocument();
  });
});
