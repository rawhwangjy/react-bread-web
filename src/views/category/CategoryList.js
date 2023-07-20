import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	fetchCategoryData,
	updateCategoryData,
	deleteCategoryData,
} from 'actions/category-action';

import { deleteBoardListData } from 'actions/board-action';

import Input from 'components/Input';
import Alert from 'components/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryList = () => {
	const dispatch = useDispatch();

	const categoryList = useSelector((state) => state.categoryStore.categoryList);

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

	const closeAlert = useCallback(
		(nextState) => {
			setCurrentState(nextState);
			setCurrentId(0);
			dispatch(fetchCategoryData());
		},
		[dispatch]
	);

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
	const deleteCategory = (targetCategory) => {
		const reqData = {
			category: targetCategory,
		};
		if (window.confirm('정말 삭제하시겠습니까?')) {
			dispatch(deleteCategoryData(reqData));
			setAlertMessage('삭제되었습니다');
			openAlert();
			dispatch(deleteBoardListData(reqData));
		} else {
			setAlertMessage('취소되었습니다');
			openAlert();
		}
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>게시판 목록</h3>
			</div>
			<div className='content_area'>
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
																className='btn sm'
																onClick={() => onEditText(item)}
															>
																<FontAwesomeIcon
																	icon='fa-solid fa-pencil'
																	aria-label='수정'
																/>
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
																className='btn sm'
																onClick={() => updateCategory(item)}
															>
																<FontAwesomeIcon
																	icon='fa-solid fa-check'
																	aria-label='완료'
																/>
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
													className='btn sm'
													onClick={() => deleteCategory(item.category)}
												>
													<FontAwesomeIcon
														icon='fa-solid fa-trash'
														aria-label='삭제'
													/>
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
