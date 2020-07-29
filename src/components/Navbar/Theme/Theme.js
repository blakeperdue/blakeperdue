import React from 'react'
import IconDay from './Icons/IconDay'
import IconNight from './Icons/IconNight'


const themeLabels = {
  en: 'Toggle theme',
  es: 'Alternar tema',
  pt: 'Alternar tema',
  zh: '切换主题',
}

const Theme = ({ language, theme, toggleTheme }) => (
  <div className="theme">
    <button
      className="btn-plain theme-toggle"
      onClick={e => { e.currentTarget.blur(); toggleTheme() }}
      title={themeLabels[language]}
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
