import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectCart} from './Slice/CartSlice';
import { selectCounter1,selectCounter2,selectCounter3,selectCounter4,selectCounter5,selectCounter6,selectCounter7,selectCounter8,selectCounter9,selectCounter10,selectCounter11,selectCounter12,selectCounter13,selectCounter14,selectCounter15,selectCounter16,selectCounter17,selectCounter18,selectCounter19,selectCounter20 } from './Slice/Slice';

const Navbar = () => {
  const [showNav,setShowNav] = useState(false);
  const showNavbar = () => {
    setShowNav (!showNav);
}
const count1 = useSelector(selectCounter1);
const count2 = useSelector(selectCounter2);
const count3 = useSelector(selectCounter3);
const count4 = useSelector(selectCounter4);
const count5 = useSelector(selectCounter5);
const count6 = useSelector(selectCounter6);
const count7 = useSelector(selectCounter7);
const count8 = useSelector(selectCounter8);
const count9 = useSelector(selectCounter9);
const count10 = useSelector(selectCounter10);
const count11 = useSelector(selectCounter11);
const count12 = useSelector(selectCounter12);
const count13 = useSelector(selectCounter13);
const count14 = useSelector(selectCounter14);
const count15 = useSelector(selectCounter15);
const count16 = useSelector(selectCounter16);
const count17 = useSelector(selectCounter17);
const count18 = useSelector(selectCounter18);
const count19 = useSelector(selectCounter19);
const count20 = useSelector(selectCounter20);
const countArray = [count1,count2,count3,count4,count5,count6,count7,count8,count9,count10,count11,count12,count13,count14,count15,count16,count17,count18,count19,count20]
  const cartvalue = useSelector(selectCart);
  const count = cartvalue.reduce((acc, val) => {
    return (acc + ((countArray[val.id-1])) || 0);
  }, 0);
    return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">

    <div className="mobile-bar">
      <i class={`fa-solid ${showNav ? "fa-xmark" : "fa-bars"}`} onClick={showNavbar}></i>
      </div>
    

    <NavLink className="navbar-brand" to="/ecommerce/"><span className="border border-1 border-white p-1 ms-3"><span className="bg-blue text-white">RIDOY</span> <span className="nav-shop">SHOP</span></span></NavLink>
    <div className={`link-div ${showNav ? "" : "hideMobile"}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/ecommerce/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/ecommerce/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/ecommerce/product">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/ecommerce/contact">Contact</NavLink>
        </li>

        <Link to={`/ecommerce/cart`}
        className="text-decoration-none">
        <li>
        <div className="d-flex align-items-center cart-power-parent">
        <i className="fa-solid fa-cart-shopping cart"></i>
        <sup className="cart-power">
         {count}
         </sup>
        </div>
        </li>
        </Link>

          </ul>
    </div>
  </div>
</nav>
</>
    )
}
export default Navbar;