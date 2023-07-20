import { Outlet } from 'react-router-dom';

import GuideInnerNavigation from './GuideInnerNavigation';

const GuideLayout = () => {
	return (
		<>
			<div className='guide_body'>
				<GuideInnerNavigation />
				<div className='guide_container'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default GuideLayout;
