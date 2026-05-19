import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Timeline />
      <Certifications />
      <GitHubStats />
      <Contact />
    </>
  );
}
