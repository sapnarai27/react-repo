import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
import { CARD_LIST } from "../utils/constants";
import UserContext from "../context/UserContext";

const BodyContainer = () => {
  const [restListData, setRestListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_LIST);
    const jsonData = await data.json();

    //optional chaining
    const finalData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestListData(finalData);
    setFilteredData(finalData);
  };

  const onClickSearch = () => {
    const filteredData = restListData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const onClickCard = (id) => {
    navigate(`/restDetails/${id}`);
  };

  const {loggedInUser, setUserName} = useContext (UserContext);

  //conditional rendering
  return restListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      <div className="flex gap-2 m-2">
        <div className="flex gap-2">
          <input
            data-testid="search-text"
            className="border-1 rounded-sm p-1"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-gray-500 text-white p-1 rounded-sm cursor-pointer"
            onClick={onClickSearch}>
            Search
          </button>
        </div>
        <button
          className="bg-gray-500 text-white p-1 rounded-sm cursor-pointer"
          onClick={() => {
            const updatedRestList = restListData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredData(updatedRestList);
          }}>
          Top Rated Restaurants{" "}
        </button>
        <input
            data-testid="user-name-text"
            className="border-1 rounded-sm p-1"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
      </div>
      <div className="flex gap-7 flex-wrap p-3">
        {filteredData.map((resData) => (
          <div
            data-testid='card-container'
            key={resData.info.id}
            onClick={() => onClickCard(resData.info.id)}>
            {resData.info.avgRating > 4.5 ? (
              <RestaurantCardWithLabel resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
