import { ArrowUpRight, Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import StoryFeature from "../../assets/projects/StoryFeature.png";
import AgeCalculator from "../../assets/projects/AgeCalculator.png";
import ProductCard from "../../assets/projects/ProductCard.png";
import ExtensionManager from "../../assets/projects/ExtensionManager.png";
import TodoApp from "../../assets/projects/TodoList.png";

type Project = {
  title: string;
  date: string;
  description: string;
  live?: string;
  code?: string;
  featured?: boolean;
  picture?: any;
};

const projects: Project[] = [
  {
    title: "24Hr Story Feature",
    date: "Mar 2026",
    description:
      "A modern web application that recreates the Instagram Stories experience built with React, TypeScript, and Vite.",
    code: "https://github.com/apii2/Story-Feature",
    live: "https://story-feature-ten.vercel.app/",
    picture: StoryFeature,
  },
  {
    title: "Todo List",
    date: "Dec 2025",
    description:
      "Full-stack todo app with Next.js and TypeScript frontend and FastAPI backend. CRUD via RESTful endpoints, deployed on Vercel.",
    code: "https://github.com/apii2/Todo-List",
    live: "https://todo-list-one-omega-31.vercel.app/",
    picture: TodoApp,
    featured: true,
  },
  {
    title: "URL Shortener",
    date: "Nov 2025",
    description:
      "Python + Flask service that creates custom short URLs, with SQL-backed link storage and graceful invalid-link handling.",
    code: "https://github.com/apii2/url-shortener",
  },
  {
    title: "Age Calculator",
    date: "Jun 2025",
    description:
      "Vite + React + TypeScript app with Context API for state and robust form validation for accurate input handling.",
    code: "https://github.com/apii2/Age-calculator",
    live: "https://apii2.github.io/Age-calculator/",
    picture: AgeCalculator,
  },
  {
    title: "Browser Extension Manager",
    date: "Jun 2025",
    description:
      "A React-based dashboard for managing browser extensions build with React, TypeScript, and Tailwind CSS.",
    code: "https://github.com/apii2/Browser-Extension-manager",
    live: "https://apii2.github.io/Browser-Extension-manager/",
    picture: ExtensionManager,
  },
  {
    title: "Product Cart",
    date: "Apr 2025",
    description:
      "Functional product cart UI built with React hooks (useState, useEffect, useRef) and Context API for cross-component sync.",
    code: "https://github.com/apii2/Product-list-cart-using-react",
    live: "https://apii2.github.io/Product-list-cart-using-react/",
    picture: ProductCard,
  },
];

const ProjectRow = ({ p, index }: { p: Project; index: number }) => {
  const reverse = index % 2 === 1;
  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      {/* Visual */}
      <div className={`md:col-span-7 ${reverse ? "md:order-2" : "md:order-1"}`}>
        <div className="group relative aspect-[18/14] overflow-hidden border border-border bg-card">
          {p.picture ? (
            <img
              src={p.picture}
              alt={p.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <span className="text-2xl md:text-3xl font-light tracking-wide text-foreground/80 group-hover:text-primary transition-smooth">
                  {p.title}
                </span>
              </div>
            </>
          )}
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
          className={`flex items-center gap-5 ${
            reverse ? "md:justify-end" : ""
          }`}
        >
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary hover:text-primary-glow transition-smooth"
            >
              Live app <ArrowUpRight size={14} />
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github size={14} /> Source
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
