import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Linkedin } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      {/* floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-primary/90 mb-5"
          >
            ◆ Portfolio · 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight"
          >
            <span className="block text-foreground/90">Hi, I'm</span>
            <span className="block text-gradient-gold">{profile.name}.</span>
            <span className="block text-foreground/70 text-3xl sm:text-4xl md:text-5xl mt-3 font-display italic">
              I build with code & curiosity.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-gold hover:scale-[1.02] transition-transform"
            >
              View my work
              <ArrowDown className="size-4 group-hover:translate-y-0.5 transition" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition"
            >
              <Mail className="size-4" /> Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 flex items-center gap-5 text-muted-foreground"
          >
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition" aria-label="GitHub">
              <Github className="size-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-primary transition" aria-label="Email">
              <Mail className="size-5" />
            </a>
            <span className="h-px w-12 bg-border" />
            <span className="font-mono text-xs">{profile.email}</span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto"
        >
          <div className="relative w-[280px] sm:w-[360px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary blur-2xl opacity-50 animate-float" />
            <div className="absolute inset-0 rounded-full p-[2px]" style={{ background: "var(--gradient-gold)" }}>
              <div className="h-full w-full rounded-full overflow-hidden bg-background">
                <img
                  src={profileAsset.url}
                  alt="Portrait of Amit Yadav"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
            {/* rotating ring */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 animate-spin-slow text-primary/70">
              <defs>
                <path id="circlePath" d="M 200,200 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0" />
              </defs>
              <text className="font-mono" fontSize="12" fill="currentColor" letterSpacing="6">
                <textPath href="#circlePath">
                  ✦ FULL STACK · AI / ML · DATA SCIENCE · FRONTEND · BACKEND · ✦ FULL STACK · AI / ML ·
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
