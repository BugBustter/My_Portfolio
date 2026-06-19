import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";
import { profile } from "@/lib/portfolio-data";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle, Github, Linkedin, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});

type FormData = z.infer<typeof schema>;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as keyof FormData] = i.message;
      });
      setErrors(errs);
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg("EmailJS isn't configured yet. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.");
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
          to_email: profile.email,
          reply_to: parsed.data.email,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionLabel>08 · Contact</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl">
            Let's build something <span className="text-gradient-gold italic">extraordinary</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <Reveal>
            <div className="glass rounded-3xl p-7 h-full flex flex-col">
              <p className="text-muted-foreground leading-relaxed">
                I'm open to internships, freelance and collaboration. Reach me directly or drop a
                message — I usually reply within a day.
              </p>
              <div className="mt-8 space-y-4">
                <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
                <ContactRow icon={Github} label="GitHub" value={`@${profile.github}`} href={profile.githubUrl} />
                <ContactRow icon={Linkedin} label="LinkedIn" value="Amit Yadav" href={profile.linkedin} />
              </div>
              <div className="mt-auto pt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Based in India · Open to remote
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    className={inputCls}
                    maxLength={100}
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    className={inputCls}
                    maxLength={255}
                  />
                </Field>
              </div>
              <Field label="Subject" error={errors.subject}>
                <input
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Let's collaborate on…"
                  className={inputCls}
                  maxLength={150}
                />
              </Field>
              <Field label="Message" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a bit about your project, timeline and what you're hoping to achieve."
                  rows={6}
                  maxLength={2000}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <CheckCircle2 className="size-4" /> Thanks! Your message is on its way to {profile.email}.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 text-sm text-destructive"
                >
                  <AlertCircle className="size-4 mt-0.5 shrink-0" /> {errorMsg}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-gold hover:scale-[1.01] transition disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl p-3 -mx-3 hover:bg-secondary/40 transition"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
        <Icon className="size-4" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
        <span className="block text-sm text-foreground truncate group-hover:text-primary transition">{value}</span>
      </span>
    </a>
  );
}
