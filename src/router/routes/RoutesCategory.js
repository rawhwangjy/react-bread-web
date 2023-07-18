import PageLayout from 'components/layouts/PageLayout';

import CategoryList from 'views/category/CategoryList';
import CategoryCreate from 'views/category/CategoryCreate';

const RoutesCategory = {
	path: '/category',
	element: <PageLayout />,
	// errorElement: <Error />,
	children: [
		{ index: true, element: <CategoryList /> },
		{ path: 'create', element: <CategoryCreate /> },
	],
};

export default RoutesCategory;
