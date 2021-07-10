import React, { useState } from 'react'
import Home from './Home'
import Welcome from 'components/Welcome/Welcome'

const Index = () => {
  let showWelcome = useState(true)
  let useLanguage = 'en'
  if (typeof window !== 'undefined' && window.localStorage) {
    useLanguage = window.localStorage.getItem('language') || useLanguage
  }
  return (
    <>
      {showWelcome && <Welcome language={useLanguage} />}
      {!showWelcome && <Home />}
    </>
  )
}

export default Index
