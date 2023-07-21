import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardListBody = ({ boardData, onChange }) => {
	const { category } = useParams();

	const submitBoardId = (targetId) => {
		onChange(targetId);
	};

	return (
		<>
			{boardData && boardData.length > 0 && (
				<tbody>
					{boardData.map((item) => (
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
										onClick={() => submitBoardId(item.id)}
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
			{boardData && boardData.length === 0 && (
				<tbody>
					<tr>
						<td colSpan={2}>
							<p className='no_data'>게시글이 없습니다.</p>
						</td>
					</tr>
				</tbody>
			)}
		</>
	);
};

export default BoardListBody;
