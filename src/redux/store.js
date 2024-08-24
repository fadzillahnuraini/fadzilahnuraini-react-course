import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slices/watchListSlice";

export default configureStore({
  reducer: {
    cart: watchListSlice.reducer,
  },
});
