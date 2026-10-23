import React, { useEffect } from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Denish Borad | Python Backend Developer & Systems Engineer';
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};
