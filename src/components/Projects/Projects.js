import React from 'react'
import ProjectsData from './ProjectsData'
import './projects.sass'

const Projects = ({ theme }) => {
  return (
    <div class="projects">

      {ProjectsData.map(p => (
        <a
          className="project"
          href={p.url}
          key={p.title}
          rel="noreferrer"
          target="_blank"
          title="adf"
        >
          <div
            className="project-img"
            style={{ backgroundImage: `url(/projects/${p.img})`}}
          />
          <div className="project-shade" />
          <div className="project-overlay" />
          <div className="project-details">
            <h3 className="project-title">{p.title}</h3>
            <h4 className="project-role">{p.role}</h4>
            <p className="project-info">{p.info}</p>
          </div>
        </a>
      ))}

    </div>
  )
}

export default Projects