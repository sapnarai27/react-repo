import React, { useState, useEffect } from "react";

const User = ({ sNo, location, address }) => {
  const [count, setCount] = useState(0);
  const [resData, setResData] = useState({});

  /* We can not use async with useEffect. It gives the warning in console 
  "hook.js:608 Warning: useEffect must not return anything besides a function, which is used for clean-up."
  But we can use async in componentDidMount method */
  useEffect(() => {
    fetchData();
  }, []);

  /* If we provide return statement in useEffect it will be called once the component unmount
  similar to componentWillUnmount. We can acheive componentWillUnmount life cycle method using return 
  inside useEffect  */
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("print this with after each second");
    },1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/sapnarai27");
    const jsonData = await data.json();
    setResData(jsonData);
  };

  const { name, company, bio } = resData;

  return (
    <div className="user-container">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
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
};

export default User;
