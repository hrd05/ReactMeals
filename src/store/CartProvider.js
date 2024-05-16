import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {

    const [items, updateItems] = useState([]);

    const addItemToCartHandler = (item) => {

        const existingItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedItems = [...items];
            // console.log(updatedItems[existingItemIndex]);
            const prevQuantity = +updatedItems[existingItemIndex].quantity;
            // console.log(prevQuantity, 'prevQuantity');
            let newQuantity = prevQuantity + +item.quantity;
            // console.log(newQuantity, 'newQuantity');

            updatedItems[existingItemIndex].quantity = newQuantity;
            updateItems(updatedItems);
        }
        else {
            updateItems([...items, item]);
        }

    };
    const removeItemToCartHandler = (id) => {
        const existingItemIndex = items.findIndex((item) => item.id === id);

        if (existingItemIndex !== -1) {
            const updatedItems = [...items];
            let currQuantity = Number(updatedItems[existingItemIndex].quantity);
            if (currQuantity > 1) {
                currQuantity -= 1;
                updatedItems[existingItemIndex].quantity = currQuantity;
                updateItems(updatedItems);
            }
            else {
                let newUpdatedItems = updatedItems.filter((item) => item.id !== id);
                updateItems(newUpdatedItems);
            }
        }
    };

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