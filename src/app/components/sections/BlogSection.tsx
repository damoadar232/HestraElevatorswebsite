import { Clock } from "lucide-react";
import { BLOG_POSTS } from "../../data/content";
import { A, PP, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function BlogSection() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp><SectionHeader label="Insights & News" title="From the Hestra Blog"
          description="Maintenance tips, safety awareness, technology updates, and industry insights." /></FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <FadeUp key={post.id} delay={i * 0.08}>
              <article className="bg-white border border-[#E5E5E5] rounded-sm overflow-hidden group hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={`https://images.unsplash.com/${post.img}?w=600&h=400&fit=crop&auto=format`} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-sm" style={{ background: "#EEF4F8", color: A, ...IN }}>{post.category}</span>
                    <span className="text-xs text-[#8B8B8B] flex items-center gap-1" style={IN}><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:opacity-80 transition-opacity" style={{ color: "#111111", ...PP }}>{post.title}</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4 flex-1" style={IN}>{post.excerpt}</p>
                  <div className="text-xs text-[#8B8B8B]" style={IN}>{post.date}</div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
