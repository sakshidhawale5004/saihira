import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useCart, shippingFor, SHIPPING_FREE_ABOVE } from "@/lib/cart";
import { formatINR } from "@/lib/products";

const HERO_CART = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=85";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | SAIHIRA · SHM Asal" },
      { name: "description", content: "Review the handmade Khakhras and Bhakhris in your shopping cart." },
      { property: "og:title", content: "Your Cart | SAIHIRA" },
      { property: "og:description", content: "Review your handmade snack order." },
      { property: "og:image", content: HERO_CART },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { lines, subtotal, setQty, remove } = useCart();
  const ship = shippingFor(subtotal);

  return (
    <div>
      <PageHero
        eyebrow="Shopping Basket"
        title="Your Fresh Snack Box"
        subtitle="Review your hand-selected Khakhras and Bhakhris before proceeding to secure checkout."
        image={HERO_CART}
        badge="Fresh Batches"
      />

      <div className="mx-auto max-w-5xl px-6 py-14">
        {lines.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-border p-8 bg-card">
            <span className="text-4xl block mb-3">🧺</span>
            <h3 className="font-display text-2xl font-bold text-foreground">Your cart is feeling empty</h3>
            <p className="text-muted-foreground text-sm mt-1">Discover our 19 authentic Gujarati flavours of crisp Khakhras and Bhakhris.</p>
            <Link to="/products" className="btn-warm mt-6 text-sm">
              Explore Our Flavours →
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-3 items-start">
            <div className="space-y-4 md:col-span-2">
              {lines.map((l) => (
                <div key={l.slug} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-20 w-20 rounded-xl bg-muted/40 p-2 flex items-center justify-center shrink-0">
                    <img src={l.product.image} alt={l.product.name} className="h-full w-full object-contain drop-shadow-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link to="/products/$slug" params={{ slug: l.slug }} className="font-display text-lg font-bold text-primary hover:underline truncate block">
                      {l.product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-0.5">{formatINR(l.product.price)} · {l.product.weight}</p>
                  </div>
                  <div className="flex items-center rounded-full border border-border bg-secondary/50">
                    <button className="px-3 py-1 font-bold text-sm text-foreground hover:text-primary" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="Decrease">−</button>
                    <span className="w-6 text-center text-xs font-bold">{l.qty}</span>
                    <button className="px-3 py-1 font-bold text-sm text-foreground hover:text-primary" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="Increase">+</button>
                  </div>
                  <span className="w-20 text-right font-display text-base font-bold text-foreground">{formatINR(l.qty * l.product.price)}</span>
                  <button onClick={() => remove(l.slug)} className="p-2 text-xs text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove item">✕</button>
                </div>
              ))}
            </div>
            <Summary subtotal={subtotal} ship={ship}>
              <Link to="/checkout" className="btn-warm mt-6 w-full justify-center text-sm shadow-md hover:scale-105">
                Proceed to Checkout →
              </Link>
            </Summary>
          </div>
        )}
      </div>
    </div>
  );
}

export function Summary({ subtotal, ship, children }: { subtotal: number; ship: number; children?: React.ReactNode }) {
  return (
    <div className="frame h-fit p-6 pt-10 shadow-deep rounded-2xl">
      <h2 className="text-2xl font-bold font-display">Order Summary</h2>
      <div className="mt-5 space-y-2.5 text-sm">
        <div className="flex justify-between text-muted-foreground"><span>Items Subtotal</span><span className="font-semibold text-foreground">{formatINR(subtotal)}</span></div>
        <div className="flex justify-between text-muted-foreground">
          <span>Courier Shipping</span>
          <span className="font-semibold text-foreground">{ship === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : formatINR(ship)}</span>
        </div>
        {ship > 0 && (
          <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
            ✦ Add <strong>{formatINR(SHIPPING_FREE_ABOVE - subtotal)}</strong> more to unlock <strong>FREE SHIPPING</strong>!
          </p>
        )}
        <div className="flex justify-between border-t border-border pt-4 text-base font-bold text-primary font-display">
          <span>Grand Total</span>
          <span>{formatINR(subtotal + ship)}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
