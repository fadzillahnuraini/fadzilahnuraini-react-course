import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchListItems: [],
};

export const watchListSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addList: (state, action) => {
      const newItem = action.payload;
      const selector = state.watchListItems.findIndex(
        (movie) => movie.id === newItem.id
      );

      if (selector !== -1) {
        state.watchListItems[selector].quantity;
      } else {
        state.watchListItems.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
  },
});

export const { addList } = watchListSlice.actions;

export default watchListSlice;

export const selectMovie = (state) => state.cart.watchListItems;

export const selectTotalMovie = (state) =>
  state.cart.watchListItems.reduce((total, item) => total + item.quantity, 0);
