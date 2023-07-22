import PageLayout from 'components/layouts/PageLayout';

import ProjectList from 'views/project/ProjectList';
import ProjectView from 'views/project/ProjectView';

const RoutesBoard = {
	path: '/project',
	element: <PageLayout />,
	// errorElement: <Error />,
	children: [
		{ index: true, element: <ProjectList /> },
		{
			path: ':id',
			children: [{ index: true, element: <ProjectView /> }],
		},
	],
};

export default RoutesBoard;
