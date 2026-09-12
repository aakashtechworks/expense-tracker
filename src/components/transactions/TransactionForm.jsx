import React, { useState } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'
import { categories } from '../../constants/Categories'

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
    })

    const handleChange = (event) => {
        const {name , value} = event.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

            ...(name === "type" && {
                category: "",
            }),
        }))
    }

  return (
    <Card className='w-full max-w-2xl'>
        <h2 className='text-2xl font-bold text-gray-800'>Add Transaction</h2>

        <form className='mt-6 flex flex-col gap-4'>
            <Input name="title" value={formData.title} onChange={handleChange} placeholder="Enter transaction title" />
            <Input type='number' value={formData.amount} onChange={handleChange} name="amount" placeholder="Enter amount" />
            <select name='type' value={formData.type} onChange={handleChange} className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200'>
                <option value="">Select type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select name='category' value={formData.category} onChange={handleChange} disabled={!formData.type} className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 disabled:cursor-not-allowed disabled:bg-gray-100'>
                <option value="">Select category</option>
                
                {
                    formData.type && 
                       categories[formData.type].map((category)=>(
                        <option key={category} value={category}>{category}</option>
                       ))
                }
            </select>
            <Input type='date' name="date" />

            <Button type='submit'>
               Add Transaction
            </Button>
        </form>
    </Card>
  )
}

export default TransactionForm