import React from 'react'
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
          <div
            className="project-img"
            style={{ backgroundImage: `url(/projects/${p.img})`}}
          />
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

export default Projects