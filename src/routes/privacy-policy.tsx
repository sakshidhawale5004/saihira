import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const HERO_POLICY = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SAIHIRA · SHM Asal" },
      { name: "description", content: "How SAIHIRA collects, protects and uses your data." },
      { property: "og:image", content: HERO_POLICY },
    ],
  }),
  component: PrivacyPolicyPage,
});

export function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Data Security & Integrity"
        title="Privacy Policy"
        subtitle="We treat your privacy with the same honesty and respect we bring to our traditional snacks."
        image={HERO_POLICY}
        badge="Secure Platform"
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-8 leading-relaxed text-foreground/90">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">1. Information We Collect</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              When you browse our online store or place an order for SAIHIRA (SHM Asal) products, we collect the necessary details to fulfill your delivery:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li><strong>Contact details:</strong> Full name, telephone number, and email address.</li>
              <li><strong>Shipping information:</strong> Complete postal address, apartment/floor, landmark, and pin code.</li>
              <li><strong>Transaction information:</strong> Payment confirmation identifiers, billing summary, and payment mode (we do NOT store credit/debit card numbers or UPI PINs on our servers).</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">2. How We Use Your Data</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              We respect your privacy like our own. Your information is used strictly for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li>Processing, packing, and dispatching your orders through reliable courier partners.</li>
              <li>Providing order tracking updates via SMS, WhatsApp, and email.</li>
              <li>Handling customer care inquiries and resolving replacement requests.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">3. Zero Data Sale Guarantee</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              We will <strong>never sell, lease, or monetize</strong> your personal contact information to third-party advertisers. Data is shared exclusively with certified courier partners (e.g. Bluedart, Delhivery) and payment gateways solely for order execution.
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
            <Link to="/terms-and-conditions" className="btn-ghost text-sm">Terms and Conditions</Link>
            <Link to="/contact" className="btn-warm text-sm">Questions? Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
