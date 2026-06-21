import { SectionLabel } from "@/home/components/SectionLabel";
import type { Education } from "@/home/types";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="02" label="Background" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className="animate-on-scroll bg-[#F8F8F8] rounded-2xl p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#7B7B7B] mb-3">
                {edu.year}
              </p>
              <h3 className="font-semibold text-[#222222] text-lg mb-2">{edu.institution}</h3>
              <p className="text-sm text-[#7B7B7B]">{edu.degree}</p>
              <p className="text-sm text-[#7B7B7B] mt-0.5">{edu.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
