import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="text-5xl mb-4">💰</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Welcome to Expense Tracker
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Track your income and expenses easily. Stay in control of your budget
          with our simple and efficient tool.
        </p>
        <button
          onClick={() => navigate("/add-expense")}
          className="bg-blue-600 text-white text-base md:text-lg px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          ➕ Add Expense
        </button>
      </div>
    </div>
  );
}
