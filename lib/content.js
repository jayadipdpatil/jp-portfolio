/*
 * ╔══════════════════════════════════════════════════════╗
 * ║         JAYADIP PATIL — SITE CONTENT FILE           ║
 * ║  Edit anything here. No need to touch other files.  ║
 * ╚══════════════════════════════════════════════════════╝
 */

// ── PERSONAL ─────────────────────────────────────────────
export const PERSON = {
  name:       "Jayadip Patil",
  role:       "Writer. Marketer. Creative Strategist.",
  tagline:    "I help brands say the right thing — clearly, creatively, and with purpose.",
  bio:        "I'm Jayadip — a writer, photographer, and marketing strategist based in India. I work at the intersection of ideas and execution: crafting content that resonates, campaigns that convert, and brands that people remember. When I'm not building marketing systems, I'm writing about culture, advertising, and the ideas shaping our world.",
  photo:      "/jayadip.jpg",   // ← swap with your own photo filename in /public
  location:   "India · Available Globally",
  available:  true,
  email:      "nameisjayd@gmail.com",
};

// ── SOCIAL LINKS ─────────────────────────────────────────
export const SOCIAL = {
  linkedin:   "https://linkedin.com/in/nameisjayd",
  instagram:  "https://www.instagram.com/nameisjayd/",
  twitter:    "https://twitter.com/nameisjayd",
  email:      "mailto:nameisjayd@gmail.com",
};

// ── NAVIGATION ───────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Work",      href: "/work"      },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services",  href: "/services"  },
  { label: "About",     href: "/about"     },
  { label: "Contact",   href: "/contact"   },
];

// ── HOME PAGE ────────────────────────────────────────────
export const HOME = {
  headline:   "Crafting stories\nthat move people.",
  subhead:    "AI-powered content, brand strategy & advertising — built for founders, startups, and brands that want to grow.",
  cta1:       { label: "See My Work",   href: "/portfolio" },
  cta2:       { label: "Get in Touch",  href: "/contact"   },
  highlights: [
    { number: "5",  label: "Projects" },
    { number: "3",  label: "Brand Campaigns"    },
    { number: "3×",  label: "Average ROI Lift"   },
    { number: "2 yrs",label: "of Experience"      },
  ],
};

// ── SERVICES ─────────────────────────────────────────────
export const SERVICES = [
  {
    number:  "01",
    title:   "AI Content Creation",
    desc:    "Long-form blogs, scripts, captions, and newsletters written with AI precision and a human editorial eye. Optimised for search, engagement, and shareability.",
    tags:    ["Blog Writing", "GPT-4o", "SEO", "Newsletters"],
  },
  {
    number:  "02",
    title:   "Ad Script Writing",
    desc:    "Conversion-first scripts for Meta, YouTube, and Google Ads — from punchy 15-second hooks to 60-second brand films.",
    tags:    ["Meta Ads", "YouTube", "Google Ads", "UGC Scripts"],
  },
  {
    number:  "03",
    title:   "Brand Strategy & Positioning",
    desc:    "Clarify your brand voice, tone, and market position. I build messaging frameworks and brand playbooks that keep every piece of content on-brand.",
    tags:    ["Brand Voice", "Positioning", "Messaging", "Playbooks"],
  },
  {
    number:  "04",
    title:   "Marketing Strategy",
    desc:    "Full-funnel go-to-market blueprints — audience research, channel selection, content calendars, and KPI frameworks.",
    tags:    ["GTM", "Funnel Design", "Analytics", "Planning"],
  },
  {
    number:  "05",
    title:   "Social Media Growth",
    desc:    "Organic growth systems for Instagram, LinkedIn, and X. Viral content frameworks, content calendars, and engagement loops.",
    tags:    ["Instagram", "LinkedIn", "X / Twitter", "Content Calendar"],
  },
  {
    number:  "06",
    title:   "Performance Advertising",
    desc:    "Paid campaign management across Meta and Google. Creative testing, audience segmentation, and ROAS optimisation.",
    tags:    ["Meta Ads", "Google Ads", "A/B Testing", "ROAS"],
  },
];

// ── PROCESS STEPS (Services page) ────────────────────────
export const PROCESS = [
  { step: "01", title: "Discover",   desc: "We start with a deep-dive into your brand, audience, and goals." },
  { step: "02", title: "Strategise", desc: "I map out a clear plan — channels, content types, and measurable KPIs." },
  { step: "03", title: "Create",     desc: "All content is crafted, reviewed, and refined until it's right." },
  { step: "04", title: "Measure",    desc: "We track what matters, learn from data, and iterate for better results." },
];

