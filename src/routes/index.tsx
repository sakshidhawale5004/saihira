import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { products, formatINR } from "@/lib/products";
import { InteractiveTilt } from "@/components/InteractiveTilt";
import { useState } from "react";
import { toast } from "sonner";

// High-resolution Unsplash imagery dedicated to Khakhra, Bhakhri, roasted flatbreads & chai
const HERO_KHAKHRA = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85"; // Crisp roasted Indian flatbreads
const DOUGH_CRAFT = "/khakra.jpg"; // Authentic handmade golden roasted khakhra
const CHAI_SNACK = "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1400&q=85"; // Traditional Indian chai & snacks

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAIHIRA · SHM Asal — Best in Taste Handmade Khakhras & Bhakhris" },
      { name: "description", content: "Authentic Gujarati handmade Khakhras & Bhakhris. 100% roasted on iron tawa, 0% maida, vacuum packed for crispiness." },
      { property: "og:title", content: "SAIHIRA · SHM Asal — Best in Taste" },
      { property: "og:description", content: "Crunchy, crispy handmade Bhakhris & Khakhras in 19 authentic flavours." },
      { property: "og:image", content: HERO_KHAKHRA },
      { name: "twitter:image", content: HERO_KHAKHRA },
    ],
  }),
  component: Index,
});

const trustBadges = [
  { icon: "🌾", title: "100% Whole Grains", desc: "Pure wheat, bajri, ragi & barley. Zero maida." },
  { icon: "🔥", title: "Slow Roasted on Tawa", desc: "Never deep fried. 80% less oil than fried snacks." },
  { icon: "🛡️", title: "Vacuum Sealed Fresh", desc: "Locks in authentic crispiness for up to 6 months." },
  { icon: "🌿", title: "Pure & Jain Friendly", desc: "No onion, no garlic options & fasting farali ranges." },
];

const steps = [
  ["01", "Fresh Dough Kneading", "Stone-ground whole grains, cold-pressed groundnut oil, roasted cumin and methi leaves hand-kneaded fresh every morning."],
  ["02", "Paper-Thin Hand Rolling", "Rolled on traditional wooden boards (patla) — Khakhras paper-thin, and Bhakhris thick and decoratively pricked."],
  ["03", "Slow Tawa Roasting", "Gently pressed on seasoned iron tawas using wooden presses until evenly golden, fragrant, and crisp."],
  ["04", "Vacuum Packaging", "Sealed immediately in food-grade vacuum pouches to preserve authentic crunch without preservatives."],
];

const healthAdvantages = [
  {
    icon: "🌾",
    title: "100% Whole Grains, 0% Maida",
    desc: "Made strictly with stone-ground whole wheat, nutritious millets (Bajri, Ragi), and barley flours. High in natural dietary fibre and gut-friendly.",
    badge: "Pure Grains",
  },
  {
    icon: "🔥",
    title: "80% Less Oil than Potato Chips",
    desc: "Lightly brushed with premium cold-pressed groundnut oil, then pressed gently on seasoned cast-iron tawas. Never submerged in deep-frying fats.",
    badge: "Low Calorie",
  },
  {
    icon: "🌿",
    title: "Authentic Gujarati Masala Craft",
    desc: "Infused with roasted cumin seeds, crushed ajwain, sun-dried kasuri methi leaves, and pure rock salt for a tantalizing authentic flavour.",
    badge: "Natural Spices",
  },
  {
    icon: "🛡️",
    title: "Vacuum-Packed 6-Month Freshness",
    desc: "Food-grade vacuum pouches lock out moisture and oxygen, preserving peak tawa crispness and roasted aroma without artificial preservatives.",
    badge: "Zero Preservatives",
  },
  {
    icon: "☕",
    title: "The Ultimate 4 PM Tea Companion",
    desc: "Light on the stomach yet deeply satisfying. The perfect companion for hot cutting chai, fresh homemade curd, or a dab of desi ghee.",
    badge: "Chai Friendly",
  },
  {
    icon: "🪷",
    title: "100% Jain & Sattvic Kitchen",
    desc: "Prepared in spotlessly clean, vegetarian facilities. Dedicated zero-onion, zero-garlic options and Farali fasting ranges available.",
    badge: "Jain Purity",
  },
];

