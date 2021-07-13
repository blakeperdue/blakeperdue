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
      // repeat: 1,
      // repeatType: 'reverse',
      // repeatDelay: 1.5,
      ease: [0.87, 0, 0.13, 1],
      duration: 1
    }
  },
  hideWelcome: {
    height: 0,
    translateY: 0,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 1
    }
  }
}

const variants2 = {
  showWelcome: {
    opacity: 1
  },
  hideWelcome: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.25
    }
  }
}

const Welcome = ({ language, show }) => {
  return (
    <>
      <m.div
        className="welcome-bg"
        initial="hidden"
        animate={show}
        variants={variants}
      />
      <m.h1 className="welcome-h1 h1 center" initial="showWelcome" animate={show} variants={variants2}>
        {BioText[language].h1}&nbsp;
        <strong className="h1-bold">Blake Perdue</strong>.
      </m.h1>
    </>
  )
}

export default Welcome
