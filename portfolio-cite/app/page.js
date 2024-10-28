"use client"

import {useEffect, useRef} from 'react';
import Footer from './components/Footer/Footer';
import AboutMe from './components/Aboutme/Aboutme';
import Works from './components/Works/Works';
import styles from './page.module.css';

export default function Home() {

  const galleryRef = useRef(null);

  useEffect(() =>{
    //Intersection Observer APIを使用したスクロール時のアニメーション追加
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
          entry.target.classList.remove(styles.hidden);
        }
      });
    },
    {threshold: 0.1}
  );

  const elements = document.querySelectorAll(`.${styles.galleryItem}.${styles.hidden}`);
  elements.forEach(el => observer.observe(el));

  return () => {
    if (elements && elements.length > 0){
      if (elements) elements.forEach(el => observer.unobserve(el));
    }
  };
}, []);

  return (
    <div>
      <AboutMe/>
      <Works />
      <Footer />
    </div>
  );
}
