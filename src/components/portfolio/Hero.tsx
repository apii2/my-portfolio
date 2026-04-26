import { ArrowRight } from "lucide-react";
import { Starfield } from "./Starfield";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Starfield />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="container relative text-center">
        <h1 className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] animate-fade-in-up">
          Hello, I'm <span className="text-primary">Apeksha</span>.
          <br />
          I'm a frontend developer.
        </h1>

        <div
          className="mt-12 flex justify-center animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-primary text-primary px-8 py-3 text-sm tracking-wide uppercase font-light hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
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
