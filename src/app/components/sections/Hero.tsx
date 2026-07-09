import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { A, PP, IN } from "../../shared/ui";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1b2a]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.45) 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-10 h-[1.5px] bg-white/50" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/70" style={IN}>Precision Engineering Since 2016</span>
          <span className="block w-10 h-[1.5px] bg-white/50" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold text-white leading-[1.06] tracking-[-0.02em] mb-8"
          style={{ ...PP, fontSize: "3rem" }}>
          Moving People Safely.
          <br />
          <span style={{ color: "#7BAECF" }}>Elevating Every Building.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
          className="text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ ...IN, fontSize: "0.9rem" }}>
          Hestra Elevators delivers world-class elevator manufacturing, installation,
          modernization, and Annual Maintenance Contracts — engineered for safety, built for longevity.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
            style={{ background: A, ...IN }}>
            Get Free Quote <ArrowRight size={16} />
          </Link>
          <Link to="/services#products"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white border border-white/40 rounded-sm hover:border-white transition-colors"
            style={IN}>
            Explore Products <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
      {/* 
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase" style={IN}>Scroll</span>
        <ChevronDown size={16} className="text-white/50" />
      </motion.div> */}
    </section>
  );
}
