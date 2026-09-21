import React, { useContext, useEffect, useState } from 'react'
import {formatCurrency} from '../utils/formatCurrency'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import TransactionForm from '../components/transactions/TransactionForm'
// import TransactionList from '../components/transactions/TransactionList'
import { TransactionContext } from '../context/TransactionContext'


const Dashboard = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext)
  // const [filterType, setFilterType] = useState("all")
  // const [filterCategory, setFilterCategory] = useState("all")
  // const [filterDate, setFilterDate] = useState("")
  

  // const filteredTransactions = transactions.filter((transaction) => {
  //   const typeMatch = filterType === "all" || transaction.type === filterType

  //   const categoryMatch = filterCategory === "all" || transaction.category === filterCategory

  //   const dateMatch = !filterDate || transaction.date === filterDate

  //   return typeMatch && categoryMatch && dateMatch
    
  // })








  const totalIncome = transactions.filter((transaction) => transaction.type === "income").reduce((total, transaction)=> total + transaction.amount, 0)

  const totalExpense = transactions.filter((transaction) => transaction.type === "expense").reduce((total, transaction)=> total + transaction.amount, 0)

  const totalBalance = totalIncome - totalExpense

  const transactionCount = transactions.length

  


  
  return (
    <main className='min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white'>
      <section className='mx-auto w-full max-w-7xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-white'>Expense Tracker Dashboard</h1>

        <div className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md'>
            <p className='text-sm opacity-70'>Total Income</p>
            <h2 className='mt-2 text-2xl font-bold text-emerald-400'>Rs. {formatCurrency(totalIncome)}</h2>
          </div>

          <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md'>
            <p className='text-sm opacity-70'>Total Expense</p>
            <h2 className='mt-2 text-2xl font-bold text-red-400'>Rs. {formatCurrency(totalExpense)}</h2>
          </div>

          <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md'>
            <p className='text-sm opacity-70'>Total Balance</p>
            <h2 className='mt-2 text-2xl font-bold text-blue-400 '>Rs. {formatCurrency(totalBalance)}</h2>
          </div>

          <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md'>
            <p className='text-sm opacity-70'>Total Transactions</p>
            <h2 className='mt-2 text-2xl font-bold text-purple-500 '>{transactionCount}</h2>
          </div>
        </div>

        <div className='mt-6'>
          <TransactionForm  />
        </div>
    </section>
      
    </main>
    
  )
}

export default Dashboard