import { useParams, Link } from 'react-router-dom';
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
	const { category } = useParams();
	const dispatch = useDispatch();
	// Select
	const categoryList = useSelector((state) => state.categoryStore.categoryList);

	const options = useMemo(() => {
		return [];
	}, []);

	categoryList.map((item) => {
		return options.push(item.category);
	});

	const [selectedValue, setSelectedValue] = useState(options[0]);

	useEffect(() => {
		dispatch(fetchCategoryData());
	}, [dispatch]);

	const changedSelect = (nextState) => {
		setSelectedValue(nextState);
		console.log('선택된 Select', nextState);
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
		console.log('nextState', nextState);
	};

	const createBoard = () => {
		const reqData = new FormData();
		categoryList.filter((item) => {
			if (selectedValue === item.category) {
				reqData.append('categoryId', item.id);
			}
			return false;
		});
		reqData.append('title', titleValue);
		reqData.append('content', contentValue);
		console.log('typeof uploadValue', uploadValue.length);

		// if (uploadValue) {
		// 	for (let i = 0; i < uploadValue.length; i++) {
		// 		reqData.append('fileList', uploadValue[i]);
		// 		console.log('tessst', uploadValue[i]);
		// 	}
		// } else {
		// 	reqData.append('fileList', '');
		// }
		if (uploadValue.length > 0) {
			for (let i = 0; i < uploadValue.length; i++) {
				reqData.append('fileList', uploadValue[i]);
			}
		}

		dispatch(setBoardData(reqData));
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
							titleValue={titleValue}
							label='제목'
							labelHide
							onChange={changedTitle}
						/>
						<Alert
							// currentState={currentState}
							type='success'
							title='Success'
							message='카테고리를 생성했습니다.'
							// onClose={closeAlert}
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
					onClick={createBoard}
				>
					<span>저장</span>
				</button>
			</div>
		</div>
	);
};

export default BoardCreate;
