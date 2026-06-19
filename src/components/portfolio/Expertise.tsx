import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { expertise } from "@/lib/portfolio-data";
import {
  Layers, Sparkles, Brain, BarChart3, Network, Server, Monitor,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers, Sparkles, Brain, BarChart3, Network, Server, Monitor,
};

export function Expertise() {
  return (
    <section id="expertise" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>02 · Expertise</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
            Range across the full <span className="text-gradient-gold italic">software stack</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((e, i) => {
            const Icon = iconMap[e.icon] ?? Layers;
            return (
              <Reveal key={e.title} delay={i * 0.05}>
                <div className="group relative rounded-2xl glass p-6 h-full hover-lift overflow-hidden">
                  <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-lg mb-1.5">{e.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
