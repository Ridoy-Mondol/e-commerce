import {Link} from "react-router-dom";
const Error = () => {
    return (
      
      <div className="error-div mx-auto">        
        <h1 className="error-heading wlc text-black about-heading text-center">404</h1>
        <p className="error-text">Page not found</p>
        <p className="hero-text text-center">The page you are looking for might have been removed or doesn't exist.You can go back to Home page by clicking the button below</p>
        <Link to="/"><button className="error-btn btn-1">HOME</button></Link>
        {/* </div> */}
        </div>
      
    )
  }
  export default Error;