import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { items } from "../../../utils/items";

interface CartState {
  cartOpen: boolean;
  total: number;
  amount: number;
  cart: {
    id: number;
    price: number;
    title: string;
    category: string;
    image: string;
    amount: number;
  }[];
}

const initialState: CartState = {
  cartOpen: true,
  total: 0,
  amount: 0,
  cart: items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.cartOpen = true;
    },
    close: (state) => {
      state.cartOpen = false;
    },
    removeItem: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((cart) => cart.id !== payload.id);
    },
    addItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number;
        price: number;
        title: string;
        category: string;
        image: string;
        amount: number;
      }>
    ) => {
      const isAlreadyInCart = state.cart.find((cart) => cart.id === payload.id);
      state.cart.push(payload);
    },
    increase: (state, { payload }: PayloadAction<{ id: number }>) => {
      let items = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      state.cart = items;
    },
    decrease: (state, { payload }: PayloadAction<{ id: number }>) => {
      let items = state.cart
        .map((cartItem) => {
          if (cartItem.id === payload.id) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((item) => item.amount > 0);
      state.cart = items;
    },
    clear: (state) => {
      state.cart = [];
    },
    totals: (state) => {
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const totalAmount = price * amount;
          cartTotal.total += totalAmount;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      state.total = parseFloat(total.toFixed(2));
      state.amount = amount;
    },
  },
});

export const {
  open,
  close,
  removeItem,
  addItem,
  increase,
  decrease,
  clear,
  totals,
} = cartSlice.actions;

export default cartSlice.reducer;
