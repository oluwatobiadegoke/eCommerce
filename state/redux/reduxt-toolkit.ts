import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../utils/items";

interface CartState {
  cartOpen: boolean;
  total: number;
  amount: number;
  cart: object;
}

const initialState: CartState = {
  cartOpen: false,
  total: 0,
  amount: 0,
  cart: items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
  },
});
