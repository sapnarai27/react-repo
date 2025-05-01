import { REST_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //Destructuring
  const {
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    isOpen,
    veg,
  } = props.resData.info;
  return (
    <div
      data-testid="restuarant-card"
      className="w-68 h-100 p-6 bg-gray-200 border-1 border-gray-950 rounded-md cursor-pointer hover:bg-gray-300">
      <img className="h-50 w-full" src={REST_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3 className="text-amber-700">✡️Ratings: {avgRating}</h3>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
    </div>
  );
};

// HOC

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 m-1 rounded-sm text-xs">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// export const withPromotedLabel = (RestaurantCard) => {
//   const ModifiedComponent = (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white p-1 m-1 rounded-sm text-xs">
//           Top Rated
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   }
//   return ModifiedComponent;
// };

export default RestaurantCard;
