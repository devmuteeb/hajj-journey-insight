import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-off">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageBanner({ title, breadcrumb }: { title: string; breadcrumb?: string }) {
  return (
    <section className="bg-[#1A1208] text-cream py-20 md:py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, #C9973A 1px, transparent 2px)", backgroundSize: "32px 32px" }} />
      <div className="relative">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-cream">{title}</h1>
        {breadcrumb && <p className="mt-3 text-gold tracking-wide">{breadcrumb}</p>}
        <div className="gold-divider mt-4"><span /><span className="diamond" /><span /></div>
      </div>
    </section>
  );
}
