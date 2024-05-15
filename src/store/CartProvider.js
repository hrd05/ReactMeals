import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {

    const [items, updateItems] = useState([]);

    const addItemToCartHandler = (item) => {

        updateItems([...items, item]);
    };
    const removeItemToCartHandler = (id) => { };

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;