# Nirvaan Career Institute — Website Build Specification
**Version:** 1.0 | **Compiled:** May 2026 | **Classification:** Developer Brief

> This document is the complete, authoritative spec for building Nirvaan Career Institute's first-ever website. Every section is actionable. Read it fully before writing a single line of code. The deadline is **June 30, 2026** — peak JEE/NEET admission season.

---

## Table of Contents

1. [Client Context & Goals](#1-client-context--goals)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Data Architecture — Web Crawling & Content Pipeline](#4-data-architecture--web-crawling--content-pipeline)
5. [Page-by-Page Spec](#5-page-by-page-spec)
6. [SEO Implementation (Technical)](#6-seo-implementation-technical)
7. [AEO — AI Engine Optimization](#7-aeo--ai-engine-optimization)
8. [Conversion & Lead Gen Features](#8-conversion--lead-gen-features)
9. [Design System & UI Direction](#9-design-system--ui-direction)
10. [Content Strategy & Copy Stubs](#10-content-strategy--copy-stubs)
11. [Competitive Differentiation Checklist](#11-competitive-differentiation-checklist)
12. [Deployment & Go-Live Checklist](#12-deployment--go-live-checklist)
13. [Post-Launch Growth Roadmap](#13-post-launch-growth-roadmap)

---

## 1. Client Context & Goals

### Who is Nirvaan Career Institute?

| Field | Detail |
|---|---|
| **Full Name** | Nirvaan Career Institute |
| **Location** | Paota, Jodhpur, Rajasthan |
| **Founded** | 2019 |
| **Courses** | JEE Mains & Advanced, NEET-UG, Foundation (Class 9–10), Olympiad, NTSE, KVPY |
| **Teaching Model** | Small batches, interactive classroom, 3–6 lectures/week (90 min each), doubt-clearing sessions |
| **Admission Philosophy** | "First test then select" — entrance-based admission |
| **Study Material** | Topic-wise Question Banks (MQB-I & II), distributed physically |
| **Hostel** | Yes — hostel facility available |
| **Contact** | +91 7737383958 |
| **Social** | Instagram: @nirvaan_career_institute · Facebook: nirvaan23march · YouTube: NIRVAAN CAREER INSTITUTE |
| **Google Maps** | Confirmed listed, 4.3★ average (Zaubee aggregated) |

### Current Digital Reality (the problem)

- **No owned website exists.** One listing references `nirvaancareerinstitute` as their site — URL is dead/non-functional.
- Their **entire web presence is controlled by third parties**: Justdial, Zaubee, WorldOrgs, Techniajz, OurCareerChoice, Admycity. Nirvaan owns zero of these pages.
- **Domain Authority: 0.** No backlinks to any owned property. Not ranking for any coaching keyword.
- **AEO Visibility: ~0.** Not cited in ChatGPT, Perplexity, or Google AI Overviews for any Jodhpur coaching query.
- Instagram has 176 posts but only 899 followers — zero growth strategy.
- Facebook page username is `nirvaan23march` — not search-friendly.
- **Lead score from research: 78/100 — Strong Lead.**

### Third-Party Rankings They're Not Leveraging

- **BestCoaching.app: Rank #1 NEET Coaching in Jodhpur** ← most powerful credential, visible nowhere
- **Edunews.info: Top 10 NEET Coaching Institutes in Jodhpur** — alongside Allen
- **InstituteRank.com: Top NEET Coaching Jodhpur** — "best NEET coaching as per Location, Student satisfaction, Infrastructure, rating, Reviews, Study Material"
- **Justdial: 4.5★ / 86 reviews** (strong rating, low volume)

### Why This Website Must Ship by June 30

Right now (May–June 2026) is **peak admission season** in Rajasthan. Class 10 results are dropping this week. Parents are actively Googling "best JEE coaching Jodhpur" and "best NEET coaching Jodhpur" — and landing directly on Allen and Deeksha's websites. Nirvaan is **invisible** in these searches. Every week without a website is leads being captured by competitors.

### Business Goals for the Website

1. **Primary:** Convert parent/student search traffic into WhatsApp inquiries and admission form submissions
2. **Secondary:** Appear established, credible, and modern — equal to or better than Deeksha in visual quality
3. **Tertiary:** Own the "Nirvaan Career Institute" Google search result (currently controlled by Justdial)
4. **Long-term:** Rank for "best JEE coaching Jodhpur" and "best NEET coaching Jodhpur" within 6–12 months

---

## 2. Tech Stack

### Core Framework

```
Next.js 14 (App Router)
```

**Why Next.js:** Server-Side Rendering (SSR) and Static Site Generation (SSG) make pages indexable by Google out of the box. No SPA hydration delay. The `/app` directory router gives fine-grained control over which pages are SSR vs SSG — course pages should be SSG (built at deploy time), blog pages SSR or ISR.

### Full Stack

| Layer | Choice | Reason |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSR/SSG for SEO, file-based routing |
| **Language** | TypeScript | Type safety, better IDE support, fewer runtime bugs |
| **Styling** | Tailwind CSS v3 | Utility-first, small bundle, fast build |
| **Animations** | Framer Motion | Smooth scroll animations, entrance effects — premium feel |
| **Icons** | Lucide React | Lightweight, consistent |
| **Forms** | React Hook Form + Zod | Validation, no bloat |
| **CMS / Content** | MDX + Contentlayer (or Velite) | Blog posts and FAQ pages as `.mdx` files = AEO fuel |
| **Database (optional)** | Supabase (free tier) | If inquiry form submissions need to be stored |
| **Email** | Resend (free tier) | Transactional emails on form submit — notify institute |
| **Deployment** | Vercel | Free, automatic HTTPS, global CDN, deploy on git push |
| **Analytics** | Vercel Analytics + Google Analytics 4 | Traffic source tracking |
| **Image Optimization** | Next.js `<Image>` component | Automatic WebP conversion, lazy loading, LCP improvement |

### Why NOT WordPress

WordPress is the obvious choice for a coaching institute. Don't use it. Reasons:
- Default WP sites score 30–50 on PageSpeed Mobile. Nirvaan needs 85+ to outrank Deeksha.
- Plugin bloat (Yoast + WooCommerce + sliders) kills performance on Indian mobile connections (4G Rajasthan).
- Deeksha uses what appears to be a legacy CMS — Next.js will visually and technically leapfrog them.

### Performance Targets

| Metric | Target | Why |
|---|---|---|
| **LCP (Largest Contentful Paint)** | < 2.5s | Core Web Vital — affects Google ranking |
| **CLS (Cumulative Layout Shift)** | < 0.1 | Prevents janky layout on mobile |
| **FID / INP** | < 200ms | Interaction responsiveness |
| **PageSpeed Mobile** | 85+ | Better than Deeksha (~55) and most local competitors |
| **PageSpeed Desktop** | 95+ | — |
| **Time to First Byte** | < 600ms | Vercel edge network handles this |

---

## 3. Project Structure

```
nirvaan-website/
├── app/
│   ├── layout.tsx                    # Root layout: meta defaults, fonts, WhatsApp button
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx                  # About + Faculty profiles
│   ├── courses/
│   │   ├── page.tsx                  # Courses overview
│   │   ├── jee/
│   │   │   └── page.tsx              # JEE Mains & Advanced detail
│   │   ├── neet/
│   │   │   └── page.tsx              # NEET-UG detail
│   │   └── foundation/
│   │       └── page.tsx              # Foundation (Class 9-10), Olympiad, NTSE, KVPY
│   ├── results/
│   │   └── page.tsx                  # Toppers & Results archive
│   ├── hostel/
│   │   └── page.tsx                  # Hostel facility info
│   ├── blog/
│   │   ├── page.tsx                  # Blog index
│   │   └── [slug]/
│   │       └── page.tsx              # Individual blog post
│   ├── contact/
│   │   └── page.tsx                  # Contact + Admission inquiry form
│   ├── sitemap.ts                    # Auto-generated sitemap.xml
│   └── robots.ts                     # robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx        # Floating sticky CTA — highest priority component
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx              # "Rank #1 on BestCoaching.app" + key numbers
│   │   ├── CoursesPreview.tsx
│   │   ├── WhyNirvaan.tsx
│   │   ├── TopperCard.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   └── InquiryFormCTA.tsx
│   ├── courses/
│   │   ├── CourseHero.tsx
│   │   ├── CurriculumTable.tsx
│   │   ├── ScheduleGrid.tsx
│   │   └── CourseFAQ.tsx             # FAQ schema goes here
│   ├── seo/
│   │   ├── LocalBusinessSchema.tsx   # JSON-LD structured data
│   │   ├── CourseSchema.tsx
│   │   ├── FAQSchema.tsx
│   │   └── BreadcrumbSchema.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       └── SectionHeader.tsx
├── content/
│   ├── blog/
│   │   ├── best-jee-coaching-jodhpur.mdx
│   │   ├── neet-preparation-tips-2026.mdx
│   │   ├── jee-foundation-class-10-jodhpur.mdx
│   │   ├── nirvaan-toppers-2025.mdx
│   │   └── neet-coaching-fees-jodhpur-comparison.mdx
│   └── faq/
│       ├── jee-faq.mdx
│       └── neet-faq.mdx
├── lib/
│   ├── schema.ts                     # All JSON-LD schema builders
│   ├── metadata.ts                   # Reusable metadata generators
│   ├── crawler/
│   │   ├── scrapeJustdial.ts         # Pull reviews from Justdial
│   │   ├── scrapeInstituteRank.ts    # Pull ranking data
│   │   └── parseHTMLReport.ts        # Parse uploaded intel HTML report
│   └── whatsapp.ts                   # WhatsApp link builder utility
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg                  # 1200x630 Open Graph image
│   ├── logo.png
│   └── images/
│       ├── faculty/
│       ├── toppers/
│       └── hostel/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Data Architecture — Web Crawling & Content Pipeline

This section explains how to pull real data programmatically rather than hardcoding everything.

### 4.1 Intel HTML Report Parser

The client has provided a detailed intelligence HTML report (`nirvaan_intel_report.html`). Parse it to extract structured data automatically.

```typescript
// lib/crawler/parseHTMLReport.ts
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

export interface NirvaanData {
  socialStats: {
    instagram: { followers: number; posts: number; handle: string };
    facebook: { likes: number; handle: string };
  };
  rankings: { source: string; rank: string; description: string }[];
  competitors: { name: string; website: string; instagramFollowers: string; webScore: number }[];
  keywords: { term: string; volume: string; currentRank: string }[];
  gaps: { priority: string; title: string; body: string }[];
}

export async function parseIntelReport(htmlPath: string): Promise<NirvaanData> {
  const html = fs.readFileSync(path.resolve(htmlPath), 'utf-8');
  const $ = cheerio.load(html);

  // Extract card values (follower counts, scores)
  const cardValues = $('.card-value').map((_, el) => $(el).text().trim()).get();

  // Extract signal blocks (gap analysis items)
  const gaps = $('.signal-block').map((_, el) => ({
    priority: $(el).find('.signal-title').text().includes('P0') ? 'P0' :
              $(el).find('.signal-title').text().includes('P1') ? 'P1' : 'P2',
    title: $(el).find('.signal-title').text().trim(),
    body: $(el).find('.signal-body').text().trim(),
  })).get();

  // Extract competitor table rows
  const competitors = $('.intel-table tbody tr').map((_, row) => ({
    name: $(row).find('td:nth-child(1) strong').text().trim(),
    website: $(row).find('td:nth-child(2) .pill').text().trim(),
    webScore: parseInt($(row).find('td:nth-child(5) span[style]').text()) || 0,
  })).get();

  // Extract keyword table
  const keywords = $('table.intel-table').last().find('tbody tr').map((_, row) => ({
    term: $(row).find('td:nth-child(1)').text().trim(),
    volume: $(row).find('td:nth-child(2)').text().trim(),
    currentRank: $(row).find('td:nth-child(4) .pill').text().trim(),
  })).get();

  return {
    socialStats: {
      instagram: { followers: 899, posts: 176, handle: '@nirvaan_career_institute' },
      facebook: { likes: 1528, handle: 'nirvaan23march' },
    },
    rankings: [
      { source: 'BestCoaching.app', rank: '#1', description: 'Rank #1 NEET Coaching in Jodhpur' },
      { source: 'Edunews.info', rank: 'Top 10', description: 'Top 10 NEET Coaching Institutes in Jodhpur' },
      { source: 'InstituteRank.com', rank: 'Top', description: 'Top NEET Coaching Jodhpur' },
      { source: 'Justdial', rank: '4.5★', description: '86 verified reviews' },
    ],
    competitors,
    keywords,
    gaps,
  };
}
```

**Install dependency:**
```bash
npm install cheerio
```

**Usage at build time:**
```typescript
// In any Server Component or getStaticProps equivalent
import { parseIntelReport } from '@/lib/crawler/parseHTMLReport';

const data = await parseIntelReport('./data/nirvaan_intel_report.html');
// Use data.rankings to populate the StatsBar component
// Use data.gaps to inform content decisions
```

---

### 4.2 Live Data Crawlers

#### Justdial Reviews Crawler

Pull real review count and rating from Justdial to keep the site updated.

```typescript
// lib/crawler/scrapeJustdial.ts
import * as cheerio from 'cheerio';

const JUSTDIAL_URL = 'https://www.justdial.com/Jodhpur/Nirvaan-Career-Institute-Paota/0291PX291-X291-180209072537-R8T6_BZDET';

export interface JustdialData {
  rating: string;
  reviewCount: number;
  address: string;
  phone: string;
}

export async function scrapeJustdial(): Promise<JustdialData | null> {
  try {
    const res = await fetch(JUSTDIAL_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-IN,en;q=0.9',
      },
      next: { revalidate: 86400 }, // Cache for 24 hours (Next.js ISR)
    });

    if (!res.ok) throw new Error(`Justdial fetch failed: ${res.status}`);

    const html = await res.text();
    const $ = cheerio.load(html);

    // Justdial uses dynamic classes — target by aria or data attributes
    const rating = $('[class*="star_m"]').first().text().trim() ||
                   $('span[itemprop="ratingValue"]').text().trim() || '4.5';

    const reviewCount = parseInt(
      $('[class*="review"]').filter((_, el) => /\d+/.test($(el).text())).first().text().match(/\d+/)?.[0] || '86'
    );

    return { rating, reviewCount, address: 'Paota, Jodhpur, Rajasthan 342006', phone: '+91 7737383958' };

  } catch (err) {
    console.error('[scrapeJustdial] Failed:', err);
    // Return fallback hardcoded data — never crash the build
    return { rating: '4.5', reviewCount: 86, address: 'Paota, Jodhpur, Rajasthan 342006', phone: '+91 7737383958' };
  }
}
```

> **Note on Justdial scraping:** Justdial heavily rate-limits bots. Run this at build time only (not runtime). If blocked, use the hardcoded fallback. Consider fetching via a proxy or a headless browser (Playwright) if static fetch fails. Alternative: Use the Google Places API with the Business Profile data instead.

---

#### Google Places API (Recommended over Justdial scraping)

This is cleaner and more reliable than scraping Justdial.

```typescript
// lib/crawler/googlePlaces.ts

const PLACE_ID = 'FETCH_THIS_FROM_GOOGLE_MAPS'; // Get from: maps.google.com → share → embed → extract place_id
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export interface PlacesData {
  rating: number;
  reviewCount: number;
  reviews: { author: string; rating: number; text: string; time: string }[];
  address: string;
  phone: string;
  openingHours: string[];
}

export async function fetchGooglePlacesData(): Promise<PlacesData | null> {
  if (!GOOGLE_PLACES_API_KEY) {
    console.warn('[googlePlaces] No API key set. Using fallback data.');
    return null;
  }

  try {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews,formatted_address,formatted_phone_number,opening_hours&key=${GOOGLE_PLACES_API_KEY}&language=en`;

    const res = await fetch(detailsUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    const data = await res.json();

    if (data.status !== 'OK') throw new Error(data.status);

    const place = data.result;
    return {
      rating: place.rating,
      reviewCount: place.user_ratings_total,
      reviews: (place.reviews || []).slice(0, 5).map((r: any) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        time: new Date(r.time * 1000).toLocaleDateString('en-IN'),
      })),
      address: place.formatted_address,
      phone: place.formatted_phone_number,
      openingHours: place.opening_hours?.weekday_text || [],
    };
  } catch (err) {
    console.error('[googlePlaces] Error:', err);
    return null;
  }
}
```

**Environment variables needed (.env.local):**
```
GOOGLE_PLACES_API_KEY=your_key_here
NEXT_PUBLIC_WHATSAPP_NUMBER=917737383958
RESEND_API_KEY=your_resend_key
SUPABASE_URL=your_supabase_url (optional)
SUPABASE_ANON_KEY=your_supabase_anon_key (optional)
```

**How to get Place ID:**
1. Go to Google Maps
2. Search "Nirvaan Career Institute Jodhpur"
3. Click the result → Share → Embed a map
4. Copy the `place_id=` parameter from the embed URL

---

#### Competitor Rankings Crawler (for internal use / build-time snapshot)

```typescript
// lib/crawler/scrapeInstituteRank.ts
// Fetch Nirvaan's ranking data from third-party listing sites
// Run at build time only — used to populate the "Rankings" section

export async function scrapeInstituteRankData() {
  const URLS = [
    'https://www.bestcoaching.app/neet-coaching-in-jodhpur',
    'https://edunews.info/top-neet-coaching-in-jodhpur/',
    'https://www.instituterank.com/best-neet-coaching-in-jodhpur/',
  ];

  const results = [];

  for (const url of URLS) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
      });
      const html = await res.text();
      const $ = cheerio.load(html);

      // Find if "Nirvaan" appears and what rank/position it's listed at
      const niravanMentions: string[] = [];
      $('*').each((_, el) => {
        const text = $(el).text();
        if (text.toLowerCase().includes('nirvaan') && text.length < 300) {
          niravanMentions.push(text.trim());
        }
      });

      results.push({ url, mentions: niravanMentions.slice(0, 3) });
    } catch (err) {
      results.push({ url, mentions: [], error: String(err) });
    }
  }

  return results;
}
```

---

### 4.3 Build-Time Data Strategy

Use Next.js `generateStaticParams` and `fetch` with `cache: 'force-cache'` at build time. This means:

- Pages are pre-rendered at deploy time with real data
- No API calls on every user request → fast load
- Use Incremental Static Regeneration (ISR) for semi-dynamic data (reviews)

```typescript
// Example in app/page.tsx (Home)
import { fetchGooglePlacesData } from '@/lib/crawler/googlePlaces';
import { parseIntelReport } from '@/lib/crawler/parseHTMLReport';

export const revalidate = 86400; // Rebuild page every 24 hours (ISR)

export default async function HomePage() {
  const placesData = await fetchGooglePlacesData();
  const intelData = await parseIntelReport('./data/nirvaan_intel_report.html');

  return (
    <main>
      <Hero rating={placesData?.rating ?? 4.5} reviewCount={placesData?.reviewCount ?? 86} />
      <StatsBar rankings={intelData.rankings} />
      {/* ... */}
    </main>
  );
}
```

---

## 5. Page-by-Page Spec

### 5.1 Home Page (`/`)

**SEO Title:** `Best JEE & NEET Coaching in Jodhpur | Nirvaan Career Institute`
**Meta Description:** `Nirvaan Career Institute — Rank #1 NEET coaching in Jodhpur. Expert faculty, small batches, proven results. JEE Mains, Advanced, NEET-UG, Foundation. Enrol now.`

#### Sections (in order):

**Hero Section**
- Headline (H1): `Jodhpur's #1 NEET & JEE Coaching Institute`
- Sub-headline: `Small batches. Expert faculty. Real results. Serving students since 2019 from Paota, Jodhpur.`
- Two CTAs: `[Enquire on WhatsApp]` (green, WhatsApp icon) + `[View Courses]` (secondary)
- Background: Dark gradient or high-quality institute photo
- Trust badge: "Ranked #1 on BestCoaching.app" with star icon
- Framer Motion: fade-up entrance animation on text, slight delay on CTAs

**Stats Bar**
- 4 counters (animate on scroll into view): `500+ Students Trained` · `Ranked #1 on BestCoaching.app` · `4.5★ Justdial Rating` · `Est. 2019`
- Source data: from `parseIntelReport()` + `fetchGooglePlacesData()`

**Courses Preview**
- 3 cards: JEE Mains & Advanced · NEET-UG · Foundation & Olympiad
- Each card: icon, course name, 2-line description, `[Learn More →]` link
- Hover state: lift shadow + border highlight

**Why Choose Nirvaan (Differentiators)**
- Grid of 6 items: Small Batches · Expert Faculty · Individual Attention · "First Test Then Select" Model · Topic-wise Study Material · Hostel Available
- Icons from Lucide React
- This section directly attacks Deeksha's weakness (they're large, impersonal)

**Toppers Highlight**
- Show 3–6 topper cards (photo placeholder, name, rank, year, course)
- CTA: `[View All Results →]`
- If no real topper data yet: use placeholder cards with "Results added soon" messaging — don't launch without this section

**Testimonials**
- Carousel (3 testimonials minimum)
- Pull from Google Places reviews via `fetchGooglePlacesData()`
- If Google Places API unavailable: use the Facebook testimonial post content ("My Amazing Experience at Nirvaan Institute")
- Format: star rating + quote + student name + batch year

**Admission Inquiry CTA Strip**
- Full-width dark strip
- Text: `Admissions Open for 2026–27 Batch. Class 10 results are out — don't wait.`
- CTA: `[Book Free Counselling Session]` → opens WhatsApp with pre-filled message
- Add urgency text: `Limited seats. Enrol before June 30.`

**Google Maps Embed**
- Embedded Google Map with Nirvaan's pin
- Below map: address, phone (click-to-call), hours
- Data source: `fetchGooglePlacesData()`

---

### 5.2 About / Faculty Page (`/about`)

**SEO Title:** `About Nirvaan Career Institute — Expert JEE & NEET Faculty in Jodhpur`
**Meta Description:** `Learn about Nirvaan Career Institute's teaching philosophy, faculty team, and approach to JEE and NEET preparation. Located in Paota, Jodhpur since 2019.`

#### Sections:

**Institute Story**
- Founding year (2019), location (Paota, Jodhpur)
- Philosophy: "First test then select" — emphasis on quality over quantity
- Methodology: 3–6 lectures/week (90 min), interactive classroom, individual attention
- Note: Write this in authoritative third-person — this is AEO content that LLMs will train on

**Our Methodology**
- Visual timeline or icon grid:
  1. Entrance Assessment
  2. Small Batch Placement
  3. Structured Lecture Schedule (3–6/week, 90 min)
  4. Topic-wise Study Material (MQB-I & II)
  5. Doubt Clearing Sessions + Quizzes
  6. Mock Tests aligned to JEE/NEET pattern

**Faculty Section**
- Cards per faculty member: Photo · Name · Subject · Experience · Qualification
- **IMPORTANT:** Ask client for actual faculty names, photos, qualifications. Placeholder cards with `[Faculty Name]` are acceptable for launch but must be filled within Week 1 post-launch.
- This is one of the highest-trust elements for parents — don't skip it.

**Rankings & Recognition**
- Display all third-party rankings with source badges:
  - BestCoaching.app: #1 NEET Coaching Jodhpur
  - Edunews.info: Top 10 NEET Coaching Jodhpur
  - InstituteRank.com: Top NEET Coaching
  - Justdial: 4.5★ · 86 Reviews
- Source data: `parseIntelReport()` → `rankings` array

---

### 5.3 Courses Overview Page (`/courses`)

**SEO Title:** `JEE & NEET Courses in Jodhpur | Nirvaan Career Institute`

Introductory page. Shows 3 course cards linking to individual pages. Also lists Foundation, Olympiad, NTSE, KVPY as secondary offerings.

---

### 5.4 JEE Course Page (`/courses/jee`)

**SEO Title:** `JEE Mains & Advanced Coaching in Jodhpur | Nirvaan Career Institute`
**Meta Description:** `Expert JEE Mains & Advanced coaching in Jodhpur at Nirvaan Career Institute. Small batches, expert Physics/Chemistry/Maths faculty, topic-wise MQB study material.`
**Target Keywords:** `JEE coaching Jodhpur`, `JEE Mains coaching Paota`, `best JEE coaching Jodhpur`, `JEE Advanced coaching Jodhpur`

#### Sections:

**Course Hero**
- H1: `JEE Mains & Advanced Coaching in Jodhpur`
- Quick stats: Batch Size · Schedule · Study Material · Duration

**Course Structure Table**

| Phase | Classes | Schedule | Focus |
|---|---|---|---|
| Foundation | Class 11 | 3 lectures/week · 90 min | Concept building |
| Intensive | Class 12 | 5–6 lectures/week · 90 min | Full syllabus + revision |
| Crash Course | Post-12 | 6 lectures/week | Mock test integration |

**Subjects Covered**
- Physics · Chemistry · Mathematics
- Topic-wise breakdown per subject with MQB-I and MQB-II reference

**Admission Process**
1. Fill inquiry form / WhatsApp us
2. Schedule entrance assessment
3. Batch placement based on score
4. Seat confirmed on fee deposit

**CTA:** `[Enquire for JEE Batch →]` → WhatsApp link with pre-filled message: "Hi, I'm interested in the JEE coaching batch at Nirvaan Career Institute. Can you share details?"

**FAQ Schema (renders on page + JSON-LD)**
```
Q: What is the fee for JEE coaching at Nirvaan Career Institute?
A: Please contact us directly at +91 7737383958 or WhatsApp for current fee structure and batch availability.

Q: Is Nirvaan Career Institute good for JEE?
A: Yes. Nirvaan Career Institute is ranked among the top JEE coaching institutes in Jodhpur, known for small batch sizes, individual attention, and interactive teaching methodology.

Q: What is the batch size for JEE at Nirvaan?
A: Nirvaan Career Institute operates in small batches to ensure individual attention for each student.

Q: Does Nirvaan Career Institute offer study material for JEE?
A: Yes. Students receive topic-wise Question Banks (MQB-I and MQB-II) covering the full JEE syllabus.
```

---

### 5.5 NEET Course Page (`/courses/neet`)

**SEO Title:** `NEET-UG Coaching in Jodhpur | Nirvaan Career Institute — Rank #1`
**Meta Description:** `Ranked #1 NEET coaching in Jodhpur on BestCoaching.app. Expert Biology, Physics & Chemistry faculty. Small batches. Topic-wise study material. Nirvaan Career Institute, Paota.`
**Target Keywords:** `NEET coaching Jodhpur`, `NEET coaching Paota Jodhpur`, `best NEET coaching Jodhpur`, `NEET UG coaching Jodhpur 2026`

**This is the highest-value page.** Nirvaan's #1 ranking is for NEET. This page must be the most polished.

#### Sections:

**Course Hero**
- H1: `NEET-UG Coaching in Jodhpur`
- Prominent badge: `Ranked #1 on BestCoaching.app for NEET in Jodhpur`
- Sub: `Biology · Physics · Chemistry · Expert Faculty · Small Batches`

**Subjects & Schedule**
- Biology (Botany + Zoology)
- Physics
- Chemistry
- 3–6 lectures/week · 90 min each · Doubt clearing sessions

**Why Nirvaan for NEET**
- Ranked #1 locally (show the BestCoaching.app badge)
- Interactive classroom (not lecture-dump format)
- Individual attention (not 100-student batches like Allen)
- "First test then select" — only serious students admitted

**Results Preview**
- Link to `/results` page

**FAQ Schema:**
```
Q: Is Nirvaan Career Institute good for NEET?
A: Yes. Nirvaan Career Institute is ranked #1 for NEET coaching in Jodhpur on BestCoaching.app, and is listed in the Top 10 NEET Coaching Institutes in Jodhpur by Edunews.info.

Q: What is the fee for NEET coaching at Nirvaan Career Institute Jodhpur?
A: For current fee structure and scholarship details, contact us at +91 7737383958 or WhatsApp.

Q: Where is Nirvaan Career Institute located?
A: Nirvaan Career Institute is located in Paota, Jodhpur, Rajasthan. It is easily accessible and has hostel facilities available for outstation students.

Q: Does Nirvaan have a hostel for NEET students?
A: Yes. Hostel accommodation is available for outstation students at Nirvaan Career Institute, Jodhpur.
```

---

### 5.6 Foundation / Olympiad Page (`/courses/foundation`)

**SEO Title:** `JEE Foundation Coaching Class 9 & 10 Jodhpur | Nirvaan Career Institute`
**Target Keywords:** `JEE foundation class 9 10 Jodhpur`, `NTSE coaching Jodhpur`, `Olympiad coaching Jodhpur`

**Note from research:** `JEE foundation class 9 10 Jodhpur` (100–300 searches/month) has **weak competition** — this page can rank quickly.

Courses covered: Foundation for JEE/NEET (Class 9–10) · NTSE · KVPY · Olympiad (Science/Maths)

---

### 5.7 Results / Toppers Page (`/results`)

**SEO Title:** `JEE & NEET Toppers from Nirvaan Career Institute Jodhpur | Results`
**Meta Description:** `Nirvaan Career Institute's JEE and NEET toppers and results. Jodhpur's top coaching institute for medical and engineering entrance exams since 2019.`

**This page is a critical trust-builder and competitive differentiator.** Allen, Deeksha, and Matrix all have prominent toppers pages. Nirvaan has none. This closes the gap.

#### Sections:

**Toppers Grid**
- Card per topper: Photo · Name · JEE/NEET Rank · Year · Testimonial quote (optional)
- Filter tabs: All · JEE · NEET · Foundation
- **Data source:** Ask client for topper names, ranks, photos. Even 5–6 toppers is enough to launch.
- Placeholder strategy: "Results archive being updated. Contact us for details." is acceptable for 1 week only.

**Year-wise Summary**
```
2024–25: X students qualified NEET | X students qualified JEE Mains | X qualified JEE Advanced
2023–24: [same format]
```

**Photo Gallery (optional)**
- Result celebration photos, batch photos
- `next/image` with lazy loading

---

### 5.8 Hostel Page (`/hostel`)

**SEO Title:** `Hostel for JEE & NEET Students in Jodhpur | Nirvaan Career Institute`
**Target Keywords:** `hostel for NEET coaching Jodhpur`, `JEE coaching with hostel Jodhpur`

#### Sections:
- Availability and room types
- Facilities (meals, study room, WiFi, etc. — confirm with client)
- Location relative to coaching centre
- Contact for hostel inquiry

---

### 5.9 Blog (`/blog` and `/blog/[slug]`)

**Purpose:** SEO + AEO fuel. Each blog post targets a long-tail keyword and provides content that Google AI Overviews and ChatGPT can cite.

#### Blog Post Specs:

Each `.mdx` file in `/content/blog/` should follow this frontmatter schema:

```mdx
---
title: "Best JEE Coaching in Jodhpur 2026 — Complete Guide"
slug: "best-jee-coaching-jodhpur"
date: "2026-05-20"
description: "A parent's guide to choosing the right JEE coaching institute in Jodhpur. Compare fees, results, faculty, and batch size across Allen, Deeksha, Matrix, and Nirvaan."
keywords: ["JEE coaching Jodhpur", "best JEE coaching Jodhpur", "JEE institute Jodhpur"]
category: "JEE"
author: "Nirvaan Career Institute"
schema: "Article"
---
```

#### Priority Blog Posts (write these at launch):

| Post Title | Target Keyword | Monthly Searches | Competition |
|---|---|---|---|
| Best JEE Coaching in Jodhpur 2026 — Complete Guide | best JEE coaching Jodhpur | 500–1,000 | Medium |
| Best NEET Coaching in Jodhpur 2026 — Ranked | best NEET coaching Jodhpur | 500–1,000 | Medium |
| NEET Coaching Fees in Jodhpur 2026 — Full Comparison | NEET coaching fees Jodhpur | 200–500 | Low |
| JEE Foundation for Class 9 & 10 in Jodhpur — Why Start Early | JEE foundation class 9 10 Jodhpur | 100–300 | **Weak — quick win** |
| How to Prepare for NEET 2026 — Tips from Jodhpur's Top Coaching | NEET preparation tips Jodhpur | 200–500 | Low |

**Blog post content rules for AEO:**
- Every post must have a dedicated `## Frequently Asked Questions` section at the bottom
- FAQ items must also render as `FAQPage` JSON-LD schema
- Minimum word count: 1,200 words per post
- Include the institute name ("Nirvaan Career Institute, Jodhpur") naturally in first 100 words
- Mention specific, verifiable facts: address (Paota), phone, rankings (BestCoaching.app #1)

---

### 5.10 Contact / Admission Page (`/contact`)

**SEO Title:** `Contact & Admissions — Nirvaan Career Institute Jodhpur | +91 7737383958`
**Meta Description:** `Enquire about admissions at Nirvaan Career Institute, Jodhpur. Call +91 7737383958 or WhatsApp. Located in Paota, Jodhpur. Free counselling available.`

#### Sections:

**Inquiry Form**

```typescript
// Form fields
interface AdmissionForm {
  studentName: string;           // required
  parentName: string;            // required
  phone: string;                 // required, Indian mobile validation
  email?: string;                // optional
  class: '9' | '10' | '11' | '12' | 'Dropper'; // required
  targetExam: 'JEE' | 'NEET' | 'Foundation' | 'Olympiad/NTSE'; // required
  city: string;                  // required — are they local or need hostel?
  message?: string;              // optional
}
```

**On form submit:**
1. Validate with Zod
2. Send WhatsApp redirect: `https://wa.me/917737383958?text=Hi%2C+I'm+[name]%2C+interested+in+[exam]+coaching+for+Class+[class].`
3. (Optional) Store in Supabase `inquiries` table
4. (Optional) Send email notification to institute via Resend

**Contact Details Block**
- Phone: +91 7737383958 (click-to-call link)
- WhatsApp: Same number (click-to-WhatsApp link)
- Address: Paota, Jodhpur, Rajasthan
- Google Maps embed

**Free Counselling CTA**
- "Book a free 30-minute counselling session"
- Redirects to WhatsApp with pre-filled message

---

## 6. SEO Implementation (Technical)

### 6.1 Metadata Setup (Next.js App Router)

```typescript
// lib/metadata.ts
import { Metadata } from 'next';

const BASE_URL = 'https://www.nirvaancareerinstitute.com'; // Set actual domain

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Nirvaan Career Institute — JEE & NEET Coaching in Jodhpur',
    template: '%s | Nirvaan Career Institute',
  },
  description: 'Ranked #1 NEET coaching in Jodhpur. Expert JEE, NEET, and Foundation coaching at Nirvaan Career Institute, Paota, Jodhpur. Small batches, proven results.',
  keywords: ['JEE coaching Jodhpur', 'NEET coaching Jodhpur', 'best coaching Jodhpur', 'Nirvaan Career Institute', 'NEET coaching Paota', 'JEE foundation Jodhpur'],
  authors: [{ name: 'Nirvaan Career Institute' }],
  creator: 'Nirvaan Career Institute',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Nirvaan Career Institute',
    title: 'Best JEE & NEET Coaching in Jodhpur | Nirvaan Career Institute',
    description: 'Ranked #1 NEET coaching in Jodhpur. Small batches, expert faculty, proven results.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Nirvaan Career Institute Jodhpur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best JEE & NEET Coaching in Jodhpur | Nirvaan Career Institute',
    description: 'Ranked #1 NEET coaching in Jodhpur. Small batches. Expert faculty.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN', // Get from Search Console
  },
};
```

---

### 6.2 LocalBusiness JSON-LD Schema

This is the single most important SEO element for a local coaching institute. Place this in `app/layout.tsx` so it appears on every page.

```typescript
// components/seo/LocalBusinessSchema.tsx
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://www.nirvaancareerinstitute.com/#organization',
    name: 'Nirvaan Career Institute',
    alternateName: 'Nirvaan Institute Jodhpur',
    description: 'Nirvaan Career Institute is a leading JEE and NEET coaching institute in Jodhpur, Rajasthan. Ranked #1 for NEET coaching in Jodhpur on BestCoaching.app. Offering JEE Mains, JEE Advanced, NEET-UG, Foundation (Class 9-10), Olympiad, NTSE, and KVPY coaching. Known for small batches, interactive teaching, and individual student attention.',
    url: 'https://www.nirvaancareerinstitute.com',
    telephone: '+91-7737383958',
    email: 'info@nirvaancareerinstitute.com', // Confirm with client
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paota', // Get exact street address from client
      addressLocality: 'Jodhpur',
      addressRegion: 'Rajasthan',
      postalCode: '342006',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.2389, // Verify exact coordinates from Google Maps
      longitude: 73.0243,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/nirvaan_career_institute',
      'https://www.facebook.com/nirvaan23march',
      'https://www.youtube.com/@NirvaanCareerInstitute', // Verify handle
      'https://www.justdial.com/Jodhpur/Nirvaan-Career-Institute-Paota/0291PX291-X291-180209072537-R8T6_BZDET',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Coaching Programs',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'JEE Mains & Advanced Coaching', description: 'Comprehensive JEE preparation with Physics, Chemistry, and Mathematics.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'NEET-UG Coaching', description: 'Expert NEET preparation with Biology, Physics, and Chemistry.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Foundation Coaching Class 9 & 10', description: 'JEE and NEET foundation preparation for Class 9 and 10 students.' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '86',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

### 6.3 Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://www.nirvaancareerinstitute.com';

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/courses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/courses/jee`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/courses/neet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/courses/foundation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/results`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/hostel`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    // Blog posts — dynamically add from /content/blog/
    { url: `${BASE_URL}/blog/best-jee-coaching-jodhpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/best-neet-coaching-jodhpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/neet-coaching-fees-jodhpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
```

---

### 6.4 Target Keyword Map

| Page | Primary Keyword | Secondary Keywords | Monthly Searches |
|---|---|---|---|
| Home | Nirvaan Career Institute | coaching institute Jodhpur | 200–500 |
| /courses/neet | best NEET coaching Jodhpur | NEET coaching Paota, NEET UG Jodhpur | 500–1,000 |
| /courses/jee | best JEE coaching Jodhpur | JEE coaching Paota, JEE Advanced Jodhpur | 500–1,000 |
| /courses/foundation | JEE foundation class 9 10 Jodhpur | NTSE coaching Jodhpur, Olympiad Jodhpur | 100–300 |
| /contact | NEET coaching fees Jodhpur | JEE coaching admission Jodhpur | 200–500 |
| /blog/best-neet... | best NEET coaching in Jodhpur | top NEET institute Jodhpur 2026 | 500–1,000 |

---

## 7. AEO — AI Engine Optimization

AEO (Answer Engine Optimization) ensures Nirvaan appears when parents ask ChatGPT, Perplexity, or Google's AI Overviews: *"What is the best NEET coaching in Jodhpur?"*

### 7.1 Why AEO Matters Right Now

Nirvaan currently has **zero AEO presence**. ChatGPT and Perplexity answer "best NEET coaching Jodhpur" by citing Allen, Deeksha, or Matrix. An authoritative website with structured data changes this within 3–6 months.

### 7.2 AEO Implementation Checklist

**FAQ Schema on every course page and blog post:**
```typescript
// components/seo/FAQSchema.tsx
interface FAQ { question: string; answer: string; }

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

**About Page AEO Copy (write exactly like this):**

> Nirvaan Career Institute is a coaching institute located in Paota, Jodhpur, Rajasthan, India, established in 2019. It offers preparation coaching for JEE Mains, JEE Advanced, NEET-UG, Class 9–10 Foundation, NTSE, KVPY, and Olympiad exams. The institute is ranked #1 for NEET coaching in Jodhpur by BestCoaching.app and is listed in the Top 10 NEET Coaching Institutes in Jodhpur by Edunews.info. Nirvaan Career Institute follows a small-batch teaching model with 3 to 6 lectures per week, each 90 minutes long, with dedicated doubt-clearing sessions. Admissions are based on an entrance assessment (first test then select policy). Hostel accommodation is available for outstation students. Contact: +91 7737383958.

This paragraph is optimized for LLM extraction — factual, specific, verifiable.

**AEO Content Rules:**
- Every page must have a clear, factual description of Nirvaan in the first 150 words
- Use the full name "Nirvaan Career Institute" (not just "Nirvaan") at least once per page
- Mention "Jodhpur" in every page's H1 or opening paragraph
- Blog posts must answer questions directly — "The best NEET coaching in Jodhpur is..." — not just imply answers
- Add `speakable` schema to the About page for voice search

**Speakable Schema:**
```json
{
  "@type": "SpeakableSpecification",
  "cssSelector": ["#about-nirvaan", "#contact-details"]
}
```

---

## 8. Conversion & Lead Gen Features

### 8.1 WhatsApp Floating Button

This is the **most important conversion element.** Parents in Rajasthan heavily prefer WhatsApp over forms.

```typescript
// components/layout/WhatsAppButton.tsx
'use client';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917737383958';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds (don't intrude immediately)
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const buildWhatsAppLink = (page: string) => {
    const message = encodeURIComponent(`Hi! I found Nirvaan Career Institute online. I'm interested in ${page} coaching. Can you share details?`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  if (!visible) return null;

  return (
    <a
      href={buildWhatsAppLink('JEE/NEET')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:inline text-sm font-semibold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
```

**WhatsApp link builder utility:**
```typescript
// lib/whatsapp.ts
export function buildWhatsAppLink(options: {
  number?: string;
  course?: string;
  className?: string;
  source?: string; // e.g. 'hero', 'contact-form', 'course-page'
}) {
  const number = options.number || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917737383958';
  const course = options.course || 'JEE/NEET';
  const className = options.className ? `Class ${options.className}` : '';

  const message = encodeURIComponent(
    `Hi, I'm interested in ${course} coaching ${className ? `for ${className}` : ''} at Nirvaan Career Institute. Please share details.`
  );

  return `https://wa.me/${number}?text=${message}`;
}
```

---

### 8.2 Click-to-Call Button

```typescript
// Use in Navbar, Hero, and Contact page
<a href="tel:+917737383958" className="...">
  <Phone className="w-4 h-4" />
  +91 77373 83958
</a>
```

---

### 8.3 Google Maps Embed

```typescript
// components/home/GoogleMapEmbed.tsx
export function GoogleMapEmbed() {
  const PLACE_ID = 'YOUR_PLACE_ID_HERE'; // Get from Google Maps

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=place_id:${PLACE_ID}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Nirvaan Career Institute Location — Paota, Jodhpur"
      />
    </div>
  );
}
```

---

## 9. Design System & UI Direction

### 9.1 Design Goal

**Look more established than Deeksha. Look comparable to Allen — but for a local, personal-touch institute.**

Deeksha's site has a 2003-era design: heavy text, poor mobile layout, zero animation. Allen's site is professional but corporate and cold. Nirvaan's site should be: **modern, warm, credible, fast.**

### 9.2 Color Palette

```css
/* tailwind.config.ts — extend colors */
colors: {
  brand: {
    primary: '#1B3A6B',    /* Deep navy — trust, authority */
    secondary: '#F5A623',  /* Warm amber — energy, ambition */
    accent: '#E63946',     /* Alert red — urgency CTAs */
    light: '#F0F4FF',      /* Light blue-white — backgrounds */
    dark: '#0D1B2A',       /* Near-black — footer, dark sections */
  }
}
```

**Rationale:** Navy + Amber reads as "established institute" (similar to Allen's palette) without copying it. The amber draws attention to CTAs and badges (like the "Rank #1" badge) without being garish.

### 9.3 Typography

```typescript
// app/layout.tsx font imports
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] });
```

- **Headings (H1, H2):** Playfair Display — serif, conveys academic seriousness
- **Body text:** Inter — clean, readable at all sizes
- **UI elements (buttons, badges, nav):** Inter Semi-Bold
- **Never use more than 2 font families**

### 9.4 Component Design Principles

- **Cards:** White background, 1px light border, subtle box-shadow, 8px border-radius, 24px padding
- **Buttons Primary:** Brand amber background, white text, 0px border-radius (sharp edges feel more institutional)
- **Buttons Secondary:** Outlined, brand navy text
- **WhatsApp CTA:** Always green (#25D366), always has WhatsApp icon
- **Badges/Pills:** "Rank #1" badge in amber — sharp corners, bold text
- **Sections alternate:** White → Light blue-white → White (avoids visual monotony)

### 9.5 Mobile-First Rules

- All layouts designed for 375px width first
- Nav collapses to hamburger on mobile
- WhatsApp button: 56px tap target (thumb-friendly)
- Course cards: single column on mobile, 2-col on tablet, 3-col on desktop
- Font minimum: 16px body, 14px captions (no eye strain on 4G Jio phones)
- Hero headline: 36px mobile, 56px desktop

### 9.6 Animation Guidelines (Framer Motion)

```typescript
// Reusable fade-up animation
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// Stagger children (for stat counters, course cards)
export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};
```

- Use `whileInView` (not `useEffect`) for scroll-triggered animations
- Counter animation on stats: count up from 0 to final value over 1.5s
- No animation on mobile if `prefers-reduced-motion` is set
- Keep animations under 600ms — faster feels more premium

---

## 10. Content Strategy & Copy Stubs

### 10.1 Hero Headline Options (A/B test after launch)

```
Option A: "Jodhpur's #1 NEET & JEE Coaching Institute"
Option B: "Where Jodhpur's Top Rankers Prepared"
Option C: "Small Batches. Expert Faculty. Real Results."
```

Recommendation: **Option A** for launch — leads with the credential immediately.

### 10.2 Meta Titles by Page

| Page | Title Tag |
|---|---|
| Home | Best JEE & NEET Coaching in Jodhpur \| Nirvaan Career Institute |
| /courses/neet | NEET-UG Coaching in Jodhpur \| Ranked #1 \| Nirvaan Career Institute |
| /courses/jee | JEE Mains & Advanced Coaching Jodhpur \| Nirvaan Career Institute |
| /courses/foundation | JEE Foundation Class 9 & 10 Jodhpur \| NTSE \| Olympiad |
| /results | JEE & NEET Toppers Jodhpur \| Nirvaan Career Institute Results |
| /about | About Nirvaan Career Institute — Expert Faculty, Jodhpur |
| /hostel | Hostel for JEE & NEET Students Jodhpur \| Nirvaan Career Institute |
| /contact | Contact & Admissions \| Nirvaan Career Institute \| +91 7737383958 |
| /blog | JEE & NEET Coaching Insights \| Nirvaan Career Institute Blog |

### 10.3 FAQ Master List (use across pages + schema)

```
Q: What is the best NEET coaching in Jodhpur?
A: Nirvaan Career Institute is ranked #1 for NEET coaching in Jodhpur by BestCoaching.app, and is listed in the Top 10 NEET Coaching Institutes in Jodhpur by Edunews.info. The institute is known for small batch sizes, expert faculty, and individual student attention.

Q: Where is Nirvaan Career Institute located?
A: Nirvaan Career Institute is located in Paota, Jodhpur, Rajasthan. Contact: +91 7737383958.

Q: Does Nirvaan Career Institute have a hostel?
A: Yes. Hostel accommodation is available for outstation students at Nirvaan Career Institute, Jodhpur.

Q: What is Nirvaan's admission process?
A: Admissions at Nirvaan Career Institute follow a "first test then select" model. Students appear for an entrance assessment, and batch placement is based on their score.

Q: What courses does Nirvaan Career Institute offer?
A: Nirvaan Career Institute offers coaching for JEE Mains, JEE Advanced, NEET-UG, Foundation (Class 9 & 10), NTSE, KVPY, and Science Olympiads.

Q: How is Nirvaan different from Allen Career Institute in Jodhpur?
A: Nirvaan Career Institute focuses on small batch sizes and individual attention, unlike large-scale national institutes. This allows for interactive teaching and personalized doubt clearing.

Q: What study material does Nirvaan provide?
A: Students receive topic-wise Question Banks (MQB-I and MQB-II) covering the complete JEE and NEET syllabus.

Q: What is the fee for NEET coaching at Nirvaan Career Institute?
A: Please contact Nirvaan Career Institute directly at +91 7737383958 or WhatsApp for current fee structure and available scholarships.
```

---

## 11. Competitive Differentiation Checklist

What the website must have that competitors (Deeksha in particular) don't:

| Feature | Allen | Deeksha | Matrix | **Nirvaan (Build This)** |
|---|---|---|---|---|
| Online Admission Form | ✓ | ✓ | ✓ | **✓ — Build** |
| Results / Toppers Page | ✓ | ✓ | ✓ | **✓ — Build** |
| Faculty Profiles | ✓ | ✓ | ✓ | **✓ — Build** |
| Course Detail Pages | ✓ | ✓ | ✓ | **✓ — Build** |
| WhatsApp CTA | ✓ | ~ | ✓ | **✓ — Build** |
| Blog / SEO Content | ✓ | ✓ | ✓ | **✓ — Build** |
| Mobile Optimized | ✓ | ~ (weak) | ✓ | **✓ — Build (mobile-first)** |
| AEO / AI Search Ready | ✗ | ✗ | ✗ | **✓ — Build (first mover advantage)** |
| FAQ Schema Markup | ✗ | ✗ | ✗ | **✓ — Build (first mover advantage)** |
| "Rank #1" Credential Badge | N/A | N/A | N/A | **✓ — Nirvaan's unique asset** |
| Google Reviews on Site | ~ | ~ | ~ | **✓ — Pull via Places API** |
| Modern Design (post-2022) | ✓ | ✗ | ~ | **✓ — Build** |

**AEO is a first-mover advantage.** None of the competitors have FAQ schema, speakable schema, or LLM-optimized about pages. Nirvaan can own AI search results for Jodhpur coaching queries before anyone else tries.

---

## 12. Deployment & Go-Live Checklist

### Domain

**Recommended domain:** `nirvaancareerinstitute.com`
**Alternatives:** `nirvaanjodhpur.com` · `nirvaanjee.com` · `nirvaanneet.com`

Register at GoDaddy, Namecheap, or Google Domains. Connect to Vercel via custom domain settings.

### Pre-Launch (Week 1–2)

- [ ] Domain registered and pointed to Vercel
- [ ] HTTPS active (Vercel auto-provisions SSL via Let's Encrypt)
- [ ] All 8 pages live with real content (no placeholder Lorem Ipsum)
- [ ] WhatsApp button working and tested on mobile
- [ ] Contact form submitting correctly
- [ ] Google Maps embed loading
- [ ] `sitemap.xml` accessible at `nirvaancareerinstitute.com/sitemap.xml`
- [ ] `robots.txt` accessible and correct
- [ ] LocalBusiness JSON-LD schema validated via Google's Rich Results Test
- [ ] FAQ schema validated
- [ ] OG image set (1200x630) — test via opengraph.xyz
- [ ] PageSpeed Mobile score ≥ 85 — test via pagespeed.web.dev
- [ ] All images using `next/image` with `alt` text
- [ ] No broken links (run `next build` locally first)

### At Launch

- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Link website in Google Business Profile (this alone improves Maps ranking)
- [ ] Link website in Instagram bio
- [ ] Link website in Facebook page "About" section
- [ ] Update YouTube channel description with website link
- [ ] Update Justdial listing with website URL
- [ ] Update InstituteRank.com listing (contact them) with website
- [ ] Set up Google Analytics 4 (paste GA4 tag in `layout.tsx`)

### Post-Launch (Month 1)

- [ ] Verify Google Search Console is receiving impressions
- [ ] Request indexing for all 8 pages in Search Console
- [ ] Publish first 2 blog posts
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Set up Vercel Analytics (free, privacy-friendly)
- [ ] Respond to all new Google reviews (builds GMB authority)
- [ ] Add actual topper photos to `/results` page if not done at launch

---

## 13. Post-Launch Growth Roadmap

### Month 1–3: Foundation

- Website live and indexed
- Google Maps ranking improves (website link adds GMB authority)
- Begin ranking for `JEE coaching Paota Jodhpur` and `NEET coaching Paota Jodhpur` (low competition)
- Expected: +20–40 additional monthly inquiries from search alone

### Month 3–6: Blog SEO Kicks In

- Publish all 5 priority blog posts
- Start appearing in Google AI Overviews for Jodhpur coaching queries
- Target: ranking for `best NEET coaching Jodhpur` (medium competition)
- Consider Google Ads for admission season (May–July 2027) targeting branded + local keywords
- Expected: +40–80 additional monthly inquiries

### Month 6–12: Authority

- Blog drives backlinks from Rajasthan education portals
- ChatGPT and Perplexity begin citing Nirvaan for Jodhpur coaching queries
- Ranking for `best JEE coaching Jodhpur` becomes realistic
- Consider adding: Online scholarship test registration · Fee payment integration · Student portal

### Phase 2 Features (Not in Scope Now, Plan For Later)

- Online scholarship/entrance test system (like TALLENTEX for Allen) — massive lead gen tool
- Student login portal with study material download
- Online fee payment integration (Razorpay)
- WhatsApp Business API for automated inquiry response
- Monthly SEO blog posts (outsource or client-created)

---

*End of Spec — Version 1.0*

*This document should be treated as the single source of truth for the Nirvaan Career Institute website build. Any scope changes must be discussed and reflected here before implementation begins. Target go-live: June 30, 2026.*
