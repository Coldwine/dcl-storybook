import React from 'react'
import { any, string } from 'prop-types'

import './style.css'

const displayName = 'button'
const getClass = (base, color) => `${base} ${color}`

const handleClick = () => {
  console.log('Clicked')
}

const Button = ({ children, color }) => {
  return (
    <button className={getClass(displayName, color)} onClick={handleClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: 'default'
}

Button.propTypes = {
  children: any,
  color: string
}

export default Button
