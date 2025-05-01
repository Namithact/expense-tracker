import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from "react";
import Footer from "./components/Footer";
function App() {
  const HomePage =lazy(()=> import("./Pages/HomePage"));
  const AddExpensePage=lazy(()=> import("./Pages/AddExpensePage"));
  const ErrorPage=lazy(()=> import("./Pages/ErrorPage"));
  return (
    <Suspense fallback={ <div className="flex justify-center items-center h-screen">
      {/* Tailwind CSS Spinner */}
      <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-expense" element={<AddExpensePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
    </Suspense>
  );
}

export default App;
