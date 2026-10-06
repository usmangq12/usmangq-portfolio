import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Packages from "@/components/Packages";
import Missions from "@/components/Missions";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import SocialChannels from "@/components/SocialChannels";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialChannels />
        <ExperienceTimeline />
        <Expertise />
        <Packages />
        <Missions />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
