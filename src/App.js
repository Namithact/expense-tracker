import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from "react";
import Footer from "./components/Footer";
import ExpenseContext from "./context/ExpenseContext";
import MainHeader from "./components/MainHeader";
function App() {
  const HomePage =lazy(()=> import("./Pages/HomePage"));
  const AddExpensePage=lazy(()=> import("./Pages/AddExpensePage"));
  const ErrorPage=lazy(()=> import("./Pages/ErrorPage"));
  const Dashboard=lazy(()=> import("./Pages/Dashboard"));
  return (
    <Suspense fallback={ <div className="flex justify-center items-center h-screen">
      {/* Tailwind CSS Spinner */}
      <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>}>
    <ExpenseContext>
    <Router>
      <MainHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-expense" element={<AddExpensePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
    </ExpenseContext>
    </Suspense>
  );
}

export default App;
