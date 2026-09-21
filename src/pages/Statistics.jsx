import React, { useContext } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { TransactionContext } from '../context/TransactionContext'

const Statistics = () => {
  const { transactions } = useContext(TransactionContext)

  const totalIncome = transactions.filter((transaction) => transaction.type === "income").reduce((total, transaction)=> total + transaction.amount, 0)

  const totalExpense = transactions.filter((transaction) => transaction.type === "expense").reduce((total, transaction)=> total + transaction.amount, 0)

  const totalBalance = totalIncome - totalExpense

  const transactionCount = transactions.length

  const charData = [
    {
      name: "Income",
      income: totalIncome,
      expense: 0,
    },
    {
      name: "Expense",
      income: 0,
      expense: totalExpense,
    },
  ]

  const expenseTransaction = transactions.filter(
    (transaction) => transaction.type === "expense"
  )

  const categoryTotals = expenseTransaction.reduce((acc, transaction) => {
    const category = transaction.category

    acc[category] = (acc[category] || 0) + transaction.amount

    return acc
  },{})

  const categoryExpenseData = Object.entries(categoryTotals).map(([name, amount])=> ({
    name,
    amount
  }))

  const incomeTransaction = transactions.filter(
    (transaction) => transaction.type === "income"
  )

  const incomeCategoryTotals = incomeTransaction.reduce((acc, transaction) => {
    const category = transaction.category

    acc[category] = (acc[category] || 0) + transaction.amount

    return acc
  },{})

  const incomeCategoryData = Object.entries(incomeCategoryTotals).map(([name, amount])=> ({
    name,
    amount
  }))
  return (
    <main className='min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white'>
      <section className='mx-auto w-full max-w-7xl px-4 py-8'>
       <div className='mb-8 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md'>
         <h2 className='mb-5 text-xl font-semibold'>Income Vs Expense</h2>
          <div className='h-80 w-full'>
                       <ResponsiveContainer width="100%" height="100%" >
                         <BarChart data={charData}>
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip formatter={(value) => `Rs.${value}`}/>
                           <Bar dataKey="income" name="Income" fill='#22c55e' radius={[8, 8, 0, 0]}/>
                           <Bar dataKey="expense" name="Expense" fill='#f43f5e' radius={[8, 8, 0, 0]}/>
                         </BarChart>
                       </ResponsiveContainer>
                     </div>
         </div>     
         <div className='mb-8 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md'>
                     <h2 className='mb-5 text-xl font-semibold'>Income by Category</h2>
         
                     <div className='h-80 w-full'>
                       <ResponsiveContainer width="100%" height="100%" >
                         <BarChart data={incomeCategoryData}>
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip formatter={(value) => `${value}`} />
                           <Bar dataKey="amount" fill='#8b5cf6' radius={[8, 8, 0, 0]} />
                         </BarChart>
                       </ResponsiveContainer>
                     </div>
                   </div>_
         
                   <div className='mb-8 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md'>
                     <h2 className='mb-5 text-xl font-semibold'>Expense by Category</h2>
         
                     <div className='h-80 w-full'>
                       <ResponsiveContainer width="100%" height="100%" >
                         <BarChart data={categoryExpenseData}>
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip formatter={(value) => `${value}`} />
                           <Bar dataKey="amount" fill='#06b6d4' radius={[8, 8, 0, 0]} />
                         </BarChart>
                       </ResponsiveContainer>
                     </div>
                   </div>
    </section>

    </main>
    
  )
}

export default Statistics