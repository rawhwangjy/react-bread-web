import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
	name: 'board',
	initialState: {
		isLoading: false,
		isError: false,
		boardList: [],
		boardView: {},
	},
	reducers: {
		isLoading(state, action) {
			state.isLoading = action.payload.isLoading;
		},
		isError(state, action) {
			state.isError = action.payload.isError;
		},
		getBoardList(state, action) {
			state.boardList = [...action.payload.boardList];
		},
		getBoard(state, action) {
			state.boardView = action.payload.boardView[0];
		},
	},
});

export const boardActions = boardSlice.actions;

export default boardSlice;
