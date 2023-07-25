import { projectActions } from 'reducers/project.slice';
import {
	httpGetProjectListAll,
	httpGetProjectListYear,
	httpGetProjectListType,
	httpGetProject,
} from 'services/project/project.api';

export const fetchProjectListData = () => {
	return async (dispatch) => {
		dispatch(projectActions.isLoading({ isLoading: true }));
		const response = await httpGetProjectListAll();
		console.log('All data ===> ', response.data);
		try {
			console.log('ok');
			dispatch(
				projectActions.getProjectList({
					projectList: response.data,
				})
			);
			dispatch(projectActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(projectActions.isError({ isError: true }));
		}
	};
};

export const fetchProjectListYearData = (reqData) => {
	return async (dispatch) => {
		dispatch(projectActions.isLoading({ isLoading: true }));
		const response = await httpGetProjectListYear(reqData);
		// console.log('year data ===> ', response);
		try {
			console.log('ok');
			dispatch(
				projectActions.getProjectList({
					projectList: response.data,
				})
			);
			dispatch(projectActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(projectActions.isError({ isError: true }));
		}
	};
};

export const fetchProjectListTypeData = (reqData) => {
	return async (dispatch) => {
		dispatch(projectActions.isLoading({ isLoading: true }));
		const response = await httpGetProjectListType(reqData);
		// console.log('year data ===> ', response);
		try {
			console.log('ok');
			dispatch(
				projectActions.getProjectList({
					projectList: response.data,
				})
			);
			dispatch(projectActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(projectActions.isError({ isError: true }));
		}
	};
};

export const fetchProjectData = (reqData) => {
	return async (dispatch) => {
		dispatch(projectActions.isLoading({ isLoading: true }));
		dispatch(
			projectActions.getProject({
				projectView: {},
			})
		);
		const response = await httpGetProject(reqData);
		console.log('fetchProjectData data ===> ', response.data);
		try {
			console.log('ok');
			dispatch(
				projectActions.getProject({
					projectView: response.data,
				})
			);
			dispatch(projectActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(projectActions.isError({ isError: true }));
		}
	};
};
