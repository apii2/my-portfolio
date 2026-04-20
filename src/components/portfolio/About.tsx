import { Badge } from "@/components/ui/badge";

const stack = [
  "Next.js", "React.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Shadcn/ui", "SASS", "Bootstrap",
  "HTML5", "CSS3", "RESTful APIs", "React Query",
  "Redux", "Context API", "Python", "FastAPI",
  "MySQL", "Git/GitHub",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a self-motivated frontend developer with more than two years
              of experience building scalable, high-performance web applications
              using Next.js and React.js.
            </p>
            <p>
              I specialize in creating{" "}
              <span className="text-foreground">responsive, user-focused</span>{" "}
              interfaces with Tailwind CSS, HTML5, and modern JavaScript — with
              strong attention to{" "}
              <span className="text-foreground">performance</span>,{" "}
              <span className="text-foreground">clean architecture</span>, and{" "}
              <span className="text-foreground">maintainable code</span>. I also
              work across the stack with Python and FastAPI when needed.
            </p>

            <div className="pt-4">
              <p className="font-mono text-xs text-muted-foreground mb-3">
                # tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="font-mono text-xs border border-border hover:border-primary hover:text-primary transition-smooth"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl opacity-30 blur-xl group-hover:opacity-50 transition-smooth" />
              <div className="relative aspect-[4/5] rounded-xl border border-border bg-card overflow-hidden shadow-card-dark">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-7xl md:text-8xl font-bold text-gradient select-none">
                    AS
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-mono text-xs text-muted-foreground flex justify-between">
                  <span>apeksha.jpg</span>
                  <span className="text-primary">● online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
