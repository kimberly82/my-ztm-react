import { useSelector, useDispatch } from 'react-redux';

import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

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
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity} = cartItem;
    const currentCartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(currentCartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(currentCartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(currentCartItems, cartItem));
    
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