import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    CheckoutItemConatiner,
    ImageConatiner,
    NameQuantityPrice,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    
    return (
        <CheckoutItemConatiner>
            <ImageConatiner>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageConatiner>
            <NameQuantityPrice>{name}</NameQuantityPrice>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <NameQuantityPrice>{price}</NameQuantityPrice>
            <RemoveButton onClick = {clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemConatiner>
    )
}

export default CheckoutItem;