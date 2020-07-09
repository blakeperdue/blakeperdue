import React from "react"
import Navbar from 'components/Navbar/Navbar'
import './layout.sass'
import './grid.sass'

const Layout = ({ children, theme, toggleTheme, language, setLanguage }) => (
  <div className="layout">
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
