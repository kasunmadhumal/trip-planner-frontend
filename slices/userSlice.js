import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
  username: null,
  userPhoto: null,
};

export const userSlice = createSlice({


  name: "user",
  initialState,
  reducers: {
     setUserEmail : (state, action) => {
      state.userEmail = action.payload;
     },
     setUserName : (state, action) => {
      state.username = action.payload;
     },
      setUserPhoto : (state, action) => {
        state.userPhoto = action.payload;
      },
  },


});

// Action creators are generated for each case reducer function
export const { setUserEmail, setUserName, setUserPhoto } = userSlice.actions;

export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserName = (state) => state.user.username;
export const selectUserPhoto = (state) => state.user.userPhoto;

export default userSlice.reducer;
