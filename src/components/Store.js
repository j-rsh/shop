import React ,{ useContext } from 'react';
import {productsContext} from '../context/ProductContextProvider';
import Product from './Product';
import styles from './Store.module.css'
const Store = () => {

    const products = useContext(productsContext);

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product 
                                        key={product.id}
                                        productData={product}
                
                        />)
            }
        </div>
    );
};

export default Store;