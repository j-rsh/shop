import React , {useContext} from 'react';
import {CartContext} from '../context/CartContextProvider';
import ShopIcon from '../assets/shop.svg';
import {Link} from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
   const{state} = useContext(CartContext)
    return (
        <div className={style.container}>
            <div className={style.itemContainer}>
                <Link className={style.productLink} to="/products" >Products</Link>
                <div className={style.icon}>
                    <Link to="/cart"> <img src={ShopIcon} alt="shop"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;