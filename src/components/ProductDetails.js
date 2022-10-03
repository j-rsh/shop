import React , {useContext} from 'react';
import {productsContext} from '../context/ProductContextProvider';
import { useParams } from 'react-router-dom'; 
import {Link} from 'react-router-dom';
import style from './ProductDetails.module.css'
const ProductDetails = (props) => {

    const data = useContext(productsContext);
    const params = useParams();
    const id =params.id;
    const product = data[id-1];
    const {title , image ,category ,description, price } = product;
 
    return (
        <div className={style.detailsContainer}>
                <img src={image} alt="image"/>
            <div className={style.infoContainer}> 
                <h1>{title}</h1>
                <p>{description}</p>
                <div>
                <span>price: {price}</span>
                </div>
            
                <br></br>
                <Link to="/products"><button>shop</button></Link>
            </div>
            
        </div>
    );
};

export default ProductDetails;