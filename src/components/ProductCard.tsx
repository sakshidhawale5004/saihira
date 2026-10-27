import { Link } from "@tanstack/react-router";
import { formatINR, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="frame group flex h-full flex-col p-4 pt-8 shadow-deep transition-transform hover:-translate-y-1">
      <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
        <div className="aspect-square overflow-hidden rounded-md bg-muted">
          <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mt-4 text-center">
          <span className="ribbon text-sm">{p.name}</span>
          <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
        </div>
      </Link>
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="font-display text-lg font-semibold text-primary">{formatINR(p.price)} <span className="text-xs font-normal text-muted-foreground">/ {p.weight}</span></span>
        <button onClick={() => { add(p.slug); toast.success(`${p.name} added to cart`); }} className="rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-primary-foreground">+ Add</button>
      </div>
    </div>
  );
}
