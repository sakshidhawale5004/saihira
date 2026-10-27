import { Link } from "@tanstack/react-router";
import { formatINR, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { InteractiveTilt } from "@/components/InteractiveTilt";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <InteractiveTilt className="h-full">
      <div className="frame group flex h-full flex-col p-4 pt-8 shadow-deep transition-shadow duration-300 hover:shadow-2xl">
        <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
          {/* Packaging Image Container with 3D Z-elevation */}
          <div
            className="aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-amber-50/50 to-muted/40 p-3 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{ transform: "translateZ(25px)" }}
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-contain drop-shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1"
            />
          </div>

          <div className="mt-5 text-center" style={{ transform: "translateZ(35px)" }}>
            <span className="ribbon text-sm font-semibold tracking-wide drop-shadow-sm">
              {p.name}
            </span>
            <p className="mt-2.5 text-xs text-muted-foreground line-clamp-1">{p.tagline}</p>
          </div>
        </Link>

        <div
          className="mt-auto flex items-center justify-between pt-5 border-t border-border/40"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="font-display text-lg font-bold text-primary">
            {formatINR(p.price)}
            <span className="text-xs font-normal text-muted-foreground ml-1">/ {p.weight}</span>
          </span>
          <button
            onClick={() => {
              add(p.slug);
              toast.success(`${p.name} added to cart`);
            }}
            className="rounded-full border-2 border-primary bg-primary/5 px-4 py-1 text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:scale-105"
          >
            + Add
          </button>
        </div>
      </div>
    </InteractiveTilt>
  );
}
