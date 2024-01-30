import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import journeyReducer from "./slices/journeySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    journey: journeyReducer,
  },
});
