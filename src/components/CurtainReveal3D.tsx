import { useEffect, useState } from "react";

interface CurtainReveal3DProps {
  onComplete?: () => void;
}

export function CurtainReveal3D({ onComplete }: CurtainReveal3DProps) {
  // isOpen controls whether the curtains have parted
  const [isOpen, setIsOpen] = useState(false);
  // isFinished tracks when the transition animation is complete
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Automatically trigger the grand curtain opening after 400ms
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 450);

    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleReplay = () => {
    setIsFinished(false);
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsFinished(true);
      }, 1800);
    }, 350);
  };

  return (
    <>
      {/* Interactive Replay Pill on Hero */}
      <button
        onClick={handleReplay}
        title="Replay the 3D royal curtain reveal"
        className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-amber-600/30 bg-amber-50/80 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-amber-900 shadow-sm backdrop-blur transition-all duration-300 hover:bg-amber-100 hover:scale-105 hover:shadow-md cursor-pointer"
      >
        <span className="text-amber-600">✦</span>
        <span>Replay 3D Reveal</span>
      </button>

      {/* 3D Curtain Stage Overlay */}
      <div
        className={`absolute inset-0 z-30 overflow-hidden pointer-events-none perspective-[1400px] transition-opacity duration-700 ${
          isFinished ? "opacity-0" : "opacity-100"
        }`}
        style={{ perspective: "1400px" }}
      >
        {/* Top Ornate Pelmet / Valance Drapery */}
        <div
          className={`absolute top-0 left-0 right-0 z-30 h-14 md:h-16 bg-gradient-to-r from-[#620B0D] via-[#851216] to-[#620B0D] border-b-2 border-amber-400 shadow-xl flex items-center justify-center transition-transform duration-1000 ease-out ${
            isOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {/* Gold scalloped fringe trim */}
          <div className="absolute -bottom-2.5 left-0 right-0 flex justify-around overflow-hidden">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-8 rounded-b-full bg-gradient-to-b from-amber-400 to-amber-600 shadow-sm"
              />
            ))}
          </div>

          {/* Central Royal Medallion */}
          <div className="relative z-10 flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-900/90 px-4 py-1 text-xs font-bold tracking-[0.2em] text-amber-200 uppercase shadow-lg">
            <span>✦</span>
            <span>SHM ASAL · GRAND REVEAL</span>
            <span>✦</span>
          </div>
        </div>

        {/* LEFT CURTAIN PANEL */}
        <div
          className="absolute top-0 left-0 bottom-0 w-1/2 origin-top-left transition-all duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{
            transform: isOpen
              ? "rotateY(-65deg) scaleX(0.08) translateX(-150%) skewY(-4deg)"
              : "rotateY(0deg) scaleX(1) translateX(0%) skewY(0deg)",
            transformStyle: "preserve-3d",
            boxShadow: isOpen
              ? "-20px 0 50px rgba(0,0,0,0.5)"
              : "15px 0 35px rgba(0,0,0,0.45)",
          }}
        >
          {/* Royal Velvet/Silk Pleated Texture */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background:
                "repeating-linear-gradient(90deg, #580C0E 0px, #821417 18px, #9C1B1F 36px, #751114 54px, #4D090B 72px)",
            }}
          />

          {/* Fabric Lighting Sheen & Depth Gradient */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,215,0,0.18) 0%, transparent 25%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)",
            }}
          />

          {/* 3D Wave Shadow Overlays simulating realistic folds */}
          <div
            className="absolute inset-0 h-full w-full opacity-40 mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 0%, transparent 0, transparent 40px, rgba(0,0,0,0.35) 40px, rgba(0,0,0,0.35) 80px)",
            }}
          />

          {/* Right Edge (Meeting Seam) Gold Zari Trim */}
          <div className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 shadow-lg border-l border-amber-600 flex flex-col justify-around py-4">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-[10px] text-amber-900 leading-none text-center select-none">
                ✦
              </span>
            ))}
          </div>

          {/* Bottom Hem Ornate Gold Border & Fringe */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-amber-600 via-amber-400 to-amber-500 border-t-2 border-amber-200 shadow-md flex items-end justify-around pb-1">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-2 rounded-b-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* RIGHT CURTAIN PANEL */}
        <div
          className="absolute top-0 right-0 bottom-0 w-1/2 origin-top-right transition-all duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{
            transform: isOpen
              ? "rotateY(65deg) scaleX(0.08) translateX(150%) skewY(4deg)"
              : "rotateY(0deg) scaleX(1) translateX(0%) skewY(0deg)",
            transformStyle: "preserve-3d",
            boxShadow: isOpen
              ? "20px 0 50px rgba(0,0,0,0.5)"
              : "-15px 0 35px rgba(0,0,0,0.45)",
          }}
        >
          {/* Royal Velvet/Silk Pleated Texture */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background:
                "repeating-linear-gradient(90deg, #4D090B 0px, #751114 18px, #9C1B1F 36px, #821417 54px, #580C0E 72px)",
            }}
          />

          {/* Fabric Lighting Sheen & Depth Gradient */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,215,0,0.18) 0%, transparent 25%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)",
            }}
          />

          {/* 3D Wave Shadow Overlays */}
          <div
            className="absolute inset-0 h-full w-full opacity-40 mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 0%, transparent 0, transparent 40px, rgba(0,0,0,0.35) 40px, rgba(0,0,0,0.35) 80px)",
            }}
          />

          {/* Left Edge (Meeting Seam) Gold Zari Trim */}
          <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-amber-500 via-amber-200 to-amber-400 shadow-lg border-r border-amber-600 flex flex-col justify-around py-4">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="text-[10px] text-amber-900 leading-none text-center select-none">
                ✦
              </span>
            ))}
          </div>

          {/* Bottom Hem Ornate Gold Border & Fringe */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-amber-600 via-amber-400 to-amber-500 border-t-2 border-amber-200 shadow-md flex items-end justify-around pb-1">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-2 rounded-b-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
