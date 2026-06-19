import { Reveal } from "./Reveal";
import { education, achievements } from "@/lib/portfolio-data";
import { GraduationCap, Trophy } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>01 · About</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
            A <span className="text-gradient-gold italic">student engineer</span> obsessed
            with shipping thoughtful software.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            I'm a Computer Science undergraduate at Uttarakhand Technical University,
            simultaneously pursuing a B.Sc in Data Science & AI/ML from IIT Madras. I love
            sitting at the intersection of intelligent systems and beautiful interfaces — building
            things that feel as good as they perform.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl glass p-7 h-full hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="size-5 text-primary" />
                <h3 className="font-display text-xl">Education</h3>
              </div>
              <ul className="space-y-6">
                {education.map((e) => (
                  <li key={e.school} className="border-l border-primary/30 pl-5 relative">
                    <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary glow-gold" />
                    <p className="font-medium">{e.school}</p>
                    <p className="text-sm text-muted-foreground">{e.degree}</p>
                    <p className="font-mono text-xs mt-1 text-primary/80">
                      {e.period} · {e.score}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl glass p-7 h-full hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="size-5 text-primary" />
                <h3 className="font-display text-xl">Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm">
                    <span className="mt-2 size-1.5 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
                    <span className="text-foreground/85 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary/80 mb-5">
      {children}
    </p>
  );
}
