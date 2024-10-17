import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister"; // Adjust path as necessary
import Payment from "./components/Payment"; // Import Payment component
import ErrorPage from "./components/ErrorPage"; // Import ErrorPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} /> {/* Home/Login Page */}
        <Route path="/payment" element={<Payment />} /> {/* Payment Page */}
        
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<ErrorPage />} /> {/* Error page */}
      </Routes>
    </Router>
  );
}

export default App;
