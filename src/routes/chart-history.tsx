import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";

export const Route = createFileRoute("/chart-history")({
  head: () => ({
    meta: [
      { title: "Chart History — Heritage of the Hajj Journey" },
      { name: "description", content: "Milestones in the long history of the Hajj pilgrimage." },
      { property: "og:url", content: "/chart-history" },
    ],
    links: [{ rel: "canonical", href: "/chart-history" }],
  }),
  component: ChartHistory,
});

const MILESTONES = [
  { img: "/images/tawaf-kaaba-circling.webp", year: "2000 BCE", title: "Ibrahim & Ismail", desc: "Construction of the Ka'bah and the first call to pilgrimage." },
  { img: "/images/ihram-white-pilgrim.webp", year: "632 CE", title: "Farewell Hajj", desc: "Prophet Muhammad ﷺ delivers his final sermon at Arafat." },
  { img: "/images/madinah-pilgrims.webp", year: "1517", title: "Ottoman Stewardship", desc: "Centuries of service, infrastructure and the pilgrim caravan." },
  { img: "/images/muzdalifah-night-pilgrims.webp", year: "Modern Era", title: "The Modern Hajj", desc: "Millions arriving each year via air, sea and rail — a global gathering." },
];

const TIMELINE = [
  { year: "2000 BCE", text: "Foundation of the Ka'bah by Ibrahim (AS) and Ismail (AS)." },
  { year: "610 CE", text: "Revelation of the Qur'an begins to Prophet Muhammad ﷺ." },
  { year: "632 CE", text: "The Farewell Hajj of the Prophet ﷺ." },
  { year: "1517", text: "Beginning of Ottoman stewardship of the Two Holy Sanctuaries." },
  { year: "1932", text: "Founding of the Kingdom of Saudi Arabia." },
  { year: "Today", text: "Millions of pilgrims served annually through modern infrastructure." },
];

function ChartHistory() {
  return (
    <Layout>
      <PageBanner title="Chart History" breadcrumb="Home › Chart History" />
      <section className="bg-off py-20">
        <div className="mx-auto max-w-6xl px-5 grid sm:grid-cols-2 gap-6">
          {MILESTONES.map((m,i) => (
            <FadeUp key={m.year} delay={i*60}>
              <div className="bg-white shadow-sm border border-gold/20 rounded overflow-hidden h-full">
                <img src={m.img} alt={m.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="font-display text-3xl text-gold">{m.year}</div>
                  <h3 className="font-display text-2xl text-[#1A1208] mt-1">{m.title}</h3>
                  <p className="text-[#2D1F0E] mt-2">{m.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 paper-texture">
        <FadeUp className="text-center mb-12">
          <h2 className="font-display text-4xl text-[#1A1208]">A Timeline of Devotion</h2>
          <Divider />
        </FadeUp>
        <div className="mx-auto max-w-3xl px-5 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gold" />
          <ul className="space-y-8">
            {TIMELINE.map((t,i) => (
              <FadeUp key={t.year} delay={i*60} as="li" className="relative pl-12">
                <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gold text-[#1A1208] flex items-center justify-center font-display font-bold text-xs">{i+1}</div>
                <div className="font-display text-xl text-gold">{t.year}</div>
                <p className="text-[#2D1F0E]">{t.text}</p>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
