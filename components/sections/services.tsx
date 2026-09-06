import { Code2, Database, GitBranch, Layout, Lightbulb, MonitorSmartphone, Network, Plug, Server, ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap = { Code2, Database, GitBranch, Layout, Lightbulb, MonitorSmartphone, Network, Plug, Server };

export function Services() {
  return (
    <section id="services" className="border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              What I do
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              From first idea
              <br />
              <span className="text-muted-foreground">to final release.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            I help turn complex problems into simple, scalable products that create real value.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.title} className="group relative bg-background p-7 transition-colors duration-500 hover:bg-white/[0.035]">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/50">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-base font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ArrowUpRight className="mt-6 h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
