// importing react and react-dom from node module which we have installed using npm
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <img
      className="logo"
      src="https://assets.isu.pub/document-structure/230212034237-008e265485a452aa3b6f928768529512/v1/620d340e145dd891370752dd41a9d730.jpeg"
    />
    <div className="links">
      <span>Home</span>
      <span>About Us</span>
      <span>Contact Us</span>
      <span>Cart</span>
    </div>
  </div>
);

const ResCard = (props) => {
  //Destructuring
  console.log(props);
  const { resName, avgRating, cloudinaryImageId, cuisines, costForTwo, isOpen, veg } =
    props.resData;
  return (
    <div className="card-container">
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

const RestList = [
  {
    id: "549580",
    resName: "Fresh Meal's",
    avgRating: "4.3",
    cuisines: ["North Indian", "South Indian"],
    costForTwo: "₹300 for two",
    veg: true,
    isOpen: true,
    cloudinaryImageId: "v5e3atn9tmtgcca1onnr",
  },
  {
    id: "830418",
    resName: "Indian Coffee House",
    cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
    avgRating: "4.5",
    cuisines: [
      "South Indian",
      "North Indian",
      "Chinese",
      "Fast Food",
      "Beverages",
    ],
    costForTwo: "₹400 for two",
    veg: false,
    isOpen: true,
  },
  {
    id: "870899",
    resName: "Paras Mishthan",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
    avgRating: "4.3",
    cuisines: ["Beverages", "Sweets", "Snacks"],
    costForTwo: "₹150 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "672945",
    resName: "Annu's Kitchen's Queen Of Paratha",
    cloudinaryImageId: "dd519572ed1bed19de47e94186e743ea",
    avgRating: 4.5,
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    costForTwo: "₹200 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "658210",
    resName: "The Fusion Lounge",
    cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",

    avgRating: "4.1",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    costForTwo: "₹300 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "549580",
    resName: "Fresh Meal's",
    avgRating: "4.3",
    cuisines: ["North Indian", "South Indian"],
    costForTwo: "₹300 for two",
    veg: true,
    isOpen: true,
    cloudinaryImageId: "v5e3atn9tmtgcca1onnr",
  },
  {
    id: "830418",
    resName: "Indian Coffee House",
    cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
    avgRating: "4.5",
    cuisines: [
      "South Indian",
      "North Indian",
      "Chinese",
      "Fast Food",
      "Beverages",
    ],
    costForTwo: "₹400 for two",
    veg: false,
    isOpen: true,
  },
  {
    id: "870899",
    resName: "Paras Mishthan",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
    avgRating: "4.3",
    cuisines: ["Beverages", "Sweets", "Snacks"],
    costForTwo: "₹150 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "672945",
    resName: "Annu's Kitchen's Queen Of Paratha",
    cloudinaryImageId: "dd519572ed1bed19de47e94186e743ea",
    avgRating: 4.5,
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    costForTwo: "₹200 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "658210",
    resName: "The Fusion Lounge",
    cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",

    avgRating: "4.1",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    costForTwo: "₹300 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "549580",
    resName: "Fresh Meal's",
    avgRating: "4.3",
    cuisines: ["North Indian", "South Indian"],
    costForTwo: "₹300 for two",
    veg: true,
    isOpen: true,
    cloudinaryImageId: "v5e3atn9tmtgcca1onnr",
  },
  {
    id: "830418",
    resName: "Indian Coffee House",
    cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
    avgRating: "4.5",
    cuisines: [
      "South Indian",
      "North Indian",
      "Chinese",
      "Fast Food",
      "Beverages",
    ],
    costForTwo: "₹400 for two",
    veg: false,
    isOpen: true,
  },
  {
    id: "870899",
    resName: "Paras Mishthan",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
    avgRating: "4.3",
    cuisines: ["Beverages", "Sweets", "Snacks"],
    costForTwo: "₹150 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "672945",
    resName: "Annu's Kitchen's Queen Of Paratha",
    cloudinaryImageId: "dd519572ed1bed19de47e94186e743ea",
    avgRating: 4.5,
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    costForTwo: "₹200 for two",
    veg: true,
    isOpen: true,
  },
  {
    id: "658210",
    resName: "The Fusion Lounge",
    cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",

    avgRating: "4.1",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    costForTwo: "₹300 for two",
    veg: true,
    isOpen: true,
  },
];

const BodyContainer = () => (
  <div className="body-container">
    {RestList.map((resData) => (
      <ResCard key={resData.id} resData={resData} />
    ))}
  </div>
);

const MainContainer = () => (
  <>
    <Header />
    <BodyContainer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainContainer />);
