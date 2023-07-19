import { useParams, Link } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';

import { API_URL } from 'utils/common.constants';

import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardData } from 'actions/board-action';

const BoardView = () => {
	const { id, category } = useParams();
	const dispatch = useDispatch();

	const imgRefs = useRef([]);

	// Store
	const boardView = useSelector((state) => state.boardStore.boardView);

	// Store // reqData
	const reqData = useMemo(() => {
		return {
			id,
		};
	}, [id]);

	const filelist = useMemo(() => {
		// return JSON.parse(boardView.fileList);
		if (boardView.fileList) {
			// setShowBeforeFile((prevState) => !prevState);
			return JSON.parse(boardView.fileList);
		}
	}, [boardView.fileList]);
	// Filelist
	// let filelist;
	// if (boardView.fileList) {
	// 	filelist = JSON.parse(boardView.fileList);
	// 	console.log('filelist,filelist,filelist', boardView.fileList);
	// }

	useEffect(() => {
		dispatch(fetchBoardData(reqData));
	}, [dispatch, reqData]);

	const resizeImg = () => {
		imgRefs.current.forEach((imgRef) => {
			if (imgRef) {
				const { clientWidth, clientHeight } = imgRef;
				if (clientWidth > clientHeight) {
					imgRef.classList.remove('width_full');
					imgRef.classList.remove('height_full');
					imgRef.classList.add('width_full');
				} else {
					imgRef.classList.remove('width_full');
					imgRef.classList.remove('height_full');
					imgRef.classList.add('height_full');
				}
			}
		});
	};

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
					<tbody>
						<tr>
							<th scope='row'>제목</th>
							<td>{boardView.title}</td>
						</tr>
						<tr>
							<th scope='row'>내용</th>
							<td>
								<div dangerouslySetInnerHTML={{ __html: boardView.content }} />
							</td>
						</tr>
						<tr>
							<th scope='row'>첨부파일</th>
							<td>
								<div className='preview_wrap'>
									{filelist &&
										filelist.map((image, index) => (
											<div
												key={index}
												className='img_wrap'
											>
												<span className='img_area'>
													<img
														ref={(ref) => (imgRefs.current[index] = ref)}
														src={`${API_URL}/views/upload/${image.filename}`}
														alt={image.originalname}
														onLoad={resizeImg}
													/>
												</span>
											</div>
										))}
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='footer_area side'>
				<Link
					to={`/board/${category}`}
					type='button'
					className='btn lg secondary'
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
