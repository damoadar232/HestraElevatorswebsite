import { Award } from "lucide-react";
import { CERTS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function CertificationsSection() {
  return (
    <section className="py-20 bg-white border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp className="text-center mb-12">
          <SectionHeader label="Certifications" title="Standards That Define Us" />
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CERTS.map((c, i) => (
            <FadeUp key={c} delay={i * 0.06}>
              <div className="flex flex-col items-center justify-center p-6 border border-[#E5E5E5] rounded-sm hover:border-[#2F5D7C]/40 transition-colors">
                <Award size={28} className="mb-3" style={{ color: A }} />
                <span className="text-xs font-semibold text-center leading-snug" style={{ color: "#5F5F5F", ...IN }}>{c}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
