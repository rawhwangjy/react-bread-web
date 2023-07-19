import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCategoryData,
	updateCategoryData,
	deleteCategoryData,
} from 'actions/category-action';

import Input from 'components/Input';
// import Select from 'components/Select';
import Alert from 'components/Alert';

const CategoryList = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const categoryList = useSelector((state) => state.categoryStore.categoryList);
	const isLoading = useSelector((state) => state.categoryStore.isLoading);

	useEffect(() => {
		dispatch(fetchCategoryData());
	}, [dispatch]);

	// Input
	const [currentId, setCurrentId] = useState(0);
	const [currentCategory, setCurrentCategory] = useState('');
	const changedInput = (nextState) => {
		setCurrentCategory(nextState);
	};

	const onEditText = (target) => {
		setCurrentId(target.id);
		setCurrentCategory(target.category);
	};

	// Alert
	const [alertMessage, setAlertMessage] = useState('');
	const [currentState, setCurrentState] = useState(false);

	const openAlert = () => {
		setCurrentState((prevState) => !prevState);
	};

	const closeAlert = (nextState) => {
		setCurrentState(nextState);
		setCurrentId(0);
		dispatch(fetchCategoryData());
	};

	// Update
	const updateCategory = (target) => {
		const reqData = {
			id: target.id,
			category: currentCategory,
		};
		dispatch(updateCategoryData(reqData));
		setAlertMessage('카테고리를 수정했습니다.');
		openAlert();
	};

	// Delete
	const deleteCategory = (targetId) => {
		const reqData = {
			id: targetId,
		};
		if (window.confirm('정말 삭제하시겠습니까?')) {
			dispatch(deleteCategoryData(reqData));
			setAlertMessage('삭제되었습니다');
			openAlert();
			//   await boardStore.actionHttpBoardListDelete(targetBoard)
		} else {
			setAlertMessage('취소되었습니다');
			openAlert();
		}
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>{location.path}</h3>
			</div>
			<div className='content_area'>
				{isLoading ? <span>로딩 중</span> : <span>로딩 끝ㅇㅇㅇ</span>}
				{/* <Select
					options={options}
					selectedValue={selectedValue}
					onChange={changedSelect}
				/> */}
				<div className='data_table_area'>
					<table className='table vertical'>
						<colgroup>
							<col className='width10' />
							<col className='widthAll' />
						</colgroup>
						<thead>
							<tr>
								<th scope='col'>Title</th>
							</tr>
						</thead>
						{categoryList.length === 0 ? (
							<tbody>
								<tr>
									<td>
										<p className='no_data'>카테고리가 없습니다.</p>
									</td>
								</tr>
							</tbody>
						) : (
							<tbody>
								{categoryList.map((item) => (
									<tr key={item.id}>
										<td>
											<div className='edit_btns_wrap'>
												<div className='editable_area'>
													{/* before EDIT */}
													{currentId !== item.id && (
														<span className='before_edit'>
															<span className='category_title'>
																{item.category}
															</span>
															<button
																type='button'
																className='btn sm primary'
																onClick={() => onEditText(item)}
															>
																<span>수정</span>
															</button>
														</span>
													)}
													{/* clicked EDIT */}
													{currentId === item.id && (
														<span className='editable'>
															<Input
																currentValue={currentCategory}
																label='카테고리 수정 내용 입력'
																labelHide
																onChange={changedInput}
															/>
															<button
																type='button'
																className='btn sm primary'
																onClick={() => updateCategory(item)}
															>
																<span>완료</span>
															</button>
														</span>
													)}
													<Alert
														currentState={currentState}
														type='success'
														title='Success'
														message={alertMessage}
														onClose={closeAlert}
													/>
												</div>
												<button
													type='button'
													className='btn sm secondary'
													onClick={() => deleteCategory(item.id)}
												>
													<span>삭제</span>
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
			<div className='footer_area right'>
				<Link
					to='/category/create'
					type='button'
					className='btn lg primary'
				>
					글쓰기
				</Link>
			</div>
		</div>
	);
};

export default CategoryList;
