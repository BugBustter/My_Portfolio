import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} — Crafted with care.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & built from scratch · React · TanStack · Framer Motion
        </p>
      </div>
    </footer>
  );
}
