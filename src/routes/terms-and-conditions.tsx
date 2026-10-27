import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const HERO_POLICY = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | SAIHIRA · SHM Asal" },
      { name: "description", content: "Terms and conditions governing orders and usage of SAIHIRA." },
      { property: "og:image", content: HERO_POLICY },
    ],
  }),
  component: TermsAndConditionsPage,
});

export function TermsAndConditionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal & Operations"
        title="Terms & Conditions"
        subtitle="Clear, honest terms governing orders, shelf life storage, and product delivery."
        image={HERO_POLICY}
        badge="Terms of Service"
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-8 leading-relaxed text-foreground/90">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">1. Agreement to Terms</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              By accessing or ordering from the SAIHIRA (SHM Asal) website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please refrain from using our online store.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">2. Artisanal Handcrafted Quality</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              All prices listed on our website are in Indian Rupees (INR) and inclusive of applicable GST taxes. Because each batch of Khakhra and Bhakhri is individually hand-rolled and slow-roasted using natural whole grains and farm spices, slight artisanal variations in texture, color, and thickness are natural hallmarks of authentic craftsmanship.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">3. Recommended Storage & Shelf Life</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Our products feature a recommended shelf life of <strong>6 months</strong> from the date of manufacturing when kept in unopened vacuum packaging. Once opened, store in an airtight steel or glass jar in a cool, dry place to maintain peak crispiness.
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
            <Link to="/return-policy" className="btn-ghost text-sm">Return Policy</Link>
            <Link to="/privacy-policy" className="btn-ghost text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
