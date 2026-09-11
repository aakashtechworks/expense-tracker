import React from 'react'

const Card = ({children, className="" }) => {
  return (
    <div className={`rounded-2xl border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur-sm transition duration-300 ${className}`}>
        {children}
    </div>
  )
}

export default Card