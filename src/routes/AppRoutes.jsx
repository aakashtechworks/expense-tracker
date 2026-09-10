import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Transaction from '../pages/Transaction'
import Statistics from '../pages/Statistics'
import MainLayout from '../layout/MainLayout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout />} >
            <Route path='/' element={<Dashboard /> } />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/statistics' element={<Statistics />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes