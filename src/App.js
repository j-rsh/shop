import React from 'react';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import { Route , Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';

const App = () => {
  return (
    <div style={{backgroundColor:"#f7f4f496"}}>  
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
      <Routes>
        <Route path="/products" element={<Store/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<ShopCart/>}/>
      </Routes>
      </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;