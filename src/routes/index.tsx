import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { products, formatINR } from "@/lib/products";
import { InteractiveTilt } from "@/components/InteractiveTilt";
import { useState } from "react";
import { toast } from "sonner";

// High-resolution Unsplash imagery dedicated to Khakhra, Bhakhri, roasted flatbreads & chai
const HERO_KHAKHRA = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85"; // Crisp roasted Indian flatbreads
const DOUGH_CRAFT = "/test_knead1.jpg"; // Hand kneading fresh dough
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

const combos = [
  {
    name: "Gujarati Royal Favourites Box",
    slug: "royal-box",
    desc: "A hand-picked selection of our top 4 bestseller Khakhras: Methi, Jeera, Masala & Plain.",
    price: 480,
    weight: "800 g",
    badge: "Bestseller Combo",
    image: "/saihirawebsite/SHM Asal Methi Khakhra Packaging.png",
  },
  {
    name: "Millet & Health Trio Pack",
    slug: "health-trio",
    desc: "Power-packed wholesome nutrition with Ragi, Bajri Methi and Oats Masala Khakhras.",
    price: 360,
    weight: "600 g",
    badge: "High Fibre",
    image: "/saihirawebsite/Premium Ragi Khakhra Packaging Design.png",
  },
  {
    name: "Heritage Bhakhri Sampler",
    slug: "bhakhri-sampler",
    desc: "Thick, rustic, crunchy Bhakhris: Jaggery (Sweet), Garlic, and Black Pepper.",
    price: 420,
    weight: "750 g",
    badge: "Chai Favourite",
    image: "/saihirawebsite/Jaggery Bhakhri Rustic Product Display.png",
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
      {/* 1. HERO SECTION (LIGHT, WARM & LUXURIOUS GUJARATI HERITAGE PALETTE) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FCF9F2] via-[#FAF5EA] to-[#F3ECE0] min-h-[82vh] flex items-center border-b border-border">
        {/* Soft, Light Culinary Background Texture */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_KHAKHRA}
            alt="Authentic roasted Gujarati Khakhra and crispy flatbreads"
            className="h-full w-full object-cover object-right md:object-center opacity-25 mix-blend-multiply filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EA] via-[#FAF5EA]/85 to-transparent" />
        </div>

        {/* Ambient Subtle Warm Glow Orbs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content in Premium Dark Burgundy & Warm Charcoal */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary shadow-sm backdrop-blur">
                  <span>✦</span>
                  <span className="uppercase">SHM ASAL · 100% HANDMADE GUJARATI CRUNCH</span>
                  <span>✦</span>
                </div>

                <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-primary sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
                  Paper-thin Khakhras & Hearty Bhakhris,{" "}
                  <em className="text-accent font-normal italic">roasted by hand.</em>
                </h1>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg max-w-xl font-sans">
                  Slow-roasted on seasoned cast iron tawas the old-fashioned way. Zero maida, 80% less oil than fried snacks, and vacuum-sealed to lock in crunch for 6 months.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Link to="/products" className="btn-warm text-sm shadow-xl hover:scale-105">
                    Explore 19 Flavours →
                  </Link>
                  <Link
                    to="/about"
                    className="btn-ghost text-sm text-foreground hover:text-primary font-semibold"
                  >
                    Our Heritage Story
                  </Link>
                </div>

                {/* Quick Trust Badges in Clean Light Theme */}
                <div className="mt-10 pt-6 border-t border-border/80 grid grid-cols-3 gap-4 text-xs font-semibold text-foreground/85">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">✓</span>
                    <span>100% Roasted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">✓</span>
                    <span>Zero Maida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">✓</span>
                    <span>Free Delivery ₹499+</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Interactive 3D Floating Packaging Display in Light Luxury Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <Reveal delay={200}>
                <InteractiveTilt maxTilt={15} scale={1.04} className="max-w-sm w-full">
                  <div className="relative rounded-3xl border-2 border-accent bg-card/95 p-6 shadow-2xl shadow-primary/10 backdrop-blur-md">
                    {/* Floating 3D Badge */}
                    <div
                      className="absolute -top-3.5 -right-3.5 z-30 rounded-full border border-accent bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-lg animate-float"
                      style={{ transform: "translateZ(50px)" }}
                    >
                      ★ Most Loved Flavour
                    </div>

                    {/* 3D Floating Packaging Image on Warm Cream Pedestal */}
                    <div
                      className="relative h-72 w-full rounded-2xl bg-gradient-to-b from-amber-50/70 to-muted/30 border border-border/40 p-4 flex items-center justify-center overflow-hidden"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {/* Subtle Warm Radial Glow */}
                      <div className="absolute h-48 w-48 rounded-full bg-amber-400/20 blur-2xl animate-pulse-glow" />

                      <img
                        src="/saihirawebsite/SHM Asal Methi Khakhra Packaging.png"
                        alt="SHM Asal Methi Khakhra Packaging"
                        className="max-h-64 w-auto object-contain drop-shadow-xl animate-float"
                      />
                    </div>

                    <div className="mt-5 text-center" style={{ transform: "translateZ(40px)" }}>
                      <span className="ribbon text-xs tracking-wider uppercase font-semibold">
                        SHM Asal Methi Khakhra
                      </span>
                      <p className="mt-2 text-xs text-muted-foreground font-medium">
                        Gujarati Favourite · Slow-Roasted with Fenugreek
                      </p>
                      <div className="mt-3.5 flex items-center justify-center gap-3">
                        <span className="font-display text-xl font-bold text-primary">₹120</span>
                        <span className="text-xs text-muted-foreground">/ 200 g</span>
                        <Link
                          to="/products/$slug"
                          params={{ slug: "methi-khakhra" }}
                          className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </InteractiveTilt>
              </Reveal>
            </div>
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
              <InteractiveTilt key={c} maxTilt={8} scale={1.02}>
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

      {/* 6. FESTIVE COMBOS & VALUE PACKS WITH 3D TILT */}
      <section className="bg-secondary py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="eyebrow">Gift of Health & Tradition</span>
            <h2 className="mt-3 text-4xl">Curated Combos & Gift Hampers</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Whether celebrating Diwali, Raksha Bandhan, or gifting healthy snacks to family abroad, our festive boxes bring authentic warmth to every home.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {combos.map((combo) => (
              <InteractiveTilt key={combo.slug} maxTilt={10} scale={1.03}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-deep flex flex-col justify-between h-full transition-shadow hover:shadow-2xl">
                  <div>
                    <div
                      className="relative aspect-square overflow-hidden rounded-xl bg-muted/40 p-4 flex items-center justify-center"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      <img
                        src={combo.image}
                        alt={combo.name}
                        className="max-h-56 w-auto object-contain drop-shadow transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                        {combo.badge}
                      </span>
                    </div>
                    <div style={{ transform: "translateZ(35px)" }}>
                      <h3 className="mt-5 text-xl font-bold text-primary">{combo.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{combo.desc}</p>
                    </div>
                  </div>
                  <div
                    className="mt-6 pt-4 border-t border-border flex items-center justify-between"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <div>
                      <span className="text-lg font-bold text-primary font-display">{formatINR(combo.price)}</span>
                      <span className="text-xs text-muted-foreground ml-1">/ {combo.weight}</span>
                    </div>
                    <Link
                      to="/products"
                      className="rounded-full border border-primary px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Explore Variety
                    </Link>
                  </div>
                </div>
              </InteractiveTilt>
            ))}
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
            <InteractiveTilt key={i} maxTilt={8} scale={1.02}>
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
