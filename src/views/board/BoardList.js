import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Alert from 'components/Alert';

import { fetchBoardListData, deleteBoardData } from 'actions/board-action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardList = () => {
	const { category } = useParams();
	const dispatch = useDispatch();

	// Store
	const boardList = useSelector((state) => state.boardStore.boardList);

	const reqData = useMemo(() => {
		return {
			category,
		};
	}, [category]);

	useEffect(() => {
		dispatch(fetchBoardListData(reqData));
	}, [dispatch, reqData]);

	// Alert
	const [alertMessage, setAlertMessage] = useState('');
	const [currentState, setCurrentState] = useState(false);

	const openAlert = () => {
		setCurrentState((prevState) => !prevState);
	};

	const closeAlert = useCallback(
		(nextState) => {
			setCurrentState(nextState);
			dispatch(fetchBoardListData(reqData));
		},
		[dispatch, reqData]
	);

	// Delete
	const deleteBoard = (targetId) => {
		const reqData = {
			id: targetId,
		};
		if (window.confirm('정말 삭제하시겠습니까?')) {
			dispatch(deleteBoardData(reqData));
			setAlertMessage('삭제되었습니다');
			openAlert();
		} else {
			setAlertMessage('취소되었습니다');
			openAlert();
		}
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>{category}</h3>
			</div>
			<div className='content_area'>
				<div className='data_table_area'>
					<table className='table vertical'>
						<colgroup>
							<col className='widthAll' />
							<col className='width35' />
						</colgroup>
						<thead>
							<tr>
								<th scope='col'>Title</th>
								<th scope='col'>btns</th>
							</tr>
						</thead>
						{boardList && boardList.length > 0 ? (
							<tbody>
								{boardList.map((item) => (
									<tr key={item.id}>
										<td>
											<Link
												to={`/board/${category}/${item.id}`}
												type='button'
											>
												{item.title}
											</Link>
										</td>
										<td>
											<div className='list_btns_wrap'>
												<Link
													to={`/board/${category}/${item.id}/update`}
													type='button'
													className='btn sm'
												>
													<FontAwesomeIcon
														icon='fa-solid fa-pencil'
														aria-label='수정'
													/>
												</Link>
												<button
													type='button'
													className='btn sm'
													onClick={() => deleteBoard(item.id)}
												>
													<FontAwesomeIcon
														icon='fa-solid fa-trash'
														aria-label='삭제'
													/>
												</button>
												<Alert
													currentState={currentState}
													type='success'
													title='Success'
													message={alertMessage}
													onClose={closeAlert}
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						) : (
							<tbody>
								<tr>
									<td colSpan={2}>
										<p className='no_data'>게시글이 없습니다.</p>
									</td>
								</tr>
							</tbody>
						)}
					</table>
				</div>
			</div>
			<div className='footer_area right'>
				<Link
					to='/board/create'
					type='button'
					className='btn lg primary'
				>
					글쓰기
				</Link>
			</div>
		</div>
	);
};

export default BoardList;
