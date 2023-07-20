import { Outlet } from 'react-router-dom';

const PageLayout = () => {
	return (
		<>
			<div className='page_body'>
				<Outlet />
			</div>
		</>
	);
};

export default PageLayout;
