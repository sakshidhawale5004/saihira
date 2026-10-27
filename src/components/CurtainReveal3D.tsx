import { useEffect, useState, useRef, type MouseEvent } from "react";

interface CurtainReveal3DProps {
  onComplete?: () => void;
}

export function CurtainReveal3D({ onComplete }: CurtainReveal3DProps) {
  // isOpen: true when curtains are pulled back into the tied ribbon position
  const [isOpen, setIsOpen] = useState(false);
  // isAnimating: true during transition
  const [isAnimating, setIsAnimating] = useState(true);
  const [showSparkles, setShowSparkles] = useState(false);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stage 1: Trigger smooth grand reveal after 350ms
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      setShowSparkles(true);
    }, 350);

    // Stage 2: Stop sparkles after reveal finishes
    const sparkleTimer = setTimeout(() => {
      setShowSparkles(false);
      setIsAnimating(false);
      onComplete?.();
    }, 2400);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(sparkleTimer);
    };
  }, [onComplete]);

  const handleReplay = () => {
    setIsAnimating(true);
    setIsOpen(false);
    setShowSparkles(false);

    setTimeout(() => {
      setIsOpen(true);
      setShowSparkles(true);
      setTimeout(() => {
        setShowSparkles(false);
        setIsAnimating(false);
      }, 2200);
    }, 400);
  };

  // Subtle 3D parallax mouse tilt for physical theater depth
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseParallax({ x: x * 10, y: y * 6 });
  };

  const sparkles = [
    { left: "18%", top: "30%", delay: "0.1s" },
    { left: "32%", top: "45%", delay: "0.4s" },
    { left: "50%", top: "35%", delay: "0.2s" },
    { left: "68%", top: "48%", delay: "0.5s" },
    { left: "82%", top: "28%", delay: "0.3s" },
    { left: "45%", top: "65%", delay: "0.6s" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* 1. FLOATING REPLAY PILL (Pointer-events enabled on button) */}
      <div className="absolute top-4 right-4 z-50 pointer-events-auto">
        <button
          onClick={handleReplay}
          title="Replay the 3D royal curtain reveal"
          className="group inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/60 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-amber-200 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:bg-black/80 hover:text-amber-100 cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span className="font-serif tracking-widest">✦ REPLAY 3D REVEAL</span>
        </button>
      </div>

      {/* Floating Golden Dust Sparkles */}
      {showSparkles && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          {sparkles.map((s, idx) => (
            <div
              key={idx}
              className="absolute animate-bounce text-amber-300 drop-shadow-[0_0_12px_rgba(255,215,0,0.9)] text-lg"
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
          TOP ARCHED SCALLOPED SWAG PELMET (VALANCE)
          ========================================================================= */}
      <div
        className="absolute top-0 left-0 right-0 z-30 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseParallax.x * -0.3}px, ${mouseParallax.y * -0.3}px, 20px)`,
        }}
      >
        <svg
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-18 md:h-22 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
        >
          <defs>
            {/* Rich Ruby-Rose to Crimson Velvet Gradient */}
            <linearGradient id="valanceVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A050A" />
              <stop offset="40%" stopColor="#87131D" />
              <stop offset="70%" stopColor="#A81D2A" />
              <stop offset="100%" stopColor="#5E090F" />
            </linearGradient>

            {/* Antique Metallic Gold Trim Gradient */}
            <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B38728" />
              <stop offset="25%" stopColor="#FBF5B7" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="75%" stopColor="#FBF5B7" />
              <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>

            {/* Drape Shadow */}
            <radialGradient id="swagShadow" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="rgba(255,215,0,0.18)" />
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.45)" />
            </radialGradient>
          </defs>

          {/* Top Beam Strip */}
          <rect x="0" y="0" width="1200" height="18" fill="url(#valanceVelvet)" />
          <rect x="0" y="16" width="1200" height="3" fill="url(#goldTrim)" />

          {/* Scalloped Swags Across the Stage */}
          {/* Swag 1 */}
          <path d="M 0,18 Q 120,68 240,18 Z" fill="url(#valanceVelvet)" stroke="url(#goldTrim)" strokeWidth="2" />
          <path d="M 0,18 Q 120,68 240,18 Z" fill="url(#swagShadow)" />

          {/* Swag 2 */}
          <path d="M 240,18 Q 360,68 480,18 Z" fill="url(#valanceVelvet)" stroke="url(#goldTrim)" strokeWidth="2" />
          <path d="M 240,18 Q 360,68 480,18 Z" fill="url(#swagShadow)" />

          {/* Center Grand Swag 3 */}
          <path d="M 480,18 Q 600,75 720,18 Z" fill="url(#valanceVelvet)" stroke="url(#goldTrim)" strokeWidth="2.5" />
          <path d="M 480,18 Q 600,75 720,18 Z" fill="url(#swagShadow)" />

          {/* Swag 4 */}
          <path d="M 720,18 Q 840,68 960,18 Z" fill="url(#valanceVelvet)" stroke="url(#goldTrim)" strokeWidth="2" />
          <path d="M 720,18 Q 840,68 960,18 Z" fill="url(#swagShadow)" />

          {/* Swag 5 */}
          <path d="M 960,18 Q 1080,68 1200,18 Z" fill="url(#valanceVelvet)" stroke="url(#goldTrim)" strokeWidth="2" />
          <path d="M 960,18 Q 1080,68 1200,18 Z" fill="url(#swagShadow)" />

          {/* Gold Bullion Fringe Droplets at Scallop Intersections */}
          <circle cx="240" cy="22" r="4" fill="url(#goldTrim)" />
          <circle cx="480" cy="22" r="5" fill="url(#goldTrim)" />
          <circle cx="720" cy="22" r="5" fill="url(#goldTrim)" />
          <circle cx="960" cy="22" r="4" fill="url(#goldTrim)" />
        </svg>

        {/* Center Royal Medallion */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-amber-300 bg-gradient-to-r from-[#4A050A] via-[#750E16] to-[#4A050A] px-4 py-0.5 shadow-[0_0_20px_rgba(212,175,55,0.6)]">
          <span className="text-[10px] text-amber-300">✦</span>
          <span className="text-[10px] sm:text-xs font-serif font-bold tracking-[0.25em] text-amber-100 uppercase drop-shadow">
            SAIHIRA · ASAL GUJARAT
          </span>
          <span className="text-[10px] text-amber-300">✦</span>
        </div>
      </div>

      {/* =========================================================================
          LEFT CURTAIN: COLLECTED FOLDS WITH GOLD SATIN RIBBON (TIE-BACK)
          Reference: Magnific collected-folds ribbon drapery
          ========================================================================= */}
      <div
        className="absolute top-0 left-0 bottom-0 z-20 transition-all duration-[1800ms] ease-[cubic-bezier(0.2,1,0.3,1)] will-change-transform"
        style={{
          width: isOpen ? "22%" : "52%",
          maxWidth: isOpen ? "320px" : "100%",
          minWidth: isOpen ? "90px" : "50%",
          transform: isOpen
            ? `rotateY(-18deg) translate3d(${mouseParallax.x * 0.4}px, ${mouseParallax.y * 0.2}px, 30px)`
            : "rotateY(0deg) translate3d(0, 0, 0)",
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          boxShadow: isOpen
            ? "15px 0 35px rgba(0,0,0,0.6), inset -10px 0 25px rgba(0,0,0,0.5)"
            : "25px 0 50px rgba(0,0,0,0.7)",
        }}
      >
        <svg
          viewBox="0 0 300 700"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[10px_0_25px_rgba(0,0,0,0.6)]"
        >
          <defs>
            {/* Deep Ruby & Crimson Velvet Linear Gradient for Left Folds */}
            <linearGradient id="leftVelvet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#350306" />
              <stop offset="20%" stopColor="#690C12" />
              <stop offset="42%" stopColor="#A31823" />
              <stop offset="55%" stopColor="#BA2430" />
              <stop offset="78%" stopColor="#750F16" />
              <stop offset="100%" stopColor="#3E0408" />
            </linearGradient>

            {/* Tubular Pleat Shading Pattern */}
            <linearGradient id="pleatSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
              <stop offset="50%" stopColor="rgba(255,220,180,0.18)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
            </linearGradient>

            {/* Gold Ribbon Gradient */}
            <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#AA771C" />
              <stop offset="30%" stopColor="#FEE180" />
              <stop offset="60%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#8C5C0F" />
            </linearGradient>
          </defs>

          {/* Background Curtain Base Panel */}
          <rect x="0" y="0" width="300" height="700" fill="url(#leftVelvet)" />

          {/* Realistic Collected Folds Swooping to Ribbon Cinch at (X: 180, Y: 330) */}
          {/* Top Cascade Folds */}
          <path d="M 0,0 C 80,120 160,250 180,330 L 120,330 C 90,240 40,110 0,0 Z" fill="url(#leftVelvet)" opacity="0.95" />
          <path d="M 0,0 C 80,120 160,250 180,330 L 120,330 C 90,240 40,110 0,0 Z" fill="url(#pleatSheen)" />

          <path d="M 50,0 C 120,140 180,270 200,330 L 160,330 C 130,260 80,130 50,0 Z" fill="url(#leftVelvet)" />
          <path d="M 50,0 C 120,140 180,270 200,330 L 160,330 C 130,260 80,130 50,0 Z" fill="url(#pleatSheen)" />

          <path d="M 120,0 C 180,160 220,280 230,330 L 200,330 C 180,270 140,150 120,0 Z" fill="url(#leftVelvet)" />

          {/* Lower Flared Folds Cascading Down from Ribbon Cinch to Hem */}
          <path d="M 140,330 C 120,440 60,580 0,700 L 80,700 C 130,590 170,450 170,330 Z" fill="url(#leftVelvet)" />
          <path d="M 140,330 C 120,440 60,580 0,700 L 80,700 C 130,590 170,450 170,330 Z" fill="url(#pleatSheen)" />

          <path d="M 170,330 C 160,460 130,600 90,700 L 180,700 C 200,600 210,470 200,330 Z" fill="url(#leftVelvet)" />
          <path d="M 170,330 C 160,460 130,600 90,700 L 180,700 C 200,600 210,470 200,330 Z" fill="url(#pleatSheen)" />

          <path d="M 200,330 C 210,470 220,600 220,700 L 280,700 C 260,590 240,460 230,330 Z" fill="url(#leftVelvet)" />

          {/* Inner Curved Opening Contour with Gold Zari Border */}
          <path
            d="M 300,0 C 280,150 250,280 230,330 C 250,450 270,580 300,700"
            fill="none"
            stroke="url(#goldTrim)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* =================================================================
              GOLD SATIN RIBBON SASH WITH BOW & TAILS (CINCH WAIST)
              Reference: Magnific collected-folds ribbon
              ================================================================= */}
          {/* Ribbon Wrap Band Around the Collected Folds */}
          <path
            d="M 120,315 Q 180,325 240,315 L 245,345 Q 180,355 115,345 Z"
            fill="url(#goldRibbon)"
            stroke="#6B4608"
            strokeWidth="1.5"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.6))"
          />

          {/* Ribbon Bow Left Loop */}
          <path
            d="M 180,330 C 150,305 135,320 150,340 C 165,360 175,340 180,330 Z"
            fill="url(#goldRibbon)"
            stroke="#6B4608"
            strokeWidth="1.5"
          />

          {/* Ribbon Bow Right Loop */}
          <path
            d="M 180,330 C 210,305 225,320 210,340 C 195,360 185,340 180,330 Z"
            fill="url(#goldRibbon)"
            stroke="#6B4608"
            strokeWidth="1.5"
          />

          {/* Ribbon Bow Center Knot */}
          <ellipse cx="180" cy="330" rx="9" ry="7" fill="url(#goldRibbon)" stroke="#6B4608" strokeWidth="1.5" />

          {/* Dangling Ribbon Tails with Swallowtail Cuts */}
          <path
            d="M 176,335 Q 165,385 160,420 L 170,412 L 180,420 Q 182,380 180,335 Z"
            fill="url(#goldRibbon)"
            stroke="#6B4608"
            strokeWidth="1"
            filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"
          />
          <path
            d="M 182,335 Q 195,390 205,430 L 195,422 L 188,430 Q 183,385 182,335 Z"
            fill="url(#goldRibbon)"
            stroke="#6B4608"
            strokeWidth="1"
            filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"
          />

          {/* Bottom Hem Heavy Gold Bullion Fringe */}
          <rect x="0" y="688" width="300" height="12" fill="url(#goldTrim)" />
        </svg>
      </div>

      {/* =========================================================================
          RIGHT CURTAIN: COLLECTED FOLDS WITH GOLD SATIN RIBBON (TIE-BACK)
          Reference: Magnific collected-folds ribbon drapery
          ========================================================================= */}
      <div
        className="absolute top-0 right-0 bottom-0 z-20 transition-all duration-[1800ms] ease-[cubic-bezier(0.2,1,0.3,1)] will-change-transform"
        style={{
          width: isOpen ? "22%" : "52%",
          maxWidth: isOpen ? "320px" : "100%",
          minWidth: isOpen ? "90px" : "50%",
          transform: isOpen
            ? `rotateY(18deg) translate3d(${mouseParallax.x * 0.4}px, ${mouseParallax.y * 0.2}px, 30px)`
            : "rotateY(0deg) translate3d(0, 0, 0)",
          transformOrigin: "right center",
          transformStyle: "preserve-3d",
          boxShadow: isOpen
            ? "-15px 0 35px rgba(0,0,0,0.6), inset 10px 0 25px rgba(0,0,0,0.5)"
            : "-25px 0 50px rgba(0,0,0,0.7)",
        }}
      >
        <svg
          viewBox="0 0 300 700"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[-10px_0_25px_rgba(0,0,0,0.6)]"
        >
          {/* Mirrored Group */}
          <g transform="translate(300, 0) scale(-1, 1)">
            {/* Background Curtain Base Panel */}
            <rect x="0" y="0" width="300" height="700" fill="url(#leftVelvet)" />

            {/* Top Cascade Folds */}
            <path d="M 0,0 C 80,120 160,250 180,330 L 120,330 C 90,240 40,110 0,0 Z" fill="url(#leftVelvet)" opacity="0.95" />
            <path d="M 0,0 C 80,120 160,250 180,330 L 120,330 C 90,240 40,110 0,0 Z" fill="url(#pleatSheen)" />

            <path d="M 50,0 C 120,140 180,270 200,330 L 160,330 C 130,260 80,130 50,0 Z" fill="url(#leftVelvet)" />
            <path d="M 50,0 C 120,140 180,270 200,330 L 160,330 C 130,260 80,130 50,0 Z" fill="url(#pleatSheen)" />

            <path d="M 120,0 C 180,160 220,280 230,330 L 200,330 C 180,270 140,150 120,0 Z" fill="url(#leftVelvet)" />

            {/* Lower Flared Folds Cascading Down from Ribbon Cinch */}
            <path d="M 140,330 C 120,440 60,580 0,700 L 80,700 C 130,590 170,450 170,330 Z" fill="url(#leftVelvet)" />
            <path d="M 140,330 C 120,440 60,580 0,700 L 80,700 C 130,590 170,450 170,330 Z" fill="url(#pleatSheen)" />

            <path d="M 170,330 C 160,460 130,600 90,700 L 180,700 C 200,600 210,470 200,330 Z" fill="url(#leftVelvet)" />
            <path d="M 170,330 C 160,460 130,600 90,700 L 180,700 C 200,600 210,470 200,330 Z" fill="url(#pleatSheen)" />

            <path d="M 200,330 C 210,470 220,600 220,700 L 280,700 C 260,590 240,460 230,330 Z" fill="url(#leftVelvet)" />

            {/* Inner Curved Opening Contour with Gold Zari Border */}
            <path
              d="M 300,0 C 280,150 250,280 230,330 C 250,450 270,580 300,700"
              fill="none"
              stroke="url(#goldTrim)"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Gold Ribbon Sash Wrap Band */}
            <path
              d="M 120,315 Q 180,325 240,315 L 245,345 Q 180,355 115,345 Z"
              fill="url(#goldRibbon)"
              stroke="#6B4608"
              strokeWidth="1.5"
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.6))"
            />

            {/* Ribbon Bow Loops */}
            <path
              d="M 180,330 C 150,305 135,320 150,340 C 165,360 175,340 180,330 Z"
              fill="url(#goldRibbon)"
              stroke="#6B4608"
              strokeWidth="1.5"
            />
            <path
              d="M 180,330 C 210,305 225,320 210,340 C 195,360 185,340 180,330 Z"
              fill="url(#goldRibbon)"
              stroke="#6B4608"
              strokeWidth="1.5"
            />

            {/* Ribbon Bow Center Knot */}
            <ellipse cx="180" cy="330" rx="9" ry="7" fill="url(#goldRibbon)" stroke="#6B4608" strokeWidth="1.5" />

            {/* Dangling Ribbon Tails */}
            <path
              d="M 176,335 Q 165,385 160,420 L 170,412 L 180,420 Q 182,380 180,335 Z"
              fill="url(#goldRibbon)"
              stroke="#6B4608"
              strokeWidth="1"
              filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"
            />
            <path
              d="M 182,335 Q 195,390 205,430 L 195,422 L 188,430 Q 183,385 182,335 Z"
              fill="url(#goldRibbon)"
              stroke="#6B4608"
              strokeWidth="1"
              filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"
            />

            {/* Bottom Hem Heavy Gold Bullion Fringe */}
            <rect x="0" y="688" width="300" height="12" fill="url(#goldTrim)" />
          </g>
        </svg>
      </div>
    </div>
  );
}