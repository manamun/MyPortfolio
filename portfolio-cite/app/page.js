"use client"

import {useEffect, useRef} from 'react';
import Footer from './components/Footer/Footer';
import AboutMe from './components/Aboutme/Aboutme';
import Works from './components/Works/Works';

export default function Home() {
  return (
    <div>
      <AboutMe/>
      <Works />
      <Footer />
    </div>
  );
}
