import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#github", label: "GitHub" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all",
            scrolled ? "glass glow-gold" : "bg-transparent",
          )}
        >
          <a href="#top" className="font-display text-lg tracking-tight">
            <span className="text-gradient-gold font-semibold">Amit</span>
            <span className="text-foreground/80">.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Let's talk
          </a>

          <button
            aria-label="Menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="i-menu block h-0.5 w-4 bg-foreground relative before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-4 before:bg-foreground after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-4 after:bg-foreground" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
