import type { Experience, SectionHeading } from "@/home/types";
import { SectionLabel } from "./SectionLabel";
import { SeeOnLinkedIn } from "./SeeOnLinkedIn";
import { Tag } from "./Tag";

export function ExperienceSection({
  experience,
  heading,
  seeOnLinkedIn,
}: {
  experience: Experience[];
  heading: SectionHeading;
  seeOnLinkedIn: string;
}) {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="03" label={heading.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">{heading.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((exp, i) => (
            <div
              key={exp.company + exp.period}
              className="animate-on-scroll group bg-card rounded-2xl p-6 flex flex-col cursor-default border border-border hover:border-primary/60 transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-1">
                <h3 className="font-semibold text-foreground text-base">{exp.company}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{exp.role}</p>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {exp.period} · {exp.location}
              </p>
              <ul className="space-y-2 flex-1 mb-4">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex gap-2 leading-snug">
                    <span className="text-foreground shrink-0 mt-0.5">·</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {exp.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <SeeOnLinkedIn url="experience" label={seeOnLinkedIn} />
      </div>
    </section>
  );
}
