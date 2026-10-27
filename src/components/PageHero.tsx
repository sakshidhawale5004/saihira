import { type ReactNode } from "react";
import { Reveal } from "@/components/site";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  badge?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  badge,
  children,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-[#F5EFE3]">
      {/* Background Banner with Dimming Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Authentic handmade khakhra and bhakhri heritage"
          className="h-full w-full object-cover object-center filter brightness-[0.45] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
      </div>

      {/* Decorative Traditional Indian Pattern Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28 text-white">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="eyebrow !text-amber-300 font-bold tracking-[0.3em]">
              ✦ {eyebrow} ✦
            </span>
            {badge && (
              <span className="rounded-full border border-amber-400/40 bg-amber-400/20 px-3 py-0.5 text-xs font-semibold tracking-wider text-amber-200 backdrop-blur">
                {badge}
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight !text-white md:text-6xl drop-shadow-md">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-amber-50/90 md:text-lg max-w-xl font-sans">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
