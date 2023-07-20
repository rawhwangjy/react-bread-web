import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

const Toast = ({ showToast, message, duration, onChange }) => {
	const [activeToast, setActiveToast] = useState(showToast);

	let seconds = 0 || '';
	if (duration === 'fast') {
		seconds = 1000;
	} else if (duration === 'slow') {
		seconds = 3000;
	} else if (typeof duration === 'number') {
		seconds = duration;
	} else {
		seconds = 2000;
	}

	const millisToSeconds = (miliis) => {
		return miliis / 1000;
	};

	useEffect(() => {
		console.log('현재 초', seconds);
		setActiveToast((prevState) => !prevState);
		const timer = setTimeout(() => {
			onChange(false);
		}, seconds);

		return () => {
			clearTimeout(timer);
		};
	}, [seconds, onChange]);

	return ReactDOM.createPortal(
		showToast && (
			<div
				className={`toast_wrap ${activeToast ? 'active' : ''}`}
				style={{ animationDuration: millisToSeconds(seconds) + 's' }}
			>
				<div className='toast'>{message}</div>
			</div>
		),
		document.getElementById('modal-root')
	);
};

export default Toast;
