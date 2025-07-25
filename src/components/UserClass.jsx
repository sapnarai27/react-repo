import React from "react";
import { USER_API } from "../utils/constants";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "dummy",
      company: "xyz ltd",
      bio: "abc",
    };
    console.log(`child ${this.props.sNo} constructor`);
  }
  async componentDidMount() {
    console.log(`child ${this.props.sNo} componentDidMount`);
    const data = await fetch(USER_API);
    const jsonData = await data.json();
    this.setState(jsonData);

    this.timer = setInterval(() => {
      console.log("called in every 1 second");
    }, 1000);
  }
  componentDidUpdate() {
    console.log(`Child ${this.props.sNo} componentDidUpdate`);
  }
  componentWillUnmount() {
    console.log(`Child ${this.props.sNo} componentWillUnmount`);
    clearInterval(this.timer);
  }
  render() {
    console.log(`child ${this.props.sNo} render`);
    const { location, address } = this.props;
    const { count, name, company, bio } = this.state;

    return (
      <div className="border-1 p-5 m-2">
        <div>Count: {count}</div>
        <button
          className="bg-gray-500 text-white p-1 rounded-sm cursor-pointer"
          onClick={() => {
            this.setState({
              count: this.state.count + 1, // instaed of this.state.count we can use "count". we have alredy destructed it.
            });
          }}>
          Increase the count
        </button>
        <div>Name: {name}</div>
        <div>Company: {company}</div>
        <div>Bio: {bio}</div>
        <div>Location: {location} </div>
        <div>Address: {address}</div>
      </div>
    );
  }
}
export default UserClass;

/* LifeCycle Method for this component

Comment the code in About.jsx while calling <UserClass/> second time and comment all the consoles in About.jsx
to understand the flow of this component better

===== Mounting ======
Mounting will be called when user navigate to About Us page
child 1 constructor
child 1 render (Render HTML with dummy name which is defined in constructor)
child 1 componentDidMount (call api and update dummy data with api data)

===== Updating =======
child 1 render (render HTML with api data)
Child 1 componentDidUpdate (called after Dom is updated with api data)


===== Unmounting =======
This will be called when user unload this component About Us (or when user navigate back to other page)
"Child 1 componentWillUnmount" will be printed when user navigate to any other page


*/
