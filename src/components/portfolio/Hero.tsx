import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "./ParticlesBackground";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
        >
          Hello, I'm <span className="text-primary">Apeksha</span>.
          <br />
          I'm a frontend developer.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 border border-primary text-primary px-8 py-3 text-sm tracking-wide uppercase font-light hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105 duration-300"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:animate-echo"
            />
            View my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
