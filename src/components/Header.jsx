import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="links">
        <span>Online Statue:{onlineStatus?"✅":"🔴"}</span>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/grocery">Grocery Store</Link>
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
