import React from 'react';
import Hero from '../components/Hero';
import Creators from '../components/Creators';
import Process from '../components/Process';
import SuccessStory from '../components/SuccessStory';
import Portfolio from '../components/Portfolio';
import Advantages from '../components/Advantages';
import Impact from '../components/Impact';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Creators />
      <Process />
      <SuccessStory />
      <Portfolio />
      <Advantages />
      <Impact />
      <Contact />
    </main>
  );
};

export default Home;
