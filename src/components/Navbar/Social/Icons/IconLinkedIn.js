import React from 'react'
import colors from 'styles/colors'

const IconLinkedIn = ({ theme }) => (
  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.57 4.468c2.93 0 3.47 1.926 3.47 4.43V14h-2.89V9.477c0-1.079-.02-2.466-1.504-2.466-1.506 0-1.737 1.175-1.737 2.388V14H5.018V4.7h2.775v1.27h.04c.386-.73 1.33-1.502 2.737-1.502zM3.203 4.7V14H.31V4.7h2.893zM1.727 0c.93 0 1.686.755 1.686 1.684a1.687 1.687 0 01-3.372 0C.04.754.796 0 1.727 0z" fill={theme === 'dark' ? colors.dark.text : colors.light.text} fillRule="nonzero"/></svg>
)

export default IconLinkedIn
