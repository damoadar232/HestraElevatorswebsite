import { SERVICES } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader, ViewAllLink } from "./SectionHeader";

export function ServicesSection({ showViewAll = false, sectionId }: { showViewAll?: boolean; sectionId?: string }) {
  return (
    <section id={sectionId} className={`py-24 bg-[#F7F7F7] ${sectionId ? "scroll-mt-28" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp><SectionHeader label="What We Do" title={<>Complete Elevator Services,<br />Under One Roof</>} /></FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div className="bg-white border border-[#E5E5E5] p-7 rounded-sm group hover:border-[#2F5D7C] hover:shadow-md transition-all duration-250 h-full">
                  <div className="w-11 h-11 rounded-sm flex items-center justify-center mb-5" style={{ background: "#EEF4F8" }}>
                    <Icon size={20} style={{ color: A }} />
                  </div>
                  <h3 className="font-bold text-base mb-2.5" style={{ color: "#111111", ...PP }}>{s.title}</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed" style={IN}>{s.desc}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
        {showViewAll && <FadeUp className="text-center mt-12"><ViewAllLink to="/services#our-services" /></FadeUp>}
      </div>
    </section>
  );
}
