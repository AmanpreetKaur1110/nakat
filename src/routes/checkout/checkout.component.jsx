import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { db } from '../../utils/firebase/firebase.utils';
import { collection, addDoc } from 'firebase/firestore';
import { UserContext } from '../../contexts/user.context';
import Button from '../../components/button/button.component';
import {  useNavigate } from 'react-router-dom';


import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart,setIsCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsCartOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  
  const handleOrder = async () => {
    if (!currentUser) {
      alert('You must be signed in to place an order.');
      navigate('/sign-in', { state: { from: '/checkout' } });
      return;
    }

    try {
      const order = {
        items: cartItems,
        total: cartTotal,
        userEmail: currentUser?.email || 'Unknown Email',
        userName: currentUser?.displayName || 'Anonymous User',
        createdAt: new Date()
      };
  
      const docRef = await addDoc(collection(db, 'orders'), order);
      alert(`Order placed! Order ID: ${docRef.id}`);
      clearCart();
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'><span>Product</span></div>
        <div className='header-block'><span>Description</span></div>
        <div className='header-block'><span>Quantity</span></div>
        <div className='header-block'><span>Price</span></div>
        <div className='header-block'><span>Remove</span></div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className='total'>Total: {'\u20B9'}{cartTotal}</span>
      <Button type='submit'  onClick={handleOrder}>Order Here</Button>
      
    </div>
  );
};

export default Checkout;
