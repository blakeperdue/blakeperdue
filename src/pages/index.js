import React, { useState, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from 'components/Layout/Layout'
import BackgroundPattern from 'components/Layout/BackgroundPattern'
import Welcome from 'components/Welcome/Welcome'
import Intro from 'components/Intro/Intro'
import Projects from 'components/Projects/Projects'

const Home = () => {
  let useTheme = Math.random() < 0.5 ? 'light' : 'dark'
  let useLanguage = 'en'

  if (typeof window !== 'undefined' && window.localStorage) {
    useTheme = window.localStorage.getItem('theme') || useTheme
    useLanguage = window.localStorage.getItem('language') || useLanguage
  }
  const [theme, setTheme] = useState(useTheme)
  const [language, setLanguage] = useState(useLanguage)
  const [showWelcome, setShowWelcome] = useState('showWelcome')

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

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowWelcome('hideWelcome'), 2000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  return (
    <LazyMotion features={domAnimation} strict>
      <Welcome language={language} show={showWelcome} />
      <Layout
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        <BackgroundPattern theme={theme} />
        {showWelcome !== 'hideWelcome' && <div style={{ background: '#fff', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', zIndex: 99 }} />}
        <Intro language={language} />
        <Projects language={language} theme={theme} />
      </Layout>
    </LazyMotion>
  )
}

export default Home
