import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTitle, Reveal } from "@/components/site";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "Return & Refund Policy | SAIHIRA · SHM Asal" },
      { name: "description", content: "Our return and refund policy for handmade Khakhras and Bhakhris." },
    ],
  }),
  component: ReturnPolicyPage,
});

export function ReturnPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <span className="eyebrow">Customer Care & Transparency</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Return & Refund Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: October 2026</p>
      </Reveal>

      <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">1. Perishable Food Items Policy</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            At SAIHIRA (SHM Asal), all our Khakhras, Bhakhris, and snacks are prepared freshly by hand and sealed in premium vacuum-grade food packaging. Since our products are perishable food items, we cannot accept general returns once an order has been successfully delivered and unsealed.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">2. Damaged, Defective or Incorrect Items</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Your satisfaction and health are our highest priority. If you receive an item that is damaged during transit, has a compromised vacuum seal, or if you received an incorrect flavor:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            <li>Please contact us within <strong>48 hours</strong> of package delivery.</li>
            <li>Send clear photographs or a short video showing the outer packaging and the affected product to <a href="mailto:hello@saihira.com" className="text-primary underline">hello@saihira.com</a> or WhatsApp us at <strong>+91 98200 00000</strong>.</li>
            <li>Include your Order ID (e.g. SH123456) and delivery contact number.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">3. Replacements & Resolution</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Once our customer care team verifies the issue, we will immediately offer one of the following:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-secondary p-4 border border-border">
              <h3 className="font-semibold text-primary">Free Replacement</h3>
              <p className="mt-1 text-xs text-muted-foreground">We dispatch a fresh replacement batch at no additional courier charge within 24-48 business hours.</p>
            </div>
            <div className="rounded-lg bg-secondary p-4 border border-border">
              <h3 className="font-semibold text-primary">Full / Partial Refund</h3>
              <p className="mt-1 text-xs text-muted-foreground">Processed back to your original source of payment (UPI / Net Banking / Card) within 3-5 business days.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">4. Order Cancellations</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            You may request cancellation of your order within <strong>4 hours</strong> of placement, provided the order has not yet been dispatched by our logistics facility. Once the courier tracking number has been generated, cancellations are no longer permitted.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
          <Link to="/contact" className="btn-warm">Contact Support →</Link>
          <Link to="/shipping-policy" className="btn-ghost">View Shipping Policy</Link>
        </div>
      </div>
    </div>
  );
}
