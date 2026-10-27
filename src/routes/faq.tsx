import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const HERO_FAQ = "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1600&q=85"; // Indian tea with crisp snacks

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Orders, Delivery & Ingredients | SAIHIRA · SHM Asal" },
      { name: "description", content: "Answers about SAIHIRA Khakhras and Bhakhris: ingredients, shelf life, delivery, payment and bulk orders." },
      { property: "og:title", content: "Frequently Asked Questions | SAIHIRA" },
      { property: "og:description", content: "Everything you need to know about ordering our handmade snacks." },
      { property: "og:image", content: HERO_FAQ },
    ],
  }),
  component: Faq,
});

const faqs = [
  ["Are your Khakhras and Bhakhris handmade?", "Yes! Every single piece is hand-rolled on wooden boards and individually roasted on iron tawas by skilled women cooks in small batches."],
  ["Are they fried in oil?", "Never! Our snacks are 100% slow-roasted on hot iron griddles. They contain up to 80% less oil than conventional fried snacks."],
  ["Do you have options without onion and garlic (Jain friendly)?", "Yes, a large portion of our range (such as Jeera Khakhra, Plain Khakhra, Kothmir-Marcha, etc.) is strictly without onion and garlic."],
  ["Which products are suitable for fasting (Vrat)?", "Our Farali Khakhra and Farali Bhakhri are prepared exclusively with fasting-permitted flours (Rajgira/Singhada) and rock salt (Sendha Namak)."],
  ["What is the shelf life of your snacks?", "Thanks to our vacuum barrier packaging, unopened packets stay perfectly fresh and crispy for 6 months. Once opened, store in an airtight steel container."],
  ["How much is shipping?", "Pan-India delivery is completely FREE on all orders of ₹499 and above. For smaller orders, a flat courier fee of ₹50 applies."],
  ["How long does delivery take?", "Orders are dispatched within 24-48 hours. Metro cities typically receive deliveries in 2-4 business days, while rest of India takes 4-7 days."],
  ["Do you take bulk or corporate festive gifting orders?", "Absolutely! We customize gift hampers, Diwali boxes, and wedding favours. Please reach out via our Contact page or WhatsApp."],
];

function Faq() {
  return (
    <div>
      <PageHero
        eyebrow="Help & Frequently Asked Questions"
        title="Everything You Need to Know"
        subtitle="Learn about our traditional roasting craft, whole grain flours, vacuum packaging, and corporate gifting options."
        image={HERO_FAQ}
        badge="Customer Support"
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-border bg-card p-6 open:shadow-deep transition-all duration-300">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-primary">
                {q}
                <span className="text-accent text-xl font-bold transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/60 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">Still have questions?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Our team is always happy to assist with orders, corporate gifting, or dietary queries.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/contact" className="btn-warm text-sm">Contact Our Team →</Link>
            <Link to="/products" className="btn-ghost text-sm">Shop Flavours</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
