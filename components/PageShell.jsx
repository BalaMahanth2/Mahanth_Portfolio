"use client";

import { useStyle } from "./StyleProvider";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Timeline from "./Timeline";
import Certifications from "./Certifications";
import GitHubStats from "./GitHubStats";
import Contact from "./Contact";

import ClassicHero from "./classic/ClassicHero";
import ClassicAbout from "./classic/ClassicAbout";
import ClassicSkills from "./classic/ClassicSkills";
import ClassicProjects from "./classic/ClassicProjects";
import ClassicExperience from "./classic/ClassicExperience";
import ClassicTimeline from "./classic/ClassicTimeline";
import ClassicCertifications from "./classic/ClassicCertifications";
import ClassicGitHubStats from "./classic/ClassicGitHubStats";
import ClassicContact from "./classic/ClassicContact";

export default function PageShell() {
  const { style } = useStyle();

  if (style === "classic") {
    return (
      <>
        <ClassicHero />
        <ClassicAbout />
        <ClassicSkills />
        <ClassicProjects />
        <ClassicExperience />
        <ClassicTimeline />
        <ClassicCertifications />
        {/* <ClassicGitHubStats /> */}
        <ClassicContact />
      </>
    );
  }

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Timeline />
      <Certifications />
      {/* <GitHubStats /> */}
      <Contact />
    </>
  );
}
