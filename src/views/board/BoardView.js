import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preview from 'components/Preview';

import useFilelistToObject from 'hooks/useFilelistToObject';

import { fetchBoardData } from 'actions/board.action';

const BoardView = () => {
	const { id, category } = useParams();
	const dispatch = useDispatch();

	// Store
	const boardView = useSelector((state) => state.boardStore.boardView);

	// Filelist
	const filelist = useFilelistToObject(boardView);

	const reqData = useMemo(() => {
		return {
			id,
		};
	}, [id]);

	useEffect(() => {
		dispatch(fetchBoardData(reqData));
	}, [dispatch, reqData]);

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>ddd</h3>
			</div>
			<div className='content_area'>
				<table className='table_view'>
					<colgroup>
						<col style={{ width: '20%' }} />
						<col style={{ width: '80%' }} />
					</colgroup>
					{boardView && (
						<tbody>
							<tr>
								<th scope='row'>제목</th>
								<td>{boardView.title}</td>
							</tr>
							<tr>
								<th scope='row'>내용</th>
								<td>
									<div
										dangerouslySetInnerHTML={{
											__html: boardView.content,
										}}
									/>
								</td>
							</tr>
							<tr>
								<th scope='row'>첨부파일</th>
								<td>{filelist && <Preview previewData={filelist} />}</td>
							</tr>
						</tbody>
					)}
				</table>
			</div>
			<div className='footer_area side'>
				<Link
					to={`/board/${category}`}
					type='button'
					className='btn lg light'
				>
					목록
				</Link>
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

export default BoardView;
