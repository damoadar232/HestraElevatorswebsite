import { motion } from "motion/react";
import { PP, IN } from "../../shared/ui";

export function PageHero({ label, title, description, image }: {
  label: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="pt-28 md:pt-32 pb-14 bg-[#0D1B2A] relative overflow-hidden">
      {image && (
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/${image}?w=1920&h=600&fit=crop&auto=format)`, backgroundSize: "cover", backgroundPosition: "center" }} />
      )}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(47,93,124,0.85) 100%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-[1.5px] bg-white/40" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60" style={IN}>{label}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={PP}>{title}</h1>
          {description && (
            <p className="text-white/70 max-w-2xl text-base md:text-lg leading-relaxed" style={IN}>{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
