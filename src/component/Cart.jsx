import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,selectCounter1,selectCounter2,selectCounter3,selectCounter4,selectCounter5,selectCounter6,selectCounter7,selectCounter8,selectCounter9,selectCounter10,selectCounter11,selectCounter12,selectCounter13,selectCounter14,selectCounter15,selectCounter16,selectCounter17,selectCounter18,selectCounter19,selectCounter20 } from './Slice/Slice';
import {selectCart,remove,clear} from './Slice/CartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartvalue = useSelector(selectCart);
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
  const count = [count1,count2,count3,count4,count5,count6,count7,count8,count9,count10,count11,count12,count13,count14,count15,count16,count17,count18,count19,count20]
  const increase = (id) => {
    dispatch(increment(id));
}
  const decrease = (id) => {
    dispatch(decrement(id));
  }
  const removeItems = (id) => {
    dispatch(remove(id));
  }
  const ClearCart = () => {
    dispatch(clear());
  }
const subtotal = cartvalue.reduce((acc, val) => {
  return (acc + ((val.price * count[val.id-1])) || 0);
}, 0);
const formattedSubtotal = parseFloat((subtotal*0.95).toFixed(2));
const shipping = formattedSubtotal >= 1000 ? formattedSubtotal>=2000 ? formattedSubtotal>=3000 ? 30 : 20 : 10 : formattedSubtotal === 0 ? 0 : 5; 
const orderTotal = formattedSubtotal + shipping;
  return (
    <div className='cart-div'>
      <h1 className="text-black about-heading text-center mb-5">
         Cart Items
      </h1>
      <div className='cart-head-div'>
        <div>PRODUCT</div>
        <div className='hide-mobile'>PRICE</div>
        <div>QUANTITY</div>
        <div className='hide-mobile'>SUBTOTAL</div>
        <div>REMOVE</div>
      </div>
    
      <div className='cart-head-div cart-border'></div>
      
     {
     cartvalue && cartvalue.map((val) => (
      <div key={val.id}>
      <div className='cart-head-div cart-price' key={val.id}>
        <div className=''>
        <img src={val.image} className='img-fluid cart-img' alt=''/>
        </div>
        <div className='hide-mobile'>${parseFloat((val.price * 95) / 100).toFixed(2)}</div>

        <div>
          
           <span onClick = {() => decrease(val.id)}><i className="fa-solid fa-minus product-icon mx-1"></i></span> 

           {
            val.id===1 &&
           <span>{count1}</span>
          }
          {
            val.id===2 &&
           <span>{count2}</span>
          }
          {
            val.id===3 &&
           <span>{count3}</span>
          }
          {
            val.id===4 &&
           <span>{count4}</span>
          }
          {
            val.id===5 &&
           <span>{count5}</span>
          }
          {
            val.id===6 &&
           <span>{count6}</span>
          }
          {
            val.id===7 &&
           <span>{count7}</span>
          }
          {
            val.id===8 &&
           <span>{count8}</span>
          }
          {
            val.id===9 &&
           <span>{count9}</span>
          }
          {
            val.id===10 &&
           <span>{count10}</span>
          }
          {
            val.id===11 &&
           <span>{count11}</span>
          }
          {
            val.id===12 &&
           <span>{count12}</span>
          }
          {
            val.id===13 &&
           <span>{count13}</span>
          }
          {
            val.id===14 &&
           <span>{count14}</span>
          }
          {
            val.id===15 &&
           <span>{count15}</span>
          }
          {
            val.id===16 &&
           <span>{count16}</span>
          }
          {
            val.id===17 &&
           <span>{count17}</span>
          }
          {
            val.id===18 &&
           <span>{count18}</span>
          }
          {
            val.id===19 &&
           <span>{count19}</span>
          }
          {
            val.id===20 &&
           <span>{count20}</span>
          }
          
          <span onClick = {() => increase(val.id)}><i className="fa-solid fa-plus product-icon mx-1"></i></span> 
        </div>

        <div className='hide-mobile'>
        {
        val.id === 1 &&
        <div>${(parseFloat(val.price * 0.95) * count1).toFixed(2)}</div>
        }
        {
        val.id === 2 &&
        <div>${(parseFloat(val.price * 0.95) * count2).toFixed(2)}</div>
        }
        {
        val.id === 3 &&
        <div>${(parseFloat(val.price * 0.95) * count3).toFixed(2)}</div>
        }
        {
        val.id === 4 &&
        <div>${(parseFloat(val.price * 0.95) * count4).toFixed(2)}</div>
        }
        {
        val.id === 5 &&
        <div>${(parseFloat(val.price * 0.95) * count5).toFixed(2)}</div>
        }
        {
        val.id === 6 &&
        <div>${(parseFloat(val.price * 0.95) * count6).toFixed(2)}</div>
        }
        {
        val.id === 7 &&
        <div>${(parseFloat(val.price * 0.95) * count7).toFixed(2)}</div>
        }
        {
        val.id === 8 &&
        <div>${(parseFloat(val.price * 0.95) * count8).toFixed(2)}</div>
        }
        {
        val.id === 9 &&
        <div>${(parseFloat(val.price * 0.95) * count9).toFixed(2)}</div>
        }
        {
        val.id === 10 &&
        <div>${(parseFloat(val.price * 0.95) * count10).toFixed(2)}</div>
        }
        {
        val.id === 11 &&
        <div>${(parseFloat(val.price * 0.95) * count11).toFixed(2)}</div>
        }
        {
        val.id === 12 &&
        <div>${(parseFloat(val.price * 0.95) * count12).toFixed(2)}</div>
        }
        {
        val.id === 13 &&
        <div>${(parseFloat(val.price * 0.95) * count13).toFixed(2)}</div>
        }
        {
        val.id === 14 &&
        <div>${(parseFloat(val.price * 0.95) * count14).toFixed(2)}</div>
        }
        {
        val.id === 15 &&
        <div>${(parseFloat(val.price * 0.95) * count15).toFixed(2)}</div>
        }
        {
        val.id === 16 &&
        <div>${(parseFloat(val.price * 0.95) * count16).toFixed(2)}</div>
        }
        {
        val.id === 17 &&
        <div>${(parseFloat(val.price * 0.95) * count17).toFixed(2)}</div>
        }
        {
        val.id === 18 &&
        <div>${(parseFloat(val.price * 0.95) * count18).toFixed(2)}</div>
        }
        {
        val.id === 19 &&
        <div>${(parseFloat(val.price * 0.95) * count19).toFixed(2)}</div>
        }
        {
        val.id === 20 &&
        <div>${(parseFloat(val.price * 0.95) * count20).toFixed(2)}</div>
        }
        </div>

        <div>
           <i className="fa-solid fa-trash trash-icon" onClick={() => removeItems(val.id)}></i>
        </div>
      </div>
      <div className='cart-head-div cart-border'></div>
      </div>
     ))}
      
      <div className='cart-head-div justify-content-between'>
      
       <Link to='/ecommerce/product'>
        <button type='button' className='cart-btn'>CONTINUE</button>
        </Link>

        <button type='button' className='cart-btn clr-filter' onClick={ClearCart}>CLEAR CART</button>

      </div>
  
      <div className='cost'>
         <div>
        <p>Subtotal: </p>
    <p className='cost-para'>{formattedSubtotal > 0 ? '$' : ""}{formattedSubtotal}</p>
       </div>
         <div>
         <p>Shipping Fee:</p>
         <p className='cost-para'>{shipping > 0 ? '$' : ""}{shipping}</p>
         </div>
         <div className='cost-border'></div>
         <div>
         <p>Order Total: </p>
        <p className='cost-para'>{orderTotal > 0 ? '$' : ""}{parseFloat(orderTotal.toFixed(2))}</p>
        </div>
      </div>

    </div>
  )
}

export default Cart;

