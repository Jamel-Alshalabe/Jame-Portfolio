import { Reveal } from '@/components/sections/reveal';
import { Compass, PenTool, Rocket, TestTube2 } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Discover',
    description:
      'Understanding the problem deeply before writing a single line. I map requirements, constraints, and the user journey to find the right approach.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description:
      'Architecting clean, modular systems — database schema, API contracts, and component structure — built to scale and easy to maintain.',
  },
  {
    icon: TestTube2,
    number: '03',
    title: 'Build & Test',
    description:
      'Writing reliable code with quality gates, automated checks, and SonarQube analysis. Every feature is tested before it ships.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deploy',
    description:
      'Shipping with CI/CD pipelines, GitHub Actions, and clean deployment workflows. Monitoring and iteration keep things running smoothly.',
  },
];

export function Process() {
  return (
    <section className="border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            How I work
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            A process built for
            <br />
            <span className="text-muted-foreground">reliable delivery.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every project follows a clear, proven workflow — from first conversation to production deployment.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 100}
              className="group relative rounded-2xl border border-white/[0.08] bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-2xl font-semibold text-white/[0.06] transition-colors duration-300 group-hover:text-primary/20">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-base font-semibold">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-4 translate-x-full bg-gradient-to-r from-primary/30 to-transparent lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
