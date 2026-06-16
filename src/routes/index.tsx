import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import { Users, MessageCircle, Video, BookOpen, GraduationCap, ArrowRight, Hotel, Plane, Building2, Stethoscope, Bus, Banknote, CloudSun } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hajj at a Glance — Complete Guide to Hajj & Umrah" },
      { name: "description", content: "Your complete English resource for understanding Hajj — rituals, route, types, history and travel essentials." },
      { property: "og:title", content: "Hajj at a Glance" },
      { property: "og:description", content: "Your complete English resource for Hajj & Umrah." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const STATS = [
  { num: "+1,000", label: "Pilgrims Guided", Icon: Users },
  { num: "+100", label: "Q&A Answered", Icon: MessageCircle },
  { num: "80", label: "Video Resources", Icon: Video },
  { num: "30", label: "Research Articles", Icon: BookOpen },
  { num: "90", label: "Free Lessons", Icon: GraduationCap },
];

const RESOURCES = [
  { to: "/the-hajj", title: "The Hajj", desc: "Origins, meaning and obligation of the sacred journey." },
  { to: "/the-chart", title: "The Chart", desc: "Visual map of the complete Hajj route and stages." },
  { to: "/hajj-options", title: "Hajj Options", desc: "Tamattu', Qiran and Ifraad explained simply." },
  { to: "/hajj-rituals", title: "Hajj Rituals", desc: "Step-by-step guide to every rite in order." },
  { to: "/chart-history", title: "Chart History", desc: "Heritage and key milestones of pilgrimage." },
  { to: "/blog", title: "Blog", desc: "Articles, reflections and traveller insights." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative" style={{ height: 620 }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={heroVideo.url} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
        <div className="relative mx-auto max-w-7xl h-full px-5 grid md:grid-cols-2 items-center gap-8">
          <FadeUp>
            <div className="rounded-md p-7 md:p-9 max-w-md" style={{ background: "rgba(245,237,214,0.95)" }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1208]">Hajj at a Glance</h2>
              <p className="text-[#3a2a14] mt-1">Your complete guide to Hajj &amp; Umrah</p>
              <Divider />
              <p className="text-[#2D1F0E]">A clear, English-language companion to the sacred journey — its meaning, its route, and every rite from Ihram to Farewell Tawaf.</p>
              <Link to="/the-hajj" className="btn-gold mt-5">Start Your Journey <ArrowRight size={16} /></Link>
            </div>
          </FadeUp>
          <FadeUp className="text-right hidden md:block">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight">Labbayk Allahumma Labbayk</h1>
            <p className="text-cream/90 mt-3 text-lg">Here I am, O Allah, here I am. <br/>The journey of a lifetime begins here.</p>
          </FadeUp>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1A1208] text-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {STATS.map(({ num, label, Icon }) => (
            <FadeUp key={label} className="flex items-center gap-3 justify-center">
              <Icon className="text-gold" size={32} />
              <div>
                <div className="font-display text-3xl text-gold font-bold leading-none">{num}</div>
                <div className="text-cream/80 text-sm mt-1">{label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* QURANIC VERSE */}
      <section className="bg-cream py-16 paper-texture">
        <FadeUp className="mx-auto max-w-3xl px-5 text-center">
          <div className="h-px bg-gold mx-auto w-32" />
          <p className="font-display italic text-3xl md:text-4xl text-[#2D1F0E] mt-6 leading-snug">"And proclaim to the people the Hajj; they will come to you on foot and on every lean camel."</p>
          <p className="text-[#5a4423] mt-4">— Surah Al-Hajj, 22:27</p>
          <div className="h-px bg-gold mx-auto w-32 mt-6" />
        </FadeUp>
      </section>

      {/* ABOUT HAJJ */}
      <section className="bg-off py-20">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-10 items-center">
          <FadeUp>
            <img src="/images/madinah-pilgrims.webp" alt="Pilgrims in Madinah" className="w-full h-[420px] object-cover rounded gold-frame" />
          </FadeUp>
          <FadeUp className="border-l-4 border-gold pl-6">
            <h2 className="font-display text-4xl text-[#1A1208]">What is Hajj?</h2>
            <Divider />
            <p className="text-[#2D1F0E]">Hajj is the annual Islamic pilgrimage to Makkah — the fifth pillar of Islam, obligatory upon every Muslim adult who is physically and financially able to undertake it at least once in their lifetime.</p>
            <p className="text-[#2D1F0E] mt-4">It is a profound act of submission that draws millions together in white garments, equal before their Creator, retracing the footsteps of the Prophets.</p>
            <ul className="mt-5 space-y-2">
              {["Performed in the month of Dhul Hijjah","Five days of structured rites","Open to every able Muslim","One of the largest gatherings on Earth"].map(t => (
                <li key={t} className="flex items-start gap-3"><span className="mt-2 w-2 h-2 bg-gold rotate-45" /> {t}</li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* KEY PILLARS */}
      <section className="bg-cream py-20 paper-texture">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-10 items-center">
          <FadeUp>
            <h2 className="font-display text-4xl text-[#1A1208]">Key Pillars of Hajj</h2>
            <Divider />
            <ul className="space-y-3 text-[#2D1F0E]">
              {["Ihram — entering the sacred state with intention","Tawaf — circling the Ka'bah seven times","Sa'i — walking between Safa and Marwa","Wuquf at Arafat — standing in supplication","Muzdalifah — overnight prayer and stones","Stoning the Jamarat and the Farewell Tawaf"].map(t => (
                <li key={t} className="flex items-start gap-3"><span className="mt-2 w-3 h-3 bg-gold rotate-45 shrink-0" /> <span>{t}</span></li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp>
            <img src="/images/tawaf-kaaba-circling.webp" alt="Tawaf around the Ka'bah" className="w-full h-[420px] object-cover rounded gold-frame" />
          </FadeUp>
        </div>
      </section>

      {/* THREE TYPES */}
      <section className="bg-white py-20">
        <FadeUp className="text-center mb-12">
          <h2 className="font-display text-4xl text-[#1A1208]">Three Types of Hajj</h2>
          <Divider />
        </FadeUp>
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-6">
          {[
            { roman: "I", title: "Tamattu'", desc: "Performing Umrah first, exiting Ihram, then re-entering Ihram for Hajj. The most common option for international pilgrims." },
            { roman: "II", title: "Qiran", desc: "Combining the intention of Umrah and Hajj together in a single state of Ihram — the pilgrim brings a sacrificial animal." },
            { roman: "III", title: "Ifraad", desc: "Performing Hajj alone without Umrah. Often chosen by residents of the sacred precinct." },
          ].map((c, i) => (
            <FadeUp key={c.title} delay={i*100}>
              <div className="border-t-4 border-gold bg-off p-7 h-full shadow-sm">
                <div className="font-display text-6xl text-gold leading-none">{c.roman}</div>
                <h3 className="font-display text-2xl mt-3 text-[#1A1208]">{c.title}</h3>
                <p className="mt-3 text-[#2D1F0E]">{c.desc}</p>
                <Link to="/hajj-options" className="inline-flex items-center gap-2 mt-5 text-gold font-bold hover:underline">Learn More <ArrowRight size={16} /></Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-[#2D1F0E] text-cream py-20">
        <FadeUp className="text-center mb-12">
          <h2 className="font-display text-4xl text-gold">The Hajj Journey</h2>
          <Divider />
          <p className="text-cream/80">Five days that change a life</p>
        </FadeUp>
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gold/50" />
            {["Ihram","Mina","Arafat","Stoning","Farewell Tawaf"].map((t,i) => (
              <FadeUp key={t} delay={i*100} className="relative text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gold text-[#1A1208] font-bold flex items-center justify-center font-display text-xl">{i+1}</div>
                <h4 className="font-display text-xl mt-3 text-gold">Day {i+1}</h4>
                <p className="text-cream/85">{t}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="bg-cream py-20 paper-texture">
        <FadeUp className="text-center mb-12">
          <h2 className="font-display text-4xl text-[#1A1208]">Explore Our Resources</h2>
          <Divider />
        </FadeUp>
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESOURCES.map((r,i) => (
            <FadeUp key={r.to} delay={i*60}>
              <div className="bg-off border-l-4 border-gold p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="font-display text-2xl text-[#1A1208]">{r.title}</h3>
                <p className="text-[#2D1F0E] mt-2">{r.desc}</p>
                <Link to={r.to} className="inline-flex items-center gap-2 mt-4 text-gold font-bold hover:underline">Explore <ArrowRight size={16} /></Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* USEFUL WIDGETS */}
      <section className="bg-[#1A1208] text-cream py-20">
        <FadeUp className="text-center mb-12">
          <h2 className="font-display text-4xl text-gold">Useful Resources</h2>
          <Divider />
          <p className="text-cream/75">Plan and prepare for your sacred journey</p>
        </FadeUp>
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl text-gold mb-3 flex items-center gap-2"><CloudSun size={22}/> Makkah Weather</h3>
            <div className="bg-[#231809] p-4 rounded border border-gold/30">
              <a className="weatherwidget-io" href="https://forecast7.com/en/21d3939d86/mecca/" data-label_1="MAKKAH" data-label_2="WEATHER" data-theme="original">MAKKAH WEATHER</a>
              <script dangerouslySetInnerHTML={{__html:`!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');`}} />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl text-gold mb-3 flex items-center gap-2"><Banknote size={22}/> Currency Converter</h3>
            <div className="bg-white p-2 rounded border border-gold/30">
              <iframe title="fx" src="https://wise.com/gb/currency-converter/fx-widget/converter?sourceCurrency=GBP&targetCurrency=SAR" height={490} width="100%" frameBorder={0} allowTransparency />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl text-gold mb-3 flex items-center gap-2"><Hotel size={22}/> Find a Hotel</h3>
            <div className="bg-white p-4 rounded border border-gold/30 min-h-[120px]">
              <div data-skyscanner-widget="HotelSearchWidget" />
              <script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl text-gold mb-3 flex items-center gap-2"><Plane size={22}/> Find a Flight</h3>
            <div className="bg-white p-4 rounded border border-gold/30 min-h-[120px]">
              <div data-skyscanner-widget="SearchWidget" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-6 mt-14">
          {[
            { Icon: Building2, title: "Hajj Agencies", desc: "Approved licensed agencies to organise your journey end-to-end." },
            { Icon: Stethoscope, title: "Hospitals", desc: "Major medical facilities serving pilgrims in Makkah & Madinah." },
            { Icon: Bus, title: "Transportation", desc: "Trains, buses and authorised transit options between the holy sites." },
          ].map(c => (
            <div key={c.title} className="bg-[#231809] border border-gold/20 p-6 rounded">
              <c.Icon size={28} className="text-gold" />
              <h3 className="font-display text-2xl mt-3 text-gold">{c.title}</h3>
              <p className="text-cream/80 mt-2">{c.desc}</p>
              <button className="btn-gold-outline mt-4">View Directory</button>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="relative" style={{ height: 450 }}>
        <img src="/images/madinah-pilgrims.webp" alt="Sacred precinct" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(26,18,8,0.55)" }} />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-5">
          <h2 className="font-display text-5xl md:text-7xl font-bold">Labbayk Allahumma Labbayk</h2>
          <p className="font-display italic text-gold text-xl md:text-2xl mt-4">Here I am, O Allah, here I am</p>
          <Divider />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-cream py-16 paper-texture">
        <FadeUp className="mx-auto max-w-2xl text-center px-5">
          <h2 className="font-display text-4xl text-[#1A1208]">Stay Connected</h2>
          <Divider />
          <p className="text-[#2D1F0E] mb-6">Receive new lessons, articles and seasonal Hajj reminders.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-white border-2 border-gold/40 rounded outline-none" />
            <button className="btn-gold">Subscribe</button>
          </form>
        </FadeUp>
      </section>
    </Layout>
  );
}
