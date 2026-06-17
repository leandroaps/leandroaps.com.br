import { SectionLabel } from "./shared";

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="07" label="Testimonials" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Recommendations
          </h2>
          <p className="text-[#7B7B7B] text-base mb-12">
            View colleague and manager recommendations on{" "}
            <a
              href="https://www.linkedin.com/in/leandroaps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#222222] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              my LinkedIn profile
            </a>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl text-[#F8F8F8] font-serif leading-none mb-4 select-none">
                "
              </div>
              <p className="text-sm text-[#7B7B7B] leading-relaxed italic mb-6">
                Leandro consistently demonstrates exceptional technical
                leadership and an ability to drive measurable results through
                architecture decisions and team mentoring.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8F8F8] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#222222]">
                    LinkedIn Colleague
                  </p>
                  <a
                    href="https://www.linkedin.com/in/leandroaps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#7B7B7B] hover:text-[#222222] transition-colors"
                  >
                    See on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
