import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="flex justify-between box-border items-center bg-orange-400 border-1 border-black">
      <img className="h-25 w-25" src={LOGO_URL} />
      <div className="flex gap-2 p-4 m-4">
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
          className="bg-blue-500 w-15 text-white rounded-xs cursor-pointer"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
