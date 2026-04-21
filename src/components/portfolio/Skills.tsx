import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";
import {
  Code2,
  Layers,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    items: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "SASS",
      "Bootstrap",
      "React Query",
      "Redux",
      "Context API",
    ],
  },
  {
    icon: Server,
    title: "Backend & Data",
    items: ["FastAPI", "RESTful APIs", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Vite", "Figma", "Postman"],
  },
];

export const Skills = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 md:py-32 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/60 transition-smooth shadow-card-dark"
              >
                <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none -z-10 blur-sm" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-sm font-semibold">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="font-mono text-xs border border-border hover:border-primary hover:text-primary transition-smooth"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
