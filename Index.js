// importing react and react-dom from node module which we have installed using npm
import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const reactelement = (
  <h1 className="heading">Hello world from react element </h1>
);

//React functional Component

const HeadingComponent = () => (
  <div>
    <h1 className="heading">Hello world from react component </h1>
  </div>
);

const Title = () => (
    <div>Title of the page</div>
)

//Component Composition
const MainContainer = () => (
    <>
    <HeadingComponent/>
    {HeadingComponent()}  {/*Another way to call component */}
    <HeadingComponent></HeadingComponent> {/**3rd way to call component */}
    <Title />
    {reactelement}
    </>
)
 
//React works inside this root only
//We can create a root for any part of application. it can be header, footer, drawer etc or it can be whole application
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering react element
//root.render(reactelement);

//rendering funtional component

root.render(<MainContainer/>);
