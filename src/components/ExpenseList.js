import React, { useEffect, useState } from "react";

import useLocalStorage from "../Hooks/useLocalStorage";
import { useContext } from "react";
import {expenseContext} from "../context/ExpenseContext";
export default function ExpenseList({deleteExpense,editExpense }) {
  const emojiMap = {
    food: "🍽️",
    salary: "💼",
    transport: "🚌",
    shopping: "🛍️",
    health: "💊",
    travel: "✈️",
    utilities: "💡",
    bills: "📄",
    groceries: "🛒",
    entertainment: "🎮",
    other: "📁",
  };
  const { state } = useContext(expenseContext);
  const { expense } = state;
  const [expenseList, setExpenseList] = useState([]);
  const [storedExpense, setStoredExpense] = useLocalStorage("expenses", []);
  useEffect(() => {
    if (storedExpense) {
      setExpenseList(storedExpense);
    }
  }, [storedExpense]);
  useEffect(() => {
    if (Array.isArray(expense)) {
      setExpenseList(expense);
    }
  }, [expense]);
  function handleEditItem(item) {
    // Logic to handle editing the item
    editExpense(item);
    

  }
  function handleDeleteItem(item) {
    // Logic to handle deleting the item
    setExpenseList(expenseList.filter((expense) => expense !== item));
    setStoredExpense(
      expenseList.filter((expense) => expense !== item)
    );
    deleteExpense(
      item
    );
  }
  return (
    <div className="space-y-4">
      {expenseList.map((item, index) => (
        <div
          key={index}
          className="relative bg-white p-4 rounded-xl shadow flex items-center justify-between"
        >
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => handleEditItem(item)}
            >
              ✏️
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteItem(item)}
            >
              🗑️
            </button>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 text-green-600 rounded-full p-3">
              {emojiMap[item.category] || "📁"}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
          <div className="text-right text-xl font-bold text-red-600">
            <p
              className={`text-xl font-bold ${
                item.amountype === "income" ? "text-green-600" : "text-red-600"
              } `}
            >
              {item.amountype === "income" ? "+" : "-"} {item.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
