import { SAFETY, QUALITY_PROCESS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function SafetySection({ showQuality = false, sectionId }: { showQuality?: boolean; sectionId?: string }) {
  return (
    <>
      <section id={sectionId} className={`py-24 bg-[#F1F1F1] ${sectionId ? "scroll-mt-28" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionHeader label="Safety & Quality" title={<>Safety Is Not a Feature.<br />It's Our Foundation.</>}
              description="Every Hestra elevator passes a comprehensive multi-level safety protocol before it carries a single passenger." />
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAFETY.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.06}>
                <div className="bg-white border border-[#E5E5E5] rounded-sm p-7 hover:border-[#2F5D7C]/40 transition-colors h-full">
                  <div className="text-5xl font-bold mb-4 leading-none" style={{ color: "#E5E5E5", ...PP }}>{s.num}</div>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#111111", ...PP }}>{s.title}</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed" style={IN}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {showQuality && (
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <FadeUp className="text-center mb-14">
              <SectionHeader label="Quality Assurance" title="Complete Quality Inspection Process" />
            </FadeUp>
            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-[1.5px] bg-[#E5E5E5]" />
              {QUALITY_PROCESS.map((t, i) => (
                <FadeUp key={t.step} delay={i * 0.08}>
                  <div className="flex gap-6 pb-10">
                    <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white z-10" style={{ background: A, ...IN }}>{t.step}</div>
                    <div className="pt-2.5">
                      <h3 className="font-bold text-base mb-1" style={{ color: "#111111", ...PP }}>{t.title}</h3>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed" style={IN}>{t.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
