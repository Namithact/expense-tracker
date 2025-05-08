import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainHeader() {
  return (
    <nav className="flex gap-4 p-4 shadow bg-gray-800 text-white ">
  <NavLink to="/" className={({isActive})=>isActive?" font-semibold underline":"text-white"}>Home</NavLink>
  <NavLink to="/add-expense" className={({isActive})=>isActive?" font-semibold underline":"text-white"}>Add Expense</NavLink>
  <NavLink to="/dashboard" className={({isActive})=>isActive?" font-semibold underline":"text-white"}>Dashboard</NavLink>
</nav>

  )
}
