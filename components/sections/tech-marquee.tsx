const techList = [
  'PHP',
  'Laravel',
  'Node.js',
  'Express',
  'React',
  'Next.js',
  'MySQL',
  'Tailwind CSS',
  'Bootstrap',
  'REST API',
  'Git',
  'GitHub Actions',
  'SonarQube',
  'AI Tools',
  'Codex',
  'Claude',
  'Copilot',
  'Modular Architecture',
];

export function TechMarquee() {
  const doubled = [...techList, ...techList];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-black/20 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8">
        {doubled.map((tech, index) => (
          <div key={`${tech}-${index}`} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-sm font-medium text-muted-foreground/60 transition-colors hover:text-primary">
              {tech}
            </span>
            <span className="h-1 w-1 rounded-full bg-primary/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
