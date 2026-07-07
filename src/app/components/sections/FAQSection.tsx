import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function FAQSection({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className={`mx-auto px-6 ${limit ? "max-w-3xl" : "max-w-3xl"}`}>
        <FadeUp><SectionHeader label="Frequently Asked Questions" title="Questions? We Have Answers." /></FadeUp>
        <div className="flex flex-col gap-2">
          {items.map((f, i) => (
            <FadeUp key={f.q} delay={i * 0.06}>
              <div className="bg-white border border-[#E5E5E5] rounded-sm overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                  className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-semibold text-sm pr-4" style={{ color: "#111111", ...PP }}>{f.q}</span>
                  {open === i ? <ChevronUp size={18} style={{ color: A, flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: "#8B8B8B", flexShrink: 0 }} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64" : "max-h-0"}`}>
                  <div className="px-6 pb-6 text-sm text-[#5F5F5F] leading-relaxed border-t border-[#E5E5E5] pt-4" style={IN}>{f.a}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
