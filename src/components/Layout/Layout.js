import React from "react"
import PropTypes from "prop-types"
import Navbar from 'components/Navbar/Navbar'
import './layout.sass'
import './grid.sass'

const Layout = ({ children, theme, toggleTheme }) => (
  <div className="layout">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Layout
