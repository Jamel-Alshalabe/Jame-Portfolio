import { BriefcaseBusiness, CalendarDays, GraduationCap, MapPin } from 'lucide-react';
import { education, experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            The journey
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Experience that
            <br />
            <span className="text-muted-foreground">keeps moving forward.</span>
          </h2>
        </div>

        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.company} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <span className="font-mono text-xs text-primary">0{index + 1}</span>
                      <h3 className="mt-2 font-display text-lg font-semibold">{experience.role}</h3>
                      <p className="mt-1 text-sm font-medium text-foreground">{experience.company}</p>
                    </div>
                    <div className="space-y-1 text-left text-xs text-muted-foreground sm:text-right">
                      <div className="flex items-center gap-1.5 sm:justify-end"><CalendarDays className="h-3.5 w-3.5" />{experience.period}</div>
                      <div className="flex items-center gap-1.5 sm:justify-end"><MapPin className="h-3.5 w-3.5" />{experience.location}</div>
                    </div>
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><GraduationCap className="h-5 w-5" /></div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Education</p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{education.degree}</h3>
              <p className="mt-2 text-sm text-foreground">{education.institution}</p>
              <div className="mt-5 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><CalendarDays className="h-3.5 w-3.5 text-primary" />{education.period}</div>
                <p className="pl-5">{education.location}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.05] p-7">
              <BriefcaseBusiness className="h-5 w-5 text-primary" />
              <p className="mt-5 font-display text-base font-semibold">Always learning, always building.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The best developers never stop being students. Every project is a chance to learn something new.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
