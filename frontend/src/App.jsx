// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';  // Adjust path as necessary
import Payment from './components/Payment';  // Assuming you created the Payment component earlier

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />  {/* Home/Login Page */}
        <Route path="/payment" element={<Payment />} />  {/* Payment Page */}
      </Routes>
    </Router>
  );
}

export default App;
