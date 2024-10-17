// Checkout.jsx
import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [cartItems] = useState([
    { id: 1, name: "Birthday Cake Candles", price: 5.99, quantity: 2 },
    { id: 2, name: "Handmade Scarf", price: 24.99, quantity: 1 },
  ]);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>Cart</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>Shipping</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>Confirmation</div>
      </div>

      {step === 1 && (
        <div className="cart-review">
          <h2>View Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          ))}
          <div className="cart-total">Total: ${calculateTotal()}</div>
          <button onClick={() => setStep(2)} className="next-btn">
            Proceed to Shipping
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="shipping-form">
          <h2>Shipping Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="next-btn">
            Confirm Order
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="confirmation">
          <h2>Order Confirmed!</h2>
          <p>Thank you for your purchase. Your gifts will be shipped to:</p>
          <address>
            {shippingInfo.name}``
            <br />
            {shippingInfo.address}
            <br />
            {shippingInfo.city}, {shippingInfo.zipCode}
            <br />
            {shippingInfo.country}
          </address>
          <p>Total paid: ${calculateTotal()}</p>
          <button onClick={() => setStep(1)} className="next-btn">
            Back to Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
