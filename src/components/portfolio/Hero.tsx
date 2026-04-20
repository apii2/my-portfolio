import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <div className="container relative">
        <div className="max-w-4xl">
          <p className="font-mono text-sm text-primary mb-6 animate-fade-in">
            <span className="text-muted-foreground">$</span> hello, world
            <span className="ml-1 inline-block w-2 h-4 bg-primary align-middle animate-blink" />
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] animate-fade-in-up">
            Frontend developer
            <br />
            crafting{" "}
            <span className="text-gradient">fast, beautiful</span>
            <br />
            interfaces.
          </h1>

          <p
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            I'm{" "}
            <span className="text-foreground font-medium">Alex Carter</span>, a
            frontend engineer based in Berlin. I design and build accessible,
            performant web experiences with React, TypeScript, and a love for
            details that make products feel alive.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg" className="shadow-glow">
              <a href="#work">
                View work
                <ArrowDown className="ml-1 transition-transform group-hover:translate-y-0.5" size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#">
                <Download className="mr-1" size={18} />
                Download CV
              </a>
            </Button>
          </div>

          <div
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              Available for freelance
            </span>
            <span>Berlin, DE · UTC+1</span>
          </div>
        </div>
      </div>
    </section>
  );
};
