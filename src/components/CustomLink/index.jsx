import React from 'react'
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  const navigate = useNavigate()

  return (
    <li
      className={`${props.key === 2 && 'text-blue'}`}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        navigate(to)
      }}
    >
      <Link className='' to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default CustomLink
