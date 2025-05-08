import React from 'react'
import { useContext } from 'react'
import { expenseContext } from '../context/ExpenseContext'
import ExpenseChart from '../components/ExpenseChart';
import IncomeDetails from '../components/IncomeDetails';

export default function Dashboard() {
    const {categoryData} = useContext(expenseContext);
    console.log(categoryData);
  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '>
        <div className='max-w-7xl mx-auto p-6'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-1/2'>
        <IncomeDetails/>
        </div>
        <div className='md:w-1/2'>
        <ExpenseChart data={categoryData} />
        </div>
        </div>
        </div>
    </div>
  )
}
