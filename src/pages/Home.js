import React, { memo, useState, useEffect } from 'react'
import Layout from 'components/Layout/Layout'
import Welcome from 'components/Welcome/Welcome'
import Intro from 'components/Intro/Intro'
import Projects from 'components/Projects/Projects'

const Home = ({ language = 'en', setLanguage, theme = 'light', toggleTheme }) => {
  const [showWelcome, setShowWelcome] = useState('showWelcome')
  console.log(`Home theme = ${theme}`)
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowWelcome('hideWelcome'), 2000);
      // this will clear Timeout when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty [] if you pass a value to array,
    // like this - [data] than clearTimeout will run every time this value changes (useEffect re-run)
    []
  );

  return (
    <>
      <Welcome language={language} show={showWelcome} />
      <Layout
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        {showWelcome !== 'hideWelcome' && <div style={{ background: '#fff', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', zIndex: 99 }} />}
        <Intro language={language} />
        <Projects language={language} theme={theme} />
      </Layout>
    </>
  )
}

export default memo(Home)
