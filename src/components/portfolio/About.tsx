import { useInView } from "@/hooks/use-in-view";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiFastapi,
  SiMysql,
  SiPython,
  SiGit,
} from "react-icons/si";

const aboutSkills = [
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
  { icon: SiShadcnui, label: "Shadcn", color: "#FFFFFF" },
  { icon: SiFastapi, label: "FastAPI", color: "#009688" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiGit, label: "Git", color: "#F05032" },
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
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto">
              {aboutSkills.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="group relative rounded-md border border-primary/40 bg-card/40 px-3 py-4 flex flex-col items-center justify-center gap-2 transition-smooth hover:border-primary hover:shadow-glow"
                >
                  <Icon size={32} style={{ color }} />
                  <span className="text-[10px] tracking-[0.18em] uppercase font-light text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};