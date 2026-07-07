import { TIMELINE } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function InstallationTimeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <FadeUp><SectionHeader label="Installation Process" title="From Concept to Commissioning" /></FadeUp>
        <div className="relative">
          <div className="absolute left-[22px] top-0 bottom-0 w-[1.5px] bg-[#E5E5E5]" />
          {TIMELINE.map((t, i) => (
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
  );
}
