import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTimeline } from "@/components/sections/Experience/ExperienceTimeline";
import { Now } from "@/components/sections/Now";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <ExperienceTimeline />
      <Now />
      <Blog />
      <Contact />
    </>
  );
}
