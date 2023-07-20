import { NavLink } from 'react-router-dom';

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

	return (
		<>
			<div className='guide_nav_wrap'>
				<div className='guide_nav'>
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
			</div>
		</>
	);
};

export default GuideInnerNavigation;
