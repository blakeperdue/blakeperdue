import React from 'react'
import SEO from 'components/SEO/SEO'
import Navbar from 'components/Navbar/Navbar'
import ConsoleByline from 'components/ConsoleByline/ConsoleByline'
import './fonts.sass'
import './layout.sass'
import './grid.sass'

const Layout = ({ children, theme, toggleTheme, language, setLanguage }) => (
  <>
    <SEO theme={theme} language={language} />
    <div className="layout">
      <a href="#main" className="skipToMain">Skip to main content</a>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
      />
      <main>{children}</main>
    </div>
    <ConsoleByline />
  </>
)

export default Layout
