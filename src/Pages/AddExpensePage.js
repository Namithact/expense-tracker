import React, { useContext } from "react";
import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Header from "../components/Header";
import EditModal from "../components/EditModal";
import { expenseContext } from "../context/ExpenseContext";
export default function AddExpensePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const { dispatch } = useContext(expenseContext);
  function handleExpenseSubmit(expense) {
    if (editingItem) {
      // Editing existing
      dispatch({
        type: "EDIT_EXPENSE",
        payload: { oldItem: editingItem, newItem: expense },
      });

      setEditingItem(null);
      setIsModalOpen(false);
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  }
  function handleDeleteItem(item) {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: item,
    });
  }
  function handleEditItem(item) {
    setEditingItem(item);
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-6">
        <Header balance />
        <div className="max-w-7xl mx-auto p-6">
          {/* Main container */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side: Form */}
            <div className="md:w-1/2">
              <ExpenseForm
                expenseData={handleExpenseSubmit}
                heading="Add Expense"
                button="Add Expense"
              />
            </div>
            <div className="md:w-1/2">
              <ExpenseList
                deleteExpense={handleDeleteItem}
                editExpense={handleEditItem}
              />
            </div>
          </div>
        </div>
      </div>
      <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Modal content goes here */}

        <ExpenseForm
          expenseData={handleExpenseSubmit}
          initialData={editingItem}
          heading="Edit Expense"
          button="Save"
        />
      </EditModal>
    </>
  );
}
