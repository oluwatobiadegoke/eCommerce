import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

import { cartSlice } from "./reduxSlices/cartSlice";
// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
