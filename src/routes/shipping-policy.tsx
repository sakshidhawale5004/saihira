import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { SHIPPING_FREE_ABOVE } from "@/lib/cart";
import { formatINR } from "@/lib/products";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy | SAIHIRA · SHM Asal" },
      { name: "description", content: "Shipping timelines, delivery rates and packaging standards." },
    ],
  }),
  component: ShippingPolicyPage,
});

export function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <span className="eyebrow">Safe & Timely Delivery</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Shipping Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Pan-India Delivery Network</p>
      </Reveal>

      <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">1. Order Processing Time</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            All orders are freshly packed directly from our kitchen in Mumbai. We dispatch orders within <strong>24 to 48 hours</strong> of order confirmation on business days (Monday through Saturday, excluding national holidays).
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">2. Delivery Timelines</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-secondary p-4 border border-border">
              <h3 className="font-semibold text-primary">Metro Cities (Mumbai, Delhi, Bangalore, etc.)</h3>
              <p className="mt-1 text-sm text-muted-foreground">2 to 4 business days post dispatch.</p>
            </div>
            <div className="rounded-lg bg-secondary p-4 border border-border">
              <h3 className="font-semibold text-primary">Rest of India & Tier 2/3 Cities</h3>
              <p className="mt-1 text-sm text-muted-foreground">4 to 7 business days post dispatch.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">3. Shipping Charges & Free Delivery</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We provide <strong>FREE SHIPPING</strong> across India on all orders of <strong>{formatINR(SHIPPING_FREE_ABOVE)} and above</strong>! For orders below {formatINR(SHIPPING_FREE_ABOVE)}, a nominal flat courier fee of ₹50 is applied at checkout.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">4. Vacuum & Cushion Protection</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Khakhras and Bhakhris are delicate, paper-thin treats. To prevent breakage during long journeys, every bundle is enclosed in multi-layer food-grade barrier pouches and shock-resistant outer corrugated boxes to guarantee that your snacks arrive 100% crispy and intact.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
          <Link to="/products" className="btn-warm">Explore Flavours →</Link>
          <Link to="/return-policy" className="btn-ghost">Return Policy</Link>
        </div>
      </div>
    </div>
  );
}
