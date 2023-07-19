import { configureStore } from '@reduxjs/toolkit';

import categorySlice from 'reducers/category-slice';
import boardSlice from 'reducers/board-slice';

const store = configureStore({
	reducer: {
		categoryStore: categorySlice.reducer,
		boardStore: boardSlice.reducer,
	},
});

export default store;
