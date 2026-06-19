import { useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { certifications } from "@/lib/portfolio-data";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: -1 | 1) => {
    ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionLabel>05 · Credentials</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
                <span className="text-gradient-gold italic">Certifications</span> earned.
              </h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scroll(-1)} aria-label="Previous" className="size-10 rounded-full glass hover:border-primary/40 transition inline-flex items-center justify-center">
                <ChevronLeft className="size-4" />
              </button>
              <button onClick={() => scroll(1)} aria-label="Next" className="size-10 rounded-full glass hover:border-primary/40 transition inline-flex items-center justify-center">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div ref={ref} className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-thin">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.05}>
              <article className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-3xl p-[1.5px]" style={{ background: "var(--gradient-gold)" }}>
                <div className="rounded-[calc(1.5rem-1.5px)] bg-card p-6 h-full hover-lift">
                  <div className="flex items-center justify-between mb-6">
                    <Award className="size-6 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                  </div>
                  <h3 className="font-display text-xl leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                  {c.note && (
                    <p className="mt-4 inline-block text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {c.note}
                    </p>
                  )}
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Certified · Verified
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
