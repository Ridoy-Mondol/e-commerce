import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const HomeProducts = () => {
    const url = "https://fakestoreapi.com/products";
    const [Products, setProducts] = useState ([]);
    useEffect ( () => {
        const fetchProducts = async () => {
            const response = await fetch (url);
            const data = await response.json ();
            setProducts (data);
        };
        fetchProducts();
    },[]);
  return (
    <div className="feature">
          <div className="feature-text">
          <h3 className='check-now'>CHECK NOW!</h3>
          <h4 className='feature-heading'>Our Feature Products</h4>
          </div>
          <div className="d-flex justify-content-center flex-wrap product-outside row-gap-5 col-gap-0">
          {
           Products.slice(12,18).map((elem) => {
                return (
                    <Link to = {`/ecommerce/productdetails/${elem.id}`} className='products-link'>
                    <div className="card mx-4 rounded-0 hover-card">
                    <figure className="position-relative">
                    <figcaption className="position-absolute fig-caption">{elem.category}</figcaption>
                    <img src = {elem.image} style={{height:"11.5rem"}} className="img-fluid product-img" />
                    </figure>
                    <div className="card-datas">
                    <div className="d-flex justify-content-between">
                    <p className="card-text-2 me-1 price">${elem.price}</p>
                </div>
            </div>
        </div>
        </Link>
                )
            })
          }
          </div>
          <Link to = "/ecommerce/product">
              <button className="home-btn feature-btn">SEE ALL</button>
            </Link> 
     </div>
  )
}

export default HomeProducts;
