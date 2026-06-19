import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { profile } from "@/lib/portfolio-data";
import { Github, Users, GitFork, Star, BookOpen } from "lucide-react";

type GH = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  name: string | null;
};

export function GithubStats() {
  const [data, setData] = useState<GH | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.github}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => setErr(true));
  }, []);

  const user = profile.github;

  return (
    <section id="github" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>06 · GitHub</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-3xl">
            Live from my <span className="text-gradient-gold italic">GitHub</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Real-time stats, languages and contribution heatmap — fetched directly from{" "}
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              @{user}
            </a>.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-4 gap-4">
          <Stat label="Repositories" icon={BookOpen} value={data?.public_repos} loading={!data && !err} />
          <Stat label="Followers" icon={Users} value={data?.followers} loading={!data && !err} />
          <Stat label="Following" icon={GitFork} value={data?.following} loading={!data && !err} />
          <Stat label="Profile" icon={Star} value={data ? "Live" : err ? "—" : undefined} loading={!data && !err} />
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <GhCard title="Streak">
            <img
              alt="GitHub streak"
              src={`https://streak-stats.demolab.com?user=${user}&theme=midnight-purple&hide_border=true&background=00000000&stroke=E0B050&ring=E0B050&fire=F0C070&currStreakLabel=E0B050`}
              className="w-full"
              loading="lazy"
            />
          </GhCard>
          <GhCard title="Stats">
            <img
              alt="GitHub stats"
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=E0B050&icon_color=F0C070&text_color=E5E5E5&ring_color=E0B050`}
              className="w-full"
              loading="lazy"
            />
          </GhCard>
          <GhCard title="Top languages">
            <img
              alt="Top languages"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=E0B050&text_color=E5E5E5&langs_count=8`}
              className="w-full"
              loading="lazy"
            />
          </GhCard>
        </div>

        <div className="mt-6">
          <GhCard title="Contribution heatmap">
            <img
              alt="Contribution graph"
              src={`https://ghchart.rshah.org/E0B050/${user}`}
              className="w-full"
              loading="lazy"
            />
          </GhCard>
        </div>

        <Reveal>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-gold hover:scale-[1.02] transition"
          >
            <Github className="size-4" /> Open my GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
  loading,
}: {
  label: string;
  value?: number | string;
  icon: React.ComponentType<{ className?: string }>;
  loading?: boolean;
}) {
  return (
    <Reveal>
      <div className="glass rounded-2xl p-6 hover-lift relative overflow-hidden">
        <Icon className="absolute -right-3 -bottom-3 size-20 text-primary/5" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
        <p className="font-display text-4xl mt-2 text-gradient-gold">
          {loading ? <span className="inline-block w-16 h-8 rounded bg-muted/40 animate-pulse" /> : value ?? "—"}
        </p>
      </div>
    </Reveal>
  );
}

function GhCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="glass rounded-2xl p-5 hover-lift">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-4">{title}</p>
        <div className="flex items-center justify-center min-h-[120px]">{children}</div>
      </div>
    </Reveal>
  );
}
