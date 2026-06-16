import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/Layout";
import { FadeUp, Divider } from "@/components/FadeUp";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Hajj at a Glance" },
      { name: "description", content: "Get in touch with the Hajj at a Glance team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <PageBanner title="Contact Us" breadcrumb="Home › Contact" />
      <section className="bg-off py-20">
        <FadeUp className="mx-auto max-w-3xl text-center px-5 mb-10">
          <p className="font-display italic text-2xl text-[#1A1208]">We would love to hear from you. Send us a message and a member of our team will respond as soon as possible.</p>
          <Divider />
        </FadeUp>
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-10 items-start">
          <FadeUp>
            <form className="bg-white p-8 rounded gold-frame space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-1">Full Name</label>
                <input className="w-full px-4 py-3 bg-off border-2 border-gold/30 rounded outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-off border-2 border-gold/30 rounded outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-1">Subject</label>
                <input className="w-full px-4 py-3 bg-off border-2 border-gold/30 rounded outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-1">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-off border-2 border-gold/30 rounded outline-none focus:border-gold" />
              </div>
              <button type="button" className="btn-gold w-full justify-center">Send Message</button>
            </form>
          </FadeUp>
          <FadeUp>
            <img src="/images/madinah-pilgrims.webp" alt="Madinah" className="w-full h-[420px] object-cover rounded gold-frame" />
            <div className="bg-[#1A1208] text-cream p-6 rounded mt-6 space-y-3">
              <div className="flex items-center gap-3"><Phone className="text-gold"/><span>+966 12 000 0000</span></div>
              <div className="flex items-center gap-3"><Mail className="text-gold"/><span>info@hajjataglance.com</span></div>
              <div className="flex items-center gap-3"><MapPin className="text-gold"/><span>Makkah, Saudi Arabia</span></div>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
