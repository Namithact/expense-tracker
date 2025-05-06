import React, { useState } from "react";
export default function ExpenseForm({
  expenseData,
  heading,
  button,
  initialData,
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [amount, setAmount] = useState(initialData?.amount || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [amountType, setAmountType] = useState(initialData?.amountype || "");

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Clear fields
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setAmountType("");
    expenseData(data);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-indigo-600 text-center">
        {heading}
      </h2>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Title</label>
        <input
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Amount</label>
        <input
          type="number"
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Amount Type</label>
        <select
          required
          name="amountype"
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={amountType}
          onChange={(e) => setAmountType(e.target.value)}
        >
          <option value="">Select Amount Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Category</label>
        <select
          required
          name="category"
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="food">🍽️ Food</option>
          <option value="salary">💼 Salary</option>
          <option value="transport">🚌 Transport</option>
          <option value="shopping">🛍️ Shopping</option>
          <option value="health">💊 Health</option>
          <option value="travel">✈️ Travel</option>
          <option value="utilities">💡 Utilities</option>
          <option value="bills">📄 Bills</option>
          <option value="groceries">🛒 Groceries</option>
          <option value="entertainment">🎮 Entertainment</option>
          <option value="other">📁 Other</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Date</label>
        <input
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
      >
        {button}
      </button>
    </form>
  );
}
