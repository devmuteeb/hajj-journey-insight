# Hajj Illuminated

Looking at your reference screenshots carefully — dark rich background, books imagery, prayer times widget on hero, stats bar below hero, bold Arabic-style serif headings, warm gold/dark brown palette, very structured and content-heavy. Here's the new prompt:

PROMPT:

Build a complete multi-page website called "Hajj at a Glance". Religious Islamic resource website. Use the attached reference screenshot for design inspiration — match that visual style, warmth, and structure but in English.

OVERALL DESIGN STYLE — follow reference screenshot

Dark warm background #1A1208 (very dark brown) for header and hero

Main content sections: warm cream #F5EDD6 and off-white #FAF6EF

Gold accent #C9973A — used for borders, highlights, buttons, icons

Dark brown #2D1F0E for footer and dark sections

Fonts: Amiri for headings (bold, Islamic editorial feel) + Cairo for body — both from Google Fonts

Headings: white or gold on dark, dark charcoal on light — NEVER light grey, always bold and visible

Body text minimum 17px, weight 500, line height 1.8 — never thin or light

Gold ornamental dividers between sections — thin line + diamond center SVG

Subtle aged paper texture on light sections — very low opacity 0.04

Scroll fade-up animations via Intersection Observer — smooth, not bouncy

Shared header and footer across all pages

HEADER — match reference screenshot

Dark brown #1A1208 background

Top bar above header: date in Hijri + Gregorian right side, social icons left (Facebook, Twitter, Instagram, YouTube, LinkedIn) — small, gold icons

Main header row: logo right area, big centered search bar with gold border and search icon, login/register button left with gold border

Navigation bar below: full width gold background #C9973A, white bold text links — Home, The Hajj, The Chart, Hajj Options, Hajj Rituals, Chart History, Blog, Contact Us

Mobile: hamburger menu

FOOTER — match reference

Dark brown #2D1F0E background

3 columns: About (logo + short description), Quick Links, Contact Us (phone/email/social)

Newsletter row above columns: right side label + email input + gold Send button

Bottom bar: Hijri + Gregorian date left, logo center, social icons right

All text warm off-white, gold accents

HOME PAGE

Hero Section — match reference exactly:

Full width video hero-bg.mp4 — autoplay, muted, loop, playsinline

Height 620px, dark overlay rgba(0,0,0,0.6)

Left side overlay box (like prayer times box in reference): white/cream semi-transparent card rgba(245,237,214,0.95), rounded corners, showing:

Bold heading: Hajj at a Glance

Subheading: Your complete guide to Hajj & Umrah

Gold divider line

2-line description text

Gold button: Start Your Journey

Right side on video: large white bold text title + 2 line subtitle

Below hero full width: stats bar on dark brown background — 5 stats in a row with gold icons:

+1,000 Pilgrims Guided

+100 Q&A Answered

80 Video Resources

30 Research Articles

90 Free Lessons

Each stat: large gold bold number, small white label, icon beside number

Quranic Verse Band:

Cream #F5EDD6 background

Centered bold Amiri italic large text: "And proclaim to the people the Hajj..."

English translation in smaller Cairo below

Gold lines above and below

About Hajj — Two Column:

Left: image (use first attached Makkah image) with gold border frame 4px, slight shadow

Right: bold heading What is Hajj? in Amiri, 3 short paragraphs Cairo 500 weight, bullet points for key facts, gold left border accent on text area

Off-white #FAF6EF background

General Goals Section:

Cream background

Right: decorative Islamic books graphic / image

Left: heading Key Pillars of Hajj bold Amiri, 5–6 bullet points with gold diamond bullets

Matches reference layout with image right, content left

Three Types of Hajj — 3 Cards Row:

White background

3 equal cards side by side

Each card: gold top border 4px, large Roman numeral in gold, bold Amiri title, Cairo description, gold Learn More →

Tamattu' / Qiran / Ifraad

Hajj Journey Timeline:

Dark brown #2D1F0E background, white/gold text

Horizontal 5-step timeline: gold numbered circles connected by gold line

Day 1 Ihram → Day 2 Mina → Day 3 Arafat → Day 4 Stoning → Day 5 Farewell Tawaf

Explore Resources — 2x3 Grid:

Cream background

6 resource boxes, each: gold left border, bold Amiri title, 1-line Cairo description, gold link

The Hajj / The Chart / Hajj Options / Hajj Rituals / Chart History / Blog

Useful Resources Widgets:

Dark brown #1A1208 background section, gold headings

Each widget in its own block with bold white heading above

Weather widget:

html

<a class="weatherwidget-io" href="https://forecast7.com/en/21d3939d86/mecca/" data-label_1="MAKKAH" data-label_2="WEATHER" data-theme="original">MAKKAH WEATHER</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');</script>

