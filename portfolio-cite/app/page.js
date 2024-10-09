"use client";

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useRef} from 'react';
import styles from './page.module.css';

export default function Home() {
  const projects = [
    {id: 1, title: 'Project1', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project2', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project3', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project4', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project5', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project6', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project7', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project8', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project9', image: '/images/sample03.jpg', page: '/projects/project1'}
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
    if (elements) elements.forEach(el => observer.unobserve(el));
  };
}, []);

  return (
    <div>
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
      <h1 className = {styles.title}>MyPortfolio</h1>
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
    </div>
  );
}
