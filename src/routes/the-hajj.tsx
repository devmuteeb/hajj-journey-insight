import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";

export const Route = createFileRoute("/the-hajj")({
  head: () => ({
    meta: [
      { title: "The Hajj — Meaning, Origins & Obligation" },
      { name: "description", content: "Understand what Hajj is, where it began, and why it remains the fifth pillar of Islam." },
      { property: "og:title", content: "The Hajj — Hajj at a Glance" },
      { property: "og:url", content: "/the-hajj" },
    ],
    links: [{ rel: "canonical", href: "/the-hajj" }],
  }),
  component: TheHajj,
});

function TheHajj() {
  return (
    <Layout>
      <PageBanner title="The Hajj" breadcrumb="Home › The Hajj" />
      <section className="bg-off py-20">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-10 items-start">
          <FadeUp>
            <img src="/images/tawaf-kaaba-circling.webp" alt="The Ka'bah" className="w-full h-[460px] object-cover rounded gold-frame" />
          </FadeUp>
          <FadeUp className="border-l-4 border-gold pl-6">
            <h2 className="font-display text-4xl text-[#1A1208]">A Pilgrimage Across Millennia</h2>
            <Divider />
            <p className="text-[#2D1F0E]">Hajj traces its origins to the Prophet Ibrahim (peace be upon him) and his family. Every rite is a living echo of their devotion — their footsteps, their sacrifice, their unwavering trust in the One.</p>
            <p className="text-[#2D1F0E] mt-4">It is the fifth pillar of Islam, obligatory once in a lifetime upon every able Muslim. Performed in Dhul Hijjah, it gathers believers from every corner of the earth in identical white garments — wealth, race and rank dissolved.</p>
            <ul className="mt-6 space-y-2">
              {["Established by Prophet Ibrahim (AS)","Confirmed by Prophet Muhammad ﷺ in his Farewell Hajj","Performed once in a lifetime if able","Held annually in the month of Dhul Hijjah","Unites millions in worship and equality"].map(t => (
                <li key={t} className="flex items-start gap-3"><span className="mt-2 w-2 h-2 bg-gold rotate-45 shrink-0" /> <span>{t}</span></li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>
      <section className="bg-cream py-16 paper-texture">
        <FadeUp className="mx-auto max-w-3xl px-5 text-center">
          <h3 className="font-display text-3xl text-[#1A1208]">"And complete the Hajj and Umrah for Allah"</h3>
          <Divider />
          <p className="text-[#5a4423]">— Surah Al-Baqarah, 2:196</p>
        </FadeUp>
      </section>
    </Layout>
  );
}
