import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

// User can get this "Default User" name anywhere in the application by using ==> const {loggedInUser} = useContext(UserContext);

//To get the context value in class based component
{
  /* <UserContext.Consumer>
  {({ loggedInUser }) => (
    <div className="font-bold">LoggedIn User: {loggedInUser}</div>
  )}
</UserContext.Consumer>; */
}

// But if user wants to update this value and get the updated value then provider needs to be added in root component
{
  /* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> //we can update context value by sending setter function (setUserName) in value
  <Header />
  <Outlet />
</UserContext.Provider>; */
}


//If we provide UserContext to <Header /> component on;y then the 
// updated value (which is fetched by api in App.js) will be available 
// to the Header component only. Other components will get loggedInUser 
// value as "Default User" declared in UserContext
