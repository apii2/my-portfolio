import { useInView } from "@/hooks/use-in-view";
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileType,
  GitBranch,
  Layers,
  Server,
  Sparkles,
  Wind,
} from "lucide-react";

const aboutSkills = [
  { icon: FileType, label: "TypeScript" },
  { icon: Braces, label: "JavaScript" },
  { icon: Atom, label: "React" },
  { icon: Layers, label: "Next.js" },
  { icon: Wind, label: "Tailwind" },
  { icon: Sparkles, label: "Shadcn/ui" },
  { icon: Server, label: "FastAPI" },
  { icon: Database, label: "MySQL" },
  { icon: Code2, label: "Python" },
  { icon: GitBranch, label: "Git" },
];

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

          <div className="md:col-span-5">
            <div className="grid grid-cols-5 gap-x-4 gap-y-8 max-w-sm mx-auto">
              {aboutSkills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                  title={label}
                >
                  <Icon
                    size={32}
                    strokeWidth={1.25}
                    className="transition-transform group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};