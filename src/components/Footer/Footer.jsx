import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <h2>
          GnG<sup>™</sup>
        </h2>
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick links</h4>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/AboutUs"}>About</Link>
          </p>
          <p>
            <Link to={"contactUs"}>Contact</Link>
          </p>
          <p>
            <Link to={"OurProjects"}>Projects</Link>
          </p>
        </div>
        <div className="footer-services">
          <h4>Our Projects</h4>
          <p>
            <Link to={""}>Alinza</Link>
          </p>
        </div>
        <div className="social-media">
          <h4>Social</h4>
          <p>
            <Link to={"https://twitter.com/Gngbuilders"} target="__blank">
              <i className="fab fa-twitter"></i> Twitter
            </Link>
          </p>
          <p>
            <Link to={"https://www.youtube.com/@GNGBUILDERS"} target="__blank">
              <i className="fab fa-facebook"></i> YouTube
            </Link>
          </p>
          <p>
            <Link to={"https://www.facebook.com/gng.builders/"} target="__blank">
              <i className="fab fa-facebook"></i> FaceBook
            </Link>
          </p>
          <p>
            <Link
              to={
                "https://www.instagram.com/gng_builders?igsh=MXN5M2M3NG5tN3RreA%3D%3D&utm_source=qr"
              }
              target="__blank"
            >
              <i className="fab fa-instagram"></i> Instagram
            </Link>
          </p>
        </div>
        <div className="footer-details">
          <h4 className="footer-address">Address</h4>
          <p>Kishanpura Road, Dhakoli, Zirakpur, Mohali, Punjab</p>
          <h4 className="mobile">Mobile</h4>
          <p>
            <Link to={"tel: 7404804048"}>+91-7404804048</Link>
          </p>
          <h4>Email</h4>
          <p>
            <Link to={""}>gngzirakpur@gmail.com</Link>
          </p>
        </div>
      </div>
      <footer>
        <hr style={{ background: "black", color: "black" }} />COPYRIGHT © 2024. GNG, ALL RIGHTS RESERVED
      </footer>
    </div>
  );
};

export default Footer;
