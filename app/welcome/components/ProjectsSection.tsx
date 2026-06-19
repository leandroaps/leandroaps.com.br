import { PROJECTS } from "../data";
import { SectionLabel } from "./SectionLabel";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="06" label="Selected Work" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="animate-on-scroll group bg-[#F8F8F8] rounded-2xl p-6 flex flex-col cursor-default hover:bg-[#222222] transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#7B7B7B] mb-2 group-hover:text-[#7B7B7B]">
                {project.company}
              </p>
              <h3 className="font-semibold text-[#222222] group-hover:text-white text-lg mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-[#7B7B7B] leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222222]/5 group-hover:border-white/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white group-hover:bg-white/10 text-[#7B7B7B] group-hover:text-white/70 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