const pairings = [
  {
    title: "With Cutting Masala Chai",
    desc: "The quintessential Indian tea-time ritual. A warm cup of ginger-cardamom chai paired with crisp Jeera or Methi Khakhra.",
    tag: "Tea-Time Classic",
  },
  {
    title: "With Gujarati Mango Chhunda",
    desc: "Spread sweet-spicy raw mango chhunda or spicy lemon pickle over a warm Garlic or Masala Bhakhri.",
    tag: "Traditional Taste",
  },
  {
    title: "With Creamy Mint Yogurt Dip",
    desc: "A healthy party appetiser! Break crispy Pani Puri or Chilli Garlic Khakhra like nachos with fresh hung curd dip.",
    tag: "Modern Twist",
  },
];

const reviews = [
  {
    quote: "The Methi and Jeera Khakhras taste exactly like what my Ba used to make in Rajkot. Extremely fresh and crisp!",
    author: "Priya S.",
    city: "Mumbai",
    rating: "★★★★★",
  },
  {
    quote: "Jaggery Bhakhri is my children's favourite lunchbox snack. Healthy, not oily, and keeps them full for hours.",
    author: "Neha Mehta",
    city: "Pune",
    rating: "★★★★★",
  },
  {
    quote: "We ordered 80 gift hampers for our corporate Diwali event. Pristine vacuum packaging and everyone loved the authentic taste.",
    author: "Rajesh K.",
    city: "Ahmedabad",
    rating: "★★★★★",
  },
];

