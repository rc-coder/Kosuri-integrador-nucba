import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const initialState = {
  show: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state) => {
      state.show = !state.show;
    },
    addItem: (state, { payload }) => {
      state.cartItems = addItemToCart(state.cartItems, payload);
    },
    removeItem: (state, { payload }) => {
      state.cartItems = removeItemFromCart(state.cartItems, payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { showCart, addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
