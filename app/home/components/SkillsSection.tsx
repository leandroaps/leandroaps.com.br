import type { SectionHeading, SkillGroup } from "@/home/types";
import { SectionLabel } from "./SectionLabel";
import { SeeOnLinkedIn } from "./SeeOnLinkedIn";

export function SkillsSection({
  skills,
  heading,
  seeOnLinkedIn,
}: {
  skills: SkillGroup[];
  heading: SectionHeading;
  seeOnLinkedIn: string;
}) {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="04" label={heading.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">{heading.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-4 pb-3 border-b border-border">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 bg-card text-foreground text-sm rounded-lg font-medium cursor-default hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <SeeOnLinkedIn url="skills" label={seeOnLinkedIn} />
      </div>
    </section>
  );
}
