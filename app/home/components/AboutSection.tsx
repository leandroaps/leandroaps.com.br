import type { About, SectionHeading } from "@/home/types";
import { SectionLabel } from "./SectionLabel";

export function AboutSection({ about, heading }: { about: About; heading: SectionHeading }) {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="01" label={heading.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">{heading.title}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-on-scroll" style={{ transitionDelay: "80ms" }}>
            {about.paragraphs.map((p) => (
              <p key={p} className="text-lg text-muted-foreground leading-relaxed mb-5">
                {p}
              </p>
            ))}
          </div>

          <div
            className="grid grid-cols-1 gap-4 animate-on-scroll"
            style={{ transitionDelay: "160ms" }}
          >
            {about.stats.map(({ stat, label }) => (
              <div
                key={label}
                className="group bg-card rounded-2xl p-6 cursor-default border border-border hover:border-primary/60 transition-colors duration-300"
              >
                <p className="text-4xl font-bold text-foreground">{stat}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
