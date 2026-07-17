import type { NavItem, UIStrings } from "@/home/types";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "../icons";

export function Footer({ navItems, footer }: { navItems: NavItem[]; footer: UIStrings["footer"] }) {
  return (
    <footer className="bg-[#222222] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">Leandro Aparecido de Siqueira</h3>
            <p className="text-sm text-[#9B9B9B] leading-relaxed">{footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9B9B9B] mb-4">
              {footer.navigationLabel}
            </h4>
            <ul className="space-y-2">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[#9B9B9B] hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9B9B9B] mb-4">
              {footer.connectLabel}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:leandroaps@gmail.com"
                  className="text-sm text-[#9B9B9B] hover:text-white transition-colors"
                >
                  leandroaps@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leandroaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-white transition-colors"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leandroaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-white transition-colors"
                >
                  <GitHubIcon /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@leandroaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-white transition-colors"
                >
                  <MediumIcon /> Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9B9B9B]">
            © {new Date().getFullYear()} Leandro Aparecido de Siqueira. {footer.rights}
          </p>
          <p className="text-xs text-[#9B9B9B]">{footer.builtWith}</p>
          <p className="text-xs text-[#9B9B9B]">
            <a
              href="https://unsplash.com/@thommilkovic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#9B9B9B] hover:text-white transition-colors"
            >
              {footer.photoCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
