import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//action defined externally, not inside reducers. To handle this we will have to use extraReducers
export const getUserProfile = createAsyncThunk("userProfile", async (req) => {
  const data = await fetch("https://api.github.com/users/"+req);
  return data.json();
});

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    data: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder)=> {
    builder.addCase(getUserProfile.pending, (state) =>{
        state.loading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action)=>{
        state.loading = false;
        state.data = action.payload;
    })
    builder.addCase(getUserProfile.rejected, (state, action) =>{
        state.loading = false;
        state.error = action.payload;
    });
  },
});

export default userProfileSlice.reducer;
