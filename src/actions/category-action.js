import { categoryActions } from 'reducers/category-slice';
import {
	httpGetCategoryList,
	httpSetCategory,
	httpCategoryUpdate,
	httpCategoryDelete,
} from 'services/category/category.api';

export const fetchCategoryData = () => {
	return async (dispatch) => {
		dispatch(categoryActions.isLoading({ isLoading: true }));
		const response = await httpGetCategoryList();
		try {
			console.log('ok');
			dispatch(
				categoryActions.getCategoryList({
					categoryList: response.data,
				})
			);
			dispatch(categoryActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(categoryActions.isError({ isError: true }));
		}
	};
};

export const setCategoryData = (reqData) => {
	return async (dispatch) => {
		dispatch(categoryActions.isLoading({ isLoading: true }));
		await httpSetCategory(reqData);
		try {
			console.log('ok');
			dispatch(categoryActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(categoryActions.isError({ isError: true }));
		}
	};
};

export const updateCategoryData = (reqData) => {
	return async (dispatch) => {
		dispatch(categoryActions.isLoading({ isLoading: true }));
		await httpCategoryUpdate(reqData);
		try {
			console.log('ok');
			dispatch(categoryActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(categoryActions.isError({ isError: true }));
		}
	};
};

export const deleteCategoryData = (reqData) => {
	return async (dispatch) => {
		dispatch(categoryActions.isLoading({ isLoading: true }));
		await httpCategoryDelete(reqData);
		try {
			console.log('ok');
			dispatch(categoryActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(categoryActions.isError({ isError: true }));
		}
	};
};
