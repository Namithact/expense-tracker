import React from 'react'
import useLocalStorage from "../Hooks/useLocalStorage";
export default function IncomeDetails() {
    const [storedExpenses] = useLocalStorage("expenses", []);
    console.log(storedExpenses);
    const totalIncome = storedExpenses.reduce((acc, expense) => {
        return expense.amountype === "income" ? acc + parseFloat(expense.amount) : acc;
    }, 0);
    const totalExpense = storedExpenses.reduce((acc, expense) => {
        return expense.amountype === "expense" ? acc + parseFloat(expense.amount) : acc;
    }, 0);
    const accountBalance = totalIncome - totalExpense;
  return (
    <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-8 space-y-6'>
        <h1 className='text-2xl font-bold'>Income Details</h1>
        <p className='text-lg'>Here you can view your income details.</p>
      
        <div className='mt-4'>
            <h2 className='text-xl font-bold'>Total Income</h2>
            <p className='text-lg'>{totalIncome}</p>
        </div>
        <div className='mt-4'>
            <h2 className='text-xl font-bold'>Total Expense</h2>
            <p className='text-lg'>{totalExpense}</p>
        </div>
        <div className='mt-4'>
            <h2 className='text-xl font-bold'>Account Balance</h2>
            <p className='text-lg'>{accountBalance}</p>
        </div>
    </div>
  )
}
