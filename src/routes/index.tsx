import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const HERO = "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1600&q=80";
const TEA = "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1200&q=80";
const SPICE = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAIHIRA — Best in Taste Handmade Khakhras & Bhakhris" },
      { name: "description", content: "Looking for a healthy snack? Try our crunchy, handmade Bhakhris & Khakhras in delicious flavours." },
      { property: "og:title", content: "SAIHIRA — Best in Taste" },
      { property: "og:description", content: "Crunchy, crispy handmade Bhakhris & Khakhras in delicious flavours." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const why = [
  ["Handmade", "Every piece is rolled and roasted by hand in small batches."],
  ["Baked, not fried", "Light on oil, big on crunch — a snack you can feel good about."],
  ["Wholesome grains", "Wheat, bajri, ragi, barley, oats and moong for every taste."],
  ["Pure & sattvik", "Many flavours are free of onion and garlic, and farali options for fasting."],
];

const steps = [
  ["01", "Fresh dough", "Flour, spices and a little oil are kneaded fresh every morning."],
  ["02", "Rolled by hand", "Khakhras paper-thin, Bhakhris thick and pricked."],
  ["03", "Slow roasted", "Pressed on a hot tawa until golden and perfectly crisp."],
  ["04", "Sealed fresh", "Packed straight away to lock in the crunch."],
];

const reviews = [
  ["The methi khakhra tastes exactly like home. My evening tea is sorted!", "Priya, Mumbai"],
  ["Jaggery bhakhri is my kids' favourite tiffin snack now.", "Neha, Pune"],
  ["Crisp, fresh and not oily at all. Ordering again for Diwali gifting.", "Rajesh, Ahmedabad"],
];

function Index() {
  const featured = ["jeera-khakhra", "methi-khakhra", "pani-puri-khakhra", "masala-khakhra", "jaggery-bhakhri", "garlic-bhakhri", "black-pepper-bhakhri", "farali-bhakhri"];
  return (
    <>
      <section className="relative">
        <img src={HERO} alt="Indian rotis and dals on a table" className="h-[78vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-center px-6">
          <Reveal className="max-w-xl">
            <span className="eyebrow">Best in Taste · Handmade with love</span>
            <h1 className="mt-5 text-5xl font-semibold leading-tight md:text-7xl">Crunchy Khakhras & Bhakhris, <em>made by hand.</em></h1>
            <p className="mt-6 text-lg text-muted-foreground">Looking for a healthy snack this morning? Try our crunchy and crispy handmade Bhakhris & Khakhras in delicious flavours.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-warm">Shop now →</Link>
              <Link to="/about" className="btn-ghost">Our story</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center"><span className="eyebrow">Shop by category</span><h2 className="mt-3 text-4xl">Authentic Gujarati Snacks</h2></div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {(["khakhra", "bhakhri"] as const).map((c) => {
            const p = products.find((x) => x.category === c)!;
            const n = products.filter((x) => x.category === c).length;
            return (
              <Link key={c} to="/products" search={{ c }} className="frame block p-6 pt-10 text-center shadow-deep transition-transform hover:-translate-y-1">
                <img src={p.image} alt={c} className="mx-auto h-64 object-contain" />
                <span className="ribbon mt-6 text-lg">{c === "khakhra" ? "Khakhras" : "Bhakhris"}</span>
                <p className="mt-3 text-sm text-muted-foreground">{n} flavours · {c === "khakhra" ? "Paper-thin, crisp & roasted" : "Thick, hearty & pressed by hand"}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center"><span className="eyebrow">Why SAIHIRA</span><h2 className="mt-3 text-4xl">Goodness in every bite</h2></div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-3 text-3xl text-accent">✦</div>
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div><span className="eyebrow">Favourites</span><h2 className="mt-3 text-4xl">Pick your crunch</h2></div>
          <Link to="/products" className="nav-link hidden md:block">View all →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => <ProductCard key={s} p={products.find((p) => p.slug === s)!} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-10 md:grid-cols-2">
        <img src={SPICE} alt="Indian spices" className="h-[420px] w-full rounded-xl border-4 border-double border-accent object-cover" />
        <div>
          <span className="eyebrow">Made the old way</span>
          <h2 className="mt-3 text-4xl">Rolled, pricked & roasted — one by one.</h2>
          <div className="mt-8 space-y-5">
            {steps.map(([n, t, d]) => (
              <div key={n} className="flex gap-4">
                <span className="font-display text-2xl font-bold text-accent">{n}</span>
                <div><h3 className="text-lg">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[["30+", "Years of craft"], ["19", "Flavours"], ["100%", "Handmade"]].map(([a, b]) => (
              <div key={b} className="rounded-xl border border-border p-4"><div className="font-display text-3xl font-bold text-primary">{a}</div><div className="mt-1 text-xs text-muted-foreground">{b}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-20">
        <img src={TEA} alt="A cup of tea" className="h-[380px] w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <h2 className="text-4xl text-primary-foreground md:text-5xl">The perfect partner for your chai</h2>
          <p className="mt-4 max-w-lg">Gift a box of handmade goodness this festive season. Bulk and corporate orders welcome.</p>
          <Link to="/contact" className="mt-6 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Enquire for gifting</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center"><span className="eyebrow">Loved by families</span><h2 className="mt-3 text-4xl">What our customers say</h2></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map(([q, a]) => (
            <figure key={a} className="frame p-8 pt-10 text-center">
              <blockquote className="font-display text-lg italic">“{q}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {a}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center"><Link to="/faq" className="btn-ghost">Have questions? Read our FAQ</Link></div>
      </section>
    </>
  );
}
