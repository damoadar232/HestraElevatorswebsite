import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { A, PP, IN, FadeUp, Label } from "../../shared/ui";

export function IntroPreview() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <FadeUp>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format"
            alt="Hestra elevator installation" className="w-full h-[420px] object-cover rounded-sm" />
        </FadeUp>
        <FadeUp delay={0.15}>
          <Label text="About Hestra Elevators" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: "#111111", ...PP }}>
            Engineering Trust, Floor by Floor.
          </h2>
          <p className="text-[#5F5F5F] leading-relaxed mb-6" style={IN}>
            Founded in 2009, Hestra Elevators has grown into one of India's most trusted elevator engineering
            companies — delivering precision vertical transportation solutions across residential, commercial,
            healthcare, and industrial sectors nationwide.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {["ISO 9001:2015 Certified", "500+ Installations", "Pan-India Network", "24×7 Support"].map(f => (
              <div key={f} className="flex items-start gap-2">
                <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: A }} />
                <span className="text-sm text-[#5F5F5F]" style={IN}>{f}</span>
              </div>
            ))}
          </div>
          <Link to="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-sm hover:opacity-90 transition-all"
            style={{ background: A, ...IN }}>
            Learn More <ArrowRight size={15} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
