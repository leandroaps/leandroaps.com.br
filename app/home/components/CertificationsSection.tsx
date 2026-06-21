import type { Certification } from "@/home/types";
import { SectionLabel } from "./SectionLabel";
import { SeeOnLinkedIn } from "./SeeOnLinkedIn";

export function CertificationsSection({ certifications }: { certifications: Certification[] }) {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <SectionLabel n="05" label="Credentials" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-12">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="animate-on-scroll bg-white rounded-2xl p-6 flex items-start gap-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#F8F8F8] flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-[#7B7B7B]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#222222] leading-snug mb-1">
                  {cert.name}
                </p>
                <p className="text-xs text-[#7B7B7B]">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
        <SeeOnLinkedIn url="certifications" />
      </div>
    </section>
  );
}
