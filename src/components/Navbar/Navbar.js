import React, { memo } from 'react'
import Social from './Social/Social'
import Language from './Language/Language'
import Theme from './Theme/Theme'
import './navbar.sass'

const Navbar = ({ theme, toggleTheme, language, setLanguage }) => (
  <header>
    <div className="navbar container fluid">
      <div className="row">
        <div className="col-6-sm">
          <Social theme={theme} />
        </div>
        <div className="col-6-sm">
          <div className="navbar-options">
            <Theme language={language} theme={theme} toggleTheme={toggleTheme} />
            <Language language={language} setLanguage={setLanguage} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default memo(Navbar)
