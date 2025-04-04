import { REST_URL } from "../utils/constants";
const MenuItem = ({ itemList }) => {
  console.log(itemList);
  return itemList.map((item) => (
    <div
      key={item.card.info.id}
      className="border-b-1 border-gray-200 text-gray-500 py-5 flex min-h-55">
      <div className="w-9/12">
        <div className="text-xl font-bold">{item.card.info.name} </div>
        <div className="font-bold">₹{item.card.info.price / 100}</div>
        <div className="text-green-700 font-bold">
          {item.card.info.ratings.aggregatedRating?.rating
            ? `✡️
        ${item.card.info.ratings.aggregatedRating.rating}(${item.card.info.ratings.aggregatedRating.ratingCountV2})`
            : ""}
        </div>
        <div className="text-sm">{item.card.info.description}</div>
      </div>
      <div className="w-3/12">
        <div className="absolute">
          <button className="bg-white text-green-500 rounded-sm border-1 border-gray-200 p-1 text-center my-30 mx-15">
            Add+
          </button>
        </div>

        <img className="w-full border-1 shadow rounded" src={REST_URL + item.card.info.imageId} />
      </div>
    </div>
  ));
};

export default MenuItem;
