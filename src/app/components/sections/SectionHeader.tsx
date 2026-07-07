import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { A, IN } from "../../shared/ui";

export function ViewAllLink({ to, label = "View All" }: { to: string; label?: string }) {
  return (
    <Link to={to}
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border rounded-sm hover:text-white transition-all duration-200"
      style={{ borderColor: A, color: A, ...IN }}
      onMouseEnter={e => { e.currentTarget.style.background = A; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = A; }}>
      {label} <ArrowRight size={15} />
    </Link>
  );
}

export function SectionHeader({ label, title, description, center = true }: {
  label: string; title: React.ReactNode; description?: string; center?: boolean;
}) {
  return (
    <div className={center ? "text-center mb-14" : "mb-10"}>
      <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
        <span className="block w-8 h-[1.5px] shrink-0" style={{ background: A }} />
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: A, ...IN }}>{label}</span>
        {center && <span className="block w-8 h-[1.5px] shrink-0" style={{ background: A }} />}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}>{title}</h2>
      {description && <p className={`text-[#5F5F5F] max-w-xl ${center ? "mx-auto" : ""} text-base`} style={IN}>{description}</p>}
    </div>
  );
}
