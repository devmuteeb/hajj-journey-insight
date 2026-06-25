import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FadeUp } from "@/components/FadeUp";
import { WeatherCard } from "@/components/WeatherCard";
import { CurrencyCard } from "@/components/CurrencyCard";
import { Divider2, Star8, OrnamentBand, Corner } from "@/components/IslamicFrame";
import { useHajjCountdown } from "@/lib/dates";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import { POSTS } from "./blog";
import { Users, MessageCircle, Video, BookOpen, GraduationCap, ArrowRight, HelpCircle, Compass, Calendar, ScrollText, Building2, Stethoscope, Bus, CalendarDays } from "lucide-react";

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
  { num: "1,000+", label: "Pilgrims Guided", Icon: Users },
  { num: "100+", label: "Q&A Answered", Icon: MessageCircle },
  { num: "80", label: "Video Lessons", Icon: Video },
  { num: "30", label: "Articles", Icon: BookOpen },
  { num: "90", label: "Free Lessons", Icon: GraduationCap },
];

const PILLARS = [
  { Icon: ScrollText, title: "Ihram", desc: "The sacred state of intention and purity that begins the pilgrimage." },
  { Icon: Compass, title: "Tawaf", desc: "Seven circuits around the Ka'bah — the heart of every Hajj and Umrah." },
  { Icon: Calendar, title: "Arafat", desc: "The defining day — Hajj is Arafat. From noon to sunset in supplication." },
  { Icon: Star8 as any, title: "Jamarat", desc: "Symbolic stoning of the pillars at Mina, completing the rites of devotion." },
];

