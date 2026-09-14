import React, { useState } from 'react'
import TransactionForm from '../components/transactions/TransactionForm'
import TransactionList from '../components/transactions/TransactionList'


const Dashboard = () => {
  const [transactions, settransactions] = useState([])

  const addTransaction = (transaction) => {
      settransactions((prevTransactions)=>[
        ...prevTransactions,
        transaction,
      ])
  }

  const deleteTransaction = (id) => {
    settransactions((prevTransactions) => prevTransactions.filter(
      (transaction) => transaction.id !== id
    ))
  }
  
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Expense Tracker Dashboard</h1>

        <div className='mt-6'>
          <TransactionForm addTransaction={addTransaction} />

          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
    </section>
  )
}

export default Dashboard