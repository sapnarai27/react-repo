import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        //actions- addItem, removeItem and clearCart.The functions written infront of these actions are reducer functions
        addItem: (state, action)=>{
            /* In Vanilla Redux, there was the clear instruction by Redux to not mutate the original state
             We used to create imutable copy the state and modify it and return it
             const newState = [...state];
             newState.items.push(action.payload);
             return newState; // return was mandatory

             In RTK, Immer.js library is being used BTS to perform this step which we use to do in Vanilla Redux
            */

            state.items.push(action.payload) // we are mutating the states here
            console.log(current(state));

        },
        removeItem: (state, action) =>{
            const indexToRemove = action.payload;
            state.items.splice(indexToRemove, 1);

        },
        clearCart: (state) =>{
            state.items.length = 0;
            // state = [], this will not work as we are not modifying the state we are changing the reference to it
        }
    }

})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;