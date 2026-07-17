import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { LanguageSwitch, NavItem } from "@/home/types";
import { NavBar } from "./NavBar";

vi.mock("../hooks", () => ({
  useActiveSection: vi.fn(() => "about"),
  useScrolled: vi.fn(() => false),
}));

vi.mock("../utils/scroll", () => ({
  scrollToSection: vi.fn(),
}));

const navItems: NavItem[] = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const languageSwitch: LanguageSwitch = {
  label: "PT-BR",
  href: "/pt-br",
  ariaLabel: "Ver versão em português",
};

describe("NavBar", () => {
  it("renders the brand name", () => {
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);
    expect(screen.getByText("Leandro Siqueira")).toBeInTheDocument();
  });

  it("renders all nav items in desktop nav", () => {
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);
    const links = screen.getAllByRole("link", { name: "About Me" });
    expect(links.length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole("link", { name: "Skills" }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole("link", { name: "Experience" }).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the mobile menu toggle button", () => {
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);
    expect(screen.getByRole("button", { name: "Toggle menu" })).toBeInTheDocument();
  });

  it("mobile menu is hidden by default", () => {
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);
    // Each nav item appears once (desktop only) before the menu is opened
    expect(screen.getAllByRole("link", { name: "About Me" })).toHaveLength(1);
  });

  it("opens mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);

    await user.click(screen.getByRole("button", { name: "Toggle menu" }));

    // After opening: desktop + mobile = 2 instances of each nav item
    expect(screen.getAllByRole("link", { name: "About Me" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "Skills" })).toHaveLength(2);
  });

  it("closes mobile menu on second button click", async () => {
    const user = userEvent.setup();
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);

    const toggleBtn = screen.getByRole("button", { name: "Toggle menu" });
    await user.click(toggleBtn);
    await user.click(toggleBtn);

    expect(screen.getAllByRole("link", { name: "About Me" })).toHaveLength(1);
  });

  it("highlights the active section link", () => {
    render(<NavBar navItems={navItems} languageSwitch={languageSwitch} />);
    const aboutLinks = screen.getAllByRole("link", { name: "About Me" });
    // The desktop link gets the active class
    const activeLink = aboutLinks.find((l) => l.classList.contains("is-active"));
    expect(activeLink).toBeDefined();
  });
});
