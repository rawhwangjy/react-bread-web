import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Alert from 'components/Alert';
import BoardBody from 'views/board/components/BoardBody';

import { fetchBoardListData, deleteBoardData } from 'actions/board-action';

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
	const deleteBoard = useCallback(
		(targetId) => {
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
		},
		[dispatch]
	);

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
						{boardList && (
							<BoardBody
								boardData={boardList}
								onChange={deleteBoard}
							/>
						)}
					</table>
					{currentState && (
						<Alert
							currentState={currentState}
							type='success'
							title='Success'
							message={alertMessage}
							onClose={closeAlert}
						/>
					)}
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
