import { useLocation } from "react-router";
import { A, IN } from "../../shared/ui";

const SECTIONS = [
  { id: "products", label: "Products" },
  { id: "our-services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Projects" },
] as const;

export function ServicesSubNav() {
  const location = useLocation();

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/services") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav aria-label="Services page sections" className="sticky top-16 md:top-[4.5rem] z-40 bg-white border-b border-[#E5E5E5] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-1 overflow-x-auto py-3">
          {SECTIONS.map(s => (
            <a
              key={s.id}
              href={`/services#${s.id}`}
              onClick={handleClick(s.id)}
              className="px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-sm border whitespace-nowrap transition-all hover:border-[#2F5D7C] hover:text-[#2F5D7C]"
              style={{ borderColor: "#E5E5E5", color: "#5F5F5F", ...IN }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
