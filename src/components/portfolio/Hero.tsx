import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="font-mono text-sm text-primary mb-6 animate-fade-in">
              <span className="text-muted-foreground">$</span> hello, world
              <span className="ml-1 inline-block w-2 h-4 bg-primary align-middle animate-blink" />
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] animate-fade-in-up">
              Frontend developer
              <br />
              building{" "}
              <span className="text-gradient">scalable, modern</span>
              <br />
              web apps.
            </h1>

            <p
              className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "120ms" }}
            >
              I'm{" "}
              <span className="text-foreground font-medium">Apeksha Shrestha</span>,
              a self-motivated frontend developer based in Kathmandu with 2+ years
              of experience building high-performance applications using Next.js,
              React, and Tailwind CSS — with a strong focus on clean architecture
              and maintainable code.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <Button asChild size="lg" className="shadow-glow">
                <a href="#work">
                  View work
                  <ArrowDown className="ml-1" size={18} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/Apeksha_Shrestha_CV.pdf" download>
                  <Download className="mr-1" size={18} />
                  Download my CV
                </a>
              </Button>
            </div>

            <div
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                Open to opportunities
              </span>
              <span>Kathmandu, NP · UTC+5:45</span>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in-up">
            <div className="relative group max-w-sm mx-auto lg:max-w-none lg:ml-auto">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl opacity-40 blur-2xl group-hover:opacity-60 transition-smooth" />
              <div className="relative aspect-[4/5] rounded-2xl border border-border bg-card overflow-hidden shadow-card-dark">
                <img
                  src={heroPortrait}
                  alt="Apeksha Shrestha — Frontend Developer"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 font-mono text-xs flex justify-between items-center">
                  <span className="text-muted-foreground">apeksha.tsx</span>
                  <span className="text-primary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
                    online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
