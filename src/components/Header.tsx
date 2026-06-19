import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useFormattedDates } from "@/lib/dates";
import { Facebook, Twitter, Instagram, Youtube, Search, User, Menu, X, MoonStar } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/the-hajj", label: "The Hajj" },
  { to: "/the-chart", label: "The Chart" },
  { to: "/hajj-options", label: "Options" },
  { to: "/hajj-rituals", label: "Rituals" },
  { to: "/chart-history", label: "History" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { hijri, gregorian } = useFormattedDates();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-cream text-ink border-b-2 border-gold/30">
      {/* Top thin bar */}
      <div className="bg-[#F0E6CC] border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-2 flex items-center justify-between text-xs">
          <div className="text-ink/70 min-h-[16px]">{hijri && <>📿 {hijri} &nbsp;·&nbsp; {gregorian}</>}</div>
          <div className="flex items-center gap-3 text-gold">
            <a href="#" aria-label="Facebook" className="hover:text-ink"><Facebook size={14} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-ink"><Twitter size={14} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-ink"><Instagram size={14} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-ink"><Youtube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Logo LEFT, search center, account RIGHT */}
      <div className="mx-auto max-w-7xl px-5 py-5 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ink shadow-md">
            <MoonStar size={24} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl md:text-3xl text-ink font-bold">Hajj <span className="text-gold">at a Glance</span></div>
            <div className="text-[10px] tracking-[0.3em] text-ink/55 uppercase">Pilgrimage Guide</div>
          </div>
        </Link>

        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <div className="flex items-center bg-white border border-gold/40 rounded-full overflow-hidden shadow-sm">
            <input placeholder="Search rituals, prayers, articles..." className="flex-1 bg-transparent px-5 py-2.5 text-ink placeholder:text-ink/40 outline-none text-sm" />
            <button className="px-4 text-gold hover:text-ink"><Search size={16} /></button>
          </div>
        </div>

        <button className="btn-gold-outline hidden md:inline-flex"><User size={15} /> Sign in</button>
        <button className="md:hidden text-ink" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>

      {/* Nav: logo-side aligned LEFT (LTR feel), items left aligned */}
      <nav className="bg-ink">
        <div className={`mx-auto max-w-7xl px-5 ${open ? "block" : "hidden"} md:flex md:items-center md:gap-1`}>
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="block md:inline-block px-4 py-3 text-cream font-semibold text-[14px] tracking-wide hover:text-gold border-b-2 border-transparent"
              activeProps={{ className: "text-gold border-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
