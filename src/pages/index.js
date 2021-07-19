import React, { memo, useState, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Home from './Home'
import SEO from 'components/SEO/SEO'
import ConsoleByline from 'components/ConsoleByline/ConsoleByline'

const Index = () => {
  let useTheme = Math.random() < 0.5 ? 'light' : 'dark'
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
    else if (theme === 'dark') newTheme = 'fire'
    else if (theme === 'fire') newTheme = 'light'
    setTheme(newTheme)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newTheme)
    }
  }

  // show byline only once
  useEffect(() => { ConsoleByline(); return }, [])

  return (
    <LazyMotion features={domAnimation} strict>
      <SEO language={language} theme={theme} />
      <Home language={language} setLanguage={setLanguage} theme={theme} toggleTheme={toggleTheme} />
    </LazyMotion>
  )
}

export default memo(Index)
