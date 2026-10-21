import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A1208] px-4 text-cream">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-cream">Page not found</h2>
        <p className="mt-2 text-sm text-cream/70">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A1208] px-4 text-cream">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-cream">This page didn't load</h1>
        <p className="mt-2 text-sm text-cream/70">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-gold-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hajj at a Glance — Your Complete Guide to Hajj & Umrah" },
      { name: "description", content: "Hajj at a Glance — an English Islamic resource for understanding Hajj rituals, route, types, history and travel essentials." },
      { property: "og:title", content: "Hajj at a Glance — Your Complete Guide to Hajj & Umrah" },
      { property: "og:description", content: "Hajj at a Glance — an English Islamic resource for understanding Hajj rituals, route, types, history and travel essentials." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Hajj at a Glance" },
      { name: "twitter:title", content: "Hajj at a Glance — Your Complete Guide to Hajj & Umrah" },
      { name: "twitter:description", content: "Hajj at a Glance — an English Islamic resource for understanding Hajj rituals, route, types, history and travel essentials." },
      { property: "og:image", content: "/images/tawaf-kaaba-circling.webp" },
      { name: "twitter:image", content: "/images/tawaf-kaaba-circling.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
