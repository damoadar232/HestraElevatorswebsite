import { CheckCircle } from "lucide-react";
import { AMC_PLANS, MAINTENANCE_BENEFITS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function AMCPlansSection({ showBenefits = false, sectionId }: { showBenefits?: boolean; sectionId?: string }) {
  return (
    <>
      <section id={sectionId} className={`py-24 bg-[#F1F1F1] ${sectionId ? "scroll-mt-28" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionHeader label="Maintenance & AMC" title={<>Plans Built Around<br />Your Building</>}
              description="Structured Annual Maintenance Contracts that keep your elevator running at peak performance." />
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {AMC_PLANS.map((plan, i) => (
              <FadeUp key={plan.tier} delay={i * 0.1}>
                <div className={`rounded-sm p-8 flex flex-col h-full border transition-all ${plan.highlight ? "text-white" : "bg-white border-[#E5E5E5]"}`}
                  style={{ background: plan.highlight ? A : "#fff", borderColor: plan.highlight ? "transparent" : "#E5E5E5" }}>
                  <div className={`text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 ${plan.highlight ? "text-white/60" : "text-[#8B8B8B]"}`} style={IN}>{plan.freq}</div>
                  <div className="text-3xl font-bold mb-1" style={{ color: plan.highlight ? "#fff" : A, ...PP }}>
                    {plan.price}<span className={`text-sm font-normal ml-1 ${plan.highlight ? "text-white/60" : "text-[#8B8B8B]"}`} style={IN}>{plan.period}</span>
                  </div>
                  <div className={`text-xl font-bold mb-6 ${plan.highlight ? "text-white" : "text-[#111111]"}`} style={PP}>{plan.tier}</div>
                  <div className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : A }} />
                        <span className={`text-sm ${plan.highlight ? "text-white/85" : "text-[#5F5F5F]"}`} style={IN}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {showBenefits && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#111111", ...PP }}>Benefits of Regular Maintenance</h2>
              <div className="flex flex-col gap-4">
                {MAINTENANCE_BENEFITS.map(b => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: A }} />
                    <span className="text-sm text-[#5F5F5F]" style={IN}>{b}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format"
                alt="Elevator maintenance" className="w-full h-[400px] object-cover rounded-sm" loading="lazy" />
            </FadeUp>
          </div>
        </section>
      )}
    </>
  );
}
