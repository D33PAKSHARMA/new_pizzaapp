import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        // Check if item is already present or not
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        // if item id is > 1 then increase cart items
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },

    removeFromCart(state, action) {
      const updatedCart = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      state.cartItems = updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
