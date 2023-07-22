import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from 'components/Alert';
import BoardForm from 'views/board/components/BoardForm';

import { backWindow } from 'utils/common.function';
import useFilelistToObject from 'hooks/useFilelistToObject';

import { fetchCategoryData } from 'actions/category.action';
import { fetchBoardData, updateBoardData } from 'actions/board.action';

const BoardUpdate = () => {
	const { id, category } = useParams();
	const dispatch = useDispatch();

	// Store
	const categoryList = useSelector((state) => state.categoryStore.categoryList);
	const boardView = useSelector((state) => state.boardStore.boardView);

	const reqData = useMemo(() => {
		return {
			id,
		};
	}, [id]);

	useEffect(() => {
		dispatch(fetchCategoryData());
		dispatch(fetchBoardData(reqData));
	}, [dispatch, reqData]);

	// Select
	const [selectedValue, setSelectedValue] = useState(boardView ? category : '');

	const changedSelect = (nextState) => {
		setSelectedValue(nextState);
	};

	// Input
	const [titleValue, setTitleValue] = useState(
		boardView ? boardView.title : ''
	);

	const changedTitle = (nextState) => {
		setTitleValue(nextState);
	};

	// Editor
	const [contentValue, setContentValue] = useState(
		boardView ? boardView.content : ''
	);

	const changedContent = (nextState) => {
		setContentValue(nextState);
	};

	// Attachment
	const filelist = useFilelistToObject(boardView);

	const [uploadValue, setUploadValue] = useState(boardView ? filelist : []);

	const changedUpload = (nextState) => {
		setUploadValue(nextState);
	};

	// Save
	const updateBoard = useCallback(() => {
		const reqData = new FormData();
		reqData.append('id', id);
		reqData.append('category', selectedValue);
		reqData.append('title', titleValue);
		reqData.append('content', contentValue);
		if (uploadValue.length > 0) {
			if (JSON.stringify(uploadValue) === JSON.stringify(filelist)) {
				for (let i = 0; i < uploadValue.length; i++) {
					reqData.append('fileList', JSON.stringify(uploadValue[i]));
				}
			} else {
				for (let i = 0; i < uploadValue.length; i++) {
					reqData.append('fileList', uploadValue[i]);
				}
			}
		}

		dispatch(updateBoardData(reqData));
		openAlert();
	}, [
		dispatch,
		id,
		selectedValue,
		titleValue,
		contentValue,
		uploadValue,
		filelist,
	]);

	// Alert
	const [currentState, setCurrentState] = useState(false);
	const closeAlert = (nextState) => {
		setCurrentState(nextState);
		backWindow();
	};

	const openAlert = () => {
		setCurrentState((prevState) => !prevState);
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>ddd</h3>
			</div>
			<div className='content_area'>
				<BoardForm
					selectData={categoryList}
					boardData={boardView}
					onChangeSelect={changedSelect}
					onChangeTitle={changedTitle}
					onChangeContent={changedContent}
					onChangeUpload={changedUpload}
				/>
			</div>
			<div className='footer_area right'>
				<Link
					to={`/board/${category}`}
					type='button'
					className='btn lg secondary'
				>
					취소
				</Link>
				<button
					type='button'
					className='btn lg primary'
					onClick={updateBoard}
				>
					<span>저장</span>
				</button>
				<Alert
					currentState={currentState}
					type='success'
					title='Success'
					message='글을 수정했습니다.'
					onClose={closeAlert}
				/>
			</div>
		</div>
	);
};

export default BoardUpdate;
