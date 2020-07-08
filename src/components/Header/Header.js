import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import colors from 'styles/colors'
import { spacing, grid } from 'styles/spacing'
import Logo from 'components/Logo'

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderTop: `solid 5px ${colors.second}`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: grid.width,
        padding: `${spacing.xlarge} 0 ${spacing.large}`,
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          title={siteTitle}
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
