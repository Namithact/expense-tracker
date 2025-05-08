import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = [ "#4F46E5", // indigo-700
  "#7C3AED", // purple-700
  "#DB2777", // pink-600
  "#4338CA", // indigo-800
  "#6D28D9", // violet-700
  "#BE185D", // rose-700
  "#5B21B6", // violet-800
  "#9D174D", // fuchsia-800
  "#C026D3", // fuchsia-600
  "#701A75", // fuchsia-900
  "#831843"  // rose-900
  ];

const ExpenseChart = ({ data }) => {
  console.log(data);
  return (
    <div className="p-8 rounded-2xl max-w-md mx-auto mt-8 space-y-6">
      <h2 className="text-xl font-bold text-center mb-4">Expenses by Category</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
