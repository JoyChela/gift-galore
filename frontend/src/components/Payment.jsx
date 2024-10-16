import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    cvv: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic
    console.log(cardDetails);
  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit} className="payment-form">
        <h2>Complete Your Payment</h2>

        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={cardDetails.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={cardDetails.number}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleInputChange}
            placeholder="123"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Billing Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={cardDetails.address}
            onChange={handleInputChange}
            placeholder="123 Main St"
            required
          />
        </div>

        <button type="submit" className="pay-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
