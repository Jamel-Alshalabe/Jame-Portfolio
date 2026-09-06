import { ArrowUpRight, CheckCircle2, Code2, Layers3, ShieldCheck } from 'lucide-react';

const highlights = [
  { icon: Code2, title: 'Clean by default', text: 'Thoughtful architecture and maintainable code from the first commit.' },
  { icon: Layers3, title: 'Built to scale', text: 'Systems designed to grow with your users and business.' },
  { icon: ShieldCheck, title: 'Made reliable', text: 'Secure foundations, tested flows, and details that hold up.' },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              About me
            </div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
              More than just
              <br />
              <span className="text-muted-foreground">writing code.</span>
            </h2>
            <div className="mt-8 flex items-start gap-4 rounded-xl border border-primary/15 bg-primary/[0.04] p-5">
              <div className="mt-0.5 h-8 w-1 shrink-0 rounded-full bg-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                I believe great software sits at the intersection of solid engineering, thoughtful design, and a clear understanding of the people using it.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a full stack developer based in <span className="text-foreground">Amman, Jordan</span>, with a passion for building web applications that are as dependable as they are enjoyable to use.
            </p>
            <p>
              My work spans backend systems, APIs, database architecture, and responsive frontend interfaces. I specialize in <span className="text-foreground">PHP, Laravel, MySQL, React, and Tailwind CSS</span>, with a strong focus on clean architecture, security, and performance.
            </p>
            <p>
              Whether it&apos;s an education platform, a complex inventory system, or a global marketplace, I approach every challenge with curiosity, precision, and a commitment to shipping work I&apos;m proud of.
            </p>
            <a href="#experience" className="group inline-flex items-center gap-2 pt-3 text-sm font-semibold text-primary">
              See my experience
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="glass glass-hover group rounded-xl p-6" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/[0.06] pt-8">
          {['Object-oriented thinking', 'Team player', 'Fast learner', 'Problem solver'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
