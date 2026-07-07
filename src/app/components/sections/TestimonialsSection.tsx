import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp><SectionHeader label="Client Testimonials" title="What Our Clients Say" /></FadeUp>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <blockquote className="bg-white border border-[#E5E5E5] rounded-sm p-8 h-full">
                <div className="flex gap-0.5 mb-5" aria-label={`${t.rating} star rating`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill={A} style={{ color: A }} />
                  ))}
                </div>
                <p className="text-[#5F5F5F] leading-relaxed mb-6 text-[15px]" style={IN}>"{t.text}"</p>
                <footer className="flex items-center gap-3 pt-5 border-t border-[#E5E5E5]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: A, ...PP }}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <cite className="font-semibold text-sm not-italic" style={{ color: "#111111", ...PP }}>{t.name}</cite>
                    <div className="text-xs text-[#8B8B8B]" style={IN}>{t.title}</div>
                  </div>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
