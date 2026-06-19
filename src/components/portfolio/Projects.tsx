import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { projects } from "@/lib/portfolio-data";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>03 · Selected Work</SectionLabel>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
              Featured <span className="text-gradient-gold italic">projects</span>.
            </h2>
            <a
              href="https://github.com/BugBustter"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition inline-flex items-center gap-1"
            >
              See all on GitHub <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full rounded-2xl glass overflow-hidden hover-lift flex flex-col">
                <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl text-gradient-gold opacity-90 select-none">
                      {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg leading-snug mb-2 group-hover:text-primary transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary/90 border border-primary/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <Github className="size-3.5" /> Code
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition"
                      >
                        <ExternalLink className="size-3.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
