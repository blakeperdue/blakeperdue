import React from 'react'
import SEO from 'components/SEO/SEO'
import './welcome.sass'

const bio = {
  en: { h1: 'Hi there, I\'m' },
  es: { h1: 'Hola, soy' },
  pt: { h1: 'Oi lá estou eu sou' },
  zh: { h1: '嗨，我是' }
}

const Welcome = ({ language }) => (
  <>
    <div className="welcome-bg" />
    <SEO theme="welcome" lang={language} />
    <h1 className="welcome-h1 h1 center">
      {bio[language].h1}&nbsp;
      <strong className="h1-bold">Blake Perdue</strong>.
    </h1>
  </>
)

export default Welcome
