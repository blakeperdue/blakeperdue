import React, { useState } from 'react'
import Layout from 'components/Layout/Layout'
import SEO from 'components/SEO/SEO'
import Intro from 'components/Intro/Intro'
import Projects from 'components/Projects/Projects'
import ConsoleByline from 'components/ConsoleByline/ConsoleByline'

const Home = () => {
  let useTheme = Math.random() >= 0.5 ? 'dark' : 'light'
  let useLanguage = 'en'

  if (typeof window !== 'undefined' && window.localStorage) {
    useTheme = window.localStorage.getItem('theme') || useTheme
    useLanguage = window.localStorage.getItem('language') || useLanguage
  }
  const [theme, setTheme] = useState(useTheme)
  const [language, setLanguage] = useState(useLanguage)

  const toggleTheme = () => {
    let newTheme
    if (theme === 'light') newTheme = 'dark'
    if (theme === 'dark') newTheme = 'fire'
    if (theme === 'fire') newTheme = 'light'
    setTheme(newTheme)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      <SEO theme={theme} language={language} />
      <Intro language={language} />
      <Projects language={language} theme={theme} />
      <ConsoleByline />
    </Layout>
  )
}

export default Home
