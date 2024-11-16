import { LOGO_URL } from "../utils/constants";
const Header = () => (
  <div className="header">
    <img
      className="logo"
      src={LOGO_URL}
    />
    <div className="links">
      <span>Home</span>
      <span>About Us</span>
      <span>Contact Us</span>
      <span>Cart</span>
    </div>
  </div>
);

export default Header;
