import type { NavItem } from "@/home/types";
import { useState } from "react";
import { useActiveSection, useScrolled } from "../hooks";
import { CloseIcon, GitHubIcon, MediumIcon, MenuIcon } from "../icons";
import { scrollToSection } from "../utils/scroll";

export function NavBar({ navItems }: { navItems: NavItem[] }) {
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
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#F8F8F8]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="text-[#222222] font-semibold text-base tracking-tight shrink-0"
        >
          Leandro Siqueira
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className={`nav-link text-sm transition-colors duration-200 ${
                activeSection === href.slice(1)
                  ? "text-[#222222] font-medium is-active"
                  : "text-[#7B7B7B] hover:text-[#222222]"
              }`}
            >
              {label}
            </a>
          ))}

          <div className="flex items-center gap-3 pl-5 border-l border-[#F8F8F8]">
            <a
              href="https://github.com/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://medium.com/@leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <MediumIcon />
            </a>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden p-2 text-[#222222]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#F8F8F8] px-6 py-4">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="flex items-center py-3 text-sm text-[#7B7B7B] hover:text-[#222222] border-b border-[#F8F8F8] last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="https://medium.com/@leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <MediumIcon /> Medium
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
