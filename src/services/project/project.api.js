import { axiosInstance } from 'utils/instance.axios';
import { RequestType } from 'utils/common.constants';

const Api = {
	getProjectListAll: '/project/projectList',
	getProjectListYear: '/project/projectList/year/:year',
	getProjectListType: '/project/projectList/type/:type',
	getProjectDetail: '/project/:id',
	projectCreate: '/project/create',
	projectUpdate: '/project/update/:id',
	projectDelete: '/project/delete/:id',
};

/**
 * @description Project List ALL
 */
export const httpGetProjectListAll = () => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.getProjectListAll,
	});
};

/**
 * @description Project List YEAR
 */
export const httpGetProjectListYear = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.getProjectListYear,
		data: reqData,
	});
};

/**
 * @description Project List Type
 */
export const httpGetProjectListType = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.getProjectListType,
		data: reqData,
	});
};

/**
 * @description Project View
 */
export const httpGetProject = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.getProjectDetail,
		data: reqData,
	});
};

/**
 * @description Project Create
 */
export const httpSetProject = (reqData) => {
	// formData 잘 들어온다.
	// api 잘 찌른다.
	// headers 잘 들어간다.
	// for (const pair of reqData.file.entries()) {
	//   // console.log('httpSetProject pair', pair)
	// }
	return axiosInstance({
		method: RequestType.POST,
		url: Api.projectCreate,
		data: reqData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

/**
 * @description Project Update Create
 */
export const httpProjectUpdate = (reqData) => {
	// console.log('httpSetProject', reqData)
	// for (const pair of reqData.entries()) {
	// 	// console.log('httpProjectUpdate pair', pair)
	// }
	return axiosInstance({
		method: RequestType.PUT,
		url: Api.projectUpdate,
		data: reqData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

/**
 * @description Project Update Create
 */
export const httpProjectDelete = (reqData) => {
	return axiosInstance({
		method: RequestType.DELETE,
		url: Api.projectDelete,
		data: reqData,
	});
};
