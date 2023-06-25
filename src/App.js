import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/account/Login';
import Register from './component/account/Register';
import Header from './component/layouts/Header/Header';
import Footer from './component/layouts/Footer/Footer';
import Home from './component/home/Home';
import Products from './component/products/products';
import ProductDetail from './component/products_detail/ProductsDetail';
import EmptyCart from './component/cart/cartEmpty';
import CartItem from './component/cart/cartItem';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product-detail' element={<ProductDetail />}/>
        <Route path='/cart' element={<EmptyCart />} />
        <Route path='/cartitem' element={<CartItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
