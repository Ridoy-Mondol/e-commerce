import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import Error from './component/Error';
import Footer from './component/Footer';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route exact path="/ecommerce/" element={<Home />} />
         <Route exact path='/ecommerce/about' element={<About />} />
         <Route exact path='/ecommerce/product' element={<Product />} />
         <Route exact path='/ecommerce/contact' element={<Contact />} />
         <Route exact path='*' element={<Error />} />
         <Route exact path={`/ecommerce/productdetails/:id`} element = {<ProductDetails />} />
         <Route exact path={`/ecommerce/cart`} element = {
           <Cart />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
