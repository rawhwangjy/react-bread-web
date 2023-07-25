import ReactDOM from 'react-dom';

const Alert = ({ currentState, type, title, message, onClose }) => {
	const onCloseAlert = () => {
		onClose(false);
	};

	const onCloseTargetAlert = (e) => {
		if (e.target.className === 'alert_bg') {
			onClose(false);
		}
	};

	return ReactDOM.createPortal(
		currentState && (
			<div
				className='alert_wrap'
				onClick={onCloseTargetAlert}
				role={type === 'success' ? 'status' : 'alert'}
				aria-live='polite'
			>
				<div className={`alert_content ${type}`}>
					<div className='message_wrap'>
						<h4>{title}</h4>
						<span className='message'>{message}</span>
					</div>
					<button
						className='btn_close'
						onClick={onCloseAlert}
					>
						<span>닫기</span>
					</button>
				</div>
				<span className='alert_bg' />
			</div>
		),
		document.getElementById('modal-root')
	);
};

export default Alert;
