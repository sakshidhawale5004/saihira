import { useEffect, useState } from "react";

interface CurtainReveal3DProps {
  onComplete?: () => void;
}

export function CurtainReveal3D({ onComplete }: CurtainReveal3DProps) {
  // isOpen controls whether the curtains have parted
  const [isOpen, setIsOpen] = useState(false);
  // isFinished unmounts/hides pointer-events once fully drawn
  const [isFinished, setIsFinished] = useState(false);
  // particles active
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    // Stage 1: Trigger curtain opening after 400ms
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      setShowSparkles(true);
    }, 450);

    // Stage 2: Fade out sparkles
    const sparkleTimer = setTimeout(() => {
      setShowSparkles(false);
    }, 2400);

    // Stage 3: Fully complete transition and hand over controls
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 2600);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(sparkleTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleReplay = () => {
    setIsFinished(false);
    setIsOpen(false);
    setShowSparkles(false);

    setTimeout(() => {
      setIsOpen(true);
      setShowSparkles(true);
      setTimeout(() => setShowSparkles(false), 2400);
      setTimeout(() => setIsFinished(true), 2600);
    }, 380);
  };

  // 12 pleat cylinders per curtain for hyper-realistic tubular velvet draping
  const pleats = Array.from({ length: 12 });
  // Gold tassels along pelmet
  const pelmetTassels = Array.from({ length: 28 });
  // Sparkle stars
  const sparkles = [
    { left: "15%", top: "25%", delay: "0.2s", size: "w-3 h-3" },
    { left: "28%", top: "45%", delay: "0.5s", size: "w-2 h-2" },
    { left: "42%", top: "35%", delay: "0.1s", size: "w-4 h-4" },
    { left: "50%", top: "55%", delay: "0.4s", size: "w-3.5 h-3.5" },
    { left: "58%", top: "30%", delay: "0.2s", size: "w-3 h-3" },
    { left: "72%", top: "48%", delay: "0.6s", size: "w-2.5 h-2.5" },
    { left: "85%", top: "28%", delay: "0.3s", size: "w-4 h-4" },
    { left: "35%", top: "70%", delay: "0.7s", size: "w-2 h-2" },
    { left: "65%", top: "68%", delay: "0.5s", size: "w-3 h-3" },
  ];

  return (
    <>
      {/* 1. ULTRA-LUXURY REPLAY BUTTON */}
      <button
        onClick={handleReplay}
        title="Replay the 3D royal curtain reveal"
        className="group absolute top-5 right-5 z-20 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-gradient-to-r from-[#FFFDF8]/90 via-[#FDF6E2]/90 to-[#FFFDF8]/90 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-amber-950 shadow-[0_4px_20px_rgba(212,175,55,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-500 hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)] cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
        </span>
        <span className="font-serif tracking-widest text-amber-900 group-hover:text-amber-950">
          ✦ REPLAY 3D CURTAIN REVEAL
        </span>
      </button>

      {/* 2. GRAND 3D ROYAL THEATRE / PALACE CURTAIN STAGE */}
      <div
        className={`absolute inset-0 z-30 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
          isFinished ? "opacity-0" : "opacity-100"
        }`}
        style={{ perspective: "1600px", perspectiveOrigin: "50% 35%" }}
      >
        {/* SVG Damask Texture & Gold Foil Filters */}
        <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
          <defs>
            <pattern
              id="royalDamask"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 4 C24 16, 8 16, 8 28 C8 38, 20 44, 32 60 C44 44, 56 38, 56 28 C56 16, 40 16, 32 4 Z M32 18 C36 24, 44 26, 44 32 C44 38, 36 42, 32 48 C28 42, 20 38, 20 32 C20 26, 28 24, 32 18 Z"
                fill="none"
                stroke="rgba(255, 215, 0, 0.16)"
                strokeWidth="1.2"
              />
              <circle cx="32" cy="32" r="3" fill="rgba(255, 215, 0, 0.22)" />
              <path
                d="M4 32 Q16 28 32 32 Q48 36 60 32"
                fill="none"
                stroke="rgba(255, 215, 0, 0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
        </svg>

        {/* Floating Golden Dust / Sparkles during opening */}
        {showSparkles && (
          <div className="absolute inset-0 z-40 pointer-events-none">
            {sparkles.map((s, idx) => (
              <div
                key={idx}
                className={`absolute animate-bounce text-amber-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)] transition-opacity duration-1000 ${s.size}`}
                style={{
                  left: s.left,
                  top: s.top,
                  animationDelay: s.delay,
                  animationDuration: "1.8s",
                }}
              >
                ✦
              </div>
            ))}
          </div>
        )}

        {/* =========================================================================
            TOP ORNATE ARCHITECTURAL PELMET (VALANCE / TORAN)
            ========================================================================= */}
        <div
          className={`absolute top-0 left-0 right-0 z-40 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "-translate-y-full opacity-0 scale-y-95" : "translate-y-0 opacity-100 scale-y-100"
          }`}
        >
          {/* Main Swag Beam with Royal Red Velvet & Gold Zari Piping */}
          <div className="relative h-16 md:h-20 bg-gradient-to-r from-[#420406] via-[#730D11] via-[#911318] via-[#730D11] to-[#420406] shadow-[0_12px_35px_rgba(0,0,0,0.6)] border-b-2 border-amber-400">
            {/* Damask overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ backgroundImage: "url(#royalDamask)" }}
            />

            {/* Top Gilded Crown Trim */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-300 via-yellow-100 via-amber-300 to-amber-600 shadow-sm" />

            {/* Scalloped Swags Across the Beam */}
            <div className="absolute inset-0 flex justify-around items-stretch opacity-70">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-amber-900/40 relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.18) 0%, transparent 75%)",
                  }}
                >
                  {/* Swag drape curve */}
                  <div className="absolute -bottom-4 left-0 right-0 h-8 rounded-b-[100%] border-b border-amber-400/40" />
                </div>
              ))}
            </div>

            {/* Center Royal Medallion Emblem */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 rounded-full border-2 border-amber-300 bg-gradient-to-r from-[#3D0305] via-[#5C0A0D] to-[#3D0305] px-6 py-2 shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              <span className="text-amber-300 text-sm">✦</span>
              <div className="text-center">
                <span className="block text-[9px] tracking-[0.3em] font-serif uppercase text-amber-200/80 font-medium">
                  SAIHIRA HERITAGE
                </span>
                <span className="block text-xs md:text-sm font-serif font-bold tracking-[0.25em] text-amber-100 uppercase drop-shadow">
                  ASAL KHAKHRA & BHAKHRI
                </span>
              </div>
              <span className="text-amber-300 text-sm">✦</span>
            </div>

            {/* Gold Bullion Fringe & Pearl Droplets */}
            <div className="absolute -bottom-3.5 left-0 right-0 flex justify-between items-start px-2 overflow-hidden pointer-events-none">
              {pelmetTassels.map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Pearl */}
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-100 to-amber-400 shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
                  {/* Gold Bullion Tassel */}
                  <div className="w-1 h-3.5 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-600 rounded-b-sm shadow-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            LEFT CURTAIN PANEL (3D PLEATED HEAVY VELVET DRAPERY)
            ========================================================================= */}
        <div
          className="absolute top-0 left-0 bottom-0 w-1/2 origin-top-left transition-all duration-[1900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{
            transform: isOpen
              ? "rotateY(-75deg) scaleX(0.12) translateX(-130%) skewY(-3deg)"
              : "rotateY(0deg) scaleX(1) translateX(0%) skewY(0deg)",
            transformStyle: "preserve-3d",
            boxShadow: isOpen
              ? "-25px 0 60px rgba(0,0,0,0.7), inset -20px 0 30px rgba(0,0,0,0.6)"
              : "20px 0 45px rgba(0,0,0,0.5), inset -15px 0 25px rgba(0,0,0,0.4)",
          }}
        >
          {/* Deep Base Royal Crimson / Rich Burgundy Velvet */}
          <div className="absolute inset-0 bg-[#590B0E]" />

          {/* Hyper-Realistic 12-Pleat Cylinder Array with Shading */}
          <div className="absolute inset-0 flex">
            {pleats.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-full relative"
                style={{
                  background:
                    "linear-gradient(90deg, #3A0507 0%, #680E12 25%, #9E191E 52%, #B52228 62%, #7B1115 82%, #380406 100%)",
                }}
              >
                {/* Cylinder Highlight Sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/[0.12] to-transparent pointer-events-none" />
                {/* Fold Shadow Crease */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-black/40" />
                <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-black/50" />
              </div>
            ))}
          </div>

          {/* Subtle Woven Royal Damask / Brocade Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-color-dodge pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35) 1px, transparent 1px), radial-gradient(circle at 0% 0%, rgba(255,215,0,0.2) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Vertical Fabric Drape Shading (Darker towards bottom, lighter at eye level) */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/[0.12] via-transparent via-50% to-black/60 pointer-events-none" />

          {/* Right Edge (Meeting Center Seam) — Master Gold Zari Brocade Trim */}
          <div className="absolute top-0 right-0 bottom-0 w-6 bg-gradient-to-r from-amber-600 via-amber-200 via-yellow-100 to-amber-600 shadow-[0_0_15px_rgba(0,0,0,0.6)] border-l border-amber-700/80 flex flex-col justify-around items-center py-6">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] text-amber-950 font-serif leading-none select-none drop-shadow-sm">
                  ❖
                </span>
                <span className="text-[7px] text-amber-900 leading-none">✦</span>
              </div>
            ))}
          </div>

          {/* Bottom Hem Ornate Heavy Gold Bullion Border */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-700 via-amber-400 via-amber-200 to-amber-600 border-t-2 border-amber-100 shadow-[0_-5px_15px_rgba(0,0,0,0.3)] flex items-end justify-around pb-1.5">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-100 shadow-sm" />
                <div className="h-5 w-2 rounded-b-md bg-gradient-to-b from-amber-200 via-amber-400 to-amber-800 shadow-md" />
              </div>
            ))}
          </div>

          {/* Gold Braided Rope Tieback & Hanging Royal Tassel (Left) */}
          <div
            className={`absolute top-[48%] -right-3 z-30 transition-all duration-1000 ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            {/* Braided Cord Cinch */}
            <div className="w-10 h-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-200 to-amber-600 shadow-lg border border-amber-700" />
            {/* Hanging Tassel */}
            <div className="relative left-2 flex flex-col items-center animate-[bounce_3s_ease-in-out_infinite]">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-200 shadow-sm border border-amber-600" />
              <div className="w-4 h-9 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-800 rounded-b-lg shadow-xl border-t border-amber-200" />
              {/* Tassel fringe ends */}
              <div className="flex gap-0.5 mt-[-2px]">
                <div className="w-1 h-3 bg-amber-600" />
                <div className="w-1 h-3.5 bg-amber-400" />
                <div className="w-1 h-3 bg-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT CURTAIN PANEL (3D PLEATED HEAVY VELVET DRAPERY)
            ========================================================================= */}
        <div
          className="absolute top-0 right-0 bottom-0 w-1/2 origin-top-right transition-all duration-[1900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{
            transform: isOpen
              ? "rotateY(75deg) scaleX(0.12) translateX(130%) skewY(3deg)"
              : "rotateY(0deg) scaleX(1) translateX(0%) skewY(0deg)",
            transformStyle: "preserve-3d",
            boxShadow: isOpen
              ? "25px 0 60px rgba(0,0,0,0.7), inset 20px 0 30px rgba(0,0,0,0.6)"
              : "-20px 0 45px rgba(0,0,0,0.5), inset 15px 0 25px rgba(0,0,0,0.4)",
          }}
        >
          {/* Deep Base Royal Crimson / Rich Burgundy Velvet */}
          <div className="absolute inset-0 bg-[#590B0E]" />

          {/* Hyper-Realistic 12-Pleat Cylinder Array with Shading */}
          <div className="absolute inset-0 flex">
            {pleats.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-full relative"
                style={{
                  background:
                    "linear-gradient(90deg, #380406 0%, #7B1115 18%, #B52228 38%, #9E191E 48%, #680E12 75%, #3A0507 100%)",
                }}
              >
                {/* Cylinder Highlight Sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/[0.12] to-transparent pointer-events-none" />
                {/* Fold Shadow Crease */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-black/50" />
                <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-black/40" />
              </div>
            ))}
          </div>

          {/* Subtle Woven Royal Damask / Brocade Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-color-dodge pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35) 1px, transparent 1px), radial-gradient(circle at 0% 0%, rgba(255,215,0,0.2) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Vertical Fabric Drape Shading */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/[0.12] via-transparent via-50% to-black/60 pointer-events-none" />

          {/* Left Edge (Meeting Center Seam) — Master Gold Zari Brocade Trim */}
          <div className="absolute top-0 left-0 bottom-0 w-6 bg-gradient-to-r from-amber-600 via-yellow-100 via-amber-200 to-amber-600 shadow-[0_0_15px_rgba(0,0,0,0.6)] border-r border-amber-700/80 flex flex-col justify-around items-center py-6">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] text-amber-950 font-serif leading-none select-none drop-shadow-sm">
                  ❖
                </span>
                <span className="text-[7px] text-amber-900 leading-none">✦</span>
              </div>
            ))}
          </div>

          {/* Bottom Hem Ornate Heavy Gold Bullion Border */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-700 via-amber-400 via-amber-200 to-amber-600 border-t-2 border-amber-100 shadow-[0_-5px_15px_rgba(0,0,0,0.3)] flex items-end justify-around pb-1.5">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-100 shadow-sm" />
                <div className="h-5 w-2 rounded-b-md bg-gradient-to-b from-amber-200 via-amber-400 to-amber-800 shadow-md" />
              </div>
            ))}
          </div>

          {/* Gold Braided Rope Tieback & Hanging Royal Tassel (Right) */}
          <div
            className={`absolute top-[48%] -left-3 z-30 transition-all duration-1000 ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            {/* Braided Cord Cinch */}
            <div className="w-10 h-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-200 to-amber-500 shadow-lg border border-amber-700" />
            {/* Hanging Tassel */}
            <div className="relative right-2 flex flex-col items-center animate-[bounce_3s_ease-in-out_infinite_0.4s]">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-200 shadow-sm border border-amber-600" />
              <div className="w-4 h-9 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-800 rounded-b-lg shadow-xl border-t border-amber-200" />
              {/* Tassel fringe ends */}
              <div className="flex gap-0.5 mt-[-2px]">
                <div className="w-1 h-3 bg-amber-600" />
                <div className="w-1 h-3.5 bg-amber-400" />
                <div className="w-1 h-3 bg-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}