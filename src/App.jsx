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
         <Route exact path="/e-commerce/" element={<Home />} />
         <Route exact path='/e-commerce/about' element={<About />} />
         <Route exact path='/e-commerce/product' element={<Product />} />
         <Route exact path='/e-commerce/contact' element={<Contact />} />
         <Route exact path='/e-commerce/*' element={<Error />} />
         <Route exact path={`/e-commerce/productdetails/:id`} element = {<ProductDetails />} />
         <Route exact path={`/e-commerce/cart`} element = {
           <Cart />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
