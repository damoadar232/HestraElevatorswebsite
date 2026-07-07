import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { A, PP, IN } from "../shared/ui";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Gallery", to: "/gallery" },
      { label: "Request Quote", to: "/request-quote" },
      // Temporarily hidden — preserved for future use
      // { label: "Careers", to: "/careers" },
      // { label: "Blog", to: "/blog" },
      // { label: "FAQ", to: "/faq" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "All Products", to: "/services#products" },
      { label: "Passenger Elevators", to: "/services#products" },
      { label: "Home Elevators", to: "/services#products" },
      { label: "Hospital Lifts", to: "/services#products" },
      { label: "MRL Elevators", to: "/services#products" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Our Services", to: "/services#our-services" },
      { label: "Industries", to: "/services#industries" },
      { label: "Projects", to: "/services#projects" },
      { label: "Safety & AMC", to: "/safety" },
      { label: "Request Quote", to: "/request-quote" },
      // Temporarily hidden
      // { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#0D1B2A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5" aria-label="Hestra Elevators — Home">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: A }}>
                <span className="text-white text-xs font-bold" style={PP}>HE</span>
              </div>
              <span className="font-bold text-white tracking-[0.12em] uppercase" style={PP}>Hestra Elevators</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs" style={IN}>
              Manufacturing and maintaining elevators that move millions of people safely across India's most iconic buildings since 2009.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all" aria-label="Social media">
                  <Icon size={15} className="text-white/50" />
                </button>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map(col => (
            <div key={col.heading}>
              <div className="text-white font-semibold text-sm mb-5 tracking-wide" style={PP}>{col.heading}</div>
              <div className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <Link key={l.label} to={l.to} className="text-white/45 text-xs hover:text-white/75 transition-colors" style={IN}>{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1">
              <div className="text-white font-semibold text-sm mb-1" style={PP}>Subscribe to Industry Updates</div>
              <div className="text-white/45 text-xs" style={IN}>Elevator safety news, regulation changes, product launches.</div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input type="email" placeholder="your@email.com"
                className="flex-1 md:w-60 px-4 py-2.5 bg-white/5 border border-white/10 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/25"
                style={IN} />
              <button className="px-5 py-2.5 text-xs font-semibold text-white rounded-sm" style={{ background: A, ...IN }}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/35 text-xs" style={IN}>© 2024 Hestra Elevators Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/about" className="text-white/35 text-xs hover:text-white/60 transition-colors" style={IN}>About</Link>
            <Link to="/safety" className="text-white/35 text-xs hover:text-white/60 transition-colors" style={IN}>Safety</Link>
            <Link to="/request-quote" className="text-white/35 text-xs hover:text-white/60 transition-colors" style={IN}>Request Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
