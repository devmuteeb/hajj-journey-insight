import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";
import { Download } from "lucide-react";

export const Route = createFileRoute("/the-chart")({
  head: () => ({
    meta: [
      { title: "The Hajj Chart — Visual Route Map" },
      { name: "description", content: "Visual chart of the complete Hajj route from Meeqaat to the Farewell Tawaf." },
      { property: "og:url", content: "/the-chart" },
    ],
    links: [{ rel: "canonical", href: "/the-chart" }],
  }),
  component: TheChart,
});

const STEPS = ["Meeqaat","Al-Masjid Al-Haram","Mina","Arafat","Muzdalifah","Mina (Stoning)","Return Home"];

function TheChart() {
  return (
    <Layout>
      <PageBanner title="The Chart" breadcrumb="Home › The Chart" />
      <section className="bg-off py-16">
        <FadeUp className="mx-auto max-w-[1100px] px-5">
          <img src="/images/hajj-route-map.webp" alt="Hajj route map" className="w-full rounded-xl border-[3px] border-gold" style={{ borderRadius: 12 }} />
        </FadeUp>
      </section>
      <section className="bg-cream py-16 paper-texture">
        <FadeUp className="text-center mb-10">
          <h2 className="font-display text-4xl text-[#1A1208]">The Seven-Step Route</h2>
          <Divider />
        </FadeUp>
        <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center justify-center gap-4">
          {STEPS.map((s,i) => (
            <FadeUp key={s} delay={i*60} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold text-[#1A1208] font-bold flex items-center justify-center font-display">{i+1}</div>
              <span className="font-display text-lg text-[#1A1208]">{s}</span>
              {i < STEPS.length-1 && <span className="text-gold text-2xl">→</span>}
            </FadeUp>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-gold"><Download size={16} /> Download Chart</button>
          <p className="italic text-gold mt-5">"And for Allah, upon the people, is the pilgrimage to the House."</p>
        </div>
      </section>
    </Layout>
  );
}
