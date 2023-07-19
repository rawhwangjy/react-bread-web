import { boardActions } from 'reducers/board-slice';
import {
	httpGetBoardList,
	httpGetBoard,
	httpSetBoard,
} from 'services/board/board.api';

export const fetchBoardListData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		const response = await httpGetBoardList(reqData);
		console.log('fetchBoardListData >>>', response);
		try {
			console.log('ok');
			dispatch(
				boardActions.getBoardList({
					boardList: response.data,
				})
			);
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};

export const fetchBoardData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		const response = await httpGetBoard(reqData);
		console.log('fetchBoardData >>>', response);
		try {
			console.log('ok');
			dispatch(
				boardActions.getBoard({
					boardView: response.data,
				})
			);
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};

export const setBoardData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		await httpSetBoard(reqData);
		// console.log('setCategoryData >>>', response);
		try {
			console.log('ok');
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};
