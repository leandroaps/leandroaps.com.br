import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="01" label="About" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-on-scroll" style={{ transitionDelay: "80ms" }}>
            <p className="text-lg text-[#7B7B7B] leading-relaxed mb-5">
              With 20+ years of experience in front-end development, I specialise in building
              high-performance web applications using React and TypeScript. I deliver scalable,
              compliant and user-focused solutions for enterprise clients across multiple sectors.
            </p>
            <p className="text-lg text-[#7B7B7B] leading-relaxed">
              Throughout my career I have grown from hands-on developer to Technical Lead and Agile
              Master, combining deep technical skills with the ability to mentor teams, define
              architecture and drive delivery pipelines with quality and consistency. I am
              passionate about clean code, accessibility, performance optimisation and Agile
              methodologies.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-4 animate-on-scroll"
            style={{ transitionDelay: "160ms" }}
          >
            {[
              { stat: "20+", label: "Years of experience" },
              { stat: "30+", label: "Projects delivered" },
              { stat: "5+", label: "Companies leading digital transformations" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-bold text-[#222222]">{stat}</p>
                <p className="text-sm text-[#7B7B7B] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
