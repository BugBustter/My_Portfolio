import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { GithubStats } from "@/components/portfolio/GithubStats";
import { TechSphere } from "@/components/portfolio/TechSphere";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amit Yadav — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Amit Yadav — Computer Science student at UTU & IIT Madras building full-stack apps, AI/ML systems and refined interactive UI.",
      },
      { property: "og:title", content: "Amit Yadav — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Selected projects, experience, certifications and live GitHub stats. Reach me directly via the contact form.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Certifications />
      <GithubStats />
      <TechSphere />
      <Contact />
      <Footer />
    </main>
  );
}
