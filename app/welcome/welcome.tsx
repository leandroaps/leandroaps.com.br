import { useEffect, useState } from "react";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      width="28"
      height="28"
      aria-hidden="true"
    >
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Recommendations", href: "#recommendations" },
];

const EXPERIENCE = [
  {
    company: "Venturus",
    role: "Senior Front-End Software Engineer",
    period: "Jun 2023 – May 2026",
    location: "Campinas, SP",
    highlights: [
      "Led performance overhaul boosting app performance by 300%",
      "Migrated to Vite, reducing bundle to <25% of original size",
      "Achieved 80%+ code coverage after Vitest migration",
      "Built enterprise apps with React, TypeScript & Ant Design",
    ],
    tags: ["React", "TypeScript", "Vite", "Vitest", "Ant Design"],
  },
  {
    company: "Pravaler",
    role: "Senior Front-End Software Engineer",
    period: "Mar 2023 – Jun 2023",
    location: "São Paulo, SP",
    highlights: [
      "Resolved critical issues and added features to Portal do Aluno",
      "Improved architecture and observability of the student portal",
    ],
    tags: ["React", "TypeScript", "Architecture"],
  },
  {
    company: "Itaú Unibanco",
    role: "Technical Lead",
    period: "Jan 2022 – Jan 2023",
    location: "São Paulo, Brazil",
    highlights: [
      "Led Ativos Community to deliver enterprise credit projects",
      "Applied INVEST principles, managed story scope and delivery",
      "Delivered 4 major features: Credit Menu PJ, Cadastro Positivo and more",
    ],
    tags: ["Angular", "Technical Lead", "Agile", "Design System"],
  },
  {
    company: "Vitat",
    role: "Technical Lead",
    period: "Jul 2021 – Dec 2021",
    location: "São Paulo",
    highlights: [
      "Defined front-end architecture for a health scheduling platform",
      "Facilitated Agile ceremonies and led performance reviews",
      "Ensured delivery quality through hands-on technical guidance",
    ],
    tags: ["Architecture", "Agile", "Technical Lead"],
  },
  {
    company: "UOL",
    role: "Agile Master & Senior Front-End Engineer",
    period: "Jan 2017 – Jun 2021",
    location: "São Paulo, Brazil",
    highlights: [
      "Contributed to SSO project improving auth flows for users",
      "Modernised class-based React to functional components + Hooks",
      "Built E2E and unit tests with Cypress & Browserstack",
      "Facilitated stand-ups, sprint planning and retrospectives",
      "Supported CI/CD pipelines with Docker, Kubernetes & Jenkins",
    ],
    tags: ["React", "Cypress", "Docker", "Kubernetes", "Agile Master"],
  },
  {
    company: "3M",
    role: "Senior Digital Project Lead",
    period: "Oct 2012 – Nov 2015",
    location: "Campinas, SP",
    highlights: [
      "Managed digital operations portfolio for Latin America",
      "Led IBM WCM vendor training across regional teams",
      "Liaison between technical and business stakeholders",
    ],
    tags: ["Project Management", "IBM WCM", "Latin America"],
  },
];

const EDUCATION = [
  {
    institution: "Fundação Getulio Vargas",
    degree: "Master of Business Administration",
    field: "Information Technology",
    year: "2011",
  },
  {
    institution: "Universidade Paulista",
    degree: "Bachelor's Degree",
    field: "Digital Communication & Multimedia",
    year: "2003 – 2005",
  },
  {
    institution: "PUC Campinas",
    degree: "Bachelor's Degree",
    field: "Computer Engineering",
    year: "1998 – 2001",
  },
];

