import { useInView } from "@/hooks/use-in-view";

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
};

const roles: Role[] = [
  {
    company: "Onepasal",
    role: "Frontend Developer",
    period: "Feb 2025 — Present",
    location: "Kathmandu",
    description:
      "Building a multi-role eCommerce platform with Next.js and React, handling scalable state management, API integration, and performance optimization across customer, vendor, and staff portals.",
    tech: ["Next.js", "React", "Redux", "React Query", "Axios", "Tailwind"],
  },
  {
    company: "Mobizilla Digital Agency",
    role: "Junior Frontend Developer",
    period: "Aug 2024 — Feb 2025",
    location: "Kathmandu",
    description:
      "Independently handled frontend development across client projects, building responsive React interfaces with Tailwind and SASS while integrating with Laravel and PHP backends.",
    tech: ["React.js", "Tailwind", "SASS", "Laravel", "PHP"],
  },
  {
    company: "Nepit Solutions",
    role: "JavaScript Developer",
    period: "Mar 2024 — Aug 2024",
    location: "Kathmandu",
    description:
      "Developed interactive, dynamic web interfaces in JavaScript with responsive design, collaborating with senior developers to ship features and customize themes and plugins.",
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
];

export const Experience = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="experience"
      ref={ref}
      className={`py-28 md:py-40 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide uppercase mb-3">
          Experience
        </h2>
        <div className="mx-auto w-16 h-px bg-primary mb-16" />

        <ol className="relative border-l border-border ml-2 md:ml-4 space-y-12">
          {roles.map((r) => (
            <li key={r.company} className="pl-6 md:pl-10 relative group">
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-smooth" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-lg md:text-xl font-light tracking-wide">
                  {r.role}{" "}
                  <span className="text-primary">@ {r.company}</span>
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                  {r.period}
                </span>
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
                {r.location}
              </p>

              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                {r.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}

          <li className="pl-6 md:pl-10 relative">
            <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-muted-foreground" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="text-lg md:text-xl font-light tracking-wide">
                BSc. CSIT{" "}
                <span className="text-muted-foreground">@ St. Lawrence College</span>
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                2019 — 2024
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bachelors of Science in Computer Science and Information
              Technology · Chuchepati, Kathmandu
            </p>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="text-base md:text-lg font-light tracking-wide">
                Intermediate (Science){" "}
                <span className="text-muted-foreground">@ Reliance International Academy</span>
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                2017 — 2019
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Saraswotinagar, Kathmandu
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};
