// import img from "../component/shoping.jpeg";
// import { Link } from "react-router-dom";
// const HeroSection = (props) => {
//     return (
//         <div className="container pb-5 hero-div">
//           <div className="row">
//             <div className="col-md-6 hero-1">
//                <span>WELCOME TO</span>
//                <h3>{props.heading}</h3>
//                <p className="hero-text">Welcome to your one-stop destination for all your shopping needs! Dive into a world of endless choices, where quality meets affordability. At Ridoy Shop, we redefine the way you shop, bringing you the latest trends, hottest deals, and unbeatable prices, all at your fingertips.</p>
//                <Link className="btn btn-primary" to = "/product">SHOP NOW</Link> 
//             </div>
//             <div className="col-md-5 position-relative">
//                 <div className="img-1">
//                     <img src={img} alt="" className="img-fluid" style={{height: "12rem"}}/>
//                 </div>
//                 <div className="square">

//                 </div>
//             </div>
//           </div>
//         </div>
//     )
// }
// export default HeroSection;


import img from "../component/Images/hero-banner.jpg";
import { Link } from "react-router-dom";
const HeroSection = (props) => {
    return (
        <>
          <div className=" position-relative hero-div">
            <img src={img} className="img-fluid hero-img"/>
              <div className="position-absolute z-1 hero">
              <div className="position-absolute z-1 hero-1">
              <div className="wlc">WELCOME TO</div>
              <h5 className="home-brand">
              {props.heading}</h5>
              <p className="hero-text">Welcome to your one-stop destination for all your shopping needs! Dive into a world of endless choices, where quality meets affordability. At Ridoy Shop, we redefine the way you shop, bringing you the latest trends, hottest deals, and unbeatable prices, all at your fingertips.</p>
              <Link to = "/ecommerce/product">
              <button className="home-btn">SHOP NOW</button>
              </Link> 
             </div>
             </div>

          </div>
        </>
    )
}
export default HeroSection;