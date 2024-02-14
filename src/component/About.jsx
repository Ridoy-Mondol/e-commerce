import img from "../component/Images/e-commerce-about.jpg";
import Team from "./Team";
const About = () => {
    return (
        <>
          <div className="about-div">
            <div className="about-content d-flex">
            <div className="w-50 px-lg-5 px-3 d-flex flex-column justify-content-center gap-4 about-half">
            <div className="top-margin"></div>
            <h1 className="wlc text-black about-heading">
              Who We Are
            </h1>
            <p className="hero-text">
            At <span className="shop-name">RIDOY SHOP</span>,<br/> we blend fashion, jewelry, and electronics to redefine your shopping experience with quality, style, and innovation.
            </p>
            </div>
            <div className = "w-50 about-half">
               <img src = {img} className = "img-fluid about-img"/>
            </div>
            </div>
          </div>
          <Team />
        </>
    )
}
export default About;