import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
	name: 'project',
	initialState: {
		isLoading: false,
		isError: false,
		projectList: [],
		projectView: {},
	},
	reducers: {
		isLoading(state, action) {
			state.isLoading = action.payload.isLoading;
		},
		isError(state, action) {
			state.isError = action.payload.isError;
		},
		getProjectList(state, action) {
			state.projectList = [...action.payload.projectList];
		},
		getProject(state, action) {
			state.projectView = action.payload.projectView[0];
		},
	},
});

export const projectActions = projectSlice.actions;

export default projectSlice;
