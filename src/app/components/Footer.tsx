import { Link } from "react-router";
import { Facebook, Twitter, MapPin, Instagram, Phone, Mail } from "lucide-react";
import { COMPANY_CONTACT } from "../data/content";
import { A, PP, IN } from "../shared/ui";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Gallery", to: "/gallery" },
      { label: "Request Quote", to: "/request-quote" },
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
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  {
    icon: MapPin,
    label: "Location",
    href: COMPANY_CONTACT.mapsUrl,
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: COMPANY_CONTACT.instagram,
  },
] as const;

export function Footer() {
  return (
    <footer style={{ background: "#0D1B2A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5" aria-label="Hestra Elevators — Home">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: A }}>
                <span className="text-white text-xs font-bold" style={PP}>HE</span>
              </div>
              <span className="font-bold text-white tracking-[0.12em] uppercase" style={PP}>Hestra Elevators</span>
            </Link>

            <address className="not-italic text-white/45 text-xs leading-relaxed mb-5 max-w-xs" style={IN}>
              {COMPANY_CONTACT.address}
            </address>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href={COMPANY_CONTACT.phoneHref}
                className="flex items-center gap-2 text-white/45 text-xs hover:text-white/75 transition-colors w-fit"
                style={IN}
              >
                <Phone size={14} className="text-white/50 shrink-0" aria-hidden="true" />
                {COMPANY_CONTACT.phone}
              </a>
              <a
                href={COMPANY_CONTACT.emailHref}
                className="flex items-center gap-2 text-white/45 text-xs hover:text-white/75 transition-colors w-fit"
                style={IN}
              >
                <Mail size={14} className="text-white/50 shrink-0" aria-hidden="true" />
                {COMPANY_CONTACT.email}
              </a>
            </div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, ...link }) =>
                "href" in link && link.href ? (
                  <a
                    key={label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
                    aria-label={label}
                  >
                    <Icon size={15} className="text-white/50" />
                  </a>
                ) : (
                  <button
                    key={label}
                    type="button"
                    className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
                    aria-label={label}
                  >
                    <Icon size={15} className="text-white/50" />
                  </button>
                )
              )}
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/35 text-xs" style={IN}>© 2026 Hestra Elevators Pvt. Ltd. All rights reserved.</div>
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
