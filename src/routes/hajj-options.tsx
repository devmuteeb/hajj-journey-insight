import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";

export const Route = createFileRoute("/hajj-options")({
  head: () => ({
    meta: [
      { title: "Hajj Options — Tamattu', Qiran & Ifraad" },
      { name: "description", content: "The three valid forms of Hajj explained — Tamattu', Qiran and Ifraad." },
      { property: "og:url", content: "/hajj-options" },
    ],
    links: [{ rel: "canonical", href: "/hajj-options" }],
  }),
  component: Options,
});

const OPTIONS = [
  { roman: "I", title: "Tamattu'", bg: "bg-cream", desc: "Performing Umrah first during the months of Hajj, then exiting Ihram, and later re-entering Ihram for Hajj from Makkah.", facts: ["Most common for international pilgrims","Requires a sacrificial offering (Hadi)","Two separate Ihrams"] },
  { roman: "II", title: "Qiran", bg: "bg-white", desc: "Combining the intentions of Umrah and Hajj together in a single state of Ihram from the Meeqaat.", facts: ["Single continuous Ihram","Hadi is obligatory","Often chosen by those bringing a sacrificial animal"] },
  { roman: "III", title: "Ifraad", bg: "bg-cream", desc: "Performing Hajj alone, without combining it with Umrah. Common for residents of the sacred precinct.", facts: ["No Hadi required","Single intention for Hajj only","Often performed by Makkans"] },
];

function Options() {
  return (
    <Layout>
      <PageBanner title="Hajj Options" breadcrumb="Home › Hajj Options" />
      {OPTIONS.map((o,i) => (
        <section key={o.title} className={`${o.bg} py-20 ${o.bg==='bg-cream' ? 'paper-texture' : ''}`}>
          <FadeUp className="mx-auto max-w-5xl px-5 relative border-l-4 border-gold pl-6">
            <div className="absolute -top-4 right-4 font-display text-[140px] leading-none text-gold/15 select-none">{o.roman}</div>
            <h2 className="font-display text-4xl text-[#1A1208]">{o.title}</h2>
            <Divider />
            <p className="text-[#2D1F0E] text-lg">{o.desc}</p>
            <ul className="mt-5 space-y-2">
              {o.facts.map(f => <li key={f} className="flex items-start gap-3"><span className="mt-2 w-2 h-2 bg-gold rotate-45 shrink-0" /> <span>{f}</span></li>)}
            </ul>
          </FadeUp>
        </section>
      ))}
    </Layout>
  );
}
