import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.style';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
      navigate('/Checkout')
    }
    return(
        <CartDropdownContainer>
         <CartItems>
            {
                cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />
        ))):(
          <EmptyMessage>your cart is empty</EmptyMessage>
        )
    }
         </CartItems>
         <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>   
        </CartDropdownContainer>
    )
}

export default CartDropdown;