'use client';

import { useState } from 'react';
import { Braces, Database, GitBranch, Layout, Server, Terminal, Wrench } from 'lucide-react';
import { skills } from '@/lib/data';

const categories = ['All', 'Backend', 'Frontend', 'Tools & DevOps'];
const icons = { Backend: Server, Frontend: Layout, 'Tools & DevOps': Wrench };

export function Skills() {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? skills : skills.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="border-t border-white/[0.06] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              The toolkit
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
              Tools I use to
              <br />
              <span className="text-muted-foreground">bring ideas to life.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A practical toolkit shaped by real projects, production constraints, and a constant desire to improve.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-4">
          {categories.map((item) => {
            const Icon = item === 'All' ? Braces : icons[item as keyof typeof icons];
            return (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${category === item ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-white/[0.04] hover:text-foreground'}`}
              >
                <Icon className="h-4 w-4" />
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, index) => (
            <div key={skill.name} className="glass rounded-xl p-5 transition-all duration-300 hover:border-primary/20" style={{ animationDelay: `${index * 60}ms` }}>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold">{skill.name}</span>
                <span className="font-mono text-xs text-primary">{skill.level}%</span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-300 transition-all duration-1000" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Terminal, label: 'Backend', value: 'Laravel · PHP · APIs' },
            { icon: Layout, label: 'Frontend', value: 'React · Next.js · UI' },
            { icon: Database, label: 'Data & DevOps', value: 'MySQL · CI/CD · SonarQube · AI Tools' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-dashed border-white/10 p-5">
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
