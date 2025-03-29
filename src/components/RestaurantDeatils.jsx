import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);

     // const param = useParams ();
     // console.log(param) - this will print {resId: '123'}

     // we can use destructuring here to get restId directly
    const { resId } = useParams();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}`)
        const jsonData = await data.json();
        const restaurantInfo = jsonData.data;
        setRestaurantInfo(restaurantInfo);
    }

    if (restaurantInfo===null) return <Shimmer />

    const {name, costForTwoMessage, cuisines, avgRating} = restaurantInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

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
                       <li key={resInfo.card.info.id}>{resInfo.card.info.name} - Rs. {resInfo.card.info.defaultPrice/100}</li>
                    )}
                </ul>
            </div>
            
        </div>
    )
}

export default RestaurantDetails;