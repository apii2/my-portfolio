import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
