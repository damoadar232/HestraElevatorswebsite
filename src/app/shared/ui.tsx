import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

export const A = "#2F5D7C";
export const AD = "#1E3D54";
export const PP: React.CSSProperties = { fontFamily: "'Poppins', sans-serif" };
export const IN: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

export function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={vis ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Label({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-[1.5px] shrink-0" style={{ background: A }} />
      <span className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: A, ...IN }}>{text}</span>
    </div>
  );
}

export function Btn({ children, variant = "solid", className = "", onClick, type = "button" }: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const base = "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm cursor-pointer";
  const variants = {
    solid: `text-white hover:opacity-90 active:scale-[0.98]`,
    outline: `border hover:text-white active:scale-[0.98]`,
    ghost: `hover:underline`,
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      style={variant === "solid" ? { background: A, ...IN } :
             variant === "outline" ? { borderColor: A, color: A, ...IN } : { color: A, ...IN }}
      onMouseEnter={e => { if (variant === "outline") { (e.currentTarget as HTMLButtonElement).style.background = A; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; } }}
      onMouseLeave={e => { if (variant === "outline") { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = A; } }}
    >
      {children}
    </button>
  );
}

export function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { once: true });
  useEffect(() => {
    if (!vis) return;
    const dur = 1800; let cur = 0;
    const step = end / (dur / (1000 / 60));
    const id = setInterval(() => {
      cur += step;
      if (cur >= end) { setN(end); clearInterval(id); } else setN(Math.floor(cur));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [vis, end]);
  return (
    <div ref={ref} className="text-center py-8 px-6">
      <div className="text-5xl md:text-6xl font-bold leading-none mb-3" style={{ color: A, ...PP }}>{n}{suffix}</div>
      <div className="text-xs tracking-[0.18em] uppercase font-medium" style={{ color: "#8B8B8B", ...IN }}>{label}</div>
    </div>
  );
}
