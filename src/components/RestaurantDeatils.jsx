import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResDetails from "../utils/useResDetails";

const RestaurantDetails = () => {

    const { resId } = useParams();
    const restInfo = useResDetails(resId);

    if (restInfo===null) return <Shimmer />

    const {name, costForTwoMessage, cuisines, avgRating} = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    return(
        <div className="m-2 p-7">
            <div className="font-bold text-xl">{name}</div>
            <div className="text-amber-500">Ratings: {avgRating}</div>
            <div>Cost for Two: {costForTwoMessage}</div>
            <div>Cousines: {cuisines.join(", ")}</div>

            <div className="p-5">
                <div className="font-bold text-xl">Menu : </div>
                <ul>
                    {itemCards.map(resInfo=>
                       <li key={resInfo.card.info.id}>{resInfo.card.info.name} - Rs. {resInfo.card.info.price/100 || resInfo.card.info.defaultPrice/100}</li>
                    )}
                </ul>
            </div>
            
        </div>
    )
}

export default RestaurantDetails;