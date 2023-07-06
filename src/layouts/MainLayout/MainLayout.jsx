import React from 'react'
import PropTypes from 'prop-types'

export default function MainLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
