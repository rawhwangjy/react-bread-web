import { configureStore } from '@reduxjs/toolkit';

import categorySlice from 'reducers/category.slice';
import boardSlice from 'reducers/board.slice';
import projectSlice from 'reducers/project.slice';

const store = configureStore({
	reducer: {
		categoryStore: categorySlice.reducer,
		boardStore: boardSlice.reducer,
		projectStore: projectSlice.reducer,
	},
});

export default store;
