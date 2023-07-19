import { axiosInstance } from 'utils/instance.axios';
import { RequestType } from 'utils/common.constants';

const Api = {
	getBoardList: '/board/:category/boardList',
	getBoardDetail: '/board/:category/:id',
	boardCreate: '/board/:category/create',
	boardUpdate: '/board/:category/update/:id',
	boardDelete: '/board/delete/:id',
	boardListDelete: '/board/deleteList/:id',
};

/**
 * @description Board List
 */
export const httpGetBoardList = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.getBoardList,
		data: reqData,
	});
};

/**
 * @description Board View
 */
export const httpGetBoard = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.getBoardDetail,
		data: reqData,
	});
};

/**
 * @description Board Create
 */
export const httpSetBoard = (reqData) => {
	return axiosInstance({
		method: RequestType.POST,
		url: Api.boardCreate,
		data: reqData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

/**
 * @description Board Update Create
 */
export const httpBoardUpdate = (reqData) => {
	return axiosInstance({
		method: RequestType.PUT,
		url: Api.boardUpdate,
		data: reqData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

/**
 * @description Board Update Create
 */
export const httpBoardDelete = (reqData) => {
	return axiosInstance({
		method: RequestType.DELETE,
		url: Api.boardDelete,
		data: reqData,
	});
};

/**
 * @description Board Update Create
 */
export const httpBoardListDelete = (reqData) => {
	return axiosInstance({
		method: RequestType.DELETE,
		url: Api.boardListDelete,
		data: reqData,
	});
};
