import MenuItem from "./MenuItem";
const RestaurantMenu = ({ menu, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false); -- Lift this state up to acheive - If One accordian is expanded other should be collaped
  const clickHandler = () => {
    setShowIndex()
  };
  return (
    <div className="shadow border-b-1 border-gray-200 rounded-md p-6 my-3 cursor-pointer">
      <div onClick={clickHandler} className="flex justify-between">
        <div className="font-bold text-xl">
          {menu.title} ({menu.itemCards.length})
        </div>
        <div>{showItem ? "⬆️" : "⬇️"}</div>
      </div>
      {showItem && <MenuItem showRemove={false} itemList={menu.itemCards} />}
    </div>
  );
};

export default RestaurantMenu;
