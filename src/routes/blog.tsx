import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp } from "@/components/FadeUp";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Articles & Reflections on Hajj" },
      { name: "description", content: "Articles, reflections, traveller stories and Hajj preparation tips." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

export const POSTS = [
  { slug: "first-time-pilgrim", category: "Guidance", title: "Five Things Every First-Time Pilgrim Should Know", excerpt: "Preparing your heart, body and bag for the journey of a lifetime.", author: "Editorial Team", date: "12 Jun 2026", read: "6 min read", img: "/images/ihram-white-pilgrim.webp" },
  { slug: "spiritual-meaning-of-tawaf", category: "Reflection", title: "The Spiritual Meaning of Tawaf", excerpt: "Why the seven circuits around the Ka'bah remain the heart of pilgrimage.", author: "Sh. Yusuf", date: "08 Jun 2026", read: "5 min read", img: "/images/tawaf-kaaba-circling.webp" },
  { slug: "arafat-the-essence-of-hajj", category: "Essentials", title: "Arafat — The Essence of Hajj", excerpt: "From noon to sunset, the day that defines the entire pilgrimage.", author: "Editorial Team", date: "01 Jun 2026", read: "7 min read", img: "/images/arafat-plain-crowd.webp" },
  { slug: "night-at-muzdalifah", category: "Story", title: "A Night Under the Sky at Muzdalifah", excerpt: "A first-hand account of one of Hajj's most humbling moments.", author: "Aisha R.", date: "20 May 2026", read: "4 min read", img: "/images/muzdalifah-night-pilgrims.webp" },
  { slug: "preparing-your-finances", category: "Planning", title: "Preparing Your Finances for Hajj", excerpt: "Budgeting honestly so your journey is lawful and stress-free.", author: "Editorial Team", date: "10 May 2026", read: "6 min read", img: "/images/madinah-pilgrims.webp" },
  { slug: "stoning-symbol-not-anger", category: "Reflection", title: "The Jamarat — A Symbol, Not Anger", excerpt: "Understanding the deeper meaning of stoning the pillars.", author: "Sh. Yusuf", date: "02 May 2026", read: "5 min read", img: "/images/jamarat-stoning.webp" },
];

function BlogIndex() {
  return (
    <Layout>
      <PageBanner title="Blog" breadcrumb="Home › Blog" />
      <section className="bg-cream py-20 paper-texture">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p,i) => (
            <FadeUp key={p.slug} delay={i*60}>
              <article className="bg-white rounded overflow-hidden shadow-sm h-full flex flex-col border border-gold/10">
                <img src={p.img} alt={p.title} className="w-full h-52 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start text-xs font-bold uppercase tracking-wider bg-gold text-[#1A1208] px-3 py-1 rounded">{p.category}</span>
                  <h3 className="font-display text-2xl text-[#1A1208] mt-3">{p.title}</h3>
                  <p className="text-[#2D1F0E] mt-2 flex-1">{p.excerpt}</p>
                  <div className="text-sm text-[#5a4423] mt-4">{p.author} • {p.date} • {p.read}</div>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 mt-3 text-gold font-bold hover:underline">Read More <ArrowRight size={16}/></Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </Layout>
  );
}
