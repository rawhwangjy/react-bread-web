import axios from 'axios';
import { API_URL } from 'utils/common.constants';

const createInstance = () => {
	console.log('CREATE AXIOS INSTANCE 스타트', API_URL);
	const instance = axios.create({
		timeout: 5000,
		baseURL: API_URL,
		headers: {
			authorization: localStorage.getItem('accessToken'),
		},
	});
	return setInterceptors(instance);
};

const setInterceptors = (instance) => {
	instance.interceptors.request.use(
		(config) => {
			// 요청을 보내기 전 수행할 작업
			return config;
		},
		(error) => {
			// 오류 요청 가공
			return Promise.reject(error);
		}
	);
	instance.interceptors.response.use(
		(response) => {
			if (response.status === 401) {
				//
			}
			return response;
		}
		// async (error) => {
		// 	const {
		// 		config,
		// 		response: { status },
		// 	} = error;
		// 	const originReq = config;
		// 	if (status === 401) {
		// 		// console.log('RES >>> 401')
		// 		if (error.response.data.message === 'Token Expired') {
		// 			// const reqData = {
		// 			//   userId: JSON.parse(originReq.data).userId,
		// 			//   userPw: JSON.parse(originReq.data).userPw,
		// 			//   refreshToken: localStorage.getItem('refreshToken')
		// 			// }
		// 			// await memberStore.acctionHttpRefresh(reqData)
		// 			// token refresh 요청
		// 			originReq.headers = {
		// 				...originReq.headers,
		// 				authorization: localStorage.getItem('accessToken'),
		// 			};
		// 			// originReq.headers.authorization = localStorage.getItem('accessToken')
		// 			return axios(originReq);
		// 		}
		// 	}
		// 	return Promise.reject(error);
		// }
	);
	return instance;
};

export const axiosInstance = createInstance();
