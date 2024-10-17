import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import LoginRegister from "./components/LoginRegister"; // Import Login/Register component
import Checkout from "./components/Checkout"; // Import Checkout component
import Payment from "./components/Payment"; // Import Payment component
import About from "./components/About"; // Import About component
import ErrorPage from "./components/ErrorPage"; // Import ErrorPage component

function App() {
  return (
    <Router>
      {/* Display Navbar on all pages */}
      <Navbar />

      {/* Define the routes for the app */}
      <Routes>
        <Route path="/" element={<LoginRegister />} /> {/* Login/Register page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/payment" element={<Payment />} /> {/* Payment page */}
        <Route path="*" element={<ErrorPage />} /> {/* 404 page for undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;
