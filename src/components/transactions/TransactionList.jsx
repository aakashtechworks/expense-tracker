import React from 'react'

const TransactionList = ({transactions, deleteTransaction,}) => {
    
    if(transactions.length === 0) {
        return (
            <div>
                <h2>No transactions yet</h2>
                <p>Add your first transaction to get started!</p>
            </div>
        )
    }

    

  return (
    <div>
        <h2>Transactions</h2>

        {
            transactions.map((transaction)=>(
                <div key={transaction.id} className='mb-4 flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 sm:flex-row sm:items-center sm:justify-between'>
                    <h3 className='text-lg font-semibold'>{transaction.title}</h3>
                    <p className='mt-1 text-sm opacity-70'>{transaction.category} . {transaction.date}</p>
                    <div className='text-left sm:text-right'>
                        <p className={`text-xl font-bold ${transaction.type === "income" ? "text-emerald-400" : "text-red-400"}`}>
                            {transaction.type === "income" ? "+" : "-"} {transaction.amount}
                        </p>
                    </div>
                    <span className='text-sm capitalize opacity-70'>{transaction.type}</span>

                    <button type='button'
                    onClick={() => deleteTransaction(transaction.id)} className='mt-2 text-sm font-medium text-red-400 transition hover:scale-105'>
                        Delete
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default TransactionList