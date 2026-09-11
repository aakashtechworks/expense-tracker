import React from 'react'

const Input = ({type="text", name, value, onChange, placeholder}) => {
  return (
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200' />
  )
}

export default Input