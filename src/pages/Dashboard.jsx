import React from 'react'
import TransactionForm from '../components/transactions/TransactionForm'


const Dashboard = () => {
  
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Expense Tracker Dashboard</h1>

        <div className='mt-6'>
          <TransactionForm  />
        </div>
    </section>
  )
}

export default Dashboard