import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="links">
        <span>Home</span>
        <span>About Us</span>
        <span>Contact Us</span>
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
