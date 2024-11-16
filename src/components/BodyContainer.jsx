import ResCard from "./ResCard";
import { restList } from "../utils/mockData";
import { useState } from "react";
const BodyContainer = () => {
  const [restListData, setRestListData] = useState(restList);
  return (
    <div className="body-container">
      <div className="btn-element">
        <button
          onClick={() => {
            const updatedRestList = restListData.filter(
              (res) => res.data.avgRating > 4
            );
            setRestListData(updatedRestList);
          }}
        >
          Find Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="card-list-container">
        {restListData.map((resData) => (
          <ResCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
