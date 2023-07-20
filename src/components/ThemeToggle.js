import { useCallback, useEffect, useState } from 'react';

import { getRandomId } from 'utils/common.function';

import { LocalKey } from 'utils/common.constants';

const ThemeToggle = (props) => {
	const randomString = getRandomId();

	const [currentType, setCurrentType] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	); // 다크면 true

	const [currentClass, setCurrentClass] = useState('');
	const currentLocalType = localStorage.getItem(LocalKey.themeMode);
	const [currentChecked, setCurrentChecked] = useState(
		currentLocalType === null
			? true
			: currentLocalType === 'dark'
			? true
			: false
	);

	const checkFirst = useCallback(() => {
		if (currentLocalType === null) {
			document.documentElement.setAttribute(
				'color-mode',
				currentType ? 'dark' : 'light'
			);
			setCurrentClass(currentType ? 'dark' : 'light');
			setCurrentChecked(currentType);
		} else {
			document.documentElement.setAttribute('color-mode', currentLocalType);
			setCurrentClass(currentLocalType);
			setCurrentChecked(currentLocalType === 'dark' ? true : false);
		}
	}, [currentType, currentLocalType]);

	useEffect(() => {
		checkFirst();
	}, [checkFirst]);

	const onToggle = () => {
		localStorage.setItem(LocalKey.themeMode, !currentType ? 'dark' : 'light');
		setCurrentType(!currentType);

		document.documentElement.setAttribute(
			'color-mode',
			currentType ? 'dark' : 'light'
		);
	};

	return (
		<div
			className={`double_tootle_wrap theme_toggle ${currentClass}`}
			onChange={onToggle}
		>
			<div className='toggle_item'>
				<input
					type='radio'
					id={`leftItem${randomString}`}
					checked={!currentChecked}
				/>
				<label htmlFor={`leftItem${randomString}`}>
					<span>{props.leftItem}</span>
				</label>
			</div>
			<div className='toggle_item'>
				<input
					type='radio'
					id={`rightItem${randomString}`}
					checked={currentChecked}
				/>
				<label htmlFor={`rightItem${randomString}`}>
					<span>{props.rightItem}</span>
				</label>
			</div>
		</div>
	);
};

export default ThemeToggle;
