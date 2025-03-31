import React from "react";
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
    const data = await fetch("https://api.github.com/users/sapnarai27");
    const jsonData = await data.json();
    this.setState(jsonData);

    this.timer = setInterval(()=>{
      console.log("called in every 1 second")
    }, 1000)
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
      <div className="user-container">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, // instaed of this.state.count we can use "count". we have alredy destructed it.
            });
          }}>
          Increase the count
        </button>
        <h5>Name: {name}</h5>
        <h5>Company: {company}</h5>
        <h5>Bio: {bio}</h5>
        <h5>Location: {location} </h5>
        <h5>Address: {address}</h5>
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
