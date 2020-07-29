import React, { useState } from 'react'
import Layout from 'components/Layout/Layout'
import SEO from 'components/SEO/SEO'
import Intro from 'components/Intro/Intro'
import Projects from 'components/Projects/Projects'

const HomePage = () => {
  let useTheme = Math.random() >= 0.5 ? 'dark' : 'light'
  let useLanguage = 'en'
  if (typeof window !== 'undefined' && window.localStorage) {
    let tmp = window.localStorage.getItem('theme')
    if (tmp !== null) useTheme = window.localStorage.getItem('theme')
    tmp = window.localStorage.getItem('language')
    if (tmp !== null) useLanguage = window.localStorage.getItem('language')
  }
  const [theme, setTheme] = useState(useTheme)
  const [language, setLanguage] = useState(useLanguage)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
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
      <SEO theme={theme} title="Blake Perdue – Product leader, designer and developer." lang={language} />
      <Intro language={language} />
      <Projects language={language} theme={theme} />
    </Layout>
  )
}

export default HomePage
