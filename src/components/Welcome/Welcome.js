// import React, { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import BioText from 'components/Intro/BioText'
import './welcome.sass'

const variants = {
  hidden: {
    translateY: '100vh',
    height: 0
  },
  showWelcome: {
    translateY: 0,
    height: '100vh',
    transition: {
      repeat: 1,
      repeatType: 'reverse',
      repeatDelay: 1,
      ease: [0.76, 0, 0.24, 1],
      duration: 1
    }
  },
  hideWelcome: {
    height: 0,
    transition: { ease: [0.76, 0, 0.24, 1], duration: 1 }
  }
}

const Welcome = ({ language }) => {
  // const [welcome, setWelcome] = useState('showWelcome')

  return (
    <>
      <motion.div
        className="welcome-bg"
        initial="hidden"
        animate="showWelcome"
        variants={variants}
      />
      <h1 className="welcome-h1 h1 center">
        {BioText[language].h1}&nbsp;
        <strong className="h1-bold">Blake Perdue</strong>.
      </h1>
    </>
  )
}

export default Welcome