// ── PORTFOLIO CASE STUDIES ────────────────────────────────
export const PROJECTS = [
  {
    id:       1,
    title:    "NovaBrew Coffee",
    category: "Branding",
    summary:  "Full brand voice overhaul and social media strategy for a DTC coffee brand.",
    result:   "12K → 180K followers in 6 months",
    tags:     ["Brand Identity", "Social Strategy", "Content"],
    img:      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
  },
  {
    id:       2,
    title:    "Zola Skincare",
    category: "Performance Ads",
    summary:  "Redesigned Meta ad creatives and scripts for a skincare D2C brand.",
    result:   "ROAS improved from 1.2× to 4.8×",
    tags:     ["Meta Ads", "UGC Scripts", "Creative Strategy"],
    img:      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
  },
  {
    id:       3,
    title:    "Founders Weekly",
    category: "Content",
    summary:  "Ghostwriting and content strategy for a business newsletter.",
    result:   "800 → 22,000 subscribers",
    tags:     ["Ghostwriting", "Newsletter", "LinkedIn"],
    img:      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80",
  },
  {
    id:       4,
    title:    "Apex Fintech",
    category: "Strategy",
    summary:  "Go-to-market strategy and SEO content plan for a B2B fintech startup.",
    result:   "Organic traffic up 19% in Q1",
    tags:     ["GTM Strategy", "SEO", "Content Plan"],
    img:      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
  },
  {
    id:       5,
    title:    "Pulse Fitness App",
    category: "Social",
    summary:  "Instagram Reels strategy and hook writing for a fitness app launch.",
    result:   "94,000 app downloads in Q1",
    tags:     ["Instagram Reels", "Hook Writing", "Growth"],
    img:      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
  },
  {
    id:       6,
    title:    "Dusk Home Decor",
    category: "Performance Ads",
    summary:  "Google Ads and retargeting copy for a premium home decor brand.",
    result:   "₹2L → ₹14L monthly revenue",
    tags:     ["Google Ads", "Retargeting", "Video Copy"],
    img:      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
  },
];

// ── MY WORK (Writing / Photography / Ideas) ───────────────
export const MY_WORK = {
  writing: [
    {
      title:    "Why Most Brand Taglines Are Forgettable",
      category: "Advertising",
      excerpt:  "A great tagline does one job — makes you feel something. Here's why most brands get this wrong and how to fix it.",
      date:     "Apr 2025",
      readTime: "5 min read",
      link:     "#",  // ← replace with your actual article link
    },
    {
      title:    "The AI Content Playbook for Solo Founders",
      category: "AI & Marketing",
      excerpt:  "How to use ChatGPT and Claude to produce a month of content in a single afternoon — without sounding like a robot.",
      date:     "Mar 2025",
      readTime: "8 min read",
      link:     "#",
    },
    {
      title:    "Instagram's Algorithm Is Not Your Enemy",
      category: "Social Media",
      excerpt:  "Everyone blames the algorithm. But the real problem is that most content doesn't deserve to be seen. Here's a different lens.",
      date:     "Feb 2025",
      readTime: "6 min read",
      link:     "#",
    },
    {
      title:    "What Advertising Can Learn from Street Photography",
      category: "Photography & Advertising",
      excerpt:  "Both crafts share the same core skill — noticing what everyone else walks past. A personal essay on creativity.",
      date:     "Jan 2025",
      readTime: "7 min read",
      link:     "#",
    },
  ],
  photos: [
    // Add captions and actual image paths here
    { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80", caption: "City at dusk" },
    { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80", caption: "Street light" },
    { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80", caption: "Urban geometry" },
    { src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80", caption: "Night market" },
  ],
  xThreads: [
    { text: "Advertising is not about selling. It's about making someone feel understood. The sale is just a thank you.", date: "May 2025", link: "https://twitter.com/nameisjayd" },
    { text: "The best content doesn't feel like content. It feels like a conversation you didn't know you needed.", date: "Apr 2025", link: "https://twitter.com/nameisjayd" },
    { text: "Most founders underestimate the power of a clear brand voice. It's the difference between being memorable and being invisible.", date: "Mar 2025", link: "https://twitter.com/nameisjayd" },
  ],
};

// ── ABOUT ─────────────────────────────────────────────────
export const ABOUT = {
  headline: "I write, think, and build things that matter.",
  body1:    "I started writing because I had things to say. I stayed in marketing because I found a way to make words do real work — drive decisions, build trust, and grow businesses.",
  body2:    "Today I work with founders, startups, and brand teams to create content and strategy that's clear, creative, and commercially effective. AI is my tool, creativity is my edge.",
  interests: ["Writing", "Photography", "Advertising", "Ideas", "AI Tools", "Culture"],
  timeline: [
    { year: "2019", event: "Started freelance content writing for startups." },
    { year: "2021", event: "Moved into ad copywriting and paid media strategy." },
    { year: "2022", event: "Built full brand identities for D2C and B2B clients." },
    { year: "2023", event: "Integrated AI into content workflows — 10× faster output." },
    { year: "2024", event: "Expanded to international clients across fintech, lifestyle, and e-commerce." },
  ],
  skills: [
    { label: "AI Content Strategy",   pct: 95 },
    { label: "Ad Copywriting",        pct: 92 },
    { label: "Brand Positioning",     pct: 88 },
    { label: "Social Media Growth",   pct: 90 },
    { label: "Photography",           pct: 82 },
    { label: "Performance Marketing", pct: 85 },
  ],
};

// ── CONTACT ───────────────────────────────────────────────
export const CONTACT = {
  headline: "Let's work together.",
  subhead:  "Whether it's a campaign, a rebrand, or a single great ad — I'd love to hear about it. I reply within 24 hours.",
  formSubjects: [
    "AI Content Creation",
    "Ad Script Writing",
    "Brand Strategy",
    "Marketing Strategy",
    "Social Media Growth",
    "Performance Ads",
    "Other",
  ],
};
