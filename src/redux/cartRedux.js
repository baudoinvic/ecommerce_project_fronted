import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    stripeData: {},
    transactions: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    storeStripeData: (state, action) => {
      state.stripeData = action.payload
    },
    removeProduct: (state, action) => {
      const removedProduct = state.products.find((product) => product._id === action.payload);
      if (removedProduct) {
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;
        state.products = state.products.filter((product) => product._id !== action.payload);
      }
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    }
  },
});

export const { addProduct, removeProduct, storeStripeData, addTransaction } = cartSlice.actions;
export default cartSlice.reducer;