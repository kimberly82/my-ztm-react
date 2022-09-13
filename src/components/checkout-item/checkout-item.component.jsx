import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, price, imageUrl, quantity} = item;
    const {addItemToCart, removeItemFromCart, removeEntryFromCart} = useContext(CartContext);

    const increaseItemQuantity = () => addItemToCart(item);
    const decreaseItemQuantity = () => removeItemFromCart(item);
    const removeEntry = () => removeEntryFromCart(item);
    return (
        <div>
            <div><img src={imageUrl} alt={`${name}`}/></div>
            <div>{name}</div>
            <div>
                <button onClick={decreaseItemQuantity}>
                    -
                </button>
                {quantity}
                <button onClick={increaseItemQuantity}>
                    +
                </button>
            </div>
            <div>{price}</div>
            <div>
                <button onClick={removeEntry}>
                    X
                </button>
            </div>
        </div>
    )
}

export default CheckoutItem;