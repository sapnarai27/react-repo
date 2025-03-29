import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <span>Cart</span>
        <button
          onClick={() =>
            btnName === "Login" ? setBtnName("Log Out") : setBtnName("Login")
          }
          className="login-btn"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
