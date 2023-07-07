import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    uiStore: uiSlice.reducer,
    cartStore: cartSlice.reducer,
  },
});

export default store;
