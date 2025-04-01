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
        <div>
            <h1>{name}</h1>
            <h3>Ratings: {avgRating}</h3>
            <h3>Cost for Two: {costForTwoMessage}</h3>
            <h3>Cousines: {cuisines.join(", ")}</h3>

            <div>
                <h2>Menu</h2>
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