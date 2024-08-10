import React, { useEffect, useState } from 'react';
import './Payment.css'; 
import { useLocation, useNavigate } from 'react-router-dom';

const RazorPayment = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { plan = 'default' } = location.state || {};  // Get the plan from the state
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve) => {
        // Check if the script is already present
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const initiatePayment = async () => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      setScriptLoaded(true);

      const options = {
        key: 'rzp_test_GcZZFDPP0jHtC4', 
        amount: plan === 'Basic' ? 39999 : plan === 'Standard' ? 63999 : 155999, 
        currency: 'INR',
        name: 'Play+',
        description: `${plan} Plan Payment`,
        handler: function (response) {
          console.log(`Payment ID: ${response.razorpay_payment_id}`);
          nav("/");  // Redirect to the home page after payment
        },
        prefill: {
          name: 'Quartz ',
          email: 'quartz@example.com',
          contact: '91300040030'
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#F37254'
        }
      };

      if (scriptLoaded) {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    };

    initiatePayment();

    // Cleanup function to remove the script
    return () => {
      const script = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [plan, nav, scriptLoaded]);

  return (
    <div className="payment-container">
      <h1 className="payment-title">Processing Payment for {plan} Plan...</h1>
      <p>Please wait while we redirect you to the payment page.</p>
    </div>
  );
}

export default RazorPayment;
