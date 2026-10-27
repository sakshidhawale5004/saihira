import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | SAIHIRA · SHM Asal" },
      { name: "description", content: "Terms and conditions governing orders and usage of SAIHIRA." },
    ],
  }),
  component: TermsAndConditionsPage,
});

export function TermsAndConditionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <span className="eyebrow">Legal Agreement</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: October 2026</p>
      </Reveal>

      <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">1. Agreement to Terms</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            By accessing or ordering from the SAIHIRA (SHM Asal) website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please refrain from using our online store.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">2. Product Descriptions & Pricing</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            All prices listed on our website are in Indian Rupees (INR) and inclusive of applicable GST taxes. Because each batch of Khakhra and Bhakhri is individually hand-rolled and slow-roasted using natural whole grains and farm spices, slight artisanal variations in texture, color, and thickness are natural hallmarks of authentic craftsmanship.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">3. Orders & Payment</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We reserve the right to refuse or cancel any order for reasons such as product unavailability, bulk stock constraints, or inaccuracies in delivery pin codes. In case of cancellation after payment, a 100% refund will be issued promptly.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">4. Storage & Shelf Life Guidelines</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Our products feature a recommended shelf life of <strong>6 months</strong> from the date of manufacturing when kept in unopened vacuum packaging. Once opened, customers are advised to store the snacks in an airtight steel or glass container in a cool, dry place to maintain peak crispiness.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">5. Governing Law</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            These terms are governed by and construed in accordance with the laws of India, with jurisdiction under the competent courts of Mumbai, Maharashtra.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
          <Link to="/return-policy" className="btn-ghost">Return Policy</Link>
          <Link to="/privacy-policy" className="btn-ghost">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
