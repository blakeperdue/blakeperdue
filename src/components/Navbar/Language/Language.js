import React, { memo, useState } from 'react'
import './language.sass'
import colors from 'styles/colors'

// list of supported languages
const languages = [
  { name: 'English', code: 'en' },
  { name: 'Español', code: 'es' },
  { name: 'Português', code: 'pt' },
  { name: '中文简体', code: 'zh' },
]

// store a list of all the lang strings needed for this component
const langStrings = {
  close: { en: 'Close Menu', es: 'Cerrar menú', pt: 'Fechar menu', zh: '关闭选单' },
  change: { en: 'Change language', es: 'Cambiar idioma', pt: 'Mudar idioma', zh: '改变语言' },
}

const Language = ({ theme, language, setLanguage }) => {
  const [showMenu, setShowMenu] = useState(false)
  const arrowColor = theme === 'dark' ? colors.dark.text : colors.light.text

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const doSetLanguage = lang => {
    setShowMenu(false)
    setLanguage(lang)
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('language', lang)
    }
  }


  return (
    <div className="language">
      <button
        title={langStrings.change[language]}
        className={`btn-plain language-btn ${showMenu ? 'open' : 'close'}`}
        onClick={() => toggleMenu()}
      >
        <span className={`language-flag language-${language}`} />
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M.224 1.35l4.24 4.418c.296.31.777.31 1.073 0l4.24-4.418C10.253.852 9.915 0 9.24 0H.76C.084 0-.254.852.224 1.35z" fill={arrowColor} fillRule="nonzero"/></svg>
      </button>
      <button
        className={`btn-plain language-close ${showMenu ? 'open' : 'close'}`}
        onClick={() => toggleMenu()}
        onKeyDown={() => toggleMenu()}
        title={langStrings.close[language]}
      >
        {langStrings.close[language]}
      </button>
      <div className={`language-menu ${showMenu ? 'open' : 'close'}`} role="menu">
        <ul className="language-ul">
          {languages.map((lang, index) => (
            <li
              className="language-li"
              key={lang.name}
              tabIndex={index === 0 ? '0' : '-1'}
            >
              <button
                alt={lang.name}
                className="btn-plain language-menu-btn"
                onClick={() => doSetLanguage(lang.code)}
              >
                <span className={`language-flag language-${lang.code}`} />&nbsp;{lang.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(Language)
