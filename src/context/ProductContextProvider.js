import React , {createContext, useEffect , useState} from 'react';
import { getProducts } from '../services/api';

export const productsContext = createContext();
const ProductContextProvider = ({children}) => {

   const [products,setProducts]=useState([]);

    useEffect(()=>{

        const fetchAPI =async()=>
        {
            setProducts(await getProducts());
        }
        
        fetchAPI();
       
        },[])
       

    return (

        <div>
            <productsContext.Provider value={products}>
                {children}
            </productsContext.Provider>
             
        </div>
    );
};

export default ProductContextProvider;