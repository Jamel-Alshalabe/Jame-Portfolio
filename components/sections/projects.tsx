'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, Layers3, X } from 'lucide-react';
import { projects, type Project } from '@/lib/data';

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/[0.06]">
      <button onClick={() => onSelect(project)} className="block w-full text-left">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {project.category}
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <h3 className="max-w-[80%] font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tech}</span>)}
          </div>
        </div>
      </button>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={project.title}>
      <button className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-label="Close project details" />
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-card shadow-2xl animate-scale-in">
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-primary hover:text-primary-foreground">
          <X className="h-4 w-4" />
        </button>
        <div className="relative aspect-[2/1] overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
        <div className="-mt-10 relative px-6 pb-8 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{project.category}</span>
          <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{project.title}</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.longDescription}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => <div key={feature} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</div>)}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Visit live project <ExternalLink className="h-4 w-4" />
            </a>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => <span key={tech} className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-muted-foreground">{tech}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="projects" className="border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Selected work
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              A few things
              <br />
              <span className="text-muted-foreground">I&apos;ve built.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Layers3 className="h-4 w-4 text-primary" />
            Real products. Real problems. Real impact.
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.title} project={project} onSelect={setSelected} />)}
        </div>
        <div className="mt-6 md:mx-auto md:max-w-[calc(50%-12px)] lg:max-w-[calc(33.333%-16px)]">
          {projects.filter((project) => !project.featured).map((project) => <ProjectCard key={project.title} project={project} onSelect={setSelected} />)}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">Click any project to explore the details</p>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
