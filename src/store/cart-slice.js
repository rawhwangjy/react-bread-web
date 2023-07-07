import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    stateChange: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); // 해당 항목 이미 존재하는지 체크
      state.totalQuantity++;
      state.stateChange = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload; // 삭제하려는 것
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.stateChange = true;
      if (existingItem.quantity === 1) {
        // 1이면 배열에서 완전삭제
        // 아니면 -1만 해주면 됨.
        state.items = state.items.filter((item) => item.id !== id); // 필터링 해서 삭제할 항목의 id는 제외시킴. 나머지만 새배열로 만듦
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
