import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const linkClass = ({isActive}) => `relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white" : "hover:text-white/80"
    }`
  return (
    <header className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
            <h1 className='text-xl font-bold'>Expense Tracker</h1>

            <nav className='hidden md:block'>
                <div className='flex gap-4'>
                    <NavLink to="/" className={linkClass}>Dashboard</NavLink>
                    <NavLink to="/transaction" className={linkClass}>Transaction</NavLink>
                    <NavLink to="/statistics" className={linkClass}>Statistics</NavLink>
                </div>
            </nav>

            <button type='button' onClick={()=> setIsMenuOpen(!isMenuOpen)} className='md:hidden text-2xl' aria-level="Toggle navigation menu">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
        {
            isMenuOpen && (
                <nav className='border-t border-white/20 md:hidden'>
                    <div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4'>
                        <NavLink to="/"  onClick={() => setIsMenuOpen(false)} >Dashboard</NavLink>
                        <NavLink to="/transaction"  onClick={() => setIsMenuOpen(false)} >Transaction</NavLink>
                        <NavLink to="/statistics"  onClick={() => setIsMenuOpen(false)} >Statistics</NavLink>
                    </div>
                </nav>
            )
        }
    </header>
  )
}

export default Header