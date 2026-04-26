import { useInView } from "@/hooks/use-in-view";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const About = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 md:py-40 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide uppercase mb-3">
          About
        </h2>
        <div className="mx-auto w-16 h-px bg-primary mb-16" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5">
            <div className="relative max-w-xs mx-auto md:max-w-none">
              <div className="absolute -inset-2 bg-primary/20 blur-2xl opacity-60" />
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
                <img
                  src={heroPortrait}
                  alt="Apeksha Shrestha — Frontend Developer"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-base md:text-[17px] font-light">
            <p>
              I'm{" "}
              <span className="text-foreground">Apeksha Shrestha</span>, a
              self-motivated frontend developer based in Kathmandu with 2+
              years of experience building high-performance web applications
              using <span className="text-foreground">Next.js</span>,{" "}
              <span className="text-foreground">React</span>, and{" "}
              <span className="text-foreground">Tailwind CSS</span>.
            </p>
            <p>
              Fully committed to the philosophy of life-long learning, I love
              the unique mix of creativity, logic and technology that frontend
              development demands — and the fact that there's always something
              new to discover keeps me genuinely excited about the craft.
            </p>
            <p>
              I focus on clean architecture, maintainable code, and pixel-level
              attention to detail, working across the stack with FastAPI, REST
              APIs and MySQL when projects call for it. When I'm not at my
              computer, I enjoy reading, sketching UIs, and exploring new
              cafés around the valley.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};