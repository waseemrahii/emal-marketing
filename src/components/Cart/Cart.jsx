 


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 mt-28">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-none p-0">
            {cartItems.map((item) => (
              <li
                key={item._id}
                className="flex flex-col md:flex-row justify-between items-center mb-4 p-4 border rounded-lg shadow-sm bg-white"
              >
                <div className="flex flex-col sm:flex-row items-center w-full">
                  <img
                    src={item?.thumbnail}
                    alt={item.name}
                    className="w-24 h-24 object-cover mb-4 sm:mb-0 sm:mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: CAD ${item.price.toFixed(2)}</p>
                    <p>Total: CAD ${(item.totalPrice).toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="btn btn-outline btn-sm mt-4 sm:mt-0 sm:ml-4"
                  style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <h3 className="text-xl font-bold mb-4 md:mb-0">Total Price: CAD ${totalPrice.toFixed(2)}</h3>
            <div className="flex space-x-2">
              <button
                className="btn btn-outline"
                style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="btn btn-primary"
                style={{ backgroundColor: '#1EBEB6', color: '#fff' }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
