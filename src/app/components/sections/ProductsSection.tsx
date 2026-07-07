import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_CATS, PRODUCT_CAT_LABELS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader, ViewAllLink } from "./SectionHeader";

export function ProductsSection({ limit, showFilter = true, showViewAll = false, sectionId }: {
  limit?: number; showFilter?: boolean; showViewAll?: boolean; sectionId?: string;
}) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === active);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id={sectionId} className={`py-24 bg-[#F1F1F1] ${sectionId ? "scroll-mt-28" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionHeader label="Our Products" title={<>Elevator Solutions for<br />Every Application</>}
            description="From compact home lifts to high-speed commercial elevators — precision-engineered and safety-certified." />
        </FadeUp>

        {showFilter && (
          <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
            {PRODUCT_CATS.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className="px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-sm border transition-all duration-150"
                style={{ background: active === c ? A : "transparent", color: active === c ? "#fff" : "#5F5F5F", borderColor: active === c ? A : "#E5E5E5", ...IN }}>
                {PRODUCT_CAT_LABELS[c]}
              </button>
            ))}
          </FadeUp>
        )}

        <div className={`grid md:grid-cols-2 ${limit ? "lg:grid-cols-4" : "lg:grid-cols-3 xl:grid-cols-4"} gap-5`}>
          {displayed.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.06}>
              <article className="bg-white rounded-sm overflow-hidden border border-[#E5E5E5] group hover:shadow-lg hover:-translate-y-1 transition-all duration-250 h-full">
                <div className="relative h-52 bg-[#E5E5E5] overflow-hidden">
                  <img src={`https://images.unsplash.com/${p.img}?w=600&h=400&fit=crop&auto=format`} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-widest uppercase text-white/80 bg-black/30 px-2 py-1 rounded-sm" style={IN}>{p.spec}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2" style={{ color: "#111111", ...PP }}>{p.name}</h3>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mb-3" style={IN}>{p.desc}</p>
                  {!limit && p.features && (
                    <ul className="mb-3 space-y-1">
                      {p.features.slice(0, 3).map(f => (
                        <li key={f} className="text-xs text-[#8B8B8B] flex items-center gap-1.5" style={IN}>
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: A }} />{f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: A, ...IN }}>
                    Learn More <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {showViewAll && (
          <FadeUp className="text-center mt-12">
            <ViewAllLink to="/services#products" label="View All Products" />
          </FadeUp>
        )}
      </div>
    </section>
  );
}
