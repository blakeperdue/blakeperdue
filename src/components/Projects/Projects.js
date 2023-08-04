import React, { memo } from 'react'
import ProjectsData from './ProjectsData'
import './projects.sass'


const Projects = ({ language, theme }) => (
  <ul className="projects">

    {ProjectsData.map((p, index) => (
      <li className="project" key={p.title}>
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
      </li>
    ))}

  </ul>
)

export default memo(Projects)
