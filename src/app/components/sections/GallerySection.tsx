import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES, GALLERY_CATS } from "../../data/content";
import { A, IN, FadeUp } from "../../shared/ui";
import { SectionHeader } from "./SectionHeader";

export function GallerySection() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const filtered = active === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter(g => g.cat === active);

  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp><SectionHeader label="Project Gallery" title="Our Work in Pictures"
          description="Explore premium elevator installations across diverse sectors." /></FadeUp>

        <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {GALLERY_CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className="px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-sm border transition-all capitalize"
              style={{ background: active === c ? A : "transparent", color: active === c ? "#fff" : "#5F5F5F", borderColor: active === c ? A : "#E5E5E5", ...IN }}>
              {c}
            </button>
          ))}
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <FadeUp key={img.title + i} delay={i * 0.05}>
              <button onClick={() => setLightbox(img)} className="relative group overflow-hidden rounded-sm aspect-[4/3] w-full cursor-pointer">
                <img src={`https://images.unsplash.com/${img.img}?w=700&h=500&fit=crop&auto=format`} alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={IN}>{img.title}</span>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white p-2" aria-label="Close lightbox">
              <X size={28} />
            </button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={`https://images.unsplash.com/${lightbox.img}?w=1200&h=800&fit=crop&auto=format`}
              alt={lightbox.title} className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={e => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
