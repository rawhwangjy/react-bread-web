import Navigation from 'components/layouts/Navigation';
import { useEffect, useState } from 'react';

import { LocalKey, MobileMaxWidth } from 'utils/common.constants';

const Header = () => {
	const [isShowModal, setIsShowModal] = useState(false);

	useEffect(() => {}, []);

	const onChangeNav = (nextState) => {
		setIsShowModal(nextState);
	};

	return (
		<>
			<div className={`header_wrap ${isShowModal ? 'active' : ''}`}>
				<header className={window.innerWidth <= MobileMaxWidth ? 'mobile' : ''}>
					<Navigation onChange={onChangeNav} />
				</header>
			</div>
		</>
	);
};

export default Header;
