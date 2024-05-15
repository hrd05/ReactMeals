import { useContext } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';


const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemsToCart = () => {
        // console.log(cartCtx.items)
        cartCtx.addItem(props.items);
    }

    return (

        <form className={classes.form} >
            <Input label="Amount" input={{
                id: 'amount',
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