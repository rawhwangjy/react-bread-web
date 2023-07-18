import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Modal, { ModalHeader, ModalContent } from 'components/Modal';

const LibModal = () => {
	const params = useLocation();

	const jsCode = `
import Modal, { ModalHeader, ModalContent } from 'components/Modal';

const [currentState, setCurrentState] = useState(false);

const openModal = () => {
	setCurrentState((prevState) => !prevState);
};

const closeModal = (nextState) => {
	setCurrentState(nextState);
};

return (
	<Modal
		currentState={currentState}
		onClose={closeModal}
	>
		<ModalHeader>Modal Title</ModalHeader>
		<ModalContent>
			<h4>Modal Content</h4>
			<span>원하는 내용을 추가하세요.</span>
		</ModalContent>
	</Modal>
);
	`;

	const [currentState, setCurrentState] = useState(false);

	const openModal = () => {
		setCurrentState((prevState) => !prevState);
	};

	const closeModal = (nextState) => {
		setCurrentState(nextState);
	};

	return (
		<>
			<h3 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h3>
			<div className='guide_content'>
				<div className='box'>
					<div className='api_box'>
						<h3>공통 API</h3>
						<table className='api_table'>
							<colgroup>
								<col className='width20' />
								<col className='width25' />
								<col className='widthAll' />
								<col className='width20' />
							</colgroup>
							<thead>
								<tr>
									<th scope='col'>Required</th>
									<th scope='col'>Options</th>
									<th scope='col'>Params</th>
									<th scope='col'>Default</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<em className='icon_required required'>필수</em>
									</td>
									<th scope='row'>showToast</th>
									<td>
										<span className='type_object'>useState</span>
									</td>
									<td className='td_center'>현재 상태 값 Boolean</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required required'>필수</em>
									</td>
									<th scope='row'>message</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>&nbsp;</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required required'>필수</em>
									</td>
									<th scope='row'>onChange</th>
									<td>
										<span className='type_object'>Function</span>
									</td>
									<td className='td_center'>Handler</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>duration</th>
									<td>
										<span className='type_string'>String</span>
										<span className='type_number'>Number</span>
									</td>
									<td className='td_left'>
										<div className='refer_wrap'>
											<span className='refer_title'>default: 2s</span>
										</div>
										<div className='refer_wrap'>
											<span className='refer_title'>String:</span>
											<span className='refer_content'>'fast' =&gt; 3s</span>
											<span className='refer_content'>'slow' =&gt; 1s</span>
										</div>
										<div className='refer_wrap'>
											<span className='refer_title'>Number: Milliseconds.</span>
											<span className='refer_content'>ex) 3000</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='lib_box'>
						<h3>Basic</h3>
						<div className='example'>
							<button
								type='button'
								className='btn sm primary'
								onClick={openModal}
							>
								<span>Modal 열기</span>
							</button>
							<Modal
								currentState={currentState}
								onClose={closeModal}
							>
								<ModalHeader>Modal Title</ModalHeader>
								<ModalContent>
									<h4>Modal Content</h4>
									<span>원하는 내용을 추가하세요.</span>
								</ModalContent>
							</Modal>
						</div>
						<Code
							language='javascript'
							code={jsCode}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default LibModal;
