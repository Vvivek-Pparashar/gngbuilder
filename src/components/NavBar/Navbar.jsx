import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <nav className={`${navBg ? "nav-active" : ""}`}>
      <div className="logo"></div>
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        <MenuOutlined style={{ fontSize: "25px" }} />
      </div>
      <ul className={`${open ? "active" : "not-active"}`}>
        <div
          className={`${open ? "close-btn-active" : "close-btn"}`}
          onClick={() => setOpen(!open)}
        >
          <CloseOutlined style={{ fontSize: "25px" }} />
        </div>

        <Link to="/" className="Link"  style={{color:"black"}}>
          Home
        </Link>
        <Link to="/AboutUs" className="Link" style={{color:"black"}}>
          About Us
        </Link>
        <Link to="/ContactUs" className="Link" style={{color:"black"}}>
          Contact Us
        </Link>
        <Link to="/OurProjects" className="Link" style={{color:"black"}}>
          Our Projects
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
