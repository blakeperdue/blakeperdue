import React from "react"
import Navbar from 'components/Navbar/Navbar'
import './fonts.sass'
import './layout.sass'
import './grid.sass'

const Layout = ({ children, theme, toggleTheme, language, setLanguage }) => (
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
)

export default Layout