Currency widget:

html

<iframe title="fx" src="https://wise.com/gb/currency-converter/fx-widget/converter?sourceCurrency=GBP&targetCurrency=SAR" height="490" width="340" frameBorder="0" allowtransparency="true"></iframe>

Hotel widget:

html

<div data-skyscanner-widget="HotelSearchWidget"></div>
<script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>

Flight widget:

html

<div data-skyscanner-widget="SearchWidget"></div>
<script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>

Hajj Agencies + Hospitals + Transportation: clean static info cards, gold button

Makkah Image Banner:

Second attached Makkah image full width 450px, overlay 55%

Centered white bold Amiri: Labbayk Allahumma Labbayk

Gold italic translation below

Newsletter:

Cream background, centered Amiri heading, email + gold Subscribe button

THE HAJJ PAGE

Dark brown banner top 300px, page title white bold centered, breadcrumb below in gold

Two column: left image with gold frame border, right text content

Short paragraphs only, no walls of text

Gold bullet points for key facts

THE CHART PAGE

Dark banner top

hajj-route-map.webp centered, max-width 1100px, gold border frame 3px, rounded 12px

7-step route strip below: gold numbered circles connected by arrow line

Gold Download Chart button

Italic note below in gold

HAJJ OPTIONS PAGE

Dark banner top

3 large panels alternating cream/white, stacked vertically

Roman numeral gold watermark, bold Amiri title, gold 4px left border, bullet facts

THE HAJJ RITUALS PAGE

Second Makkah image as banner top

Vertical alternating timeline — image left/right alternating each step

Step images: ihram-white-pilgrim.webp, tawaf-kaaba-circling.webp, safa-marwa-walkways.webp, arafat-plain-crowd.webp, muzdalifah-night-pilgrims.webp, jamarat-stoning.webp

Gold circle step number, bold Amiri title, 2–3 lines Cairo description only

Talbiya verse at bottom in cream box, gold left border, italic Amiri

CHART HISTORY PAGE

Dark banner top

2x2 milestone card grid — each: image top, large gold year, bold title, 2 lines

Vertical gold timeline below with years and events

BLOG PAGE /blog

Cream background, 3-column card grid

Card: image top, gold category tag, bold Amiri title, excerpt Cairo, author + date + read time, gold Read More →

Single post: dark banner with title, content 760px centered

IMPORTANT: In blog.$slug.tsx read slug using:

ts

const slug = window.location.pathname.split('/').pop() || '';

NOT TanStack router params

ADMIN /admin

Dark themed password page matching site palette

Dashboard with stats, post list, full editor

SEO checklist with live % score

All data via VITE_API_URL

No crypto.randomUUID() — use Math.random().toString(36).substring(2) + Date.now().toString(36)

CONTACT PAGE

Dark banner top

Two column: left form with gold border frame, right Makkah image

Warm intro line above form

DEPLOYMENT FILES — create in root:

server-entry.js:

js

import server from './dist/server/index.js';
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
const port = process.env.PORT || 3000;
const clientRoot = new URL('./dist/client', import.meta.url).pathname;
const mime = {'.css':'text/css','.js':'application/javascript','.mjs':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json','.mp4':'video/mp4','.webm':'video/webm','.html':'text/html','.webp':'image/webp'};
createServer(async (req, res) => {
  const urlPath = req.url.split('?')[0];
  const filePath = join(clientRoot, urlPath);
  const ext = extname(filePath);
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream'});
    createReadStream(filePath).pipe(res);
    return;
  }
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url.toString(), {method: req.method, headers: Object.fromEntries(Object.entries(req.headers).filter(([_,v]) => v !== undefined))});
    const env = {ASSETS: {fetch: async (req) => {
      const u = new URL(req.url);
      const fp = join(clientRoot, u.pathname);
      if (existsSync(fp) && statSync(fp).isFile()) {
        const ext = extname(fp);
        const data = await import('node:fs/promises').then(fs => fs.readFile(fp));
        return new Response(data, {headers: {'Content-Type': mime[ext] || 'application/octet-stream'}});
      }
      return new Response('Not found', {status: 404});
    }}};
    const ctx = {waitUntil: () => {}, passThroughOnException: () => {}};
    const response = await server.fetch(request, env, ctx);
    const body = await response.arrayBuffer();
    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
    res.end(Buffer.from(body));
  } catch(e) {
    console.error(e);
    res.writeHead(500);
    res.end('Server error: ' + e.message);
  }
}).listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}`));

## Docker

```sh
docker build --build-arg VITE_ADMIN_PASSWORD=yourpass -t hajj-illuminated .
docker run -p 3000:3000 hajj-illuminated
```

`VITE_*` vars are baked in at build time, so set them as build args.

## Development

```sh
npm i && npm run dev
```
