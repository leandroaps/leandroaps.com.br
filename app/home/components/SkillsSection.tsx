import type { SkillGroup } from "@/home/types";
import { SectionLabel } from "./SectionLabel";
import { SeeOnLinkedIn } from "./SeeOnLinkedIn";

export function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="04" label="Expertise" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#222222] mb-4 pb-3 border-b border-[#F8F8F8]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 bg-[#F8F8F8] text-[#222222] text-sm rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <SeeOnLinkedIn url="skills" />
      </div>
    </section>
  );
}
