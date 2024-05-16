import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const addedItemsToCart = cartCtx.items;
    // console.log(addedItemsToCart);

    const addItemToCart = (event) => {
        console.log(event.target.id);
        const item = cartCtx.items.find((item) => item.id === event.target.id);
        // item.quantity = '1';
        cartCtx.addItem(item);
    }

    const removeItemFromCart = (event) => {
        cartCtx.removeItem(event.target.id);
    }

    const cartItems = <ul className={classes['cart-items']} >{addedItemsToCart.map((item) =>
        <li id={item.id} >
            <div className={classes.main}>
                <h3>{item.name}</h3>
                <div className={classes.prq}>
                    <div className={classes.price} >{'$' + item.price}</div>
                    <div className={classes.quantity} >{'x ' + item.quantity}</div>
                </div>
            </div>
            <div >
                <button id={item.id} onClick={removeItemFromCart} >-</button>
                <button id={item.id} onClick={addItemToCart}>+</button>
            </div>
        </li>
    )}
    </ul>

    return (
        <Modal onClose={props.onClose} >
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>35.92</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
                <button className={classes.button} onClick={props.onClose} >Order</button>
            </div>
        </Modal>
    )
}

export default Cart;