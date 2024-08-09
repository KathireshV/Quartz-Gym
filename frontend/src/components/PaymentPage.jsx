import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const notificationRef = useRef(null); // Create a ref for the notification

  const plans = [
    {
      name: "Basic",
      price: "₹399.99",
      features: [
        "Access to gym facilities",
        "Free Wi-Fi",
        "2 personal training sessions per month",
      ],
    },
    {
      name: "Standard",
      price: "₹639.99",
      features: [
        "Access to gym facilities",
        "Free Wi-Fi",
        "10 personal training sessions per month",
        "Access to group classes",
      ],
    },
    {
      name: "Premium",
      price: "₹1559.99",
      features: [
        "Access to gym facilities",
        "Free Wi-Fi",
        "Unlimited personal training sessions",
        "Access to group classes",
        "Priority support",
        "Free gym merchandise",
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your payment processing logic here
    console.log("Payment Details:", formData, "Selected Plan:", selectedPlan);

    // Simulate a successful payment process
    setIsPaymentSuccess(true);

    // Scroll to the success notification after a delay
    setTimeout(() => {
      if (notificationRef.current) {
        notificationRef.current.scrollIntoView({ behavior: "smooth" });
      }
      // Redirect to the home page after showing the notification
      setTimeout(() => {
        navigate("/");
      }, 3000); // Delay of 3 seconds
    }, 100); // Delay of 0.1 seconds to allow the notification to render
  };

  useEffect(() => {
    if (isPaymentSuccess && notificationRef.current) {
      notificationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isPaymentSuccess]);

  return (
    <div className="payment-page">
      <h1>Choose Your Plan</h1>
      <div className="plans-container">
        {plans.map((plan) => (
          <div
            className={`plan-card ${selectedPlan === plan ? "selected" : ""}`}
            key={plan.name}
          >
            <h2>{plan.name} Plan</h2>
            <p className="plan-price">{plan.price} / month</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="select-button"
              onClick={() => handleSubscribe(plan)}
            >
              {selectedPlan === plan ? "Selected" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2>Payment Information</h2>
          <div className="form-group">
            <label>Name on Card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="pay-button">
            Pay {selectedPlan.price}
          </button>
        </form>
      )}

      {isPaymentSuccess && (
        <div className="success-notification" ref={notificationRef}>
          <h3>Payment Successful!</h3>
          <p>Thank you for subscribing to the {selectedPlan.name} plan.</p>
          <p>You will be redirected to the homepage shortly.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