function Home() {
  const countdown = useHajjCountdown();
  const featured = POSTS[0];
  const rest = POSTS.slice(1, 5);

  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative" style={{ minHeight: 680 }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={heroVideo.url} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,9,3,0.85) 0%, rgba(15,9,3,0.55) 50%, rgba(15,9,3,0.45) 100%)" }} />
        {/* faint ornament band top + bottom */}
        <div className="absolute top-0 left-0 right-0 text-gold/40 h-6"><OrnamentBand className="w-full h-full" /></div>
        <div className="absolute bottom-0 left-0 right-0 text-gold/40 h-6"><OrnamentBand className="w-full h-full" /></div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 grid lg:grid-cols-[1.2fr_1fr] items-center gap-12">
          {/* LEFT: text */}
          <FadeUp>
            <div className="text-cream max-w-2xl">
              <div className="flex items-center gap-3 text-gold uppercase text-xs tracking-[0.4em] mb-5">
                <span className="h-px w-12 bg-gold" /> Fifth Pillar of Islam
              </div>
              <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-[1.05]">
                Labbayk<br/>
                <span className="text-gold">Allahumma</span><br/>
                Labbayk
              </h1>
              <p className="font-display italic text-2xl text-cream/90 mt-6">"Here I am, O Allah, here I am."</p>
              <p className="text-cream/80 mt-4 max-w-lg">A clear, English-language companion to the sacred journey — its meaning, its route, and every rite from Ihram to Farewell Tawaf.</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/the-hajj" className="btn-gold">Begin the Journey <ArrowRight size={16} /></Link>
                <Link to="/hajj-rituals" className="btn-gold-outline !text-cream !border-cream/60 hover:!bg-cream hover:!text-ink">Explore Rituals</Link>
              </div>
              {countdown && (
                <div className="mt-8 inline-flex items-center gap-4 bg-cream/10 backdrop-blur-sm border border-gold/40 rounded-md px-5 py-3">
                  <CalendarDays className="text-gold" size={28} />
                  <div className="leading-tight">
                    <div className="font-display text-3xl text-gold font-bold">
                      {countdown.days === 0 ? "Today" : `${countdown.days} days`}
                    </div>
                    <div className="text-cream/80 text-xs uppercase tracking-[0.25em]">
                      {countdown.days === 0 ? "8 Dhul Hijjah" : `until Hajj · ${countdown.date}`}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FadeUp>

          {/* RIGHT: paper-style weather card */}
          <FadeUp delay={150}>
            <WeatherCard />
          </FadeUp>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="bg-ink text-cream relative">
        <div className="absolute top-0 left-0 right-0 text-gold/50 h-5"><OrnamentBand className="w-full h-full" /></div>
        <div className="mx-auto max-w-7xl px-5 py-12 grid grid-cols-2 md:grid-cols-5 gap-6">
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

      {/* ============ QURANIC VERSE ============ */}
      <section className="paper-bg py-20 relative overflow-hidden">
        <Star8 className="absolute -top-10 -left-10 text-gold/15" size={220} />
        <Star8 className="absolute -bottom-10 -right-10 text-gold/15" size={220} />
        <FadeUp className="mx-auto max-w-3xl px-5 text-center relative">
          <Divider2 />
          <p className="font-display italic text-3xl md:text-4xl text-ink leading-snug">"And proclaim to the people the Hajj; they will come to you on foot and on every lean camel."</p>
          <p className="text-gold mt-5 uppercase tracking-[0.3em] text-xs">Surah Al-Hajj · 22:27</p>
          <Divider2 />
        </FadeUp>
      </section>

      {/* ============ WHAT IS HAJJ — big question mark ============ */}
      <section className="bg-off py-20 relative">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <FadeUp className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* arch frame around image */}
              <div className="absolute inset-0 arch-shape overflow-hidden gold-frame">
                <img src="/images/madinah-pilgrims.webp" alt="Pilgrims in Madinah" className="w-full h-full object-cover" />
              </div>
              {/* gigantic decorative question mark */}
              <div className="absolute -top-8 -left-8 font-display text-[180px] leading-none text-gold/25 select-none pointer-events-none">؟</div>
              <Corner className="absolute -top-4 -right-4 w-14 h-14 text-gold" />
              <Corner className="absolute -bottom-4 -left-4 w-14 h-14 text-gold rotate-180" />
            </div>
          </FadeUp>
          <FadeUp>
            <div className="text-gold uppercase text-xs tracking-[0.4em] flex items-center gap-3"><HelpCircle size={14}/> About the Pilgrimage</div>
            <h2 className="font-display text-5xl text-ink mt-3">What is Hajj?</h2>
            <Divider2 />
            <p className="text-deep text-lg">Hajj is the annual Islamic pilgrimage to Makkah — the fifth pillar of Islam, obligatory upon every Muslim adult who is physically and financially able at least once in a lifetime.</p>
            <p className="text-deep mt-4">It is a profound act of submission that draws millions together in white garments, equal before their Creator, retracing the footsteps of the Prophets ﷺ.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Performed in Dhul Hijjah","Five days of structured rites","Open to every able Muslim","Largest gathering on Earth"].map(t => (
                <li key={t} className="flex items-start gap-3 bg-cream/50 border-l-3 border-gold pl-3 py-2 rounded-sm"><Star8 size={14} className="text-gold mt-1 shrink-0"/> <span className="text-sm text-ink">{t}</span></li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ============ FOUR KEY PILLARS — Islamic arch cards ============ */}
      <section className="paper-bg py-20 relative">
        <FadeUp className="text-center mb-14 px-5">
          <div className="text-gold uppercase text-xs tracking-[0.4em]">Sacred Rites</div>
          <h2 className="font-display text-5xl text-ink mt-2">The Four Cornerstones</h2>
          <Divider2 />
        </FadeUp>
        <div className="mx-auto max-w-7xl px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.title} delay={i*80}>
              <div className="bg-cream border border-gold/30 px-6 pt-10 pb-7 text-center relative h-full" style={{ borderRadius: "120px 120px 6px 6px" }}>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-gold/40"><Star8 size={20} /></div>
                <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-gold">
                  <p.Icon size={36} />
                </div>
                <h3 className="font-display text-2xl text-ink mt-5">{p.title}</h3>
                <p className="text-deep text-sm mt-2">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============ THREE TYPES — roman numerals ============ */}
      <section className="bg-white py-20">
        <FadeUp className="text-center mb-12 px-5">
          <div className="text-gold uppercase text-xs tracking-[0.4em]">Choose Your Path</div>
          <h2 className="font-display text-5xl text-ink mt-2">Three Types of Hajj</h2>
          <Divider2 />
        </FadeUp>
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-6">
          {[
            { roman: "I", title: "Tamattu'", desc: "Performing Umrah first, exiting Ihram, then re-entering Ihram for Hajj. Most common for international pilgrims." },
            { roman: "II", title: "Qiran", desc: "Combining Umrah and Hajj in a single state of Ihram — the pilgrim brings a sacrificial animal." },
            { roman: "III", title: "Ifraad", desc: "Performing Hajj alone without Umrah — often chosen by residents of the sacred precinct." },
          ].map((c, i) => (
            <FadeUp key={c.title} delay={i*100}>
              <div className="border border-gold/30 bg-cream/40 p-8 h-full relative group hover:shadow-xl transition-shadow">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                <div className="font-display text-7xl text-gold leading-none">{c.roman}</div>
                <h3 className="font-display text-3xl mt-3 text-ink">{c.title}</h3>
                <p className="mt-3 text-deep">{c.desc}</p>
                <Link to="/hajj-options" className="inline-flex items-center gap-2 mt-5 text-gold font-bold hover:gap-3 transition-all">Learn More <ArrowRight size={16} /></Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="bg-off py-20 relative overflow-hidden">
        <Star8 className="absolute top-10 left-10 text-gold/15" size={120} />
        <Star8 className="absolute bottom-10 right-10 text-gold/15" size={120} />
        <FadeUp className="text-center mb-14 px-5 relative">
          <div className="text-gold uppercase text-xs tracking-[0.4em]">5 Days · One Lifetime</div>
          <h2 className="font-display text-5xl text-ink mt-2">The Hajj Journey</h2>
          <Divider2 />
        </FadeUp>
        <div className="mx-auto max-w-6xl px-5 relative">
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gold/50" />
            {["Ihram","Mina","Arafat","Stoning","Farewell Tawaf"].map((t,i) => (
              <FadeUp key={t} delay={i*100} className="relative text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gold text-ink font-bold flex items-center justify-center font-display text-xl border-4 border-cream shadow-md relative z-10">{i+1}</div>
                <h4 className="font-display text-xl mt-3 text-ink">Day {i+1}</h4>
                <p className="text-deep text-sm">{t}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOG SHOWCASE — collage ============ */}
      <section className="paper-bg py-20">
        <FadeUp className="text-center mb-12 px-5">
          <div className="text-gold uppercase text-xs tracking-[0.4em]">From the Journal</div>
          <h2 className="font-display text-5xl text-ink mt-2">Stories &amp; Reflections</h2>
          <Divider2 />
        </FadeUp>
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-6">
          {/* FEATURED */}
          <FadeUp>
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="block group relative h-full min-h-[440px] overflow-hidden rounded-md border-2 border-gold/40">
              <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(15,9,3,0.92) 0%, rgba(15,9,3,0.2) 50%, rgba(15,9,3,0.3) 100%)" }} />
              <div className="absolute top-5 left-5 bg-gold text-ink text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Featured · {featured.category}</div>
              <div className="absolute bottom-0 left-0 right-0 p-7 text-cream">
                <h3 className="font-display text-3xl md:text-4xl leading-tight">{featured.title}</h3>
                <p className="mt-3 text-cream/80 max-w-xl">{featured.excerpt}</p>
                <div className="mt-4 text-sm text-gold flex items-center gap-2">{featured.author} · {featured.date} <ArrowRight size={14}/></div>
              </div>
            </Link>
          </FadeUp>
          {/* GRID 2x2 */}
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((p,i) => (
              <FadeUp key={p.slug} delay={i*80}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block group bg-cream border border-gold/30 rounded-md overflow-hidden h-full">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{p.category}</span>
                    <h4 className="font-display text-xl text-ink mt-1 leading-snug">{p.title}</h4>
                    <div className="text-xs text-deep/70 mt-2">{p.date} · {p.read}</div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/blog" className="btn-ink">Read all articles <ArrowRight size={16}/></Link>
        </div>
      </section>

      {/* ============ TRAVELLER TOOLS — clean two-column ============ */}
      <section className="paper-bg py-20 relative">
        <FadeUp className="text-center mb-12 px-5">
          <div className="text-gold uppercase text-xs tracking-[0.4em]">For the Pilgrim</div>
          <h2 className="font-display text-5xl text-ink mt-2">Traveller Tools</h2>
          <Divider2 />
          <p className="text-deep/80 max-w-xl mx-auto">Live information to help you plan — built clean and lightweight, no third-party clutter.</p>
        </FadeUp>
        <div className="mx-auto max-w-5xl px-5 grid md:grid-cols-2 gap-8">
          <FadeUp><WeatherCard /></FadeUp>
          <FadeUp delay={120}><CurrencyCard /></FadeUp>
        </div>

        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-5 mt-14">
          {[
            { Icon: Building2, title: "Licensed Agencies", desc: "Verified Hajj operators across major countries." },
            { Icon: Stethoscope, title: "Medical Facilities", desc: "Hospitals and clinics serving pilgrims in the Haramain." },
            { Icon: Bus, title: "Holy Sites Transit", desc: "Trains and buses between Makkah, Mina, Arafat and Madinah." },
          ].map(c => (
            <div key={c.title} className="bg-cream border border-gold/40 p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <c.Icon size={28} className="text-gold" />
              <h3 className="font-display text-2xl mt-3 text-ink">{c.title}</h3>
              <p className="text-deep/85 mt-2 text-sm">{c.desc}</p>
              <button className="btn-gold-outline mt-4">View Directory</button>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative" style={{ height: 460 }}>
        <img src="/images/tawaf-kaaba-circling.webp" alt="Tawaf" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(26,18,8,0.65)" }} />
        <div className="absolute top-0 left-0 right-0 text-gold/50 h-5"><OrnamentBand className="w-full h-full" /></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-5">
          <Star8 className="text-gold" size={28} />
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4">Labbayk Allahumma Labbayk</h2>
          <p className="font-display italic text-gold text-xl md:text-2xl mt-4">Here I am, O Allah, here I am</p>
          <Link to="/hajj-rituals" className="btn-gold mt-7">Walk Through the Rituals <ArrowRight size={16}/></Link>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="paper-bg py-16">
        <FadeUp className="mx-auto max-w-2xl text-center px-5">
          <h2 className="font-display text-4xl text-ink">Stay Connected</h2>
          <Divider2 />
          <p className="text-deep mb-6">Receive new lessons, articles and seasonal Hajj reminders.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-white border border-gold/40 rounded outline-none" />
            <button className="btn-gold">Subscribe</button>
          </form>
        </FadeUp>
      </section>
    </Layout>
  );
}
