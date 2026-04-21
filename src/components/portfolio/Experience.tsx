type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
};

const roles: Role[] = [
  {
    company: "Onepasal",
    role: "Frontend Developer",
    period: "Feb 2025 — Present",
    location: "Kathmandu",
    highlights: [
      "Developed a multi-role eCommerce platform (Customer, Vendor, and Staff portals) with Next.js and React.js.",
      "Implemented scalable state management using Redux and Context API for efficient data flow across complex components.",
      "Integrated RESTful APIs with Axios — handling auth, protected routes, and async data fetching; used React Query for server-state caching.",
      "Improved performance via code splitting, lazy loading, and dynamic imports; built reusable, modular component architecture.",
      "Implemented role-based access control and route protection for secure multi-user functionality.",
    ],
    tech: ["Next.js", "React", "Redux", "React Query", "Axios", "Tailwind"],
  },
  {
    company: "Mobizilla Digital Agency",
    role: "Junior Frontend Developer",
    period: "Aug 2024 — Feb 2025",
    location: "Kathmandu",
    highlights: [
      "Independently handled all aspects of frontend development across client projects.",
      "Built interactive UI features in React.js to enhance user experience and performance.",
      "Styled responsive, modern interfaces with Tailwind CSS and SASS; integrated Swiper.js sliders and Animate.css transitions.",
      "Gained hands-on experience with Laravel and PHP while integrating frontend components.",
    ],
    tech: ["React.js", "Tailwind", "SASS", "Laravel", "PHP"],
  },
  {
    company: "Nepit Solutions",
    role: "JavaScript Developer",
    period: "Mar 2024 — Aug 2024",
    location: "Kathmandu",
    highlights: [
      "Developed interactive, dynamic web interfaces in JavaScript with responsive design and client-side functionality.",
      "Collaborated with senior developers to implement features, optimize performance, and improve usability.",
      "Customized themes and plugins with a focus on JavaScript-driven behavior to extend existing systems.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
];

export const Experience = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 md:py-32 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <ol className="relative border-l border-border ml-2 md:ml-4 space-y-12">
          {roles.map((r) => (
            <li key={r.company} className="pl-6 md:pl-10 relative group">
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-smooth" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                  {r.role}{" "}
                  <span className="text-primary">@ {r.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {r.period}
                </span>
              </div>

              <p className="font-mono text-xs text-muted-foreground mb-4">
                {r.location}
              </p>

              <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                {r.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wide text-muted-foreground border border-border rounded px-2 py-0.5"
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
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                BSc. CSIT{" "}
                <span className="text-muted-foreground">@ St. Lawrence College</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                2019 — 2024
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bachelors of Science in Computer Science and Information
              Technology · Chuchepati, Kathmandu
            </p>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="text-base md:text-lg font-semibold tracking-tight">
                Intermediate (Science){" "}
                <span className="text-muted-foreground">@ Reliance International Academy</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
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
