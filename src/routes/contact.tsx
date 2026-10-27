import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site";
import { PageHero } from "@/components/PageHero";
import { InteractiveTilt } from "@/components/InteractiveTilt";

const HERO_CONTACT = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85"; // Roasted Indian flatbreads

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SAIHIRA · SHM Asal — Orders & Bulk Inquiries" },
      { name: "description", content: "Get in touch with SAIHIRA to order handmade Khakhras and Bhakhris, request festive gift hampers or corporate orders." },
      { property: "og:title", content: "Contact SAIHIRA · SHM Asal" },
      { property: "og:description", content: "Reach out for orders, bulk hampers, and distributor inquiries." },
      { property: "og:image", content: HERO_CONTACT },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-xl border border-input bg-card px-4 py-3.5 text-sm outline-none transition focus:border-primary shadow-sm";

  return (
    <div>
      <PageHero
        eyebrow="Connect With Us"
        title="Let's Talk Fresh Crunch"
        subtitle="Whether you have an order question, want custom Diwali gift hampers, or need bulk corporate boxes — we are here to help."
        image={HERO_CONTACT}
        badge="Quick Response"
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Contact Details & Office */}
          <Reveal>
            <span className="eyebrow">Direct Touchpoints</span>
            <h2 className="mt-2 text-3xl font-bold">We Love Hearing From You</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every package is shipped with pride directly from our central kitchen in Mumbai. Contact our dedicated support desk for order tracking, dietary advice, or wholesale catalogs.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold text-sm">Email Us</h4>
                  <p className="text-xs text-primary font-medium mt-0.5"><a href="mailto:hello@saihira.com">hello@saihira.com</a></p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">We reply within 12 business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold text-sm">Headquarters</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">SAIHIRA Foods, Mumbai, Maharashtra, India</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Kitchen & Distribution Center</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                <span className="text-2xl">⏰</span>
                <div>
                  <h4 className="font-semibold text-sm">Working Hours</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Closed on Sundays & National Holidays</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Inquiry Form with 3D Tilt */}
          <Reveal delay={150}>
            <InteractiveTilt maxTilt={6} scale={1.01}>
              {sent ? (
                <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-deep">
                  <span className="text-4xl block mb-2">🎉</span>
                  <h3 className="text-2xl font-bold text-primary">Message Sent Successfully!</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Thank you for reaching out. One of our team members will contact you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-deep"
                >
                  <h3 className="text-xl font-bold text-foreground">Send an Inquiry</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required placeholder="Your full name" className={field} />
                    <input required type="email" placeholder="Email address" className={field} />
                  </div>
                  <input placeholder="Phone / WhatsApp number" className={field} />
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what flavours you're craving, or mention your bulk gifting requirements..."
                    className={field}
                  />
                  <button type="submit" className="btn-warm w-full justify-center text-sm shadow-md hover:scale-105">
                    Send Message →
                  </button>
                </form>
              )}
            </InteractiveTilt>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
