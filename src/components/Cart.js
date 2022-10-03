import React, {useContext} from 'react';
import { CartContext } from '../context/CartContextProvider';
import { shorten } from '../helper/functions';
import style from './Cart.module.css';
import {quantityCount} from '../helper/functions.js';
const Cart = (props) => {
    const{state ,dispatch} = useContext(CartContext)
    const {image , title , price , quantity , id} = props.data
    return ( 
        <div className={style.productContainer}>
            <img src={image} />
            <div className={style.productInfo}>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div className={style.buttonContainer}> 
            
                {
                    quantity>1?
                    <button onClick={() => dispatch({type:"DECREASE" , payload:props.data})}>-</button>:
                    <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:props.data})}>delete</button>
                    
                }                            

                    <button onClick={()=>dispatch({type:"INCREASE" ,payload:props.data})}>+</button>
            </div>
        
            
        </div>
    );
};

export default Cart;