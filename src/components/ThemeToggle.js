import { useEffect, useState } from 'react';

import { getRandomId } from 'utils/common.function';

const ThemeToggle = (props) => {
	const randomString = getRandomId();
	const [currentType, setCurrentType] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	);

	useEffect(() => {
		document.documentElement.setAttribute(
			'color-mode',
			currentType ? 'dark' : 'light'
		);
	});

	const onToggle = () => {
		setCurrentType(!currentType);
		document.documentElement.setAttribute(
			'color-mode',
			currentType ? 'dark' : 'light'
		);
	};

	return (
		<div
			className={`double_tootle_wrap theme_toggle ${
				currentType ? 'dark' : 'light'
			}`}
			onChange={onToggle}
		>
			<div className='toggle_item'>
				<input
					type='radio'
					id={`leftItem${randomString}`}
					name={randomString}
					defaultChecked={!currentType}
				/>
				<label htmlFor={`leftItem${randomString}`}>
					<span>{props.leftItem}</span>
				</label>
			</div>
			<div className='toggle_item'>
				<input
					type='radio'
					id={`rightItem${randomString}`}
					name={randomString}
					defaultChecked={currentType}
				/>
				<label htmlFor={`rightItem${randomString}`}>
					<span>{props.rightItem}</span>
				</label>
			</div>
		</div>
	);
};

export default ThemeToggle;
