import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import './product-card.style.scss'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCrat = () => addItemToCart(product);

    return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>Name:- {name}</span>
            <span className='price'>Rs.{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCrat}>
            Addtocard
        </Button>
    </div>
    );
}

export default ProductCard;