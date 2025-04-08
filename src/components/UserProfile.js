import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/userProfileSlice";

const UserProfile = () => {
  const data = useSelector((store) => store.user);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch an action
    dispatch(getUserProfile("sapnarai27"));
  }, []);

  const { name, location, company, bio, avatar_url } = data.data;

  return (
    <div className="w-9/12 m-auto p-5 flex">
      <div className="p-10 w-6/12 text-2xl">
        <div className="font-bold">User Profile</div>
        <div>Name: {name} </div>
        <div>Bio: {bio}</div>
        <div>Company: {company}</div>
        <div>Location: {location}</div>
      </div>
      <div className="w-6/12">
        <img src={avatar_url} />
      </div>
    </div>
  );
};

export default UserProfile;
