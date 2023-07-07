import MainLayout from 'components/layouts/PageLayout';

import ProjectList from 'views/project/ProjectList';
import ProjectView from 'views/project/ProjectView';

const RoutesBoard = {
	path: '/project',
	element: <MainLayout />,
	// errorElement: <Error />,
	children: [
		{ index: true, element: <ProjectList /> },
		{
			path: ':projectId',
			children: [{ index: true, element: <ProjectView /> }],
		},
	],
};

export default RoutesBoard;
