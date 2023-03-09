
import React from 'react';
import { useSelector } from 'react-redux';
import {  BrowserRouter, Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import Pay from './pages/Pay';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
   console.log(user)
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/pay" element={<Pay/>} />
      <Route exact path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;




