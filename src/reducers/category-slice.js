import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
	name: 'category',
	initialState: {
		isLoading: false,
		isError: false,
		categoryList: [],
	},
	reducers: {
		isLoading(state, action) {
			state.isLoading = action.payload.isLoading;
		},
		isError(state, action) {
			state.isError = action.payload.isError;
		},
		getCategoryList(state, action) {
			state.categoryList = [...action.payload.categoryList];
		},
	},
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
