import type { BehavioralProfile, BehavioralProfileStrings } from "@/home/types";
import { SectionLabel } from "./SectionLabel";

export function BehavioralProfileSection({
  behavioralProfile,
  strings,
}: {
  behavioralProfile: BehavioralProfile;
  strings: BehavioralProfileStrings;
}) {
  const { signals, topStrengths, traits } = behavioralProfile;

  return (
    <section id="behavioral-profile" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="05" label={strings.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{strings.title}</h2>
        </div>

        <div className="animate-on-scroll mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
            {strings.signalsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {signals.map((signal) => (
              <span
                key={signal}
                className="inline-block px-4 py-2 bg-card text-foreground text-sm rounded-full font-medium border border-border"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">
            {strings.topStrengthsLabel}
          </p>
          <p className="text-xs text-muted-foreground mb-6">{strings.topStrengthsSub}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {topStrengths.map((strength, i) => (
              <div
                key={strength.title}
                className="animate-on-scroll group bg-card rounded-2xl p-6 flex flex-col cursor-default border border-border hover:border-primary/60 transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-muted-foreground shrink-0">
                    #{strength.rank}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{strength.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">
          {strings.traitsLabel}
        </p>
        <p className="text-xs text-muted-foreground mb-6">{strings.traitsSub}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {traits.map((trait, i) => (
            <div
              key={trait.title}
              className={`animate-on-scroll group bg-card rounded-2xl p-6 flex flex-col cursor-default border border-border hover:border-primary/60 transition-colors duration-300 `}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">{trait.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
