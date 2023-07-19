import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBoardListData } from 'actions/board-action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardList = () => {
	const { category } = useParams();
	const dispatch = useDispatch();

	const boardList = useSelector((state) => state.boardStore.boardList);
	// const isLoading = useSelector((state) => state.boardStore.isLoading);

	const reqData = useMemo(() => {
		return {
			category,
		};
	}, [category]);

	useEffect(() => {
		dispatch(fetchBoardListData(reqData));
	}, [dispatch, reqData]);

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
						{boardList.length === 0 ? (
							<tbody>
								<tr>
									<td colSpan={2}>
										<p className='no_data'>게시글이 없습니다.</p>
									</td>
								</tr>
							</tbody>
						) : (
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
												<button
													type='button'
													className='btn md'
													// onClick={() => onEditText(item)}
												>
													<FontAwesomeIcon
														icon='fa-solid fa-pencil'
														aria-label='수정'
													/>
												</button>
												<button
													type='button'
													className='btn md'
													// onClick={() => deleteCategory(item.id)}
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
