import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Registration from './component/Registration';
import Login from './component/Login';
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
  const token = localStorage.getItem('token');
  return (
    <>
      <Navbar />
      <Routes>
         <Route exact = "true" path="/e-commerce/" element={<Home />} />
         <Route exact = "true" path="/e-commerce/registration" element={<Registration />} />
         <Route exact = "true" path="/e-commerce/login" element={<Login />} />
         <Route exact = "true" path='/e-commerce/about' element={<About />} />
         <Route exact = "true" path='/e-commerce/product' element={<Product />} />
         <Route exact = "true" path='/e-commerce/contact' element={<Contact />} />
         <Route exact = "true" path='/e-commerce/*' element={<Error />} />
         <Route exact = "true" path={`/e-commerce/productdetails/:id`} element = {<ProductDetails />} />
         <Route exact = "true" path={`/e-commerce/cart`} element = {
           <Cart />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;


// import './App.css';
// import React, { useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Registration from './component/Registration';
// import Login from './component/Login';
// import Navbar from './component/Navbar';
// import Home from './component/Home';
// import About from './component/About';
// import Product from './component/Product';
// import Contact from './component/Contact';
// import Error from './component/Error';
// import Footer from './component/Footer';
// import ProductDetails from './component/ProductDetails';
// import Cart from './component/Cart';

// function App() {
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const isAuthenticated = () => {
//     return !!token; 
//   };

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       navigate('/e-commerce/registration', { replace: true });
//     }
//     if (isAuthenticated()) {
//       const currentPath = window.location.pathname;
//       if (currentPath === '/e-commerce/registration' || currentPath === '/e-commerce/login') {
//         navigate('/e-commerce/', { replace: true });
//       }
//     }
//   }, []);

//   return (
//     <>
//       {token && <Navbar />}
//       <Routes>
//         <Route path="/e-commerce/registration" element={<Registration />} />
//         <Route path="/e-commerce/login" element={<Login />} />
//         <Route path="/e-commerce/" element={<Home />} />
//         <Route path="/e-commerce/about" element={<About />} />
//         <Route path="/e-commerce/product" element={<Product />} />
//         <Route path="/e-commerce/contact" element={<Contact />} />
//         <Route path="/e-commerce/productdetails/:id" element={<ProductDetails />} />
//         <Route path="/e-commerce/cart" element={<Cart />} />
        
//         <Route path="/e-commerce/*" element={<Error />} />
//       </Routes>
//       {token && <Footer />}
//     </>
//   );
// }

// export default App;
