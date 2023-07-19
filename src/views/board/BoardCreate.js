import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBoardData } from 'actions/board-action';

import Alert from 'components/Alert';
import Input from 'components/Input';
import Select from 'components/Select';
import Upload from 'components/Upload';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { fetchCategoryData } from 'actions/category-action';

const BoardCreate = () => {
	const dispatch = useDispatch();

	// Store
	const categoryList = useSelector((state) => state.categoryStore.categoryList);

	// Select
	const options = useMemo(() => {
		return categoryList.map((item) => item.category);
	}, [categoryList]);

	const [selectedValue, setSelectedValue] = useState(options[0]);

	useEffect(() => {
		dispatch(fetchCategoryData());
	}, [dispatch]);

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

	// Attachment
	const [uploadValue, setUploadValue] = useState([]);

	const changedUpload = (nextState) => {
		setUploadValue(nextState);
	};

	const createBoard = () => {
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
	};

	// Alert
	const [currentState, setCurrentState] = useState(false);
	const closeAlert = (nextState) => {
		setCurrentState(nextState);
		backWindow();
	};

	const openAlert = () => {
		setCurrentState((prevState) => !prevState);
	};

	const backWindow = () => {
		window.history.back();
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>글 쓰기</h3>
			</div>
			<div className='content_area'>
				<div className='form_area'>
					<div className='form_row flex'>
						<Select
							options={options}
							selectedValue={selectedValue}
							onChange={changedSelect}
						/>
						<Input
							currentValue={titleValue}
							label='제목'
							labelHide
							onChange={changedTitle}
						/>
					</div>
					<div className='form_row'>
						<div className='editor_wrap'>
							<ReactQuill
								theme='snow'
								className='quill_editor'
								onChange={setContentValue}
							/>
						</div>
					</div>
					<div className='form_row'>
						<Upload
							btnName='찾기'
							onChange={changedUpload}
						/>
					</div>
				</div>
			</div>
			<div className='footer_area side'>
				<button
					type='button'
					className='btn lg secondary'
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
