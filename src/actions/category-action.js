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
		// console.log('fetchCategoryData >>>', response);
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
		// console.log('setCategoryData >>>', response);
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
		// console.log('updateCategoryData >>>', response);
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
		// console.log('deleteCategoryData >>>', response);
		try {
			console.log('ok');
			dispatch(categoryActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(categoryActions.isError({ isError: true }));
		}
	};
};
