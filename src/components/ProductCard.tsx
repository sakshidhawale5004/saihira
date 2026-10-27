import { Link } from "@tanstack/react-router";
import { formatINR, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { InteractiveTilt } from "@/components/InteractiveTilt";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <InteractiveTilt className="h-full">
      <div
        className="frame group flex h-full flex-col p-4 pt-8 shadow-deep transition-shadow duration-300 hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Link to="/products/$slug" params={{ slug: p.slug }} className="block" style={{ transformStyle: "preserve-3d" }}>
          {/* Packaging Image Container with prominent 3D Z-elevation */}
          <div
            className="aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-amber-50/70 to-muted/40 p-3 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2"
              style={{ transform: "translateZ(15px)" }}
            />
          </div>

          <div className="mt-5 text-center" style={{ transform: "translateZ(45px)" }}>
            <span className="ribbon text-sm font-semibold tracking-wide drop-shadow-md">
              {p.name}
            </span>
            <p className="mt-2.5 text-xs text-muted-foreground line-clamp-1 font-medium">{p.tagline}</p>
          </div>
        </Link>

        <div
          className="mt-auto flex items-center justify-between pt-5 border-t border-border/40"
          style={{ transform: "translateZ(30px)" }}
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
            className="rounded-full border-2 border-primary bg-primary/5 px-4 py-1 text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            + Add
          </button>
        </div>
      </div>
    </InteractiveTilt>
  );
}