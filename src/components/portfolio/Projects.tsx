import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    description: "Real-time dashboard for product teams. Built sub-100ms charts and an offline-first sync layer.",
    tags: ["Next.js", "tRPC", "D3"],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Loop CMS",
    description: "Headless content platform with a block-based editor and live collaborative editing.",
    tags: ["React", "Yjs", "GraphQL"],
    live: "#",
    code: "#",
  },
  {
    title: "Pixel Forge",
    description: "Browser-based icon designer with vector export and a plugin SDK.",
    tags: ["TypeScript", "Canvas", "WASM"],
    live: "#",
    code: "#",
  },
  {
    title: "Stride",
    description: "Habit tracker focused on accessibility — full keyboard nav and screen reader optimized.",
    tags: ["React", "Radix", "Supabase"],
    live: "#",
    code: "#",
  },
  {
    title: "Echo Notes",
    description: "Markdown notes with audio embedding and AI-generated summaries.",
    tags: ["Vite", "OpenAI", "IndexedDB"],
    live: "#",
    code: "#",
  },
  {
    title: "Lumen UI",
    description: "Open-source component library — 60+ accessible primitives with theming via CSS variables.",
    tags: ["React", "Storybook", "CSS"],
    code: "#",
  },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <article className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-smooth hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/15" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-2xl font-semibold text-foreground/80 group-hover:text-gradient transition-smooth">
          {p.title}
        </span>
      </div>
      {p.featured && (
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider text-primary bg-background/80 backdrop-blur px-2 py-1 rounded border border-primary/40">
          Featured
        </span>
      )}
    </div>

    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground shrink-0">
          {p.code && (
            <a
              href={p.code}
              aria-label={`${p.title} source code`}
              className="hover:text-primary transition-smooth"
            >
              <Github size={18} />
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
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
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-primary">02.</span>
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
