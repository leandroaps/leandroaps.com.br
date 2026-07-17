import type { Certification, SectionHeading } from "@/home/types";
import { SectionLabel } from "./SectionLabel";
import { SeeOnLinkedIn } from "./SeeOnLinkedIn";

export function CertificationsSection({
  certifications,
  heading,
  seeOnLinkedIn,
}: {
  certifications: Certification[];
  heading: SectionHeading;
  seeOnLinkedIn: string;
}) {
  return (
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="06" label={heading.label} />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">{heading.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="animate-on-scroll group bg-[#F8F8F8] rounded-2xl p-6 flex items-start gap-4 cursor-default hover:bg-[#222222] transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#F8F8F8] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                <span className="text-xs font-semibold text-[#7B7B7B] group-hover:text-white/50 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#222222] leading-snug mb-1 group-hover:text-white transition-colors duration-300">
                  {cert.name}
                </p>
                <p className="text-xs text-[#7B7B7B] group-hover:text-white/70 transition-colors duration-300">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <SeeOnLinkedIn url="certifications" label={seeOnLinkedIn} />
      </div>
    </section>
  );
}
