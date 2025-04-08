import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import userProfileReducer from './userProfileSlice'

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        user: userProfileReducer,   //(we can create many reducers here and store's reducer combines all the slice's reducers here)
    }
});

export default appStore;

// we need to provide this store to our root component
{/* <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider> */}

//We can also provide this store to specific portion (specific component) of the app