import React from "react";
import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Header from "../components/Header";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function AddExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [storedBalance, setStoredBalance] = useLocalStorage("totalBalance", 0);
  const [storedExpenses, setStoredExpenses] = useLocalStorage("expenses", []);
  useEffect(() => {
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
    if (storedBalance) {
      setTotalBalance(storedBalance);
    }
  }, [storedBalance, storedExpenses]);
  function handleExpenseSubmit(expense) {
    const updatedExpense = [...expenses, expense];
    const updatedBalance =
      expense.amountype === "income"
        ? totalBalance + parseFloat(expense.amount)
        : totalBalance - parseFloat(expense.amount);
    setTotalBalance(updatedBalance);
    setExpenses(updatedExpense);

    setStoredExpenses(updatedExpense);
    setStoredBalance(updatedBalance);
    //localStorage.setItem("totalBalance", JSON.stringify(updatedBalance));
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-6">
        <Header balance={totalBalance} />
        <div className="max-w-7xl mx-auto p-6">
          {/* Main container */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side: Form */}
            <div className="md:w-1/2">
              <ExpenseForm expenseData={handleExpenseSubmit} />
            </div>
            <div className="md:w-1/2">
              <ExpenseList expense={expenses} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
