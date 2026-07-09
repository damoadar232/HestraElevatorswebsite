import { useState } from "react";
import { MapPin } from "lucide-react";
import { PROJECTS, PROJECT_CATS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader, ViewAllLink } from "./SectionHeader";

export function ProjectsSection({ limit, showFilter = true, showViewAll = false, sectionId }: {
  limit?: number; showFilter?: boolean; showViewAll?: boolean; sectionId?: string;
}) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === active);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id={sectionId} className={`py-24 bg-[#F7F7F7] ${sectionId ? "scroll-mt-28" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp><SectionHeader label="Our Projects" title="A Portfolio Built on Trust" /></FadeUp>

        {showFilter && (
          <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
            {PROJECT_CATS.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className="px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-sm border transition-all capitalize"
                style={{ background: active === c ? A : "transparent", color: active === c ? "#fff" : "#5F5F5F", borderColor: active === c ? A : "#E5E5E5", ...IN }}>
                {c}
              </button>
            ))}
          </FadeUp>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.07}>
              <article className="bg-white border border-[#E5E5E5] rounded-sm overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img.startsWith("/") ? p.img : `https://images.unsplash.com/${p.img}?w=700&h=450&fit=crop&auto=format`} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-widest uppercase bg-black/30 text-white px-2.5 py-1 rounded-sm capitalize" style={IN}>{p.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-1" style={{ color: "#111111", ...PP }}>{p.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#8B8B8B] mb-4" style={IN}>
                    <MapPin size={12} />{p.loc} · {p.type}
                  </div>
                  <div className="flex gap-4 text-xs" style={IN}>
                    <div><span className="text-[#8B8B8B]">Floors: </span><span className="font-semibold">{p.floors}</span></div>
                    <div><span className="text-[#8B8B8B]">Units: </span><span className="font-semibold">{p.cap}</span></div>
                    <div><span className="text-[#8B8B8B]">Year: </span><span className="font-semibold">{p.year}</span></div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {showViewAll && <FadeUp className="text-center mt-12"><ViewAllLink to="/services#projects" label="View All Projects" /></FadeUp>}
      </div>
    </section>
  );
}
