import React, { useContext, useState } from 'react'
import TransactionList from '../components/transactions/TransactionList'
import { TransactionContext } from '../context/TransactionContext'



const Transaction = () => {

    const { transactions, deleteTransaction } = useContext(TransactionContext)
    const [filterType, setFilterType] = useState("all")
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterDate, setFilterDate] = useState("")

    const filteredTransactions = transactions.filter((transaction) => {
    const typeMatch = filterType === "all" || transaction.type === filterType

    const categoryMatch = filterCategory === "all" || transaction.category === filterCategory

    const dateMatch = !filterDate || transaction.date === filterDate

    return typeMatch && categoryMatch && dateMatch
    
  })
  return (
    <main className='min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white'>
      <section className='mx-auto w-full max-w-7xl px-4 py-8'>
      <div className='mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/20 bg-white/10 p-5  backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4'>
      <div>
         <label htmlFor="" className='mb-2 block text-sm font-medium'>Filter by Type</label>

            <select name="" id="" value={filterType} onChange={(event) => setFilterType(event.target.value)} className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none backdrop-blur-md'>
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
      </div>
      <div>
        <label htmlFor="" className='mb-2 block text-sm font-medium'>Filters by Category</label>
        <select name="" id="" value={filterCategory} onChange={(event) => setFilterCategory(event.target.value)} className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none backdrop-blur-md'>
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
      </div>
            
            
            <div>
              <label htmlFor="" className='mb-2 block text-sm font-medium'>Filter by Date</label>
              <input type="date" value={filterDate} onChange={(event)=>setFilterDate(event.target.value)} className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none backdrop-blur-md'/>
            </div>

            <div className='flex items-end'>
              <button
              type='button' onClick={()=>{
                setFilterType("all")
                setFilterCategory("all")
                setFilterDate("")
              }} className='w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105'>
              Clear Filters
            </button>

            </div>
          </div>
          <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction} />

    </section>

    </main>
    
    
    
  )
}

export default Transaction