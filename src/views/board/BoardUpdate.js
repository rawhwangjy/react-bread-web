import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { API_URL } from 'utils/common.constants';

import Alert from 'components/Alert';
import Input from 'components/Input';
import Select from 'components/Select';
import Upload from 'components/Upload';
import Preview from 'components/Preview';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { fetchCategoryData } from 'actions/category-action';
import { fetchBoardData, updateBoardData } from 'actions/board-action';

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

	// Filelist
	// let filelist;
	// if (boardView.fileList) {
	// 	filelist = JSON.parse(boardView.fileList);
	// }
	const [showBeforeFile, setShowBeforeFile] = useState(false);
	const filelist = useMemo(() => {
		if (boardView.fileList) {
			setShowBeforeFile((prevState) => !prevState);
			return JSON.parse(boardView.fileList);
		}
	}, [boardView.fileList]);

	// Attachment
	const [uploadValue, setUploadValue] = useState([]);
	const changedUpload = (nextState) => {
		setUploadValue(nextState);
		setShowBeforeFile((prevState) => !prevState);
	};

	// Select
	const options = useMemo(() => {
		return [];
	}, []);

	categoryList.map((item) => {
		return options.push(item.category);
	});

	const [selectedValue, setSelectedValue] = useState(category);

	useEffect(() => {
		dispatch(fetchCategoryData());
		dispatch(fetchBoardData(reqData));
		// if (boardView.fileList !== '') {
		// 	setShowBeforeFile((prevState) => !prevState);
		// }
	}, [dispatch, reqData]);

	const changedSelect = (nextState) => {
		setSelectedValue(nextState);
	};

	// Input
	const [titleValue, setTitleValue] = useState(boardView.title);

	const changedTitle = (nextState) => {
		setTitleValue(nextState);
	};

	// Editor
	const [contentValue, setContentValue] = useState(boardView.content);

	// Save
	const updateBoard = () => {
		const reqData = new FormData();
		reqData.append('id', id);
		reqData.append('category', selectedValue);
		reqData.append('title', titleValue);
		reqData.append('content', contentValue);
		if (uploadValue.length > 0) {
			for (let i = 0; i < uploadValue.length; i++) {
				reqData.append('fileList', uploadValue[i]);
			}
		}

		dispatch(updateBoardData(reqData));
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
				<h3 className='main_title'>ddd</h3>
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
								value={contentValue}
								onChange={setContentValue}
							/>
						</div>
					</div>
					<div className='form_row'>
						<Upload
							btnName='찾기'
							onChange={changedUpload}
						/>
						{showBeforeFile && <Preview previewData={filelist} />}
					</div>
				</div>
			</div>
			<div className='footer_area side'>
				<Link
					to={`/board/${category}`}
					type='button'
					className='btn lg secondary'
				>
					목록
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
