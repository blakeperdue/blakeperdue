import React from 'react'
import SEO from 'components/SEO/SEO'
import { motion } from 'framer-motion'
import './welcome.sass'

const bio = {
  en: { h1: 'Hi there, I\'m' },
  es: { h1: 'Hola, soy' },
  pt: { h1: 'Oi lá estou eu sou' },
  zh: { h1: '嗨，我是' }
}

const Welcome = ({ language }) => (
  <>
    <motion.div
      className="welcome-bg"
      initial={{ top: '100%', height: 0 }}
      animate={{ top: 0, height: '100vh', transition: { ease: [0.76, 0, 0.24, 1], duration: 1 } }}
    />
    <SEO theme="welcome" language={language} />
    <h1 className="welcome-h1 h1 center">
      {bio[language].h1}&nbsp;
      <strong className="h1-bold">Blake Perdue</strong>.
    </h1>
  </>
)

export default Welcome
