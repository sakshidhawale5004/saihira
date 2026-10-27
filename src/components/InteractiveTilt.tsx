import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface InteractiveTiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export function InteractiveTilt({
  children,
  className = "",
  maxTilt = 18,
  scale = 1.04,
  glare = true,
}: InteractiveTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transformStyle: "preserve-3d",
    boxShadow: "0 15px 35px -10px rgba(60, 10, 15, 0.15)",
    transition: "transform 0.4s ease-out, box-shadow 0.4s ease-out",
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Noticeable, snappy 3D tilt
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    // Physical shadow displacement: shifts in opposite direction of tilt
    const shadowX = (-rotateY * 1.6).toFixed(1);
    const shadowY = (rotateX * 1.6 + 20).toFixed(1);

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transformStyle: "preserve-3d",
      boxShadow: `${shadowX}px ${shadowY}px 40px -8px rgba(60, 10, 15, 0.28)`,
      transition: "transform 0.08s ease-out, box-shadow 0.08s ease-out",
    });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.25,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transformStyle: "preserve-3d",
      boxShadow: "0 15px 35px -10px rgba(60, 10, 15, 0.15)",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform ${className}`}
    >
      <div style={{ transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>

      {/* Dynamic 3D Glare Specular Lighting Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 235, 180, 0.5), transparent 70%)`,
            opacity: glarePos.opacity,
          }}
        />
      )}
    </div>
  );
}