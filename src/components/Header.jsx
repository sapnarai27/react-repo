import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items);
  
  return (
    <div className="flex justify-between box-border items-center bg-orange-400 border-1 border-black">
      <img className="h-25 w-25" src={LOGO_URL} />
      <div className="flex gap-2 p-4 m-4">
        <span>Online Status:{onlineStatus?"✅":"🔴"}</span>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/grocery">Grocery Store</Link>
        <Link to="/cart">Cart- ({cartItems.length} items)</Link>
        <Link to="/demo-hooks">Hooks</Link>
        <Link to="/user-profile"><span className="font-bold text-gray-100">{loggedInUser}</span></Link>

        
        <button
          onClick={() =>
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
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
