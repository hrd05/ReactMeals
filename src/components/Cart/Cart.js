import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const addedItemsToCart = cartCtx.items;

    const cartItems = <ul className={classes['cart-items']} >{addedItemsToCart.map((item) => <li key={Math.random()}> {item.name} </li>)}</ul>

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