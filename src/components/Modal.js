import ReactDOM from 'react-dom';

const Modal = ({ currentState, children, onClose }) => {
	const onCloseModal = () => {
		onClose(false);
	};

	const onCloseTargetModal = (e) => {
		if (e.target.className === 'modal_bg') {
			onClose(false);
		}
	};

	return ReactDOM.createPortal(
		currentState && (
			<div
				className='modal_wrap'
				onClick={onCloseTargetModal}
				role='dialog'
				aria-live='polite'
				aria-modal='true'
			>
				<div className='modal_content'>
					<div className='modal'>{children}</div>
					<button
						className='btn_close'
						onClick={onCloseModal}
					>
						<span>닫기</span>
					</button>
				</div>
				<span className='modal_bg' />
			</div>
		),
		document.getElementById('modal-root')
	);
};

export const ModalHeader = ({ children }) => {
	return (
		<div className='modal_header'>
			<h3>{children}</h3>
		</div>
	);
};

export const ModalContent = ({ children }) => {
	return <div className='modal_body'>{children}</div>;
};

export default Modal;
