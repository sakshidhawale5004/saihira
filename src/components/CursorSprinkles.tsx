import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  shape: "star" | "diamond" | "circle";
}

const GOLD_PALETTE = [
  "#FFD700", // Pure gold
  "#FFE066", // Bright champagne
  "#FFC107", // Amber gold
  "#FFFFFF", // Sparkle white
  "#F39C12", // Deep warm gold
  "#FFF5CC", // Soft cream shimmer
];

export function CursorSprinkles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high DPI displays
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // Gentle downward gravity
        p.vx *= 0.98; // Drag
        p.rotation += p.rotationSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);

        // Soft golden glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = p.color;

        if (p.shape === "star") {
          // 4-point star (✦)
          ctx.beginPath();
          const s = p.size;
          ctx.moveTo(0, -s * 1.6);
          ctx.quadraticCurveTo(0, 0, s * 1.6, 0);
          ctx.quadraticCurveTo(0, 0, 0, s * 1.6);
          ctx.quadraticCurveTo(0, 0, -s * 1.6, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s * 1.6);
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === "diamond") {
          // Diamond sparkle (✧)
          ctx.beginPath();
          const s = p.size;
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.7, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.7, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          // Soft glowing golden sprinkle circle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        animFrameRef.current = null;
      }
    };

    const startLoopIfNeeded = () => {
      if (animFrameRef.current === null) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    const spawnParticles = (x: number, y: number, count: number, speedMultiplier = 1) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.6 + Math.random() * 2) * speedMultiplier;
        const shapes: ("star" | "diamond" | "circle")[] = ["star", "diamond", "circle"];

        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4, // Slight upward initial pop
          size: 2 + Math.random() * 3.5,
          color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
          alpha: 0.95 + Math.random() * 0.05,
          life: 1,
          decay: 0.016 + Math.random() * 0.018, // Lasts ~500-800ms
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
      startLoopIfNeeded();
    };

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (!lastPosRef.current) {
        lastPosRef.current = { x, y };
        spawnParticles(x, y, 2);
        return;
      }

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      // Spawn sprinkles based on distance moved (prevents excessive particle creation)
      if (dist > 6) {
        const count = Math.min(4, Math.max(1, Math.floor(dist / 14)));
        spawnParticles(x, y, count, 0.85);
        lastPosRef.current = { x, y };
      }
    };

    // Celebratory mini sparkle burst on click
    const handlePointerDown = (e: PointerEvent) => {
      spawnParticles(e.clientX, e.clientY, 12, 1.8);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[999999] select-none"
      aria-hidden="true"
    />
  );
}