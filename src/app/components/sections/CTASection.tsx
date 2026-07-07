import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { A, PP, IN } from "../../shared/ui";

export function CTASection() {
  return (
    <section className="py-24 bg-[#2F5D7C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=600&fit=crop&auto=format)", backgroundSize: "cover" }} />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={PP}>
            Ready to Elevate Your Building?
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed" style={IN}>
            Get a free site inspection and customized quotation from India's trusted elevator engineering partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm hover:opacity-90 transition-all"
              style={{ background: "#fff", color: A, ...IN }}>
              Request Free Quote <ArrowRight size={16} />
            </Link>
            <Link to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/40 rounded-sm hover:border-white transition-colors"
              style={IN}>
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
