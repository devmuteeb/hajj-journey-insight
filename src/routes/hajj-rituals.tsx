import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";

export const Route = createFileRoute("/hajj-rituals")({
  head: () => ({
    meta: [
      { title: "Hajj Rituals — Step-by-Step Guide" },
      { name: "description", content: "Each rite of Hajj in order — from Ihram to the Farewell Tawaf." },
      { property: "og:url", content: "/hajj-rituals" },
      { property: "og:image", content: "/images/tawaf-kaaba-circling.webp" },
    ],
    links: [{ rel: "canonical", href: "/hajj-rituals" }],
  }),
  component: Rituals,
});

const STEPS = [
  { img: "/images/ihram-white-pilgrim.webp", title: "Ihram", desc: "Pilgrims enter the sacred state at the Meeqaat, donning two simple white garments and declaring the intention." },
  { img: "/images/tawaf-kaaba-circling.webp", title: "Tawaf al-Qudum", desc: "Circling the Ka'bah seven times counter-clockwise — a symbol of unity around the centre of worship." },
  { img: "/images/safa-marwa-walkways.webp", title: "Sa'i — Safa to Marwa", desc: "Walking seven times between the hills of Safa and Marwa, recalling Hajar's search for water for her son Ismail." },
  { img: "/images/arafat-plain-crowd.webp", title: "Wuquf at Arafat", desc: "Standing on the plains of Arafat from noon until sunset — the very essence of Hajj — in supplication and remembrance." },
  { img: "/images/muzdalifah-night-pilgrims.webp", title: "Muzdalifah", desc: "Spending the night under the open sky, gathering pebbles for the stoning ritual and praying Maghrib and Isha together." },
  { img: "/images/jamarat-stoning.webp", title: "Stoning the Jamarat", desc: "Throwing seven pebbles at the pillars of Mina — a symbolic rejection of evil and renewal of devotion to Allah." },
];

function Rituals() {
  return (
    <Layout>
      <section className="relative" style={{ height: 360 }}>
        <img src="/images/tawaf-kaaba-circling.webp" alt="The Ka'bah" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(26,18,8,0.6)" }} />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-5">
          <h1 className="font-display text-5xl md:text-6xl font-bold">Hajj Rituals</h1>
          <p className="text-gold mt-2">Home › Hajj Rituals</p>
        </div>
      </section>

      <section className="bg-off py-20">
        <div className="mx-auto max-w-6xl px-5 space-y-16">
          {STEPS.map((s,i) => (
            <FadeUp key={s.title}>
              <div className={`grid md:grid-cols-2 gap-10 items-center ${i%2===1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div>
                  <img src={s.img} alt={s.title} className="w-full h-[360px] object-cover rounded gold-frame" />
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold text-[#1A1208] font-bold flex items-center justify-center font-display text-xl">{i+1}</div>
                    <h2 className="font-display text-3xl text-[#1A1208]">{s.title}</h2>
                  </div>
                  <Divider />
                  <p className="text-[#2D1F0E]">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12 paper-texture">
        <FadeUp className="mx-auto max-w-3xl px-5 border-l-4 border-gold pl-6">
          <p className="font-display italic text-2xl text-[#1A1208]">Labbayk Allahumma Labbayk. Labbayka laa shareeka laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk. Laa shareeka lak.</p>
          <p className="text-[#5a4423] mt-3">— The Talbiyah, recited throughout Hajj</p>
        </FadeUp>
      </section>
    </Layout>
  );
}
