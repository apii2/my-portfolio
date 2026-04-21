import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const ProjectCard = ({ p }: { p: Project }) => (
  <article className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-smooth hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/15" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <span className="font-mono text-xl md:text-2xl font-semibold text-foreground/80 group-hover:text-gradient transition-smooth">
          {p.title}
        </span>
      </div>
      {p.featured && (
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider text-primary bg-background/80 backdrop-blur px-2 py-1 rounded border border-primary/40">
          Featured
        </span>
      )}
      <span className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded border border-border">
        {p.date}
      </span>
    </div>

    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground shrink-0">
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} source code`}
              className="hover:text-primary transition-smooth"
            >
              <Github size={18} />
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live site`}
              className="hover:text-primary transition-smooth"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {p.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <Badge
            key={t}
            variant="outline"
            className="font-mono text-[10px] tracking-wide border-border text-muted-foreground"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  </article>
);

export const Projects = () => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      id="work"
      ref={ref}
      className={`py-24 md:py-32 relative reveal ${inView ? "reveal-in" : ""}`}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected work
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
