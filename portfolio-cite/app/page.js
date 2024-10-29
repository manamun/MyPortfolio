"use client"

import {useEffect, useRef} from 'react';
import Footer from './components/Footer/Footer';
import AboutMe from './components/Aboutme/Aboutme';
import Works from './components/Works/Works';
import { Box } from '@mui/material';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6E4E0",
        margin: 0,
        padding: 0,
        borderRadius: "30px",
      }}>
      <AboutMe/>
      <Works />
      <Footer />
    </Box>
  );
}
