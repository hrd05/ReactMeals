
import { Fragment } from 'react';
import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onClick} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='A table full of delicious food' />
            </div>
        </Fragment>
    )

}

export default Header;