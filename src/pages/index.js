import React, { useState } from 'react'
// import { motion } from 'framer-motion'
import SEO from 'components/SEO/SEO'
import Layout from 'components/Layout/Layout'
import BackgroundPattern from 'components/Layout/BackgroundPattern'
import Welcome from 'components/Welcome/Welcome'
import Intro from 'components/Intro/Intro'
import Projects from 'components/Projects/Projects'
import ConsoleByline from 'components/ConsoleByline/ConsoleByline'

// const variants = {
//   hidden: { },
//   showWelcome: { transition: { duration: 1 }}
// }

// const variantsLayout = {
//   hidden: { opacity: 0 },
//   showWelcome: { opacity: 1}
// }
const themes = ['light', 'dark', 'fire']

const Home = () => {
  let useTheme = themes.sort(() => .5 - Math.random()).slice(0, 1)[0]
  let useLanguage = 'en'

  if (typeof window !== 'undefined' && window.localStorage) {
    useTheme = window.localStorage.getItem('theme') || useTheme
    useLanguage = window.localStorage.getItem('language') || useLanguage
  }
  const [theme, setTheme] = useState(useTheme)
  const [language, setLanguage] = useState(useLanguage)
  // const [welcome, setWelcome] = useState('hidden')

  const toggleTheme = () => {
    let newTheme
    if (theme === 'light') newTheme = 'dark'
    else if (theme === 'dark') newTheme = 'fire'
    else if (theme === 'fire') newTheme = 'light'
    setTheme(newTheme)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <>
      {/* <Welcome language={language} /> */}
      <Layout
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        <SEO theme={theme} language={language} />
        <BackgroundPattern theme={theme} />
        {/* <div style={{ background: '#fff', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', zIndex: 99 }} /> */}
        <Intro language={language} />
        <Projects language={language} theme={theme} />
        <ConsoleByline />
      </Layout>
    </>
  )
}

export default Home
