import React from 'react'
import colors from 'styles/colors'

const IconEmail = ({ theme }) => (
  <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.4 0A1.4 1.4 0 000 1.4v8.4a1.4 1.4 0 001.4 1.4h11.2A1.4 1.4 0 0014 9.8V1.4A1.4 1.4 0 0012.6 0H1.4zm0 1.4h11.2v.701L7 5.6 1.4 2.101V1.4zm0 2.101L7 7l5.6-3.499V9.8H1.4V3.501z" fill={theme === 'dark' ? colors.dark.text : colors.light.text} fillRule="nonzero"/></svg>
)

export default IconEmail
