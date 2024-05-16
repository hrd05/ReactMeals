import { useContext } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';


const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log(props);

    const addItemsToCart = () => {
        // console.log(cartCtx.items)
        const quantity = document.getElementById('amount_' + props.items.id).value;
        cartCtx.addItem({ ...props.items, quantity });
    }

    return (

        <form className={classes.form} >

            <Input label="Amount" input={{
                id: 'amount_' + props.items.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button type='button' onClick={addItemsToCart} >+ Add</button>
        </form>
    )
}

export default MealItemForm;