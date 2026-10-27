import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { products, type Category } from "@/lib/products";

const HERO_PRODUCTS = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85";

export const Route = createFileRoute("/products/")({
  validateSearch: (s: Record<string, unknown>): { c?: Category } =>
    s["c"] === "khakhra" || s["c"] === "bhakhri" ? { c: s["c"] } : {},
  head: () => ({
    meta: [
      { title: "Products — Khakhras & Bhakhris | SAIHIRA · SHM Asal" },
      { name: "description", content: "Browse all handmade SHM Asal Khakhras and Bhakhris — from Jeera and Methi to Jaggery and Garlic." },
      { property: "og:title", content: "All Khakhras & Bhakhris | SAIHIRA" },
      { property: "og:description", content: "19 handmade flavours of crunchy Khakhras and Bhakhris." },
      { property: "og:image", content: HERO_PRODUCTS },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { c } = Route.useSearch();
  const list = c ? products.filter((p) => p.category === c) : products;
  const tabs: Array<{ label: string; c?: Category }> = [
    { label: "All Flavours (19)" },
    { label: "Handmade Khakhras (12)", c: "khakhra" },
    { label: "Traditional Bhakhris (7)", c: "bhakhri" },
  ];

  return (
    <div>
      {/* Khakhra & Bhakhri Themed Hero Section */}
      <PageHero
        eyebrow="Artisanal Heritage Collection"
        title="Our Hand-Rolled Flavours"
        subtitle="Slow-roasted on seasoned iron tawas with zero maida and cold-pressed oil. Explore all 19 authentic Gujarati varieties."
        image={HERO_PRODUCTS}
        badge="100% Roasted"
      />

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 items-center">
          {tabs.map((t) => (
            <Link
              key={t.label}
              to="/products"
              search={t.c ? { c: t.c } : {}}
              className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-all ${
                c === t.c
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "border border-border bg-card hover:border-primary text-foreground"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>

        {/* 3D Product Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
