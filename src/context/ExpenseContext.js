import React, { createContext, useEffect, useReducer } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const expenseContext = createContext();
const initialState = {
  expense: [],
  totalBalance: 0,
};
function expenseReducer(state, action) {
  switch (action.type) {
    case "SET_INITIAL":
      return {
        ...state,
        expense: action.payload.expense,
        totalBalance: action.payload.totalBalance,
      };
    case "ADD_EXPENSE":
      const newBalance =
        action.payload.amountype === "income"
          ? state.totalBalance + parseFloat(action.payload.amount)
          : state.totalBalance - parseFloat(action.payload.amount);
      return {
        ...state,
        expense: [...state.expense, action.payload],
        totalBalance: newBalance,
      };
    case "EDIT_EXPENSE":
      const editedExpenses = state.expense.map((item) =>
        item === action.payload.oldItem ? action.payload.newItem : item
      );
      const balanceChange =
        (action.payload.oldItem.amountype === "income" ? -1 : 1) *
          parseFloat(action.payload.oldItem.amount) +
        (action.payload.newItem.amountype === "income" ? 1 : -1) *
          parseFloat(action.payload.newItem.amount);

      return {
        expense: editedExpenses,
        totalBalance: state.totalBalance + balanceChange,
      };
    case "DELETE_EXPENSE":
      const updatedExpenses = state.expense.filter(
        (item) => item !== action.payload
      );
      const adjustedBalance =
        action.payload.amountype === "income"
          ? state.totalBalance - parseFloat(action.payload.amount)
          : state.totalBalance + parseFloat(action.payload.amount);

      return {
        expense: updatedExpenses,
        totalBalance: adjustedBalance,
      };
    default:
      return state;
  }
}

export default function ExpenseContext({ children }) {
  const [storedExpenses, setStoredExpenses] = useLocalStorage("expenses", []);
  const [storedBalance, setStoredBalance] = useLocalStorage("totalBalance", 0);
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  useEffect(() => {
    dispatch({
      type: "SET_INITIAL",
      payload: {
        expense: storedExpenses,
        totalBalance: storedBalance,
      },
    });
  }, []);

  useEffect(() => {
    setStoredBalance(state.totalBalance);
    setStoredExpenses(state.expense);
  }, [
    state.expense,
    state.totalBalance,
    setStoredExpenses,
    setStoredBalance,
    storedBalance,
    storedExpenses,
  ]);
  const categoryData = storedExpenses.reduce((acc, expense) => {
    const amount = Number(expense.amount); // ✅ Convert string to number
    if(expense.amountype === "income") {
      return acc; // Skip income expenses
    }
    const existing = acc.find(item => item.name === expense.category);
    if (existing) {
      existing.value += amount;
    } else {
      acc.push({ name: expense.category, value: amount });
    }
    return acc;
  }, []);
  console.log(categoryData);
  return (
    <expenseContext.Provider value={{ state, dispatch,categoryData }}>
      {children}
    </expenseContext.Provider>
  );
}
