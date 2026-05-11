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
          onHover: { enable: true, mode: ["grab", "bubble", "connect"] },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 360,
            links: { opacity: 1, color: "#fa6b63" },
          },
          bubble: {
            distance: 220,
            size: 4,
            duration: 2,
            opacity: 1,
          },
          connect: {
            distance: 180,
            radius: 220,
            links: { opacity: 0.5 },
          },
        },
      },
      particles: {
        number: { value: 110, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ["#fa6b63", "#f5b042", "#63d2fa", "#a063fa", "#63fa9c"] },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: 0.9 },
        links: {
          enable: true,
          distance: 140,
          color: "#ffffff",
          opacity: 0.001,
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
