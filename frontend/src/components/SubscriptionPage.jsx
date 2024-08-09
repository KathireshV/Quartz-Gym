// src/SubscriptionPage.js
import React from "react";
import "./SubscriptionPage.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const SubscriptionPage = () => {

  const nav=useNavigate();
  const plans = [
    {
      name: "Basic",
      price: "₹ 399.99",
      features: [
        "Access to gym facilities",
        "Free Wi-Fi",
        "2 personal training session per month",
      ],
    },
    {
      name: "Standard",
      price: "₹ 639.99",
      features: [
        "Access to gym facilities",
        "Free Wi-Fi",
        "10 personal training sessions per month",
        "Access to group classes",
      ],
    },
    {
      name: "Premium",
      price: "₹ 1559.99",
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

  return (
    <div className="subscription-page" id="subss">
      <h1>Join Quartz Today!</h1>
      <p style={{color:"white"}}>Choose the plan that fits you best and start your fitness journey with us.</p>
      <div className="plans-container">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.name}>
            <h2>{plan.name} Plan</h2>
            <p className="plan-price">{plan.price} / month</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-button" onClick={(()=> nav('/payment'))}>Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
