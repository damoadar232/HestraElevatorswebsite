import { INDUSTRIES } from "../../data/content";
import { FadeUp, IN, PP } from "../../shared/ui";
import { SectionHeader, ViewAllLink } from "./SectionHeader";

export function IndustriesSection({ detailed = false, showViewAll = false, sectionId }: {
  detailed?: boolean; showViewAll?: boolean; sectionId?: string;
}) {
  return (
    <section id={sectionId} className={`py-24 ${detailed ? "bg-[#F7F7F7]" : "bg-[#2F5D7C]"} ${sectionId ? "scroll-mt-28" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          {detailed ? (
            <SectionHeader label="Industries We Serve" title="Built for Every Sector"
              description="Hestra elevators are deployed across India's most demanding building categories." />
          ) : (
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="block w-8 h-[1.5px] bg-white/40" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60" style={IN}>Industries We Serve</span>
                <span className="block w-8 h-[1.5px] bg-white/40" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={PP}>Built for Every Sector</h2>
            </div>
          )}
        </FadeUp>

        <div className={`grid ${detailed ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-3 md:grid-cols-4 lg:grid-cols-6"} gap-4`}>
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeUp key={ind.label} delay={i * 0.05}>
                {detailed ? (
                  <div className="bg-white border border-[#E5E5E5] p-6 rounded-sm hover:shadow-md transition-all h-full">
                    <Icon size={24} className="mb-3" style={{ color: "#2F5D7C" }} />
                    <h3 className="font-semibold text-sm mb-2" style={{ color: "#111111", ...PP }}>{ind.label}</h3>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed" style={IN}>{ind.desc}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 p-5 rounded-sm border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                    <Icon size={26} className="text-white/70" />
                    <span className="text-[11px] text-center text-white/70 font-medium leading-tight" style={IN}>{ind.label}</span>
                  </div>
                )}
              </FadeUp>
            );
          })}
        </div>
        {showViewAll && <FadeUp className="text-center mt-12"><ViewAllLink to="/services#industries" /></FadeUp>}
      </div>
    </section>
  );
}
