import { useInView } from "@/hooks/use-in-view";
import {
  Atom,
  Boxes,
  Braces,
  Code2,
  Database,
  FileCode2,
  FileType,
  Figma,
  GitBranch,
  Github,
  Layers,
  Palette,
  Server,
  Sparkles,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

type Skill = { icon: React.ElementType; label: string };

const skills: Skill[] = [
  { icon: FileType, label: "TypeScript" },
  { icon: Braces, label: "JavaScript" },
  { icon: Code2, label: "Python" },
  { icon: FileCode2, label: "HTML5" },
  { icon: Palette, label: "CSS3" },
  { icon: Atom, label: "React" },
  { icon: Layers, label: "Next.js" },
  { icon: Wind, label: "Tailwind" },
  { icon: Sparkles, label: "Shadcn/ui" },
  { icon: Boxes, label: "Redux" },
  { icon: Zap, label: "React Query" },
  { icon: Server, label: "FastAPI" },
  { icon: Database, label: "MySQL" },
  { icon: GitBranch, label: "Git" },
  { icon: Github, label: "GitHub" },
  { icon: Figma, label: "Figma" },
  { icon: Wrench, label: "Postman" },
];

export const Skills = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="skills"
      ref={ref}
      className={`py-28 md:py-40 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide uppercase mb-3">
          Skills
        </h2>
        <div className="mx-auto w-16 h-px bg-primary mb-16" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-12">
          {skills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Icon
                size={44}
                strokeWidth={1.25}
                className="transition-transform group-hover:-translate-y-1"
              />
              <span className="text-xs tracking-[0.18em] uppercase font-light">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
