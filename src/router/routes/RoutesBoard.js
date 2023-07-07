import PageLayout from 'components/layouts/PageLayout';

import BoardList from 'views/board/BoardList';
import BoardView from 'views/board/BoardView';
import BoardEdit from 'views/board/BoardEdit';

const RoutesBoard = {
	path: '/board/:category',
	element: <PageLayout />,
	// errorElement: <Error />,
	children: [
		{ index: true, element: <BoardList /> },
		{
			path: ':boardId',
			children: [
				{ index: true, element: <BoardView /> },
				{ path: 'edit', element: <BoardEdit /> },
			],
		},
	],
};

export default RoutesBoard;
