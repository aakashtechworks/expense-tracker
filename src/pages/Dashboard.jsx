import React, { useContext, useEffect, useState } from 'react'

import TransactionForm from '../components/transactions/TransactionForm'
import TransactionList from '../components/transactions/TransactionList'
import { TransactionContext } from '../context/TransactionContext'


const Dashboard = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext)
  // const [transactions, settransactions] = useState(()=>{
  //   try {const savedTransactions = localStorage.getItem("transactions")

  //   return savedTransactions ? JSON.parse(savedTransactions) : []
  //   } catch (error) {
  //     return []
  //   }
  // })

  // const addTransaction = (transaction) => {
  //     settransactions((prevTransactions)=>[
  //       ...prevTransactions,
  //       transaction,
  //     ])
  // }

  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions))
  // }, [transactions])

  // const deleteTransaction = (id) => {
  //   settransactions((prevTransactions) => prevTransactions.filter(
  //     (transaction) => transaction.id !== id
  //   ))
  // }
  
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Expense Tracker Dashboard</h1>

        <div className='mt-6'>
          <TransactionForm/>

          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
    </section>
  )
}

export default Dashboard