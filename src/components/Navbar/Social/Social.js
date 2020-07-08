import React from 'react'
import IconGithub from './Icons/IconGithub'
import IconDribbble from './Icons/IconDribbble'
import IconLinkedIn from './Icons/IconLinkedIn'
import IconEmail from './Icons/IconEmail'


const sites = {
  github: { title: 'Github', url: 'http://github.com/blakeperdue' },
  linkedin: { title: 'LinkedIn', url: 'https://www.linkedin.com/in/blakeperdue' },
  dribbble: { title: 'Dribbble', url: 'http://dribbble.com/blakeperdue' },
  email: { title: 'Email me', url: 'hi@blakeperdue.com' },
}

const hiddenEmail = Buffer.from(sites.email.url).toString('base64')

const Social = ({ theme }) => {
  const openEmail = () => {
    if (typeof window !== 'undefined') {
      window.location = `mailto:${Buffer.from(hiddenEmail, 'base64').toString()}`
    }
  }

  return (
    <div className="social-links">
      <a
        className="social-link"
        href={sites.github.url}
        rel="noreferrer"
        target="_blank"
        title={sites.github.title}
      >
        <IconGithub theme={theme} />
      </a>
      <a
        className="social-link"
        href={sites.linkedin.url}
        rel="noreferrer"
        target="_blank"
        title={sites.linkedin.title}
      >
        <IconLinkedIn theme={theme} />
      </a>
      <a
        className="social-link"
        href={sites.dribbble.url}
        rel="noreferrer"
        target="_blank"
        title={sites.dribbble.title}
      >
        <IconDribbble theme={theme} />
      </a>
      <a
        className="social-link"
        href={`mailto: ${hiddenEmail}`}
        onClick={() => openEmail()}
        rel="noreferrer"
        target="_blank"
        title={sites.email.title}
      >
        <IconEmail theme={theme} />
      </a>
    </div>
  )
}

export default Social
