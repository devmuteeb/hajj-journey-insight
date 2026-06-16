import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { POSTS } from "./blog";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const [slug, setSlug] = useState("");
  useEffect(() => {
    setSlug(window.location.pathname.split("/").pop() || "");
  }, []);
  const post = POSTS.find(p => p.slug === slug);

  if (!slug) return <Layout><div className="py-32 text-center">Loading…</div></Layout>;
  if (!post) return (
    <Layout>
      <div className="py-32 text-center">
        <h1 className="font-display text-3xl text-[#1A1208]">Post not found</h1>
        <Link to="/blog" className="btn-gold mt-6 inline-flex">Back to Blog</Link>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <section className="relative" style={{ height: 380 }}>
        <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(26,18,8,0.65)" }} />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-5 max-w-4xl mx-auto">
          <span className="bg-gold text-[#1A1208] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">{post.category}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">{post.title}</h1>
          <p className="text-cream/80 mt-3">{post.author} • {post.date} • {post.read}</p>
        </div>
      </section>
      <article className="bg-off py-16">
        <div className="mx-auto px-5" style={{ maxWidth: 760 }}>
          <p className="text-[#2D1F0E] text-lg">{post.excerpt}</p>
          <div className="gold-divider"><span/><span className="diamond"/><span/></div>
          <p className="text-[#2D1F0E]">Hajj is a journey unlike any other. Across continents, languages and lifetimes, pilgrims arrive in one identical garment — equal before their Creator and equal before each other. This article walks through what every traveller should hold close as they prepare.</p>
          <h2 className="font-display text-2xl text-[#1A1208] mt-8">Beginning with intention</h2>
          <p className="text-[#2D1F0E]">Everything begins with intention. Without sincerity at the start, even the most polished plan loses its meaning. The rite of Ihram is itself a declaration: I am here for Him, and Him alone.</p>
          <h2 className="font-display text-2xl text-[#1A1208] mt-8">Carrying patience</h2>
          <p className="text-[#2D1F0E]">Patience is the truest currency of the journey. Crowds, heat, long walks — each one a chance to soften the heart and remember whose guest you are.</p>
          <h2 className="font-display text-2xl text-[#1A1208] mt-8">Returning changed</h2>
          <p className="text-[#2D1F0E]">A successful Hajj is one that returns home with you — in how you speak, how you spend, how you remember Him in the quiet hours after the journey ends.</p>
          <div className="mt-10">
            <Link to="/blog" className="btn-gold-outline">← Back to all articles</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
