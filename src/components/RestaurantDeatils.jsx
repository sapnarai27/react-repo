import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useResDetails from "../utils/useResDetails";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const restInfo = useResDetails(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null)
    return (
      <div className="p-7 w-6/12 m-auto text-2xl font-bold">Loading...</div>
    ); //Shimmer UI

  const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } =
    restInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems = itemCards.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="p-7 w-6/12 m-auto">
      <div className="font-bold text-xl">{name}</div>
      <div className="shadow border-1 border-gray-200 rounded-xl p-6 my-2">
        <span className="font-bold">
          ✡️{avgRating} ({totalRatingsString})
        </span>
        <span className="font-bold"> • {costForTwoMessage}</span>
        <div className="text-orange-600 font-bold underline text-sm">
          {" "}
          {cuisines.join(", ")}
        </div>
      </div>
      {menuItems.map((menu, index) => (
        <RestaurantMenu
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
          key={menu.card.card.categoryId}
          menu={menu.card.card}
          showItem={index === showIndex ? true : false}
        />
      ))}
    </div>
  );
};

export default RestaurantDetails;
