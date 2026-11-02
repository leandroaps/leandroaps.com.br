import { SectionLabel } from "@/home/components/SectionLabel";
import type { Education, SectionHeading } from "@/home/types";

export function EducationSection({
  education,
  heading,
}: {
  education: Education[];
  heading: SectionHeading;
}) {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="02" label={heading.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">{heading.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className="animate-on-scroll group bg-card rounded-2xl p-6 cursor-default border border-border hover:border-primary/60 transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                {edu.year}
              </p>
              <h3 className="font-semibold text-foreground text-lg mb-2">{edu.institution}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{edu.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
