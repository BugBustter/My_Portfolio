import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { techStack } from "@/lib/portfolio-data";

/**
 * Pure CSS 3D rotating sphere of tech icons. No external WebGL.
 * Uses transform-style: preserve-3d with each tag positioned via Fibonacci sphere.
 */
export function TechSphere() {
  const ref = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState({ x: -20, y: 15 });
  const stateRef = useRef({ down: false, lx: 0, ly: 0 });

  // auto rotate
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setDrag((d) => ({ x: d.x, y: d.y + 0.15 }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const positions = fibonacciSphere(techStack.length, 170);

  return (
    <section id="stack" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>07 · Toolkit</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
            My <span className="text-gradient-gold italic">tech stack</span>, in orbit.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Drag the sphere to spin it. Languages, frameworks and tools I build with day-to-day.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div
            ref={ref}
            className="relative h-[420px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
            style={{ perspective: "1200px" }}
            onPointerDown={(e) => {
              stateRef.current = { down: true, lx: e.clientX, ly: e.clientY };
            }}
            onPointerMove={(e) => {
              if (!stateRef.current.down) return;
              const dx = e.clientX - stateRef.current.lx;
              const dy = e.clientY - stateRef.current.ly;
              stateRef.current.lx = e.clientX;
              stateRef.current.ly = e.clientY;
              setDrag((d) => ({ x: d.x - dy * 0.4, y: d.y + dx * 0.4 }));
            }}
            onPointerUp={() => (stateRef.current.down = false)}
            onPointerLeave={() => (stateRef.current.down = false)}
          >
            <div className="absolute size-72 rounded-full bg-primary/10 blur-3xl" />
            <div
              className="relative size-[360px]"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${drag.x}deg) rotateY(${drag.y}deg)`,
              }}
            >
              {techStack.map((t, i) => {
                const p = positions[i];
                return (
                  <span
                    key={t}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full glass text-xs font-mono whitespace-nowrap border-primary/30"
                    style={{
                      transform: `translate3d(${p.x}px, ${p.y}px, ${p.z}px)`,
                      color: "oklch(0.9 0.08 80)",
                    }}
                  >
                    {t}
                  </span>
                );
              })}
              {/* equator ring */}
              <div className="absolute inset-0 rounded-full border border-primary/15" />
              <div className="absolute inset-0 rounded-full border border-primary/10" style={{ transform: "rotateX(90deg)" }} />
            </div>
          </div>

          <Reveal>
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-2xl mb-4">Built with conviction.</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I pick tools because they help me ship clean, reliable software — not because they're trending.
                Python for ML, React for refined UI, Flask & Node for resilient backends, and a strong feedback loop with Git.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary/90 text-xs border border-primary/20 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function fibonacciSphere(n: number, r: number) {
  const pts: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push({ x: Math.cos(theta) * radius * r, y: y * r, z: Math.sin(theta) * radius * r });
  }
  return pts;
}
