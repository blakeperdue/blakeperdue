import React from 'react'
import Social from './Social/Social'
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
            <button onClick={() => {toggleTheme()}}>options</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
