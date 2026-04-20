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
    company: "Northwind Labs",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    location: "Berlin · Remote",
    highlights: [
      "Lead the design system used across 4 products, cutting UI build time by ~40%.",
      "Migrated legacy SPA to Next.js App Router; LCP dropped from 3.8s to 1.1s.",
      "Mentor 3 engineers on accessibility, testing, and performance.",
    ],
    tech: ["Next.js", "TypeScript", "Radix", "Playwright"],
  },
  {
    company: "Pivotline",
    role: "Frontend Engineer",
    period: "2020 — 2023",
    location: "Amsterdam",
    highlights: [
      "Shipped the realtime collaboration editor used by 12k+ daily users.",
      "Owned the analytics dashboard rewrite — 3x faster initial render.",
      "Set up Storybook + visual regression testing across the org.",
    ],
    tech: ["React", "GraphQL", "Storybook"],
  },
  {
    company: "Studio Halftone",
    role: "Web Developer",
    period: "2018 — 2020",
    location: "Lisbon",
    highlights: [
      "Built 20+ custom marketing sites for design-led clients.",
      "Implemented a CMS-driven component library on top of Sanity.",
    ],
    tech: ["Vue", "Nuxt", "Sanity"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">03.</span>
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
                B.Sc. Computer Science{" "}
                <span className="text-muted-foreground">@ TU Lisbon</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                2014 — 2018
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Focus on human-computer interaction and distributed systems.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};
