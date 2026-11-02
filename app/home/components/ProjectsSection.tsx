import type { Project, SectionHeading } from "@/home/types";
import { SectionLabel } from "./SectionLabel";

export function ProjectsSection({
  projects,
  heading,
}: {
  projects: Project[];
  heading: SectionHeading;
}) {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="07" label={heading.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">{heading.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="animate-on-scroll group bg-card rounded-2xl p-6 flex flex-col cursor-default border border-border hover:border-primary/60 transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                {project.company}
              </p>
              <h3 className="font-semibold text-foreground text-lg mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background text-muted-foreground"
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
  );
}
