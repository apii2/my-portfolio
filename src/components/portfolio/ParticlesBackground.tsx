import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/**
 * Global animated particles background powered by tsparticles (particles.js successor).
 * Renders behind every section to provide a unified ambient effect.
 */
export const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 320,
            links: { opacity: 1, color: "hsl(var(--primary))" },
          },
        },
      },
      particles: {
        number: { value: 80, density: { enable: true, width: 1200, height: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 1.2 },
        links: {
          enable: true,
          distance: 160,
          color: "#ffffff",
          opacity: 0.25,
          width: 1.2,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="global-particles"
      className="absolute inset-0"
      options={options}
    />
  );
};
