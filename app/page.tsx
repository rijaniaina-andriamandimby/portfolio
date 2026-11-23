import ScrollProgress from "@/components/layout/ScrollProgress";
import Spotlight from "@/components/ui/Spotlight";
import SectionDots from "@/components/layout/SectionDots";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Spotlight />
      <SectionDots />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
