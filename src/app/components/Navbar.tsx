import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { NAV_ROUTES } from "../data/content";
import { A, IN } from "../shared/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const navBg = scrolled || open || !isHome ? "bg-white shadow-sm" : "bg-transparent";
  const textCol = scrolled || open || !isHome ? "#111111" : "#ffffff";

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          <Link to="/" className="flex items-center shrink-0" aria-label="Hestra Elevators — Home">
            <img
              src="/images/NavBarLogo.png"
              alt="Hestra Elevators"
              className="h-8 md:h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-6" aria-label="Main navigation">
            {NAV_ROUTES.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3.5 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors whitespace-nowrap group"
                style={{ color: isActive(item.path) ? A : textCol, ...IN }}
              >
                {item.label}
                <span className="absolute bottom-0.5 left-2 right-2 h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  style={{ background: A }} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            {location.pathname === "/request-quote" ? (
              <span className="inline-flex items-center px-5 py-2.5 text-xs font-semibold text-white rounded-sm opacity-90" style={{ background: A, ...IN }}>
                Request Quote
              </span>
            ) : (
              <Link to="/request-quote"
                className="inline-flex items-center px-5 py-2.5 text-xs font-semibold text-white rounded-sm hover:opacity-90 transition-all"
                style={{ background: A, ...IN }}>
                Request Quote
              </Link>
            )}
          </div>

          <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2 rounded transition-colors" style={{ color: textCol }} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}
        style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col gap-0.5">
          {NAV_ROUTES.map(item => (
            <Link key={item.path} to={item.path}
              className="py-3 text-sm font-medium border-b border-[#E5E5E5]"
              style={{ color: isActive(item.path) ? A : "#111111", ...IN }}>
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link to="/request-quote"
              className="inline-flex items-center justify-center w-full px-7 py-3.5 text-sm font-semibold text-white rounded-sm"
              style={{ background: A, ...IN }}>
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
