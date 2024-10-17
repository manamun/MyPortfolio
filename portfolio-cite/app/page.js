"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {useEffect, useRef} from 'react';
import styles from './page.module.css';

export default function Home() {
  const projects = [
    {id: 1, title: 'Project1', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project2', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project3', image: '/images/sample03.jpg', page: '/projects/project1'}
  ];

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
      <header className={styles.siteHeader}>
        <nav className = {styles.navbar}>
          <ul>
            <li>
              <Link href='/projects'>Works</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className = {styles.title}>Manamun's Portfolio</h1>
      <section ref = {galleryRef} className = {styles.gallery}>
        {projects.map((project) => (
        <Link href ={project.page} key={project.id}>
          <div className={`${styles.galleryItem} ${styles.hidden}`}>
            <Image
              src = {project.image}
              alt = {project.title}
              width = {400}
              height = {300}
              className={styles.image}
            />
            <h3 className={styles.worktitle}>{project.title}</h3>
          </div>
        </Link>
      ))}</section>
      <footer className = {styles.footer}>
        <a href='https://twitter.com/manamun_prog' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faXTwitter}/>
        </a>
        <a href='https://www.instagram.com/Username_ld' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href='https://github.com/manamun' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </footer>
    </div>
  );
}
