import type { BehavioralProfile } from "@/home/types";
import { SectionLabel } from "./SectionLabel";

export function BehavioralProfileSection({
  behavioralProfile,
}: {
  behavioralProfile: BehavioralProfile;
}) {
  const { signals, topStrengths, traits } = behavioralProfile;

  return (
    <section id="behavioral-profile" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="05" label="Soft Skills" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">Behavioral Profile</h2>
        </div>

        <div className="animate-on-scroll mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7B7B7B] mb-4">
            Your strongest signals
          </p>
          <div className="flex flex-wrap gap-2">
            {signals.map((signal) => (
              <span
                key={signal}
                className="inline-block px-4 py-2 bg-white text-[#222222] text-sm rounded-full font-medium border border-[#E8E8E8]"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7B7B7B] mb-1">
            Top strengths
          </p>
          <p className="text-xs text-[#7B7B7B] mb-6">Where you stand out</p>
          <div className="grid md:grid-cols-3 gap-6">
            {topStrengths.map((strength, i) => (
              <div
                key={strength.title}
                className="animate-on-scroll group bg-white rounded-2xl p-6 flex flex-col cursor-default hover:bg-[#222222] transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#7B7B7B] shrink-0 group-hover:text-white/50 transition-colors duration-300">
                    #{strength.rank}
                  </span>
                  <h3 className="text-sm font-semibold text-[#222222] group-hover:text-white transition-colors duration-300">
                    {strength.title}
                  </h3>
                </div>
                <p className="text-xs text-[#7B7B7B] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {traits.map((trait, i) => (
            <div
              key={`${trait.title}-${i}`}
              className={`animate-on-scroll group bg-white rounded-2xl p-6 flex flex-col cursor-default hover:bg-[#222222] transition-colors duration-300 ${
                trait.isSeniorComposite ? "ring-2 ring-[#222222] hover:ring-transparent" : ""
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-sm font-semibold text-[#222222] group-hover:text-white mb-2 transition-colors duration-300">
                {trait.title}
              </h3>
              <p className="text-xs text-[#7B7B7B] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
