import React ,{ useContext }  from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import { isInCart ,quantityCount,shorten } from '../helper/functions.js';
import syles from './Product.module.css';

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div  className={syles.container}>
             <img src={productData.image} alt="product" className={syles.cardImage}  />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={syles.linkContainer}>
           
            <Link to={`/products/${productData.id}`}> Detailes </Link>
            <div>
            {quantityCount(state, productData.id) === 1 && <button style={{marginRight:"10px"}} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>delete</button>}
            {quantityCount(state, productData.id) > 1 && <button  className={syles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}

            { isInCart(state,productData.id)?
                <button className={syles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;