import PageLayout from 'components/layouts/PageLayout';

import BoardList from 'views/board/BoardList';
import BoardView from 'views/board/BoardView';
import BoardCreate from 'views/board/BoardCreate';
import BoardUpdate from 'views/board/BoardUpdate';
// import EmptyBoard from 'views/board/EmptyBoard';

const RoutesBoard = {
	path: '/board',
	element: <PageLayout />,
	children: [
		{
			path: ':category',
			children: [
				{ index: true, element: <BoardList /> },
				{
					path: ':id',
					children: [
						{ index: true, element: <BoardView /> },
						{ path: 'update', element: <BoardUpdate /> },
					],
				},
			],
		},
		{ path: 'create', element: <BoardCreate /> },
	],
};

export default RoutesBoard;
