import type { LanguageSwitch, NavItem } from "@/home/types";
import { useState } from "react";
import Logo from "@assets/leandroaps_logo_dark.png";
import { useActiveSection, useScrolled } from "@hooks";
import { CloseIcon, GitHubIcon, LinkedInIcon, MediumIcon, MenuIcon } from "../icons";
import { scrollToSection } from "@utils/scroll";

export function NavBar({
  navItems,
  languageSwitch,
}: {
  navItems: NavItem[];
  languageSwitch: LanguageSwitch;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useActiveSection();

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    scrollToSection(href);
    setMobileOpen(false);
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="text-foreground font-semibold text-base tracking-tight shrink-0"
        >
          <img
            src={Logo}
            alt="Leandro Siqueira"
            className="w-10 h-10 rounded-full float-left mr-2 flex-auto"
          />
        </a>
        <h1 className="text-foreground font-semibold text-base tracking-tight whitespace-nowrap shrink-0 mr-2">
          Leandro Siqueira
        </h1>

        <div className="hidden xl:flex items-center gap-7">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className={`nav-link text-sm whitespace-nowrap transition-colors duration-200 ${
                activeSection === href.slice(1)
                  ? "text-foreground font-medium is-active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}

          <div className="flex items-center gap-3 pl-5 border-l border-border">
            <a
              href="https://github.com/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://medium.com/@leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MediumIcon />
            </a>
            <a
              href={languageSwitch.href}
              aria-label={languageSwitch.ariaLabel}
              className="text-xs font-semibold tracking-wider whitespace-nowrap text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1 transition-colors"
            >
              {languageSwitch.label}
            </a>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="xl:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-background border-t border-border px-6 py-4">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="flex items-center py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
            <a
              href="https://github.com/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://medium.com/@leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors"
            >
              <MediumIcon /> Medium
            </a>
            <a
              href={languageSwitch.href}
              aria-label={languageSwitch.ariaLabel}
              className="text-xs font-semibold tracking-wider whitespace-nowrap text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1 transition-colors"
            >
              {languageSwitch.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
