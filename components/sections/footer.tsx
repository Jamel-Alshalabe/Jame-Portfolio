import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#home" className="font-display text-xl font-semibold">
              Jamel<span className="text-primary">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Full Stack Developer crafting reliable digital experiences from backend to browser.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Portfolio"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Jamel Alshalabe. All rights reserved.</p>
          <a href="#home" className="group inline-flex items-center gap-1 transition-colors hover:text-primary">
            Back to top <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
