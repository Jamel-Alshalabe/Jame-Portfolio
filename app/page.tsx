import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Process } from '@/components/sections/process';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Skills } from '@/components/sections/skills';
import { Stats } from '@/components/sections/stats';
import { TechMarquee } from '@/components/sections/tech-marquee';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <TechMarquee />
      <Skills />
      <Projects />
      <Process />
      <Services />
      <Experience />
      <Contact />
    </>
  );
}
