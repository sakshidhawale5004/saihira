import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { formatINR } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, products } from "@/lib/products";
import { InteractiveTilt } from "@/components/InteractiveTilt";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | SHM Asal by SAIHIRA` },
          { name: "description", content: `${loaderData.name} — ${loaderData.tagline}. Handmade by SAIHIRA.` },
          { property: "og:title", content: `${loaderData.name} | SAIHIRA` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: loaderData.image },
        ]
      : [{ title: "Product not found | SAIHIRA" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const { add } = useCart();
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-24">
      <Link to="/products" className="nav-link inline-flex items-center gap-1.5 text-xs text-primary font-bold">
        <span>←</span>
        <span>Back to All Flavours</span>
      </Link>

      <div className="mt-8 grid items-center gap-14 md:grid-cols-2">
        {/* Interactive 3D Packaging Frame */}
        <InteractiveTilt maxTilt={12} scale={1.03}>
          <div className="frame p-8 pt-12 shadow-2xl relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-card via-amber-50/20 to-card">
            {/* Ambient Pulse Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-amber-400/15 blur-3xl animate-pulse-glow pointer-events-none" />
            <img
              src={p.image}
              alt={p.name}
              className="w-full max-h-[460px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
              style={{ transform: "translateZ(30px)" }}
            />
          </div>
        </InteractiveTilt>

        <Reveal>
          <div className="flex items-center gap-3">
            <span className="eyebrow !text-primary font-bold">
              {p.category === "khakhra" ? "Handmade Khakhra" : "Traditional Bhakhri"} · SHM Asal
            </span>
            <span className="rounded-full bg-accent/20 px-3 py-0.5 text-xs font-bold text-accent-foreground">
              100% Roasted
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            {p.name}
          </h1>

          <p className="mt-3 font-display text-xl italic text-muted-foreground">
            {p.tagline}
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-primary">
              {formatINR(p.price)}
            </span>
            <span className="text-sm font-normal text-muted-foreground">/ {p.weight} pack</span>
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              In Stock · Fresh Batch
            </span>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            {p.description}
          </p>

          {/* Flavor Notes & Attributes */}
          <div className="mt-6 flex flex-wrap gap-2">
            {p.notes.map((n) => (
              <span key={n} className="rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-foreground">
                ✦ {n}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => {
                add(p.slug);
                toast.success(`${p.name} added to your basket!`);
              }}
              className="btn-warm text-sm shadow-lg hover:scale-105"
            >
              Add to Cart ({formatINR(p.price)})
            </button>
            <Link to="/cart" className="btn-ghost text-sm">
              View Cart
            </Link>
          </div>

          {/* Assurance Row */}
          <div className="mt-10 pt-6 border-t border-border grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
            <div className="p-2 rounded-lg bg-card border border-border/60">
              <span className="block text-base mb-1">🔥</span>
              <span className="font-semibold text-foreground block">Tawa Roasted</span>
              <span>80% less oil</span>
            </div>
            <div className="p-2 rounded-lg bg-card border border-border/60">
              <span className="block text-base mb-1">📦</span>
              <span className="font-semibold text-foreground block">Vacuum Sealed</span>
              <span>6-month crunch</span>
            </div>
            <div className="p-2 rounded-lg bg-card border border-border/60">
              <span className="block text-base mb-1">🚚</span>
              <span className="font-semibold text-foreground block">Free Delivery</span>
              <span>On orders ₹499+</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Related Products */}
      <section className="pt-24 border-t border-border mt-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="eyebrow">Explore More</span>
            <h2 className="mt-2 text-3xl font-bold font-display">You May Also Relish</h2>
          </div>
          <Link to="/products" className="nav-link text-xs text-primary font-bold">
            View All Flavours →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <ProductCard key={r.slug} p={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
