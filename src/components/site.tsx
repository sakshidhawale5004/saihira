import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useCart } from "@/lib/cart";

const logo = { url: "/saihirawebsite/SHM_ASAL_logo_high_quality_transparent.png" };

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "All Products" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ & Gifting" },
  { to: "/contact", label: "Contact" },
] as const;

const tickerItems = [
  "Free pan-India delivery on orders above ₹499",
  "100% Roasted on Tawa · Zero Maida",
  "19 Authentic Handmade Gujarati Flavours",
  "Vacuum-Sealed Freshness for 6 Months",
  "Jain & Farali Fasting-Friendly Options",
  "Bulk & Corporate Festive Gifting Available",
];

export function Ticker() {
  return (
    <div className="overflow-hidden bg-primary py-2 text-xs font-medium tracking-wider text-primary-foreground">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {[0, 1].flatMap((j) =>
          tickerItems.map((t, i) => (
            <span key={`${j}-${i}`} className="inline-flex items-center gap-2">
              <span className="text-accent text-[10px]">✦</span>
              <span>{t}</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}

function CartLink() {
  const { count } = useCart();
  return (
    <Link
      to="/cart"
      className="relative inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <span>Cart</span>
      {count > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-accent-foreground shadow-sm">
          {count}
        </span>
      )}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/95 shadow-sm backdrop-blur border-b border-border">
      <Ticker />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="SHM Asal – Best in Taste"
            className="h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>
        <nav className="hidden gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link font-medium"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "nav-link text-primary font-bold border-b-2 border-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <CartLink />
          <button
            className="rounded-md border border-border px-3 py-1 text-xs tracking-widest font-semibold md:hidden uppercase"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t border-border bg-background p-6 shadow-xl md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-display text-xl text-foreground hover:text-primary py-1 border-b border-border/40"
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/return-policy" onClick={() => setOpen(false)} className="hover:text-primary">
              Return Policy
            </Link>
            <Link to="/shipping-policy" onClick={() => setOpen(false)} className="hover:text-primary">
              Shipping Policy
            </Link>
            <Link to="/privacy-policy" onClick={() => setOpen(false)} className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-double border-accent bg-[#F5EFE3] text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Col 1: Brand & Craft */}
        <div className="space-y-4">
          <img src={logo.url} alt="SHM Asal by SAIHIRA" className="h-16 w-auto object-contain" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Authentic Gujarati handmade Khakhras & Bhakhris, slow-roasted on hot iron tawas the traditional way by SAIHIRA. 100% roasted, whole-grain goodness for the entire family.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <span className="inline-block rounded-md border border-amber-800/20 bg-amber-800/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-amber-900">
              100% ROASTED
            </span>
            <span className="inline-block rounded-md border border-amber-800/20 bg-amber-800/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-amber-900">
              ZERO MAIDA
            </span>
          </div>
        </div>

        {/* Col 2: Flavours & Explore */}
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="eyebrow text-primary font-bold">Explore Our Flavours</span>
          <Link to="/products" search={{ c: "khakhra" }} className="hover:text-primary transition-colors">
            Khakhras (12 Varieties)
          </Link>
          <Link to="/products" search={{ c: "bhakhri" }} className="hover:text-primary transition-colors">
            Bhakhris (7 Varieties)
          </Link>
          <Link to="/products" className="hover:text-primary transition-colors">
            Bestsellers & Combos
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            Our Story & Heritage
          </Link>
          <Link to="/faq" className="hover:text-primary transition-colors">
            FAQ & Festive Gifting
          </Link>
        </div>

        {/* Col 3: Customer Policies */}
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="eyebrow text-primary font-bold">Customer Policies</span>
          <Link to="/shipping-policy" className="hover:text-primary transition-colors">
            Shipping & Delivery Policy
          </Link>
          <Link to="/return-policy" className="hover:text-primary transition-colors">
            Return & Refund Policy
          </Link>
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/cart" className="hover:text-primary transition-colors">
            Shopping Cart
          </Link>
        </div>

        {/* Col 4: Say Hello & Bulk Inquiries */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <span className="eyebrow text-primary font-bold">Say Hello & Bulk Inquiries</span>
          <p className="text-xs">Have questions, corporate gifting requests or party orders? Reach out to us anytime.</p>
          <div className="space-y-1 text-xs">
            <p className="font-semibold text-foreground">Email:</p>
            <p className="text-primary hover:underline"><a href="mailto:hello@saihira.com">hello@saihira.com</a></p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-semibold text-foreground">Headquarters:</p>
            <p>SAIHIRA Foods, Mumbai, Maharashtra, India</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-semibold text-foreground">Working Hours:</p>
            <p>Mon - Sat: 9:00 AM – 7:00 PM IST</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} SAIHIRA · SHM Asal. Best in Taste. All Rights Reserved.</p>
        <p className="mt-1 text-[11px] text-muted-foreground/80">Handmade with devotion in India · FSSAI Certified Hygiene Standards</p>
      </div>
    </footer>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? "reveal-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`tilt ${className}`}>{children}</div>;
}

export function PageTitle({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="border-b border-border bg-secondary py-14 text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-3 text-5xl md:text-6xl">{title}</h1>
      {sub && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{sub}</p>}
    </div>
  );
}
