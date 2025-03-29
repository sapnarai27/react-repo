import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
const BodyContainer = () => {
  const [restListData, setRestListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    //optional chaining
    const finalData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestListData(finalData);
    setFilteredData(finalData)
  }

  const onClickSearch = () =>{
    const filteredData = restListData.filter((res)=>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredData(filteredData);
  }

  const onClickCard = (id)=>{
    navigate(`/restDetails/${id}`)
  }

  //conditional rendering

  return restListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="serach">
          <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          <button className="search-btn" onClick={onClickSearch}>Search</button>
        </div>
        <button
          onClick={() => {
            const updatedRestList = restListData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredData(updatedRestList);
          }}
        >
          Find Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="card-list-container">
        {filteredData.map((resData) => (
          <div key={resData.info.id} onClick={()=>onClickCard(resData.info.id)}>
          <ResCard resData={resData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
