import React from 'react'
import IconDay from './Icons/IconDay'
import IconNight from './Icons/IconNight'


const Theme = ({ theme, toggleTheme }) => (
  <div className="theme">
    <button
      className="btn-plain theme-toggle"
      onClick={() => toggleTheme() }
      title="Toggle theme"
    >
      {theme === 'dark' && (
        <span className="theme-current"><IconNight />&nbsp; Night</span>
      )}
      {theme === 'light' && (
        <span className="theme-current"><IconDay />&nbsp; Day</span>
      )}
    </button>
  </div>
)

export default Theme
