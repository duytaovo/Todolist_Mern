import React from 'react'
import PropTypes from 'prop-types'

export default function RegisterLayout({ children}) {
  return (
    <div>
      {children}
    </div>
  )
}

RegisterLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
