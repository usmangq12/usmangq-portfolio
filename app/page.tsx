import BackgroundGraphLazy from "@/components/BackgroundGraphLazy";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Expertise from "@/components/Expertise";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Packages from "@/components/Packages";
import Missions from "@/components/Missions";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <BackgroundGraphLazy />
      <main>
        <Hero />
        <About />
        <Journey />
        <Expertise />
        <ExperienceTimeline />
        <Packages />
        <Missions />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-secondary">
          © 2026 Muhammad Usman · Built with Next.js &amp; Tailwind CSS
        </div>
      </footer>
    </>
  );
}