function Index() {
  const [email, setEmail] = useState("");
  const featured = [
    "jeera-khakhra",
    "methi-khakhra",
    "pani-puri-khakhra",
    "masala-khakhra",
    "jaggery-bhakhri",
    "garlic-bhakhri",
    "black-pepper-bhakhri",
    "farali-bhakhri",
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing! Your 10% discount code is ASAL10");
      setEmail("");
    }
  };

  return (
    <>
      {/* 1. HERO SECTION WITH CINEMATIC VIDEO */}
      <section className="relative overflow-hidden bg-black min-h-[85vh] flex items-center border-b border-border">
        {/* Background Video: saihirahomepageherovideo.mp4 */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center filter brightness-90 contrast-105"
            poster="/saihirawebsite/SHM Asal Methi Khakhra Packaging.png"
          >
            <source src="/saihirahomepageherovideo.mp4" type="video/mp4" />
          </video>
          {/* Multi-layered cinematic scrim overlay: deep rich backdrop on the left for text, crystal-clear on the right for video */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent via-60% to-black/40" />
          <div className="absolute inset-0 bg-[#2D0609]/20 mix-blend-color" />
        </div>

        {/* Ambient Warm Golden Glow Orbs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-600/15 blur-3xl pointer-events-none animate-pulse-glow" />

        {/* Hero Content: Left-Aligned Luxury Presentation leaving Right Video Unobstructed */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 md:py-28 w-full">
          <div className="grid lg:grid-cols-12 items-center gap-8">
            {/* Left Section for Text, Badges, and CTAs */}
            <div className="lg:col-span-7 xl:col-span-8 text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/60 px-5 py-2 text-xs font-bold tracking-[0.22em] text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.25)] backdrop-blur-md">
                  <span className="text-amber-400">✦</span>
                  <span className="uppercase">SHM ASAL · 100% HANDMADE GUJARATI CRUNCH</span>
                  <span className="text-amber-400">✦</span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] max-w-2xl">
                  Paper-thin Khakhras & Hearty Bhakhris,{" "}
                  <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent font-serif italic drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                    roasted by hand.
                  </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-amber-100/95 max-w-xl font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Slow-roasted on seasoned cast iron tawas the old-fashioned way. Zero maida, 80% less oil than fried snacks, and vacuum-sealed to lock in crunch for 6 months.
                </p>

                <div className="mt-9 flex flex-wrap gap-4 items-center">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 px-8 py-4 text-sm font-bold tracking-wider uppercase text-stone-950 shadow-[0_10px_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(245,158,11,0.7)] cursor-pointer"
                  >
                    <span>Explore 19 Flavours</span>
                    <span>→</span>
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/40 px-7 py-4 text-sm font-semibold tracking-wide text-amber-100 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-amber-300 hover:text-white hover:scale-105 cursor-pointer"
                  >
                    <span>Our Heritage Story</span>
                  </Link>
                </div>

                {/* Quick Trust Badges in High-Visibility Gold & Translucent Dark Glass */}
                <div className="mt-12 pt-8 border-t border-amber-400/25 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-amber-200/95">
                  <div className="flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-black/50 px-4 py-2 backdrop-blur-md shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-stone-950 text-[11px] font-black">✓</span>
                    <span>100% Roasted on Tawa</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-black/50 px-4 py-2 backdrop-blur-md shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-stone-950 text-[11px] font-black">✓</span>
                    <span>Zero Maida & Trans-Fat</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-black/50 px-4 py-2 backdrop-blur-md shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-stone-950 text-[11px] font-black">✓</span>
                    <span>Free Delivery ₹499+</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Left wide open to showcase the video */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4" />
          </div>
        </div>
      </section>

      {/* 2. TRUST HIGHLIGHTS BAR */}
      <section className="border-y border-border bg-[#F5EFE3] py-8 shadow-sm">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{b.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORY SHOWCASE WITH 3D TILT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="eyebrow">Handmade Tradition</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Explore by Category</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Choose from paper-thin crispy Khakhras or hearty rustic Bhakhris roasted to perfection.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {(["khakhra", "bhakhri"] as const).map((c) => {
            const p = products.find((x) => x.category === c)!;
            const n = products.filter((x) => x.category === c).length;
            return (
              <InteractiveTilt key={c} maxTilt={15} scale={1.03}>
                <Link
                  to="/products"
                  search={{ c }}
                  className="frame block p-8 pt-10 text-center shadow-deep transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-between"
                >
                  <div
                    className="h-64 flex items-center justify-center overflow-hidden"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <img
                      src={p.image}
                      alt={c}
                      className="max-h-60 w-auto object-contain transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div style={{ transform: "translateZ(40px)" }}>
                    <span className="ribbon mt-6 text-lg">
                      {c === "khakhra" ? "Handmade Khakhras" : "Traditional Bhakhris"}
                    </span>
                    <p className="mt-3 text-sm text-muted-foreground font-medium">
                      {n} Unique Varieties · {c === "khakhra" ? "Paper-thin, light & roasted" : "Thick, hearty, pressed by hand"}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      <span>Browse collection</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </InteractiveTilt>
            );
          })}
        </div>
      </section>

      {/* 4. BESTSELLERS SECTION WITH 3D PRODUCT CARDS */}
      <section className="bg-secondary/60 py-20 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Customer Favourites</span>
              <h2 className="mt-2 text-4xl">Our Most Loved Varieties</h2>
              <p className="text-sm text-muted-foreground mt-1">Baked fresh every week in small artisanal batches.</p>
            </div>
            <Link to="/products" className="nav-link font-semibold text-primary text-sm flex items-center gap-1">
              <span>View All 19 Flavours</span>
              <span>→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <ProductCard key={s} p={products.find((p) => p.slug === s)!} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRAFT PROCESS SECTION ("MADE THE OLD WAY") */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Authentic hand kneading & dough preparation */}
          <div className="relative">
            <InteractiveTilt maxTilt={10} scale={1.03}>
              <div className="overflow-hidden rounded-2xl border-4 border-double border-accent shadow-2xl">
                <img
                  src={DOUGH_CRAFT}
                  alt="Artisanal dough kneading and hand preparation for authentic khakhras"
                  className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </InteractiveTilt>
            {/* Stamp Badge */}
            <div className="absolute -bottom-5 -right-5 rounded-full border-2 border-accent bg-primary px-5 py-4 text-center text-primary-foreground shadow-lg animate-float">
              <span className="font-display text-sm font-bold block">100%</span>
              <span className="text-[10px] uppercase tracking-wider block">Handmade</span>
            </div>
          </div>

          <div>
            <span className="eyebrow">Made the old way</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Rolled, pricked & roasted — one by one.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We never cut corners with industrial frying or automated conveyor presses. Our master women cooks uphold recipes passed down through generations.
            </p>
            <div className="mt-8 space-y-5">
              {steps.map(([n, t, d]) => (
                <div key={n} className="flex gap-4">
                  <span className="font-display text-2xl font-bold text-accent">{n}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                ["30+", "Years of Craft"],
                ["19", "Flavours"],
                ["0%", "Maida / Palm Oil"],
              ].map(([a, b]) => (
                <div key={b} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                  <div className="font-display text-3xl font-bold text-primary">{a}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HEALTH & HERITAGE ADVANTAGE ("THE ASAL DIFFERENCE: SLOW-ROASTED, NEVER FRIED") */}
      <section className="bg-secondary/70 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">The Asal Purity Standard</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary">
              100% Slow-Roasted, <em className="text-accent italic font-normal">Never Fried.</em>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Why health-conscious families and daily tea-time lovers across India choose SAIHIRA over commercial fried snacks.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
            {/* Left 3D Showcase Card with khakra2.jpg */}
            <div className="lg:col-span-5 flex justify-center">
              <InteractiveTilt maxTilt={14} scale={1.03} className="w-full max-w-md">
                <div className="relative rounded-3xl border-2 border-accent bg-card p-4 sm:p-6 shadow-deep">
                  {/* Floating 3D Badge */}
                  <div
                    className="absolute -top-3.5 -right-3.5 z-30 rounded-full border border-accent bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-lg animate-float"
                    style={{ transform: "translateZ(45px)" }}
                  >
                    ★ 100% Cast Iron Tawa Baked
                  </div>

                  <div
                    className="overflow-hidden rounded-2xl border border-border shadow-md"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <img
                      src="/khakra2.jpg"
                      alt="Freshly roasted golden Gujarati Khakhras on traditional iron tawa"
                      className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 text-center" style={{ transform: "translateZ(35px)" }}>
                    <span className="ribbon text-xs tracking-wider uppercase font-semibold">
                      Guilt-Free Daily Munching
                    </span>
                    <p className="mt-2 text-xs text-muted-foreground font-medium">
                      Paper-thin crispiness, zero trans-fat, and pure whole-grain wholesome nutrition.
                    </p>
                  </div>
                </div>
              </InteractiveTilt>
            </div>

            {/* Right 6-Pillar Health & Advantage Grid */}
            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
              {healthAdvantages.map((item, idx) => (
                <InteractiveTilt key={idx} maxTilt={10} scale={1.02} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-primary">{item.title}</h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </InteractiveTilt>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore All 19 Roasted Flavours</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TEA-TIME PAIRING GUIDE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="eyebrow">How to Relish</span>
          <h2 className="mt-3 text-4xl">The Perfect Chai Companions</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
            Khakhras and Bhakhris are versatile snacks. Here is how Indian households cherish them best:
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pairings.map((pair) => (
            <div key={pair.title} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:border-accent transition-colors">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">{pair.tag}</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">{pair.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pair.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PROMO BANNER (CHAI & GIFTING) */}
      <section className="relative">
        <img src={CHAI_SNACK} alt="Authentic masala chai with crisp Indian snacks" className="h-[420px] w-full object-cover filter brightness-75" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Bulk & Corporate Gifting</span>
          <h2 className="mt-2 text-4xl font-bold text-primary-foreground md:text-5xl">
            Celebrate Festivals with the Purest Crunch
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/90">
            Customised festive boxes for weddings, corporate gifting, and overseas family shipments with export-grade packaging.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-transform hover:scale-105">
              Enquire for Bulk Gifting
            </Link>
            <Link to="/products" className="rounded-full border border-primary-foreground/40 px-7 py-3 font-semibold text-primary-foreground hover:bg-white/10 transition-colors">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* 9. REVIEWS & TESTIMONIALS WITH 3D TILT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="eyebrow">Loved by Thousands</span>
          <h2 className="mt-3 text-4xl">What Families Say About SAIHIRA</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <InteractiveTilt key={i} maxTilt={14} scale={1.03}>
              <figure className="frame p-8 pt-10 text-center flex flex-col justify-between shadow-deep h-full">
                <div>
                  <div className="text-accent text-sm tracking-widest mb-3">{r.rating}</div>
                  <blockquote className="font-display text-base italic leading-relaxed text-foreground">
                    “{r.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-5 border-t border-border/40 pt-3 text-xs text-muted-foreground font-semibold">
                  — {r.author}, <span className="font-normal">{r.city}</span>
                </figcaption>
              </figure>
            </InteractiveTilt>
          ))}
        </div>
      </section>

      {/* 10. NEWSLETTER & VIP CLUB */}
      <section className="bg-secondary py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow">Join the SAIHIRA Family</span>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Get 10% Off Your First Order</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Sign up for weekly batch updates, seasonal Gujarati treats, and festive gifting discounts.
          </p>
          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="field sm:max-w-xs"
            />
            <button type="submit" className="btn-warm justify-center text-sm">
              Claim 10% Off
            </button>
          </form>
          <p className="mt-3 text-[11px] text-muted-foreground">We respect your privacy. No spam ever.</p>
        </div>
      </section>
    </>
  );
}
