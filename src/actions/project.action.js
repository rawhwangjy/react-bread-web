import { projectActions } from 'reducers/project.slice';
import {
	httpGetProjectListAll,
	httpGetProjectListYear,
	httpGetProjectListType,
} from 'services/project/project.api';

export const fetchProjectListData = () => {
	return async (dispatch) => {
		dispatch(projectActions.isLoading({ isLoading: true }));
		const response = await httpGetProjectListAll();
		console.log('All data ===> ', response);
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
		console.log('year data ===> ', response);
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
		console.log('year data ===> ', response);
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
