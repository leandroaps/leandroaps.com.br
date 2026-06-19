import { EXPERIENCE } from "../data";
import { SectionLabel } from "./SectionLabel";
import { SeeOnLinkedIn } from "./SeeOnLinkedIn";
import { Tag } from "./Tag";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="03" label="Work" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company + exp.period}
              className="animate-on-scroll bg-white rounded-2xl p-6 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-1">
                <h3 className="font-semibold text-[#222222] text-base">{exp.company}</h3>
                <p className="text-sm text-[#7B7B7B] mt-0.5">{exp.role}</p>
              </div>
              <p className="text-xs text-[#7B7B7B] mb-4">
                {exp.period} · {exp.location}
              </p>
              <ul className="space-y-2 flex-1 mb-4">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-[#7B7B7B] flex gap-2 leading-snug">
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
        <SeeOnLinkedIn url="experience" />
      </div>
    </section>
  );
}
