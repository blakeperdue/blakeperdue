import React from 'react'
import { m } from 'framer-motion'
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
      repeatDelay: 1.5,
      ease: [0.76, 0, 0.24, 1],
      duration: 1
    }
  },
  hideWelcome: {
    height: 0,
    transition: { ease: [0.76, 0, 0.24, 1], duration: 1 }
  }
}

const variants2 = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 2.8
    }
  }
}

const Welcome = ({ language }) => {
  return (
    <>
      <m.div
        className="welcome-bg"
        initial="hidden"
        animate="showWelcome"
        variants={variants}
      />
      <m.h1 className="welcome-h1 h1 center" initial="visible" animate="hidden" variants={variants2}>
        {BioText[language].h1}&nbsp;
        <strong className="h1-bold">Blake Perdue</strong>.
      </m.h1>
    </>
  )
}

export default Welcome
