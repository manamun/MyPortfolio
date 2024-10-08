import Image from 'next/image';
import Link from 'next/link';
import styles from './globals.css';

export default function Home() {
  const projects = [
    {id: 1, title: 'Project1', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project2', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project3', image: '/images/sample03.jpg', page: '/projects/project1'},
    {id: 1, title: 'Project4', image: '/images/sample03.jpg', page: '/projects/project1'}
  ];

  return (
    <div>
      <h1>MyPortfolio</h1>
      <div className = "gallery">
        {projects.map((project) => (
        <Link href ={project.page} key={project.id}>
          <div className="galleryItem">
            <Image
              src = {project.image}
              alt = {project.title}
              width = {400}
              height = {300}
              className="image"
            />
            <h3 className="title">{project.title}</h3>
          </div>
        </Link>))}</div>
    </div>
  );
}
