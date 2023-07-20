import { axiosInstance } from 'utils/instance.axios';
import { RequestType } from 'utils/common.constants';

const Api = {
	categoryList: '/board/category/categoryList',
	categoryCreate: '/board/category/create',
	categoryUpdate: '/board/category/update/:id',
	CategoryDelete: '/board/category/delete/:category',
};

/**
 * @description Category List
 */
export const httpGetCategoryList = () => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.categoryList,
	});
};

/**
 * @description Category Create
 */
export const httpSetCategory = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.categoryCreate,
		data: reqData,
	});
};

/**
 * @description Category Update
 */
export const httpCategoryUpdate = (reqData) => {
	return axiosInstance({
		method: RequestType.PUT,
		url: Api.categoryUpdate,
		data: reqData,
	});
};

/**
 * @description Category Delete
 */
export const httpCategoryDelete = (reqData) => {
	return axiosInstance({
		method: RequestType.DELETE,
		url: Api.CategoryDelete,
		data: reqData,
	});
};
