import React from 'react'

const Button = ({children, type = "button", onClick, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-4 py-2 font-medium text-white transition-transform duration-300 hover:scale-105 ${className}`}>
        {children}
    </button>
  )
}

export default Button