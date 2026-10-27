import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SAIHIRA · SHM Asal" },
      { name: "description", content: "How SAIHIRA collects, protects and uses your data." },
    ],
  }),
  component: PrivacyPolicyPage,
});

export function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <span className="eyebrow">Trust & Security</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: October 2026</p>
      </Reveal>

      <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">1. Information We Collect</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            When you browse our online boutique or place an order for SAIHIRA (SHM Asal) products, we collect the necessary details to fulfill your delivery:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            <li><strong>Contact details:</strong> Full name, telephone number, and email address.</li>
            <li><strong>Shipping information:</strong> Complete postal address, apartment/floor, landmark, and pin code.</li>
            <li><strong>Transaction information:</strong> Payment confirmation identifiers, billing summary, and payment mode (we do NOT store credit/debit card numbers or UPI PINs on our servers).</li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">2. How We Use Your Data</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We respect your privacy like our own. Your information is used strictly for:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            <li>Processing, packing, and dispatching your orders through reliable courier partners.</li>
            <li>Providing order tracking updates via SMS, WhatsApp, and email.</li>
            <li>Handling customer care inquiries and resolving replacement requests.</li>
            <li>Continuous improvements to our digital store experience and festive gifting selections.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">3. Data Sharing & Security</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We will <strong>never sell, lease, or monetize</strong> your personal contact information to third-party advertisers. Data is shared exclusively with certified third-party service providers (e.g. Bluedart, Delhivery, Razorpay/Stripe) solely for shipping and payment execution under strict confidentiality agreements.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">4. Cookies & Site Preferences</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Our platform uses essential session cookies to remember the items in your shopping cart, preserve your local delivery selections, and enhance browsing speed.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
          <Link to="/terms-and-conditions" className="btn-ghost">Terms and Conditions</Link>
          <Link to="/contact" className="btn-warm">Questions? Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
