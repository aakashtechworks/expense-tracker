import React, { useState } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'
import { categories } from '../../constants/Categories'

const TransactionForm = ({addTransaction}) => {
    const initialFormdata = {
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
    }


    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const {name , value} = event.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

            ...(name === "type" && {
                category: "",
            }),
        }))

        setErrors((prevErrors) => ({
           ...prevErrors,
           [name]: "",
        }))
    }

    const validateForm = () => {
        const newErrors = {}

        if(!formData.title.trim()){
            newErrors.title = "Title is required"
        }

        if(!formData.amount){
            newErrors.amount = "Amount is required"
        } else if (Number(formData.amount)<= 0) {
            newErrors.amount = "Amount must be greater than 0"
        }

        if(!formData.type){
            newErrors.type = "Please select a type"
        }

        if(!formData.category){
            newErrors.category = "Please select a category"
        }

        if(!formData.date){
            newErrors.date = "Please select a date"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (event) => {
      event.preventDefault()

      const isValid = validateForm()

      if(!isValid) {
        return
      }

      const transaction = {
        id: crypto.randomUUID(),
        ...formData,
        amount: Number(formData.amount)
      }

      addTransaction(transaction)

      setFormData(initialFormdata)
      setErrors({})
    }

    

  return (
    <Card className='w-full max-w-2xl'>
        <h2 className='text-2xl font-bold text-gray-800'>Add Transaction</h2>

        <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-4'>
            <Input name="title" value={formData.title} onChange={handleChange} placeholder="Enter transaction title" />
            {
                errors.title && (
                    <p className='text-sm text-red-500'>{errors.title}</p>
                )
            }
            <Input type='number' value={formData.amount} onChange={handleChange} name="amount" placeholder="Enter amount" />
            {
                errors.amount && (
                    <p className='text-sm text-red-500'>{errors.amount}</p>
                )
            }
            <select name='type' value={formData.type} onChange={handleChange} className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200'>
                <option value="">Select type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            {
                errors.type && (
                    <p className='text-sm text-red-500'>{errors.type}</p>
                )
            }
            <select name='category' value={formData.category} onChange={handleChange} disabled={!formData.type} className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 disabled:cursor-not-allowed disabled:bg-gray-100'>
                <option value="">Select category</option>
                
                {
                    formData.type && 
                       categories[formData.type].map((category)=>(
                        <option key={category} value={category}>{category}</option>
                       ))
                }
            </select>
            {
                errors.category && (
                    <p className='text-sm text-red-500'>{errors.category}</p>
                )
            }
            <Input type='date' name="date" value={formData.date} onChange={handleChange}/>
            {
                errors.date && (
                    <p className='text-sm text-red-500'>{errors.date}</p>
                )
            }

            <Button type='submit'>
               Add Transaction
            </Button>
        </form>
    </Card>
  )
}

export default TransactionForm