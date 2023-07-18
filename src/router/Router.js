import { createBrowserRouter } from 'react-router-dom';

import Container from 'components/layouts/Container';

import Main from 'views/Main';
import RoutesCategory from 'router/routes/RoutesCategory';
import RoutesGuide from 'router/routes/RoutesGuide';
import RoutesProject from 'router/routes/RoutesProject';
import RoutesBoard from 'router/routes/RoutesBoard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Container />,
		// errorElement: <Error />,
		children: [
			{ index: true, element: <Main /> },
			RoutesCategory,
			RoutesGuide,
			RoutesProject,
			RoutesBoard,
		],
	},
]);

export default router;
