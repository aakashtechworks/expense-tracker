import React, { useContext, useEffect, useState } from 'react'
import {formatCurrency} from '../utils/formatCurrency'


import TransactionForm from '../components/transactions/TransactionForm'
import TransactionList from '../components/transactions/TransactionList'
import { TransactionContext } from '../context/TransactionContext'


const Dashboard = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext)
  const [filterType, setFilterType] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterDate, setFilterDate] = useState("")
  

  const filteredTransactions = transactions.filter((transaction) => {
    const typeMatch = filterType === "all" || transaction.type === filterType

    const categoryMatch = filterCategory === "all" || transaction.category === filterCategory

    const dateMatch = !filterDate || transaction.date === filterDate

    return typeMatch && categoryMatch && dateMatch
    // if(filterType === "all"){
    //   return true
    // }
    // return transaction.type === filterType
  })

  const totalIncome = transactions.filter((transaction) => transaction.type === "income").reduce((total, transaction)=> total + transaction.amount, 0)

  const totalExpense = transactions.filter((transaction) => transaction.type === "expense").reduce((total, transaction)=> total + transaction.amount, 0)

  const totalBalance = totalIncome - totalExpense

  const transactionCount = transactions.length

  
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Expense Tracker Dashboard</h1>

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
            <h2 className='mt-2 text-2xl font-bold '>Rs. {formatCurrency(totalBalance)}</h2>
          </div>

          <div className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md'>
            <p className='text-sm opacity-70'>Total Transactions</p>
            <h2 className='mt-2 text-2xl font-bold '>{transactionCount}</h2>
          </div>
        </div>

        <div className='mt-6'>
          <TransactionForm  />
              
          <div className='my-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4'>
            <label htmlFor="" className='mb-2 block text-sm font-medium'>Filter by Type</label>

            <select name="" id="" value={filterType} onChange={(event) => setFilterType(event.target.value)} className='rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none backdrop-blur-md'>
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <select name="" id="" value={filterCategory} onChange={(event) => setFilterCategory(event.target.value)} className='rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none backdrop-blur-md'>
              <option value="all">All</option>
              {[...new Set(transactions.map((transaction)=>
              transaction.category))].map(
                (category)=> (
                  <option value={category} key={category}>
                    {category}
                  </option>
                )
              )}

            </select>
            <div>
              <label htmlFor="" className='mb-2 block text-sm font-medium'>Filter by Date</label>
              <input type="date" value={filterDate} onChange={(event)=>setFilterDate(event.target.value)} className='rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none backdrop-blur-md'/>
            </div>
            <button
              type='button' onClick={()=>{
                setFilterType("all")
                setFilterCategory("all")
                setFilterDate("")
              }} className='rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105'>
              Clear Filters
            </button>
          </div>
          
          <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
        </div>
    </section>
  )
}

export default Dashboard