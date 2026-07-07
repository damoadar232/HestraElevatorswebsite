import { WHY } from "../../data/content";
import { A, PP, IN, FadeUp, Label } from "../../shared/ui";

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <FadeUp>
          <Label text="Why Hestra" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10" style={{ color: "#111111", ...PP }}>
            The Standard Others Are Measured Against.
          </h2>
          <div className="flex flex-col gap-6">
            {WHY.map((w, i) => (
              <div key={w.title} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: A, ...IN }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#111111", ...PP }}>{w.title}</div>
                  <div className="text-sm text-[#5F5F5F] leading-relaxed" style={IN}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.18} className="relative">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=900&fit=crop&auto=format"
            alt="Modern elevator installation" className="w-full h-[500px] object-cover rounded-sm" loading="lazy" />
        </FadeUp>
      </div>
    </section>
  );
}
