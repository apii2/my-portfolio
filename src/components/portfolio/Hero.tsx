import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Starfield } from "./Starfield";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      target.current = { x, y };
    };

    const handleLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    const tick = () => {
      // ease towards target for smooth motion
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      const { x, y } = current.current;

      if (headingRef.current) {
        headingRef.current.style.transform = `translate3d(${x * -20}px, ${y * -20}px, 0)`;
      }
      if (ctaRef.current) {
        ctaRef.current.style.transform = `translate3d(${x * -35}px, ${y * -35}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Starfield />
      <div
        ref={glowRef}
        className="absolute inset-0 bg-hero-glow pointer-events-none will-change-transform"
      />

      <div className="container relative text-center">
        <h1
          ref={headingRef}
          className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] animate-fade-in-up will-change-transform"
        >
          Hello, I'm <span className="text-primary">Apeksha</span>.
          <br />
          I'm a frontend developer.
        </h1>

        <div
          ref={ctaRef}
          className="mt-12 flex justify-center animate-fade-in-up will-change-transform"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="#work"
            className="group relative overflow-hidden inline-flex items-center gap-3 border border-primary text-primary px-8 py-3 text-sm tracking-wide uppercase font-light transition-all duration-300 hover:-translate-y-1 hover:scale-[1.06] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_10px_30px_-10px_hsl(var(--primary))] hover:border-primary"
          >
            <span className="pointer-events-none absolute -inset-x-10 -top-10 h-20 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-40 transition-all duration-700" />
            View my work
            <ArrowRight
              size={16}
              className="relative transition-transform group-hover:translate-x-1 group-hover:[filter:drop-shadow(0_0_6px_hsl(var(--primary)))]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
