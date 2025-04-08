import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../context/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent contructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  componentDidUpdate() {
    console.log(`Parent componentDidUpdate`);
  }

  render() {
    console.log("parent render");
    return (
      <div className="p-5">
        <h1>About Us</h1>
        <h2>This is food delivery app</h2>
        <div>
           <UserContext.Consumer>
            {({loggedInUser})=><div className="font-bold">LoggedIn User: {loggedInUser}</div>}
          </UserContext.Consumer>
        </div>
        <User
          sNo="0"
          location="Pune"
          address="Dange Chowk, Pune, Maharashtra"
        />
        <UserClass sNo="1" location="Munbai" address="Munbai, Maharashtra" />
        <UserClass
          sNo="2"
          location="Indore"
          address="Vijay Nagar, Indore, MP"
        />
      </div>
    );
  }
}

export default About;

/* 
How lifecycle method are called

====== Mounting Phase =======
parent contructor
parent render
child 1 constructor
child 1 render
child 2 constructor
child 2 render
child 1 componentDidMount
child 2 componentDidMount
parent componentDidMount

======= Updating Phase ===============
child 1 render
child 2 render
Child 1 componentDidUpdate
Child 2 componentDidUpdate

======== Unmounting phase ============
Child 1 componentWillUnmount
Child 2 componentWillUnmount

*/
