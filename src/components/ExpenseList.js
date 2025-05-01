import React from "react";

export default function ExpenseList({ expense }) {
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
  return (
    <div className="space-y-4">
      {expense.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
        >
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
