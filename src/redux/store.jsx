import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./checkout";

export const store = configureStore({
   reducer: {
      checkout: checkoutReducer,
   },
});