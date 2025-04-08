import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items); // we should only subscribe to the specific portion of store

  const dispatch = useDispatch();

  const handleClick = () => {
    //dispatch an action
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-auto w-6/12">
      <div className="text-center font-bold text-2xl">Cart</div>
      <div className="text-center">
        {cartItems.length > 0 && (
          <button
            className="bg-black text-white rounded-lg p-2 m-4 cursor-pointer"
            onClick={handleClick}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center m-2 text-md">
          Your cart is empty. Please add items to it.
        </div>
      ) : (
        <MenuItem showRemove={true} itemList={cartItems} />
      )}
    </div>
  );
};

export default Cart;
