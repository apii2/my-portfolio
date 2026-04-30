import { ArrowUpRight, Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Todo List",
    date: "Dec 2025",
    description:
      "Full-stack todo app with Next.js frontend and FastAPI backend. CRUD via RESTful endpoints, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "FastAPI", "MySQL"],
    code: "https://github.com/apii2",
    featured: true,
  },
  {
    title: "URL Shortener",
    date: "Nov 2025",
    description:
      "Python + Flask service that creates custom short URLs, with SQL-backed link storage and graceful invalid-link handling.",
    tags: ["Python", "Flask", "SQL"],
    code: "https://github.com/apii2",
  },
  {
    title: "Age Calculator",
    date: "Jun 2025",
    description:
      "Vite + React + TypeScript app with Context API for state and robust form validation for accurate input handling.",
    tags: ["Vite", "React", "TypeScript", "Tailwind"],
    code: "https://github.com/apii2",
  },
  {
    title: "Product Cart",
    date: "Apr 2025",
    description:
      "Functional product cart UI built with React hooks (useState, useEffect, useRef) and Context API for cross-component sync.",
    tags: ["React.js", "Tailwind CSS", "Context API"],
    code: "https://github.com/apii2",
  },
  {
    title: "Onepasal eCommerce",
    date: "2025 — Present",
    description:
      "Multi-role eCommerce platform (Customer, Vendor, Staff portals) with Redux state, React Query, and role-based access control.",
    tags: ["Next.js", "Redux", "React Query", "Axios"],
    featured: true,
  },
  {
    title: "Mobizilla Web Builds",
    date: "2024 — 2025",
    description:
      "Independently built responsive marketing sites with React, Tailwind, SASS, Swiper.js sliders, and Animate.css transitions.",
    tags: ["React.js", "Tailwind", "SASS", "Laravel"],
  },
];

const ProjectRow = ({ p, index }: { p: Project; index: number }) => {
  const reverse = index % 2 === 1;
  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      {/* Visual */}
      <div
        className={`md:col-span-7 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="group relative aspect-[16/10] overflow-hidden border border-border bg-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <span className="text-2xl md:text-3xl font-light tracking-wide text-foreground/80 group-hover:text-primary transition-smooth">
              {p.title}
            </span>
          </div>
          {p.featured && (
            <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider text-primary bg-background/80 backdrop-blur px-2 py-1 border border-primary/40">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className={`md:col-span-5 ${
          reverse ? "md:order-1 md:text-right" : "md:order-2"
        }`}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          {p.date}
        </p>
        <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
          {p.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
          {p.description}
        </p>
        <div
          className={`flex flex-wrap gap-x-4 gap-y-2 mb-5 ${
            reverse ? "md:justify-end" : ""
          }`}
        >
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className={`flex items-center gap-5 ${
            reverse ? "md:justify-end" : ""
          }`}
        >
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary border-b border-primary overflow-hidden transition-colors duration-500 hover:text-primary-foreground"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out -z-0" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Live app <ArrowUpRight size={14} />
              </span>
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground border-b border-muted-foreground/60 overflow-hidden transition-colors duration-500 hover:text-primary-foreground hover:border-primary"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out -z-0" />
              <span className="relative z-10 inline-flex items-center gap-2">
                <Github size={14} /> Source
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="work"
      ref={ref}
      className={`py-28 md:py-40 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide uppercase mb-3">
          Projects
        </h2>
        <div className="mx-auto w-16 h-px bg-primary mb-20" />

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
