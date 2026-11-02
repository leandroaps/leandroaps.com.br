import type { NavItem, UIStrings } from "@/home/types";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "../icons";

// Evaluated once at module load (build time when prerendering), keeping render pure.
const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ navItems, footer }: { navItems: NavItem[]; footer: UIStrings["footer"] }) {
  return (
    <footer className="bg-footer text-footer-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">Leandro Aparecido de Siqueira</h3>
            <p className="text-sm text-footer-muted leading-relaxed">{footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-footer-muted mb-4">
              {footer.navigationLabel}
            </h4>
            <ul className="space-y-2">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-footer-muted mb-4">
              {footer.connectLabel}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:leandroaps@gmail.com"
                  className="text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                >
                  leandroaps@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leandroaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leandroaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                >
                  <GitHubIcon /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@leandroaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-footer-muted hover:text-footer-foreground transition-colors"
                >
                  <MediumIcon /> Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-footer-muted">
            © {CURRENT_YEAR} Leandro Aparecido de Siqueira. {footer.rights}
          </p>
          <p className="text-xs text-footer-muted">{footer.builtWith}</p>
          <p className="text-xs text-footer-muted">
            <a
              href="https://unsplash.com/@thommilkovic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-footer-muted hover:text-footer-foreground transition-colors"
            >
              {footer.photoCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
