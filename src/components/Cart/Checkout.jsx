

import React from 'react';
import { useSelector } from 'react-redux';
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import BaseUrl from '../../BaseUrl';

// Load Stripe outside of a component to avoid reinitialization issues
const stripePromise = loadStripe('pk_test_51Pwpi4023TaI0bKzKegArlRgkp5z30jCWWTwgG0G5sN9P7ICopqAZAoK1LRAG8k6efrBsnmASu0TY9zA1FEdkKOr00IG6Jz5sF');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [shippingAddress, setShippingAddress] = React.useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCheckout = async (event) => {
  //   event.preventDefault();
  
  //   if (!stripe || !elements) return;
  
  //   try {

  //   //      // Log the cartItems to check their values before making the request
  //   // console.log("Cart Items before checkout:", cartItems);
    
  //   // // Construct the products data
  //   // const productsData = cartItems.map(item => ({
  //   //   productId: item._id,
  //   //   name: item.name,
  //   //   price: item.price,
  //   //   quantity: item.quantity,
  //   // }));
    
  //   // // Log the products data to ensure it’s correctly structured
  //   // console.log("Products Data for checkout:", productsData);
  //     const { data } = await axios.post('http://localhost:3000/api/orders', {
  //       userId: '669ac00ffe4a9e456fb35af2',
  //       products: cartItems.map(item => ({
  //         productId: item._id,
  //         name: item.name,
  //         price: item.price,
  //         quantity: item.quantity,
  //       })),
  //       totalPrice,
  //       shippingAddress
  //     });
  
  //     const { sessionId } = data;
  
  //     if (sessionId) {
  //       const { error } = await stripe.redirectToCheckout({ sessionId });
  
  //       if (error) {
  //         console.error('Error during checkout:', error);
  //         alert('There was an error during the checkout process. Please try again.');
  //       }
  //     } else {
  //       console.error('No sessionId returned from the server.');
  //       alert('No session ID received from the server.');
  //     }
  //   } catch (error) {
  //     console.error('Error during checkout:', error.response ? error.response.data : error.message);
  //     alert('An error occurred. Please try again.');
  //   }
  // };
  

  const handleCheckout = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) return;
  
    try {
      // Log the cartItems to check their values before making the request
      console.log("Cart Items before checkout:", cartItems);
      
      // Construct the products data
      const productsData = cartItems.map(item => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));
      
      // Log the products data to ensure it’s correctly structured
      console.log("Products Data for checkout:", productsData);
  
      const { data } = await axios.post(`${BaseUrl}/api/orders`, {
        userId: '66e148f7523bc180670612ec',
        products: productsData,
        totalPrice,
        shippingAddress
      });
  
      const { sessionId } = data;
  
      if (sessionId) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
  
        if (error) {
          console.error('Error during checkout:', error);
          alert('There was an error during the checkout process. Please try again.');
        }
      } else {
        console.error('No sessionId returned from the server.');
        alert('No session ID received from the server.');
      }
    } catch (error) {
      console.error('Error during checkout:', error.response ? error.response.data : error.message);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <form onSubmit={handleCheckout} className="flex flex-col lg:flex-row items-center justify-center p-4 mt-28">
      <div className="lg:w-1/2 w-full max-w-md p-4 bg-white rounded-lg shadow-lg mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4 text-center">Shipping Information</h2>
        <div className="space-y-4">
          {/* Shipping Information Fields */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={shippingAddress.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={shippingAddress.address}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={shippingAddress.city}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={shippingAddress.zipCode}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Zip Code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={shippingAddress.country}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Country"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>
        <div className="mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-bold text-xl mb-4">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-primary"
            style={{ backgroundColor: '#1EBEB6', color: '#fff' }}
          >
            Checkout
          </button>
        </div>
      </div>
    </form>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;


