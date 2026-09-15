import {  createContext, useEffect, useState } from "react";


export const TransactionContext = createContext()


export const TransactionProvider = ({children}) => {

    const [transactions, setTransactions] = useState(()=>{
        try {const savedTransactions = localStorage.getItem("transactions")
         return savedTransactions ? JSON.parse(savedTransactions) : []
         } catch (error) {
          return []
         }
    })

    useEffect(() => {
        localStorage.setItem("transactions", 
            JSON.stringify(transactions)
        )
    },[transactions])

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [
            ...prevTransactions,
            transaction,
        ])
    }

    const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => prevTransactions.filter(
      (transaction) => transaction.id !== id
    ))
  }
    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}