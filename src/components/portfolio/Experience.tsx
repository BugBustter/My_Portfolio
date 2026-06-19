import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { experience } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>04 · Experience</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
            Where I've shipped <span className="text-gradient-gold italic">real code</span>.
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <span className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.1}>
                <div
                  className={`relative grid sm:grid-cols-2 gap-6 items-start ${
                    i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                  }`}
                >
                  <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 size-3 rounded-full bg-primary glow-gold ring-4 ring-background" />
                  <div className="pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                    <p className="font-mono text-xs uppercase tracking-wider text-primary/80">
                      {e.period}
                    </p>
                    <h3 className="font-display text-2xl mt-2">{e.role}</h3>
                    <p className="text-muted-foreground">{e.company}</p>
                  </div>
                  <div className="pl-12 sm:pl-10">
                    <div className="glass rounded-2xl p-5">
                      <Briefcase className="size-4 text-primary mb-3" />
                      <ul className="space-y-2 text-sm text-foreground/85">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
