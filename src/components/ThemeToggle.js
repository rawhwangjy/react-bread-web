import { useCallback, useEffect, useMemo, useState } from 'react';

import useRandomIdMaker from 'hooks/useRandomIdMaker';

import { LocalKey } from 'utils/common.constants';

const ThemeToggle = (props) => {
	const randomString = useRandomIdMaker();

	const currentType = useMemo(() => {
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}, []);

	const [currentClass, setCurrentClass] = useState('');
	const currentLocalType = localStorage.getItem(LocalKey.themeMode);
	const [defaultChecked, setDefaultChecked] = useState(
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
			setDefaultChecked(currentType);
		} else {
			document.documentElement.setAttribute('color-mode', currentLocalType);
			setCurrentClass(currentLocalType);
			setDefaultChecked(currentLocalType === 'dark' ? true : false);
		}
	}, [currentType, currentLocalType]);

	useEffect(() => {
		checkFirst();
	}, [checkFirst]);

	const onToggle = (mode) => {
		localStorage.setItem(LocalKey.themeMode, mode);
		setCurrentClass(mode);
		document.documentElement.setAttribute('color-mode', mode);
	};

	return (
		<div className={`double_tootle_wrap theme_toggle ${currentClass}`}>
			<div className='toggle_item'>
				<input
					type='radio'
					id={`leftItem${randomString}`}
					name={randomString}
					defaultChecked={!defaultChecked}
					onChange={() => onToggle('light')}
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
					defaultChecked={defaultChecked}
					onChange={() => onToggle('dark')}
				/>
				<label htmlFor={`rightItem${randomString}`}>
					<span>{props.rightItem}</span>
				</label>
			</div>
		</div>
	);
};

export default ThemeToggle;
