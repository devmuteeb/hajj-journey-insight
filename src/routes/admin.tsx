import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { POSTS } from "./blog";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

const PASSWORD = (import.meta as any).env?.VITE_ADMIN_PASSWORD || "admin";
const genId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

type Post = { id: string; slug: string; title: string; excerpt: string; body: string; category: string };

function seoScore(p: Post) {
  let score = 0;
  if (p.title.length >= 20 && p.title.length <= 60) score += 25;
  if (p.excerpt.length >= 50 && p.excerpt.length <= 160) score += 25;
  if (p.slug && /^[a-z0-9-]+$/.test(p.slug)) score += 20;
  if (p.body.length > 300) score += 20;
  if (p.category) score += 10;
  return score;
}

function Admin() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("hag-posts");
    if (stored) setPosts(JSON.parse(stored));
    else setPosts(POSTS.map(p => ({ id: genId(), slug: p.slug, title: p.title, excerpt: p.excerpt, body: p.excerpt, category: p.category })));
  }, []);

  useEffect(() => {
    if (posts.length) localStorage.setItem("hag-posts", JSON.stringify(posts));
  }, [posts]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#1A1208] text-cream flex items-center justify-center px-5">
        <div className="bg-[#231809] border-2 border-gold/40 rounded p-8 max-w-sm w-full">
          <h1 className="font-display text-3xl text-gold text-center">Admin</h1>
          <p className="text-cream/70 text-center mb-6 text-sm">Enter the password to continue.</p>
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} className="w-full px-4 py-3 bg-[#1A1208] border-2 border-gold/40 rounded outline-none text-cream" placeholder="Password" />
          <button onClick={() => setAuthed(pw === PASSWORD)} className="btn-gold w-full justify-center mt-4">Enter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1208] text-cream">
      <header className="border-b border-gold/30 px-5 py-4 flex items-center justify-between">
        <h1 className="font-display text-2xl text-gold">Admin Dashboard</h1>
        <Link to="/" className="btn-gold-outline">View Site</Link>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-10 grid md:grid-cols-3 gap-5">
        {[{l:"Posts",v:posts.length},{l:"Categories",v:new Set(posts.map(p=>p.category)).size},{l:"Avg SEO",v:posts.length ? Math.round(posts.reduce((a,p)=>a+seoScore(p),0)/posts.length)+"%" : "0%"}].map(s => (
          <div key={s.l} className="bg-[#231809] border border-gold/30 p-6 rounded">
            <div className="text-cream/70 text-sm">{s.l}</div>
            <div className="font-display text-4xl text-gold">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 grid lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl text-gold">Posts</h2>
            <button onClick={() => setEditing({ id: genId(), slug: "", title: "", excerpt: "", body: "", category: "General" })} className="btn-gold">New Post</button>
          </div>
          <ul className="space-y-2">
            {posts.map(p => (
              <li key={p.id} className="bg-[#231809] border border-gold/20 p-4 rounded flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-bold truncate">{p.title || "(untitled)"}</div>
                  <div className="text-xs text-cream/60">/{p.slug || "no-slug"} • SEO {seoScore(p)}%</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditing(p)} className="btn-gold-outline">Edit</button>
                  <button onClick={() => setPosts(posts.filter(x => x.id !== p.id))} className="text-red-400 px-3">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl text-gold mb-4">Editor</h2>
          {editing ? (
            <div className="bg-[#231809] border border-gold/30 p-6 rounded space-y-3">
              {(["title","slug","category","excerpt"] as const).map(k => (
                <div key={k}>
                  <label className="text-sm capitalize text-cream/70">{k}</label>
                  <input value={(editing as any)[k]} onChange={e => setEditing({ ...editing, [k]: e.target.value })} className="w-full px-3 py-2 bg-[#1A1208] border border-gold/30 rounded outline-none text-cream" />
                </div>
              ))}
              <div>
                <label className="text-sm text-cream/70">Body</label>
                <textarea rows={8} value={editing.body} onChange={e => setEditing({ ...editing, body: e.target.value })} className="w-full px-3 py-2 bg-[#1A1208] border border-gold/30 rounded outline-none text-cream" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">SEO Score: <span className="text-gold font-bold">{seoScore(editing)}%</span></div>
                <div className="flex gap-2">
                  <button onClick={() => setEditing(null)} className="btn-gold-outline">Cancel</button>
                  <button onClick={() => {
                    setPosts(prev => {
                      const exists = prev.find(p => p.id === editing.id);
                      return exists ? prev.map(p => p.id === editing.id ? editing : p) : [editing, ...prev];
                    });
                    setEditing(null);
                  }} className="btn-gold">Save</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#231809] border border-gold/20 p-6 rounded text-cream/60">Select a post or create a new one to begin editing.</div>
          )}
        </div>
      </div>
    </div>
  );
}
