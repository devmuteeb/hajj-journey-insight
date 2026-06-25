import { Link } from "@tanstack/react-router";
import { useFormattedDates } from "@/lib/dates";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  const { hijri, gregorian } = useFormattedDates();
  return (
    <footer className="bg-cream text-deep mt-0 border-t-4 border-gold">
      <div className="border-b border-gold/30">
        <div className="mx-auto max-w-7xl px-5 py-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          <h3 className="font-display text-2xl text-ink">Subscribe to our newsletter</h3>
          <form className="flex w-full md:w-auto max-w-md">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-white text-ink placeholder:text-deep/40 border-2 border-gold/40 rounded-l outline-none" />
            <button className="btn-gold rounded-l-none"><Send size={16} /> Send</button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-display text-2xl text-ink mb-3">Hajj at a Glance</h4>
          <p className="text-deep/80">A complete English resource for understanding the sacred journey of Hajj — its rituals, history, and the spiritual meaning behind every step.</p>
        </div>
        <div>
          <h4 className="font-display text-xl text-ink mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[["/the-hajj","The Hajj"],["/the-chart","The Chart"],["/hajj-options","Hajj Options"],["/hajj-rituals","Hajj Rituals"],["/chart-history","Chart History"],["/blog","Blog"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="text-deep/80 hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl text-ink mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +966 12 000 0000</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /> info@hajjataglance.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> Makkah, Saudi Arabia</li>
          </ul>
          <div className="flex gap-3 mt-4 text-gold">
            <a href="#" className="hover:text-ink transition-colors"><Facebook size={18}/></a>
            <a href="#" className="hover:text-ink transition-colors"><Twitter size={18}/></a>
            <a href="#" className="hover:text-ink transition-colors"><Instagram size={18}/></a>
            <a href="#" className="hover:text-ink transition-colors"><Youtube size={18}/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/30 bg-off">
        <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-deep/60 min-h-[20px]">{hijri && <>{hijri} • {gregorian}</>}</div>
          <div className="font-display text-ink text-lg">© Hajj at a Glance</div>
          <div className="flex gap-3 text-gold"><a href="#"><Facebook size={16}/></a><a href="#"><Twitter size={16}/></a><a href="#"><Instagram size={16}/></a></div>
        </div>
      </div>
    </footer>
  );
}
