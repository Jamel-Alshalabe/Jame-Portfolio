'use client';

import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 radial-fade" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.05]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: text */}
          <div className="max-w-2xl">
            <div
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-2 text-xs font-medium text-primary"
              style={{ animationDelay: '100ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </div>

            <h1
              className="animate-fade-up mt-7 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              style={{ animationDelay: '200ms' }}
            >
              Building digital
              <br />
              <span className="text-gradient">experiences</span>
              <br />
              that make an impact
              <span className="text-primary">.</span>
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: '300ms' }}
            >
              I&apos;m{' '}
              <span className="font-medium text-foreground">
                Jamel Alshalabe
              </span>
              , a full stack developer focused on crafting scalable, secure,
              and beautifully considered web applications.
            </p>

            {/* Primary actions */}
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '400ms' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:glow sm:px-6 sm:py-3.5"
              >
                Explore my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.03] sm:px-6 sm:py-3.5"
              >
                Get in touch
              </a>
            </div>

            {/* Direct contact shortcuts */}
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-2"
              style={{ animationDelay: '450ms' }}
            >
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground sm:text-sm"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground sm:text-sm"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span className="hidden sm:inline">Email me</span>
                <span className="sm:hidden">Gmail</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground sm:text-sm"
              >
                <Linkedin className="h-3.5 w-3.5 text-primary" />
                <span className="hidden sm:inline">LinkedIn</span>
                <span className="sm:hidden">LinkedIn</span>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground sm:h-10 sm:w-10"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>

            <div
              className="animate-fade-up mt-10 hidden items-center gap-3 sm:flex"
              style={{ animationDelay: '500ms' }}
            >
              <ArrowDown className="h-6 w-6 animate-bounce text-primary/70" />
              <span className="text-xs text-muted-foreground/70">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Right: portrait card */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="animate-scale-in relative"
              style={{ animationDelay: '300ms' }}
            >
              {/* Decorative ring */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-primary/10" />
              <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] border border-primary/[0.05]" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-card">
                {/* Name badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass rounded-xl p-4">
                    <p className="font-display text-base font-semibold">
                      Jamel Alshalabe
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Full Stack Developer
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-primary">
                        Laravel · React · Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="animate-float absolute -right-3 top-8 hidden sm:block"
                style={{ animationDelay: '1s' }}
              >
                <div className="glass rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Currently building</span>
                  </div>
                  <p className="mt-1.5 font-mono text-xs text-foreground">
                    reliable_systems
                    <span className="text-primary">.ship()</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
