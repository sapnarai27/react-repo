// importing react and react-dom from node module which we have installed using npm
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";

const App = () => (
  <>
    <Header />
    <BodyContainer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
