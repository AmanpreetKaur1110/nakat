import './cart-item.style.scss';

const CartItem =({cartItem}) => {
    const {name, quantity,price,imageUrl} = cartItem;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
             <span className='name'>{name}</span>   
             <span className='price'>{quantity} &#10005; {'\u20B9'}{price}</span>
            </div>
        </div>
    );
};

export default CartItem;