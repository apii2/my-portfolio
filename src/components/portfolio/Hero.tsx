import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse", parallax: { enable: true, force: 60, smooth: 12 } },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
        },
      },
      particles: {
        number: { value: 80, density: { enable: true, width: 1920, height: 1080 } },
        color: { value: "hsl(var(--primary))" },
        opacity: { value: { min: 0.2, max: 0.7 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 140,
          color: "hsl(var(--primary))",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: "out" },
        },
      },
    }),
    []
  );

  useEffect(() => {
    let raf = 0;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
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
        headingRef.current.style.transform = `translate3d(${x * -30}px, ${y * -30}px, 0)`;
      }
      if (ctaRef.current) {
        ctaRef.current.style.transform = `translate3d(${x * -55}px, ${y * -55}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles parallax layer */}
      {engineReady && (
        <Particles
          id="hero-particles"
          className="absolute inset-0"
          options={particleOptions}
        />
      )}

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
            className="group relative inline-flex items-center gap-3 border border-primary text-primary px-8 py-3 text-sm tracking-wide uppercase font-light hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105 duration-300"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:animate-echo"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:animate-echo"
              style={{ animationDelay: "1.2s" }}
            />
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
