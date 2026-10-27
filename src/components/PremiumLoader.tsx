import { useEffect, useState } from "react";

export function PremiumLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show on first mount in session or initial page load
    const timer = setTimeout(() => {
      setFading(true);
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(exitTimer);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF6EE] transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={loading}
    >
      {/* Decorative Traditional Indian Motif Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Animated Golden Ring Container */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating pulse ring */}
          <div className="absolute h-36 w-36 rounded-full border border-dashed border-amber-600/30 animate-spin [animation-duration:12s]" />
          
          {/* Middle pulsing golden glow */}
          <div className="absolute h-32 w-32 rounded-full border-2 border-amber-500/40 animate-ping [animation-duration:3s]" />
          
          {/* Inner luxury circle */}
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/80 p-3 shadow-2xl shadow-amber-900/10 border-2 border-amber-600/30 backdrop-blur">
            <img
              src="/saihirawebsite/SHM_ASAL_logo_high_quality_transparent.png"
              alt="SHM Asal Logo"
              className="h-20 w-auto object-contain drop-shadow"
            />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <div className="mt-6 space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase text-amber-800 font-semibold">
            <span>✦</span>
            <span>SAIHIRA</span>
            <span>✦</span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-primary md:text-3xl">
            SHM Asal
          </h2>
          <p className="font-sans text-xs tracking-wider text-muted-foreground uppercase">
            Best in Taste · 100% Roasted & Handmade
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-amber-200/50">
          <div className="h-full w-full bg-gradient-to-r from-amber-600 via-primary to-amber-600 animate-[pulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
