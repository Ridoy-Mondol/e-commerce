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
              <p className="hero-text">Welcome to your one-stop destination for all your shopping needs!<span className="hide-mobile"> Dive into a world of endless choices, where quality meets affordability. At Ridoy Shop, we redefine the way you shop, bringing you the latest trends, hottest deals, and unbeatable prices, all at your fingertips.</span></p>
              <Link to = "/e-commerce/product">
              <button className="home-btn">SHOP NOW</button>
              </Link> 
             </div>
             </div>

          </div>
        </>
    )
}
export default HeroSection;