import { REST_URL } from "../utils/constants";

const ResCard = (props) => {
  //Destructuring
  const {
    resName,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    isOpen,
    veg,
  } = props.resData.data;
  console.log(props.resData)
  return (
    <div className="card-container">
      <img
        className="res-image"
        src={
          REST_URL +
          cloudinaryImageId
        }
      />
      <h2>{resName}</h2>
      <h3>{avgRating}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
    </div>
  );
};

export default ResCard;
