import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import { increment,decrement,selectCounter1,selectCounter2,selectCounter3,selectCounter4,selectCounter5,selectCounter6,selectCounter7,selectCounter8,selectCounter9,selectCounter10,selectCounter11,selectCounter12,selectCounter13,selectCounter14,selectCounter15,selectCounter16,selectCounter17,selectCounter18,selectCounter19,selectCounter20 } from './Slice/Slice';
import { add } from './Slice/CartSlice';

const ProductDetails = () => {
  const [data, setData] = useState ([]);
  const dispatch = useDispatch();
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

  const incrementCount = (id) => {
    dispatch(increment(id));
  }
  const decrementCount = (id) => {
  dispatch (decrement(id));
 }

  const url = "https://fakestoreapi.com/products";
  const {id} = useParams();
  useEffect (() => {
    const fetchProductDetails = async () => {
      try {
       const res = await fetch (`${url}/${id}`);
       const productData = await res.json();
       setData(productData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductDetails ();
  },[id]);
  const addCartItems = (data) => {
    dispatch (add(data));
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  const starRating = Array.from ({length: 5}, (elem,index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {
         data.rating && data.rating.rate >= index + 1 ? (
            <i class="fa-solid fa-star star"></i>
          ) : data.rating && data.rating.rate  >= number ? (
            <i class="fa-solid fa-star-half-stroke star"></i>
          ) : (
            <i class="fa-regular fa-star star"></i>
          )
        }
      </span>
    )
  })
  return (
    <div className='container productdetails-div' key={data.id}>
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-end align-items-center'>
        <img src = {data.image} className='img-fluid productDetails-img' alt=''/>
        </div>

        <div className='col-md-6'>
        <div className='product-info'>
        <h5 className='product-title'>{data.title}</h5>
        <div className='mt-3'>
        <span>{data.rating && starRating}</span>
        <span className='ms-2'>({data.rating && data.rating.count} customer reviews)</span>
        </div>
        <h6 className='original-price mt-3'>Price : <span className='text-decoration-line-through'>${data.price}</span></h6>
        <h6 className='mt-3 offer-price'>Deal of the day : ${parseFloat(data.price * 0.95).toFixed(2)}</h6>
        <p className='mt-3 product-desc'>{data.description}</p>

        <div className='d-flex justify-content-between flex-wrap product-details-inline gap-3'>
        <div className='d-flex flex-column align-items-center details-icon-width'>
        <div className="icon icon-div">
          <i class="fa-solid fa-truck product-icon"></i>
          </div>
          <p className="card-text">
          Low shipping
          </p>
          </div>

          <div className='d-flex flex-column align-items-center details-icon-width'>
        <div className="icon icon-div">
          <i class="fa-solid fa-recycle product-icon"></i>
          </div>
          <p className="card-text">
            <span className='hide-mobile hide-tab'>30 days replacement</span>
            <span className='hide-laptop'>Quick exchange</span>
          </p>
          </div>

          <div className='d-flex flex-column align-items-center details-icon-width'>
        <div className="icon icon-div">
          <i class="fa-solid fa-truck-fast product-icon"></i>
          </div>
          <p className="card-text">
            Fast Delivery
          </p>
          </div>

          <div className='d-flex flex-column align-items-center details-icon-width'>
        <div className="icon icon-div">
          <i class="fa-solid fa-shield-halved product-icon"></i>
          </div>
          <p className="card-text">
            2 Years Warranty
          </p>
          </div>
        </div>

        <p className='available mt-3'>
           Available : <span>In stock</span>
        </p>
        <p className='available mt-3'>
           Category : <span className='text-capitalize'>{data.category}</span>
        </p>
        <div className='product-border mt-3'></div>
        <div className='mt-3'>
          <span onClick={() => decrementCount(data.id)}><i class="fa-solid fa-minus product-icon"></i></span>

          {
            data.id===1 &&
           <span>{count1}</span>
          }
          {
            data.id===2 &&
           <span>{count2}</span>
          }
          {
            data.id===3 &&
           <span>{count3}</span>
          }
          {
            data.id===4 &&
           <span>{count4}</span>
          }
          {
            data.id===5 &&
           <span>{count5}</span>
          }
          {
            data.id===6 &&
           <span>{count6}</span>
          }
          {
            data.id===7 &&
           <span>{count7}</span>
          }
          {
            data.id===8 &&
           <span>{count8}</span>
          }
          {
            data.id===9 &&
           <span>{count9}</span>
          }
          {
            data.id===10 &&
           <span>{count10}</span>
          }
          {
            data.id===11 &&
           <span>{count11}</span>
          }
          {
            data.id===12 &&
           <span>{count12}</span>
          }
          {
            data.id===13 &&
           <span>{count13}</span>
          }
          {
            data.id===14 &&
           <span>{count14}</span>
          }
          {
            data.id===15 &&
           <span>{count15}</span>
          }
          {
            data.id===16 &&
           <span>{count16}</span>
          }
          {
            data.id===17 &&
           <span>{count17}</span>
          }
          {
            data.id===18 &&
           <span>{count18}</span>
          }
          {
            data.id===19 &&
           <span>{count19}</span>
          }
          {
            data.id===20 &&
           <span>{count20}</span>
          }

          <span onClick={() => incrementCount(data.id)}><i class="fa-solid fa-plus product-icon"></i></span>
        </div>

        <Link to={`/e-commerce/cart`}>
        <button type='button' className='cart-btn' onClick = {() => addCartItems(data)}>ADD TO CART</button>
        </Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails
