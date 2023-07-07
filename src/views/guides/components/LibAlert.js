import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guides/Code';
import Alert from 'components/Alert';

const LibAlert = () => {
	const params = useLocation();

	const jsCode = `
import Alert from 'components/Alert';

const [currentState, setCurrentState] = useState(false);
const closeAlert = (nextState) => {
	setCurrentState(nextState);
};

const openAlert = () => {
	setCurrentState((prevState) => !prevState);
};

return (
	<button
		type='button'
		onClick={openAlert}
	>
		<span>Alert 열기</span>
	</button>
	<Alert
		currentState={currentState}
		type='success'
		title='Success'
		message='글 등록을 완료했습니다.'
		onClose={closeAlert}
	/>
);
	`;

	const [currentSuccessState, setCurrentSuccessState] = useState(false);
	const [currentInfoState, setCurrentInfoState] = useState(false);
	const [currentWarningState, setCurrentWarningState] = useState(false);
	const [currentErrorState, setCurrentErrorState] = useState(false);

	const closeAlert = (nextState) => {
		setCurrentSuccessState(nextState);
		setCurrentInfoState(nextState);
		setCurrentWarningState(nextState);
		setCurrentErrorState(nextState);
	};

	const openAlert = (target) => {
		if (target === 'success') {
			setCurrentSuccessState((prevState) => !prevState);
		} else if (target === 'info') {
			setCurrentInfoState((prevState) => !prevState);
		} else if (target === 'warning') {
			setCurrentWarningState((prevState) => !prevState);
		} else if (target === 'error') {
			setCurrentErrorState((prevState) => !prevState);
		}
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
									<th scope='row'>type</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>success, info, warning, error</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required required'>필수</em>
									</td>
									<th scope='row'>title</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>Alert Title</td>
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
									<th scope='row'>onClose</th>
									<td>
										<span className='type_object'>Function</span>
									</td>
									<td className='td_center'>Handler</td>
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
								onClick={() => openAlert('success')}
							>
								<span>Success Alert 열기</span>
							</button>
							<Alert
								currentState={currentSuccessState}
								type='success'
								title='Success'
								message='글 등록을 완료했습니다.'
								onClose={closeAlert}
							/>
						</div>
						<div className='example'>
							<button
								type='button'
								className='btn sm primary'
								onClick={() => openAlert('info')}
							>
								<span>Info Alert 열기</span>
							</button>
							<Alert
								currentState={currentInfoState}
								type='info'
								title='Info'
								message='글 등록 중입니다.'
								onClose={closeAlert}
							/>
						</div>
						<div className='example'>
							<button
								type='button'
								className='btn sm primary'
								onClick={() => openAlert('warning')}
							>
								<span>Warning Alert 열기</span>
							</button>
							<Alert
								currentState={currentWarningState}
								type='warning'
								title='Warning'
								message='잘못된 접근입니다.'
								onClose={closeAlert}
							/>
						</div>
						<div className='example'>
							<button
								type='button'
								className='btn sm primary'
								onClick={() => openAlert('error')}
							>
								<span>Error Alert 열기</span>
							</button>
							<Alert
								currentState={currentErrorState}
								type='error'
								title='Error'
								message='글 등록에 실패했습니다.'
								onClose={closeAlert}
							/>
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

export default LibAlert;
