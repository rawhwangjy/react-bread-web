import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCategoryData } from 'actions/category.action';

import Input from 'components/Input';
import Alert from 'components/Alert';

const CategoryCreate = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Alert
	const [currentState, setCurrentState] = useState(false);

	const closeAlert = useCallback(
		(nextState) => {
			setCurrentState(nextState);
			navigate('/category');
		},
		[navigate]
	);

	const openAlert = () => {
		setCurrentState((prevState) => !prevState);
	};

	// Input
	const [currentValue, setCurrentValue] = useState('');

	const changedInput = (nextState) => {
		setCurrentValue(nextState);
	};

	const createCategory = () => {
		dispatch(setCategoryData({ category: currentValue }));
		openAlert();
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>카테고리 추가</h3>
			</div>
			<div className='content_area'>
				<div className='form_area'>
					<div className='form_row'>
						<Input
							currentValue={currentValue}
							label='카테고리'
							onChange={changedInput}
						/>
						<Alert
							currentState={currentState}
							type='success'
							title='Success'
							message='카테고리를 생성했습니다.'
							onClose={closeAlert}
						/>
					</div>
				</div>
			</div>
			<div className='footer_area right'>
				<button
					type='button'
					className='btn lg primary'
					onClick={createCategory}
				>
					<span>저장</span>
				</button>
			</div>
		</div>
	);
};

export default CategoryCreate;
