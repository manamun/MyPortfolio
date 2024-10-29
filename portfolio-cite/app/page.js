"use client"

import {useEffect, useRef} from 'react';
import Footer from './components/Footer/Footer';
import AboutMe from './components/Aboutme/Aboutme';
import Works from './components/Works/Works';
import "./index.css";
import { Box } from '@mui/material';

export default function Home() {
  return (
    <body>
      <AboutMe/>
      <Works />
      <Footer />
    </body>
  );
}
