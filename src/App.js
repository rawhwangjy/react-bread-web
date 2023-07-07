import { RouterProvider } from 'react-router-dom';

import router from 'router/Router.js';
// import GlobalStyles from 'assets/scss/GlobalStyles';

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
