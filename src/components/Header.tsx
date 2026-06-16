import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { formatDates } from "@/lib/dates";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Search, User, Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/the-hajj", label: "The Hajj" },
  { to: "/the-chart", label: "The Chart" },
  { to: "/hajj-options", label: "Hajj Options" },
  { to: "/hajj-rituals", label: "Hajj Rituals" },
  { to: "/chart-history", label: "Chart History" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
];

export function Header() {
  const { hijri, gregorian } = formatDates();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#1A1208] text-cream">
      <div className="border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3 text-gold">
            <a href="#" aria-label="Facebook"><Facebook size={15} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={15} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={15} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={15} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={15} /></a>
          </div>
          <div className="text-cream/70 hidden sm:block">{hijri} • {gregorian}</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-5 flex items-center gap-5">
        <button className="btn-gold-outline hidden md:inline-flex"><User size={16} /> Login / Register</button>
        <div className="flex-1 max-w-2xl mx-auto w-full">
          <div className="flex items-center bg-[#231809] border-2 border-gold/60 rounded">
            <input placeholder="Search the site..." className="flex-1 bg-transparent px-4 py-3 text-cream placeholder:text-cream/40 outline-none" />
            <button className="px-4 text-gold"><Search size={18} /></button>
          </div>
        </div>
        <Link to="/" className="flex flex-col items-end leading-tight">
          <span className="font-display text-2xl md:text-3xl text-gold font-bold">Hajj at a Glance</span>
          <span className="text-[10px] tracking-[0.25em] text-cream/60 uppercase">Pilgrimage Guide</span>
        </Link>
        <button className="md:hidden text-gold" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>

      <nav className="bg-gold">
        <div className={`mx-auto max-w-7xl px-5 ${open ? "block" : "hidden"} md:flex md:items-center md:justify-center md:gap-1`}>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }} className="block md:inline-block px-4 py-3 text-white font-bold text-[15px] hover:bg-[#1A1208]/15" activeProps={{ className: "bg-[#1A1208]/25" }}>
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
