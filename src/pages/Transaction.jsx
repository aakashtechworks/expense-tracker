import React from 'react'
import EmptyState from '../components/common/EmptyState'

const Transaction = () => {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Transaction</h1>

        <div className='mt-6 '>
          <EmptyState 
          title="No transaction yet" message='Add your first income or expanse to start tracking your finances.' />
        </div>
    </section>
  )
}

export default Transaction