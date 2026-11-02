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

  it("shows the name for projects without a logo and the logo image otherwise", () => {
    renderHome();
    expect(screen.getByRole("heading", { name: "GAEL" })).toBeVisible();
    expect(screen.getByText("gael.org.br")).toBeVisible();
    expect(screen.getByRole("img", { name: "Bernardo" })).toBeInTheDocument();
    expect(screen.queryByText("bernardo.pet")).not.toBeInTheDocument();
  });

  it("shows each project's role", () => {
    renderHome();
    expect(screen.getByText("Colaborador")).toBeVisible();
    expect(screen.getByText("Founder")).toBeVisible();
  });

  it("renders the in-progress chips", () => {
    renderHome();
    expect(screen.getByText("Novos produtos digitais")).toBeVisible();
  });
});
