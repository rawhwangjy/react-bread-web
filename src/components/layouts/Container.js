import { Outlet } from 'react-router-dom';

import Header from 'components/layouts/Header';

const Container = () => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<main>
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Container;
