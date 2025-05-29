import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { setCatagory, initialCategory, initialRating, setRating, setPrice, clearFilter } from './Slice/FilterSlice';
const Product = () => {
  const [products, setProducts] = useState([]);
  const [inline, setInline] = useState(false);
  const [all, setAll] = useState (true);
  const [men, setMen] = useState (false);
  const [women, setWomen] = useState (false);
  const [jewelery, setJewelery] = useState (false);
  const [electronics, setElectronics] = useState (false);
  const [priceNum, setPriceNum] = useState(50);
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let min,max,minPrice,maxPrice;

  const Searchfilter = (value) => {
    if (value === "" || value === "all") {
      dispatch(initialCategory());
    }
    else {
      if(value === "m" || value === "me" ||value === "men" ||value === "men'" ||value === "mens" ||value === "men's" ||value === "menscloth" || value === "men'scloth"){
        value = "men's clothing"
      }
      dispatch(setCatagory(value));
    }
  }
  const filterPrice = (val) => {
      if (val === "lowest") {
         minPrice = 0;
         maxPrice = 100;
      }
      else if (val === "medium") {
        minPrice = 100;
        maxPrice = 500;
     }
     else if (val === "highest") {
      minPrice = 500;
      maxPrice = 1000;
   }
   else {
    minPrice = 0;
    maxPrice = 1000;
   }
   dispatch(setPrice({ minprice: minPrice, maxprice: maxPrice }));
  }
  const itemFilter = (value) => {
    if (value === "All") {
       setAll(true);
       setMen(false);
       setWomen(false);
       setJewelery(false);
       setElectronics(false);
    }
    if (value === "men's clothing") {
       setAll(false);
       setMen(true);
       setWomen(false);
       setJewelery(false);
       setElectronics(false);
   }
   if (value === "women's clothing") {
       setAll(false);
       setMen(false);
       setWomen(true);
       setJewelery(false);
       setElectronics(false);
   }
   if (value === "jewelery") {
    setAll(false);
       setMen(false);
       setWomen(false);
       setJewelery(true);
       setElectronics(false);
   }
   if (value === "electronics") {
    setAll(false);
       setMen(false);
       setWomen(false);
       setJewelery(false);
       setElectronics(true);
   }

    if (value === "All") {
      dispatch(initialCategory());
    }
    else {
    dispatch(setCatagory(value));
  }
  }

  const filterRating = (value) => {
    if (value === "All") {
      dispatch(initialRating());
    }
    else {
      if(value === "best"){
        min = 4;
        max = 5;
      }
      if(value === "medium") {
        min = 3;
        max = 4;
      }
      if(value === "avg") {
        min = 0;
        max = 3;
      }
      dispatch(setRating({ min: min, max: max }));
    }
  }
  const PriceRange = (value) => {
   setPriceNum(value);
     if (value <33 ){
      minPrice = 0;
      maxPrice = 20;
     }
     else if (value < 66) {
        minPrice = 20;
        maxPrice = 100;
     }
     else {
      minPrice = 100;
      maxPrice = 1000;
    }
     dispatch(setPrice({ minprice: minPrice, maxprice: maxPrice }));
  }
  const FlteredProducts = products.filter((product) => {
    return (
    (filters.category === null || product.category === filters.category) &&
    (filters.rating === null || (product.rating && product.rating.rate >= filters.rating.min &&
    product.rating.rate < filters.rating.max)) && (
    product.price >= filters.price.minprice && product.price < filters.price.maxprice)
    );
  })
  const clearAllFilter = () => {
    dispatch (clearFilter());
    setPriceNum (50);
    setAll(true);
    setMen(false);
    setWomen(false);
    setJewelery(false);
    setElectronics(false);
  }
  useEffect (() => {
    const url = "https://fakestoreapi.com/products" 
  const fetchProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  }
  fetchProducts ();
},[]);
const showInline = () => {
  setInline(true);
}
const showNormal = () => {
  setInline(false);
}
    return (
      <>
        <div className="container-fluid product-container">

          <div className="d-flex justify-content-between mb-5 flex-wrap">
             <input type="text" placeholder="SEARCH" className="border- ps-2 py-1 product-input search-bar" onChange={(event) => Searchfilter (event.target.value)}/>

             <div className='d-flex justify-content-between product-heading-width'>
             <span className="d-flex gap-lg-3 gap-2 align-items-center hide-mobile">
                  <i className={`fa-solid fa-table-cells-large p-2 ${inline ? "bg-inactive" : "bg-active"}`} onClick={showNormal}></i>
                  <i className={`fa-solid fa-bars p-2 trusted
                  opacity-75 ${inline ? "bg-active" : "bg-inactive"}`} onClick={showInline}></i>
             </span>
             <span className="total-products">
                 {FlteredProducts.length} total products
             </span>
             <select placeholder="Price" className="px-2 opacity-75 product-input" onChange={(event) => filterPrice (event.target.value)}>
                <option value="all">Price(All)</option>
                <option value="lowest">Price(Lowest)</option>
                <option value="medium">Price(Medium)</option>
                <option value="highest">Price(Highest)</option>
             </select>
             </div>
          </div>

          <div className="d-flex justify-content-between flex-wrap">
            <div className='filter-mobile'>
              <div>
              <h5 className='filter-heading'>Category</h5>
              <p className={`product-text mt-4 ${all ? "text-decoration-underline" : ""}`} onClick = {() => itemFilter ('All')}>All</p>
              <p className={`product-text ${men ? "text-decoration-underline" : ""}`} onClick = {() => itemFilter ("men's clothing")}>Men's clothing</p>
              <p className={`product-text ${jewelery ? "text-decoration-underline" : ""}`} onClick = {() => itemFilter ('jewelery')}>Jewelery</p>
              <p className={`product-text ${women ? "text-decoration-underline" : ""}`} onClick = {() => itemFilter ("women's clothing")}>Women's clothing</p>
              <p className={`product-text ${electronics ? "text-decoration-underline" : ""}`} onClick = {() => itemFilter ('electronics')}>Electronics</p>
              </div>
              
              <div>
                <div>
              <h5 className='mt-lg-5 filter-heading'>Rating</h5>
              <select placeholder="Price" className="py-1 px-2 mt-3 opacity-75 product-input search-bar" onChange={(e) => filterRating(e.target.value)}>

              <option value="All">All</option>
                <option value="best">Best</option>
                <option value="medium">Medium</option>
                <option value="avg">Average</option>
             </select>
             </div>
             
             <div>
             <h5 className='mt-lg-5 mt-3 filter-heading'>Price</h5>
             <p className='product-text mt-3'>{priceNum}%</p>
             <input type="range" value={priceNum} min="0" max="100" onChange={(e) => PriceRange (e.target.value)} className='x'/>
             </div>
             <div>
             <button type="button" className="border-0 text-white py-2 px-3 mt-3 clr-filter" onClick = {clearAllFilter}>Clear Filters</button>
             </div>
             </div>
            </div>

            <div className={`d-flex justify-content-start
            products-div flex-wrap ${inline ? "d-none show-mobile" : "show-mobile"}`}>
              {
                FlteredProducts.slice(0,20).map((elem, index) => {
                  return (
                    <div className="product-card" key={index}>
                      <Link to = {`/e-commerce/productdetails/${elem.id}`} className="products-link">
                    <figure className="position-relative mb-0">
                    <figcaption className="position-absolute fig-caption">{elem.category}</figcaption>
                    <img src = {elem.image} style={{height:"10.5rem"}} className="img-fluid product-page-img" alt='' />
                    </figure>
                    <div className="d-flex justify-content-between">
                    <span className="card-text-2 me-1 price py-1">${elem.price}</span>
                </div> 
                </Link>            
        </div>

                  )
                })
              }
            </div>
            
            {
            inline && <div className='products-img-div d-flex flex-column gap-3'>
              {
                FlteredProducts.slice(0,20).map((elem,index) => {
                  return (
                    <Link to = {`/productdetails/${elem.id}`} className='products-link link-inline' key={index}>
                    <div className="product-card-inline d-flex align-items-center">
                    <div className="mb-0 product-page-img-inline">
                    <img src = {elem.image} style={{height:"10.5rem"}} className="img-fluid w-100" alt=''/>
                    </div>

                    <div className="product-info-inline">
                    <div className='category-inline'>
                      {elem.category}
                    </div>
                    <div className="card-text-2 me-1 price py-1">${elem.price}</div>
                    <p className='title-inline'>
                      {elem.title}
                    </p>
                    <button className='cart-btn'>
                      READ MORE
                    </button>
                    </div>
                    </div>
                    </Link>
                  )
                })
              }
            </div>
            }
            
          </div>

        </div>
      </>
    )
  }
  export default Product;