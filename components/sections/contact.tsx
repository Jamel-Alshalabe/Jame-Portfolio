'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Start a conversation
            </div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Have a project
              <br />
              <span className="text-gradient">in mind?</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-muted-foreground">I&apos;d love to hear about it. Whether you have a clear brief or just an early idea, let&apos;s talk about how we can make it real.</p>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-primary transition-colors group-hover:border-primary/40"><Mail className="h-4 w-4" /></span>
                {contactInfo.email}
                <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
              <a href={`tel:${contactInfo.phoneRaw}`} className="group flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-primary transition-colors group-hover:border-primary/40"><Phone className="h-4 w-4" /></span>
                {contactInfo.phone}
              </a>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-primary"><MapPin className="h-4 w-4" /></span>
                {contactInfo.address}
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="h-7 w-7" /></div>
                <h3 className="mt-6 font-display text-xl font-semibold">Thanks for reaching out.</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">Your message is ready to go. I&apos;ll get back to you as soon as possible.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-medium text-primary hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block"><span className="mb-2 block text-xs font-medium text-muted-foreground">Your name</span><input required name="name" type="text" placeholder="John Doe" className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50" /></label>
                  <label className="block"><span className="mb-2 block text-xs font-medium text-muted-foreground">Email address</span><input required name="email" type="email" placeholder="john@company.com" className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50" /></label>
                </div>
                <label className="block"><span className="mb-2 block text-xs font-medium text-muted-foreground">Subject</span><input required name="subject" type="text" placeholder="Let&apos;s build something great" className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50" /></label>
                <label className="block"><span className="mb-2 block text-xs font-medium text-muted-foreground">Tell me about your project</span><textarea required name="message" rows={5} placeholder="A little about what you&apos;re working on..." className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50" /></label>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow">Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
