import { NavLink } from 'react-router-dom';

import { MobileMaxWidth } from 'utils/common.constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const GuideInnerNavigation = () => {
	const introduceArray = ['spec', 'convention', 'accessibility'];
	const comoponentsArray = [
		'alert',
		'checkbox',
		'input',
		'modal',
		'preview',
		'radio',
		'select',
		'swiper',
		'tabs',
		'toast',
		'upload',
	];
	const modulesArray = ['button'];

	useEffect(() => {
		if (window.innerWidth > MobileMaxWidth) {
			subIsShowModal(true);
		}
	}, []);

	// mobile
	const [isShowModal, subIsShowModal] = useState(false);

	const openGuideGnb = () => {
		subIsShowModal(true);
	};

	const closeGuideGnb = () => {
		subIsShowModal(false);
	};

	return (
		<>
			<div className='guide_nav_wrap'>
				{window.innerWidth <= MobileMaxWidth && (
					<button
						class='btn_mo_guide_open'
						onClick={openGuideGnb}
					>
						<span>가이드 메뉴 열기</span>
					</button>
				)}
				{isShowModal && (
					<>
						<div
							className={`guide_nav ${
								window.innerWidth <= MobileMaxWidth ? 'mobile' : ''
							}`}
						>
							<ul>
								<li>
									<NavLink
										to={`/guide/introduce/${introduceArray[0]}`}
										activeclassname='active'
									>
										Introduce
									</NavLink>
									<ul>
										{introduceArray.map((item, index) => {
											return (
												<li key={`introduce${index}`}>
													<NavLink
														to={`/guide/introduce/${item}`}
														activeclassname='active'
													>
														{item}
													</NavLink>
												</li>
											);
										})}
									</ul>
								</li>
								<li>
									<NavLink
										to={`/guide/components/${comoponentsArray[0]}`}
										activeclassname='active'
									>
										Components
									</NavLink>
									<ul>
										{comoponentsArray.map((item, index) => {
											return (
												<li key={`components${index}`}>
													<NavLink
														to={`/guide/components/${item}`}
														activeclassname='active'
													>
														{item}
													</NavLink>
												</li>
											);
										})}
									</ul>
								</li>
								<li>
									<NavLink
										to={`/guide/modules/${modulesArray[0]}`}
										activeclassname='active'
									>
										Modules
									</NavLink>
									<ul>
										{modulesArray.map((item, index) => {
											return (
												<li key={`modules${index}`}>
													<NavLink
														to={`/guide/modules/${item}`}
														activeclassname='active'
													>
														{item}
													</NavLink>
												</li>
											);
										})}
									</ul>
								</li>
							</ul>
						</div>
						{window.innerWidth <= MobileMaxWidth && (
							<button
								className='btn_mo_guide_close'
								onClick={closeGuideGnb}
							>
								<FontAwesomeIcon
									icon='fa-solid fa-xmark'
									aria-label='가이드 메뉴 닫기'
								/>
							</button>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default GuideInnerNavigation;
