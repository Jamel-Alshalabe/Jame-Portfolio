import { Reveal } from '@/components/sections/reveal';

const stats = [
  { value: '4+', label: 'Production projects shipped' },
  { value: '2+', label: 'Years building for the web' },
  { value: '18', label: 'Technologies in the toolkit' },
  { value: '100%', label: 'Commitment to clean code' },
];

export function Stats() {
  return (
    <section className="relative border-t border-white/[0.06] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              className="bg-background p-6 text-center transition-colors hover:bg-white/[0.02] sm:p-8"
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