const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Ant Design",
      "Angular",
      "jQuery",
      "Bootstrap",
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      "Vite",
      "Webpack",
      "Vitest",
      "Cypress",
      "Browserstack",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
    ],
  },
  {
    category: "Practices & Leadership",
    items: [
      "Agile / Scrum",
      "Technical Leadership",
      "Performance Optimisation",
      "Accessibility & SEO",
      "CI/CD",
      "Code Review",
      "Team Mentoring",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Claude Code — The Practical Guide", issuer: "Anthropic" },
  {
    name: "Enterprise Agile: Changing Your Culture",
    issuer: "LinkedIn Learning",
  },
  { name: "Coding Exercises: React.js", issuer: "LinkedIn Learning" },
  { name: "Managing Virtual Teams", issuer: "LinkedIn Learning" },
  { name: "Building Modern Projects with React", issuer: "LinkedIn Learning" },
];

const PROJECTS = [
  {
    title: "Front-End Performance Overhaul",
    company: "Venturus",
    description:
      "Migrated to Vite and Vitest, adopted pure CSS configurations, delivering a 300% performance gain and reducing bundle size by 75%.",
    tags: ["Vite", "Vitest", "CSS", "Performance"],
  },
  {
    title: "Portal do Aluno",
    company: "Pravaler",
    description:
      "Improved architecture, resolved critical bugs and enhanced observability of the student portal platform used by thousands of students.",
    tags: ["React", "TypeScript", "Architecture"],
  },
  {
    title: "Single Sign-On (SSO)",
    company: "UOL",
    description:
      "Contributed to the SSO project in collaboration with the UX team, improving authentication flows for millions of users.",
    tags: ["React", "SSO", "UX Collaboration"],
  },
  {
    title: "Ativos Banking Platform",
    company: "Itaú Unibanco",
    description:
      "Led delivery of 4 enterprise credit features: Cliente sem Crédito, Menu de Crédito PJ, Cadastro Positivo and Declaração de Faturamento.",
    tags: ["Angular", "Technical Lead", "Enterprise"],
  },
  {
    title: "Health Scheduling Platform",
    company: "Vitat",
    description:
      "Defined front-end architecture and technical standards for a health platform used by pharmacists and store managers.",
    tags: ["Architecture", "Scheduling", "Healthcare"],
  },
  {
    title: "Data Center Ops Tools",
    company: "UOL DIVEO",
    description:
      "Built interactive dashboards integrating REST/JSON services to control, monitor and automate core infrastructure operations.",
    tags: ["JavaScript", "jQuery", "REST", "Infrastructure"],
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -30% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Small reusable components ────────────────────────────────────────────────

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7B7B7B] mb-3">
      {n} — {label}
    </p>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-[#7B7B7B]/25 text-[#7B7B7B]">
      {label}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Welcome() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useActiveSection();
  useScrollAnimation();

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (!el) return;
    const top = (el as HTMLElement).offsetTop - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  }

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    scrollTo(href);
  }

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      {/* ── Fixed Navigation ── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#F8F8F8]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNav(e, "#hero")}
            className="text-[#222222] font-semibold text-base tracking-tight shrink-0"
          >
            Leandro Siqueira
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map(({ label, href }) => (
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

            {/* Social icons */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 text-[#222222]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#F8F8F8] px-6 py-4">
            {NAV_ITEMS.map(({ label, href }) => (
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

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-6 bg-cover bg-center bg-no-repeat text-center"
        style={{
          backgroundImage: "url('/damien-dufour-BUm3ke-GfPQ-unsplash.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#222222]/60" />

        {/* Photo */}
        <div className="relative z-10 mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg shrink-0">
          {photoError ? (
            <div className="w-full h-full flex items-center justify-center bg-[#222222] text-white text-3xl font-semibold select-none">
              LAS
            </div>
          ) : (
            <img
              src="/photo.jpg"
              alt="Leandro Aparecido de Siqueira"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
              onError={() => setPhotoError(true)}
            />
          )}
        </div>

        <p className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
          Campinas · São Paulo · Brazil
        </p>

        <h1 className="relative z-10 text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Leandro Aparecido de Siqueira
        </h1>

        <div
          className="hero-subtitle relative z-10 text-left mb-10 max-w-sm"
          style={{ borderLeftColor: "rgba(255,255,255,0.4)" }}
        >
          <p className="text-lg text-white/70 leading-relaxed">
            Senior Front-End Engineer
            <br />
            React &amp; TypeScript · Technical Lead
            <br />
            Agile · 20+ Years of Experience
          </p>
        </div>

        {/* CTAs */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/leandroaps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#222222] text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leandroaps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@leandroaps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white/70 text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            <MediumIcon /> Medium
          </a>
        </div>

        {/* Scroll caret */}
        <div className="scroll-caret absolute bottom-10 left-1/2 z-10 text-white/60">
          <ChevronDownIcon />
        </div>
      </section>

      {/* ── About Me ── */}
      <section id="about" className="py-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="01" label="About" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div
              className="lg:col-span-2 animate-on-scroll"
              style={{ transitionDelay: "80ms" }}
            >
              <p className="text-lg text-[#7B7B7B] leading-relaxed mb-5">
                With 20+ years of experience in front-end development, I
                specialise in building high-performance web applications using
                React and TypeScript. I deliver scalable, compliant and
                user-focused solutions for enterprise clients across multiple
                sectors.
              </p>
              <p className="text-lg text-[#7B7B7B] leading-relaxed">
                Throughout my career I have grown from hands-on developer to
                Technical Lead and Agile Master, combining deep technical skills
                with the ability to mentor teams, define architecture and drive
                delivery pipelines with quality and consistency. I am passionate
                about clean code, accessibility, performance optimisation and
                Agile methodologies.
              </p>
            </div>

            <div
              className="grid grid-cols-1 gap-4 animate-on-scroll"
              style={{ transitionDelay: "160ms" }}
            >
              {[
                { stat: "20+", label: "Years of experience" },
                { stat: "30+", label: "Projects delivered" },
                { stat: "5+", label: "Companies led digital transformations" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-white rounded-2xl p-6">
                  <p className="text-4xl font-bold text-[#222222]">{stat}</p>
                  <p className="text-sm text-[#7B7B7B] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="02" label="Background" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION.map((edu, i) => (
              <div
                key={edu.institution}
                className="animate-on-scroll bg-[#F8F8F8] rounded-2xl p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-[#7B7B7B] mb-3">
                  {edu.year}
                </p>
                <h3 className="font-semibold text-[#222222] text-lg mb-2">
                  {edu.institution}
                </h3>
                <p className="text-sm text-[#7B7B7B]">{edu.degree}</p>
                <p className="text-sm text-[#7B7B7B] mt-0.5">{edu.field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="03" label="Work" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">
              Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={exp.company + exp.period}
                className="animate-on-scroll bg-white rounded-2xl p-6 flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-1">
                  <h3 className="font-semibold text-[#222222] text-base">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[#7B7B7B] mt-0.5">{exp.role}</p>
                </div>
                <p className="text-xs text-[#7B7B7B] mb-4">
                  {exp.period} · {exp.location}
                </p>
                <ul className="space-y-2 flex-1 mb-4">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-[#7B7B7B] flex gap-2 leading-snug"
                    >
                      <span className="text-[#222222] shrink-0 mt-0.5">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F8F8F8]">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="04" label="Expertise" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">
              Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SKILLS.map((group, i) => (
              <div
                key={group.category}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#222222] mb-4 pb-3 border-b border-[#F8F8F8]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 bg-[#F8F8F8] text-[#222222] text-sm rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="py-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="05" label="Credentials" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert.name}
                className="animate-on-scroll bg-white rounded-2xl p-6 flex items-start gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F8F8] flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-[#7B7B7B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#222222] leading-snug mb-1">
                    {cert.name}
                  </p>
                  <p className="text-xs text-[#7B7B7B]">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="06" label="Selected Work" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">
              Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                className="animate-on-scroll group bg-[#F8F8F8] rounded-2xl p-6 flex flex-col cursor-default hover:bg-[#222222] transition-colors duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-[#7B7B7B] mb-2 group-hover:text-[#7B7B7B]">
                  {project.company}
                </p>
                <h3 className="font-semibold text-[#222222] group-hover:text-white text-lg mb-3 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#7B7B7B] leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222222]/5 group-hover:border-white/10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white group-hover:bg-white/10 text-[#7B7B7B] group-hover:text-white/70 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommendations ── */}
      <section id="recommendations" className="py-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll">
            <SectionLabel n="07" label="Testimonials" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
              Recommendations
            </h2>
            <p className="text-[#7B7B7B] text-base mb-12">
              View colleague and manager recommendations on{" "}
              <a
                href="https://www.linkedin.com/in/leandroaps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222222] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                my LinkedIn profile
              </a>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="animate-on-scroll bg-white rounded-2xl p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl text-[#F8F8F8] font-serif leading-none mb-4 select-none">
                  "
                </div>
                <p className="text-sm text-[#7B7B7B] leading-relaxed italic mb-6">
                  Leandro consistently demonstrates exceptional technical
                  leadership and an ability to drive measurable results through
                  architecture decisions and team mentoring.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F8F8F8] shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#222222]">
                      LinkedIn Colleague
                    </p>
                    <a
                      href="https://www.linkedin.com/in/leandroaps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#7B7B7B] hover:text-[#222222] transition-colors"
                    >
                      See on LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#222222] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Leandro Aparecido de Siqueira
              </h3>
              <p className="text-sm text-[#9B9B9B] leading-relaxed">
                Senior Front-End Engineer based in Campinas, São Paulo, Brazil.
                Building scalable web products with React &amp; TypeScript.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9B9B9B] mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map(({ label, href }) => (
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

            {/* Connect */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9B9B9B] mb-4">
                Connect
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
                    className="text-sm text-[#9B9B9B] hover:text-white transition-colors"
                  >
                    LinkedIn
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
              © {new Date().getFullYear()} Leandro Aparecido de Siqueira. All
              rights reserved.
            </p>
            <p className="text-xs text-[#9B9B9B]">
              Designed and built with ❤️ in Campinas, São Paulo, Brazil.
            </p>
            <p className="text-xs text-[#9B9B9B]">
              <a
                href="https://unsplash.com/@damien_dufour"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#9B9B9B] hover:text-white transition-colors"
              >
                Photo by Damien Dufour on Unsplash
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
