import {Link} from "react-router-dom";
const Footer = () => {
    return (
      <div className="position-relative">       
        <div className="container-fluid footer-container">
        <div className="footer-border">
        <div className="container-lg d-flex justify-content-around footer-mobile">
          <div className="footer-ridoy">
            <h5>Ridoy Mondol</h5>
            <p>If you need any kind of help,<br/> please feel free to Contact me</p>
          </div>

          <div className="footer-follow">
            <h5>Follow me to get important<br/> updates</h5>
            <input type="email" placeholder="Your E-mail" className="footer-input"/><br/>
            <Link to= "/e-commerce/contact">
            <button className="btn-1 footer-btn">Message</button>
            </Link>
          </div>

          <div className="footer-follow">
            <h5>Follow Me on Social Media</h5>
            <div className="d-flex gap-2">
            <Link className="footer-link" to="https://web.facebook.com/profile.php?id=100015131225530"><i className="fa-brands fa-facebook footer-icon"></i></Link>

            <Link className="footer-link" to="https://www.linkedin.com/in/md-ridoy-mondol-885555297/"><i className="fa-brands fa-linkedin footer-icon"></i></Link>

            <i className="fa-brands fa-telegram footer-icon"></i>
            </div>
          </div>

          <div className="footer-follow">
            <h5>Call Me</h5>
            <p>+8801319118383</p>
          </div>
        </div>
        </div>
        <div className="d-flex justify-content-around pt-3 footer-end">
          <p className="rights">&copy; {new Date().getFullYear()} All Rights Reserved By Md. Ahatashamul Islam Mondol </p>
          <p className="privacy-policy">PRIVACY POLICY <br/> CREATE BY RIDOY MONDOL</p>
        </div>
        </div>
        </div>
    );
}
export default Footer;