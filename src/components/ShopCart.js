import React , {useContext} from 'react';
import { CartContext } from '../context/CartContextProvider';
import Cart from './Cart';
import style from './Cart.module.css'

const ShopCart = () => {
    const {state , dispatch} = useContext(CartContext)
    return (
        <div className={style.container}>

        <div className={style.cartContainer}>
            {
                state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
            }
        </div>
           
             <div>
                 {
                state.itemsCounter > 0 &&<div  className={style.paymentContainer}>
                    <p><span>total items: </span>{state.itemsCounter}</p>
                    <p><span>total payment: </span>{state.total}</p>
                </div>
                }

             </div>  

        </div>
        
        
       
        
    );
};

export default ShopCart;