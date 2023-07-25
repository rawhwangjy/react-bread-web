import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from 'components/Alert';
import BoardForm from 'views/board/components/BoardForm';

import { backWindow } from 'utils/common.function';

import { setBoardData } from 'actions/board.action';
import { fetchCategoryData } from 'actions/category.action';

const BoardCreate = () => {
	const dispatch = useDispatch();

	// Store
	const categoryList = useSelector((state) => state.categoryStore.categoryList);

	useEffect(() => {
		dispatch(fetchCategoryData());
	}, [dispatch]);

	// Select
	const [selectedValue, setSelectedValue] = useState('');

	const changedSelect = (nextState) => {
		setSelectedValue(nextState);
	};

	// Input
	const [titleValue, setTitleValue] = useState('');

	const changedTitle = (nextState) => {
		setTitleValue(nextState);
	};

	// Editor
	const [contentValue, setContentValue] = useState('');

	const changedContent = (nextState) => {
		setContentValue(nextState);
	};

	// Attachment
	const [uploadValue, setUploadValue] = useState([]);

	const changedUpload = (nextState) => {
		setUploadValue(nextState);
	};

	const createBoard = useCallback(() => {
		const reqData = new FormData();
		reqData.append('category', selectedValue);
		reqData.append('title', titleValue);
		reqData.append('content', contentValue);
		if (uploadValue.length > 0) {
			for (let i = 0; i < uploadValue.length; i++) {
				reqData.append('fileList', uploadValue[i]);
			}
		}

		dispatch(setBoardData(reqData));
		openAlert();
	}, [dispatch, selectedValue, titleValue, contentValue, uploadValue]);

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
				<h3 className='main_title'>글 쓰기</h3>
			</div>
			<div className='content_area'>
				<BoardForm
					selectData={categoryList}
					onChangeSelect={changedSelect}
					onChangeTitle={changedTitle}
					onChangeContent={changedContent}
					onChangeUpload={changedUpload}
				/>
			</div>
			<div className='footer_area side'>
				<button
					type='button'
					className='btn lg light'
					onClick={backWindow}
				>
					<span>목록</span>
				</button>
				<button
					type='button'
					className='btn lg primary'
					onClick={createBoard}
				>
					<span>저장</span>
				</button>
				<Alert
					currentState={currentState}
					type='success'
					title='Success'
					message='글을 저장했습니다.'
					onClose={closeAlert}
				/>
			</div>
		</div>
	);
};

export default BoardCreate;
