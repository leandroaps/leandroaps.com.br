import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { content } from "@/test/fixtures";
import type { Page } from "@/lib/routes";
import { SiteLayout } from "./SiteLayout";

function renderLayout(page: Page = "home") {
  return render(
    <MemoryRouter>
      <SiteLayout ui={content.ui} locale="pt-br" page={page}>
        <p>conteúdo</p>
      </SiteLayout>
    </MemoryRouter>
  );
}

describe("SiteLayout", () => {
  afterEach(() => {
    delete document.documentElement.dataset.theme;
    localStorage.clear();
  });

  it("renders the pill nav pointing to the locale's pages", () => {
    renderLayout();
    const nav = screen.getByRole("navigation", { name: "Principal" });
    expect(within(nav).getByRole("link", { name: "Início" })).toHaveAttribute("href", "/pt-br");
    expect(within(nav).getByRole("link", { name: "Perfil" })).toHaveAttribute(
      "href",
      "/pt-br/perfil"
    );
  });

  it("marks the current page in the pill nav", () => {
    renderLayout("profile");
    const nav = screen.getByRole("navigation", { name: "Principal" });
    expect(within(nav).getByRole("link", { name: "Perfil" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(within(nav).getByRole("link", { name: "Início" })).not.toHaveAttribute("aria-current");
  });

  it("links the language switch to the same page in the other locale", () => {
    renderLayout("profile");
    const switches = screen.getAllByRole("link", { name: "View in English" });
    expect(switches).toHaveLength(2); // header + footer
    switches.forEach((a) => expect(a).toHaveAttribute("href", "/profile"));
  });

  it("shows social icons in the header and labelled links in the footer", () => {
    renderLayout();
    const header = screen.getByRole("banner");
    for (const name of ["GitHub", "LinkedIn", "Medium"]) {
      expect(within(header).getByRole("link", { name })).toBeInTheDocument();
    }
    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByText("Para networking")).toBeInTheDocument();
    expect(within(footer).getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/leandroaps"
    );
  });

  it("renders the literal copyright line", () => {
    renderLayout();
    expect(
      screen.getByText(
        "Designed and built with ❤️ by Leandro Aparecido de Siqueira. All rights reserved."
      )
    ).toBeInTheDocument();
  });

  it("toggles the theme from the header and the footer and persists it", async () => {
    const user = userEvent.setup();
    renderLayout();
    const [headerToggle, footerToggle] = screen.getAllByRole("button", {
      name: "Alternar tema claro/escuro",
    });

    await user.click(headerToggle);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");

    await user.click(footerToggle);
    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
