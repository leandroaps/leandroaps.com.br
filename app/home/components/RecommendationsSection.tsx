import type { Recommendation, RecommendationsStrings } from "@/home/types";
import { LinkedInButton } from "./LinkedInButton.tsx";
import { SectionLabel } from "./SectionLabel";

export function RecommendationsSection({
  recommendations,
  strings,
  seeOnLinkedIn,
}: {
  recommendations: Recommendation[];
  strings: RecommendationsStrings;
  seeOnLinkedIn: string;
}) {
  return (
    <section id="recommendations" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="08" label={strings.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{strings.title}</h2>
          <p className="text-muted-foreground text-base mb-12">
            {strings.introBefore}
            <a
              href="https://www.linkedin.com/in/leandroaps/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              {strings.introLink}
            </a>
            {strings.introAfter}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.text}
              className="animate-on-scroll group bg-card rounded-2xl p-6 cursor-default border border-border hover:border-primary/60 transition-colors duration-300"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="text-5xl text-border group-hover:text-primary font-serif leading-none mb-4 select-none transition-colors duration-300">
                &ldquo;
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                {rec.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{strings.authorLabel}</p>
                  <LinkedInButton url={"recommendations"} label={seeOnLinkedIn} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
