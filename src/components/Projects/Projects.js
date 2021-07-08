import React from 'react'
import { m } from 'framer-motion'
import ProjectsData from './ProjectsData'
import './projects.sass'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 }
}

const Projects = ({ language, theme }) => (
  <m.ul
    className="projects"
    initial="hidden"
    animate="show"
    variants={container}
    >

    {ProjectsData.map((p, index) => (
      <m.li
        className="project"
        key={p.title}
        variants={item}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.95 }}s
        >
        <a
          className="project-link"
          href={p.url}
          key={p.title}
          rel="noreferrer"
          target="_blank"
          title={p.title.replace(/(<([^>]+)>)/gi, '').replace('&nbsp;', '')}
        >
          <div className="project-img">
            <picture className="project-picture">
              <source type="image/webp" srcSet={`/projects/${p.img.replace('.jpg', '.webp').replace('.png', '.webp')}`} />
              <source type="image/jpeg" srcSet={`/projects/${p.img}`} />
              <img src={`/projects/${p.img}`} alt={p.title} />
            </picture>
          </div>
          <div className="project-shade" />
          <div className="project-overlay" />
          <div className="project-details">
            <h3 className="project-title" dangerouslySetInnerHTML={{ __html: p.title }} />
            <h4 className="project-role">{p[language].role}</h4>
            <p className="project-info">{p[language].info}</p>
          </div>
        </a>
      </m.li>
    ))}

  </m.ul>
)

export default Projects
