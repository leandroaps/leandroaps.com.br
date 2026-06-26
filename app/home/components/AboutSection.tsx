import type { About } from "@/home/types";
import { SectionLabel } from "./SectionLabel";

export function AboutSection({ about }: { about: About }) {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="01" label="About" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-on-scroll" style={{ transitionDelay: "80ms" }}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-[#7B7B7B] leading-relaxed mb-5">
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
                className="group bg-white rounded-2xl p-6 cursor-default hover:bg-[#222222] transition-colors duration-300"
              >
                <p className="text-4xl font-bold text-[#222222] group-hover:text-white transition-colors duration-300">
                  {stat}
                </p>
                <p className="text-sm text-[#7B7B7B] mt-1 group-hover:text-white/70 transition-colors duration-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
