import React from 'react'

const EmptyState = ({title = "No data found", message = "There is nothing to display right now.", icon = "🪼"}) => {
  return (
    <div className='flex flex-col items-center justify-center rounded-2xl border border-dashed border-purple-200 bg-gradient-to-br from-white to-purple-50 px-6 py-12 text-center'>
        <div className='mb-4 text-5xl '>{icon}</div>
        <h2 className='text-4xl font-semibold text-gray-800'>{title}</h2>
        <p className='mt-2 max-w-md text-sm text-gray-500'>{message}</p>
    </div>
  )
}

export default EmptyState