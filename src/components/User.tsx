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
    <div className="border-1 p-5 m-2">
      <div>Count: {count}</div>
      <button
        className="bg-gray-500 text-white p-1 rounded-sm cursor-pointer"
        onClick={() => {
          setCount(count + 1);
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
};

export default User;
