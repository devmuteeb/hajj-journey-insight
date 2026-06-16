import { useEffect, useRef, type ReactNode } from "react";

export function FadeUp({ children, className = "", as: As = "div", delay = 0 }: { children: ReactNode; className?: string; as?: any; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add("in"), delay);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <As ref={ref} className={`fade-up ${className}`}>{children}</As>;
}

export function Divider() {
  return <div className="gold-divider"><span /><span className="diamond" /><span /></div>;
}
