import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Starfield } from "@/components/portfolio/Starfield";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Global animated background — shared across every section */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <Starfield />
        <div className="absolute inset-0 bg-hero-glow" />
      </div>

      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
