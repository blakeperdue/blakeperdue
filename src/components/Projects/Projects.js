import React, { useState } from 'react'
import ProjectsData from './ProjectsData'
import './projects.sass'
import { useSpring, animated, config } from 'react-spring'

const Projects = ({ language, theme }) => {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(40px)' },
    reset: true,
    reverse: flip,
    delay: key => { console.log("key = ", key) },
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return (
    <ul className="projects">

      {ProjectsData.map((p, i) => (
        <animated.li
          className="project"
          key={p.title}
          style={props}
          delay={i * 200}
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
              <h4 className="project-role">{p[language].role}{i}</h4>
              <p className="project-info">{p[language].info}</p>
            </div>
          </a>
        </animated.li>
      ))}

    </ul>
  )
}

export default Projects
