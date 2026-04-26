import { useEffect, useRef } from "react";

/**
 * Animated starfield: small twinkling dots + subtle connected constellation lines
 * near the cursor / center. Pure canvas, no deps.
 */
export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    type Star = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      tw: number; // twinkle phase
      hue: "white" | "primary" | "accent";
    };

    let stars: Star[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density based on area
      const target = Math.floor((width * height) / 9000);
      stars = Array.from({ length: target }, () => makeStar());
    };

    const makeStar = (): Star => {
      const roll = Math.random();
      const hue: Star["hue"] =
        roll > 0.97 ? "primary" : roll > 0.93 ? "accent" : "white";
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        tw: Math.random() * Math.PI * 2,
        hue,
      };
    };

    const colorFor = (s: Star, alpha: number) => {
      if (s.hue === "primary") return `hsla(6, 93%, 71%, ${alpha})`;
      if (s.hue === "accent") return `hsla(210, 80%, 70%, ${alpha})`;
      return `hsla(0, 0%, 100%, ${alpha})`;
    };

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const a = 0.45 + Math.sin(t * 1.4 + s.tw) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = colorFor(s, Math.max(0.1, a));
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Constellation lines for nearby stars (subtle)
      const max = 110;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < max * max) {
            const alpha = (1 - Math.sqrt(d2) / max) * 0.12;
            ctx.strokeStyle = `hsla(210, 80%, 70%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};