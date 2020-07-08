import React from 'react'
import Social from './Social/Social'
import Theme from './Theme/Theme'
import './navbar.sass'

const Navbar = ({ theme, toggleTheme }) => {
  // get theme here
  return (
    <header>
      <div className="navbar container fluid">
        <div className="row">
          <div className="col-6">
            <Social theme={theme} />
          </div>
          <div className="col-6 right">
            <Theme theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
