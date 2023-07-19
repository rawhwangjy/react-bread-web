import { boardActions } from 'reducers/board-slice';
import {
	httpGetBoardList,
	httpGetBoard,
	httpSetBoard,
	httpBoardUpdate,
	httpBoardDelete,
	httpBoardListDelete,
} from 'services/board/board.api';

export const fetchBoardListData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		const response = await httpGetBoardList(reqData);
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
		try {
			console.log('ok');
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};

export const updateBoardData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		await httpBoardUpdate(reqData);
		try {
			console.log('ok');
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};

export const deleteBoardData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		await httpBoardDelete(reqData);
		try {
			console.log('ok');
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};

export const deleteBoardListData = (reqData) => {
	return async (dispatch) => {
		dispatch(boardActions.isLoading({ isLoading: true }));
		await httpBoardListDelete(reqData);
		try {
			console.log('ok');
			dispatch(boardActions.isLoading({ isLoading: false }));
		} catch (error) {
			console.log('fail');
			dispatch(boardActions.isError({ isError: true }));
		}
	};
};
