import { Link } from "@tanstack/react-router";
import { formatDates } from "@/lib/dates";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  const { hijri, gregorian } = formatDates();
  return (
    <footer className="bg-[#2D1F0E] text-cream/85 mt-0">
      <div className="border-b border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          <h3 className="font-display text-2xl text-gold">Subscribe to our newsletter</h3>
          <form className="flex w-full md:w-auto max-w-md">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-[#1A1208] text-cream placeholder:text-cream/40 border-2 border-gold/40 rounded-l outline-none" />
            <button className="btn-gold rounded-l-none"><Send size={16} /> Send</button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-display text-2xl text-gold mb-3">Hajj at a Glance</h4>
          <p className="text-cream/75">A complete English resource for understanding the sacred journey of Hajj — its rituals, history, and the spiritual meaning behind every step.</p>
        </div>
        <div>
          <h4 className="font-display text-xl text-gold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[["/the-hajj","The Hajj"],["/the-chart","The Chart"],["/hajj-options","Hajj Options"],["/hajj-rituals","Hajj Rituals"],["/chart-history","Chart History"],["/blog","Blog"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="hover:text-gold">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl text-gold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +966 12 000 0000</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /> info@hajjataglance.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> Makkah, Saudi Arabia</li>
          </ul>
          <div className="flex gap-3 mt-4 text-gold">
            <a href="#"><Facebook size={18}/></a><a href="#"><Twitter size={18}/></a><a href="#"><Instagram size={18}/></a><a href="#"><Youtube size={18}/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-cream/60">{hijri} • {gregorian}</div>
          <div className="font-display text-gold text-lg">Hajj at a Glance</div>
          <div className="flex gap-3 text-gold"><a href="#"><Facebook size={16}/></a><a href="#"><Twitter size={16}/></a><a href="#"><Instagram size={16}/></a></div>
        </div>
      </div>
    </footer>
  );
}
