import React, { useState } from 'react'
import Layout from 'components/Layout/Layout'
import SEO from 'components/SEO/SEO'
import Intro from 'components/Intro/Intro'
import Projects from 'components/Projects/Projects'

const HomePage = () => {
  let savedTheme
  if (typeof window !== 'undefined' && window.localStorage) {
    savedTheme = window.localStorage.getItem('theme')
  }
  const randomTheme = Math.random() >= 0.5 ? 'dark' : 'light'
  const [theme, setTheme] = useState(savedTheme === null ? randomTheme : savedTheme)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <SEO theme={theme} />
      <Intro theme={theme} />
      <Projects theme={theme} />
    </Layout>
  )
}

export default HomePage
