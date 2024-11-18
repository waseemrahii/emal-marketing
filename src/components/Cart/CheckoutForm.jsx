
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice'; // Adjust the path as needed

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  
  const [cardholderName, setCardholderName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: cardholderName,
        email: email,
        address: {
          country: country,
        },
      },
    });

    if (error) {
      console.log('[error]', error);
      setErrorMessage(`Payment failed: ${error.message}`);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Call backend to complete the payment
      try {
        const response = await fetch('http://localhost:5000/complete-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount: 1000, // Adjust amount as needed
          }),
        });
        const result = await response.json();
        if (result.success) {
          dispatch(clearCart()); // Clear cart after successful payment
          alert('Payment successful!');
        } else {
          setErrorMessage('Payment failed!');
        }
      } catch (error) {
        console.error('Error completing payment:', error);
        setErrorMessage('Payment failed!');
      }
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Cardholder Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Card Details</label>
        <CardElement
          className="p-2 border rounded-md"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <button
        type="submit"
        className="btn btn-primary w-full mt-4"
        style={{ backgroundColor: '#1EBEB6', color: '#fff' }}
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
