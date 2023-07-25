import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Toast from 'components/Toast';

const LibToast = () => {
	const params = useLocation();

	const jsCode = `
import Toast from 'components/Toast';

const [showToast, setShowToast] = useState(false);

const openAlert = () => {
	setShowToast((prevState) => !prevState);
};

const changedToast = (nextState) => {
	setShowToast(nextState);
};

return (
	<button
		type='button'
		className='btn sm primary'
		onClick={openAlert}
	>
		<span>Toast 열기</span>
	</button>
	<Toast
		showToast={showToast}
		message='토스트 맛있다!'
		onChange={changedToast}
	/>
);
	`;

	const [showToast, setShowToast] = useState(false);

	const openAlert = () => {
		setShowToast((prevState) => !prevState);
	};

	const changedToast = (nextState) => {
		setShowToast(nextState);
	};

	return (
		<>
			<h4 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h4>
			<div className='guide_content'>
				<div className='box'>
					<div className='api_box'>
						<h5>공통 API</h5>
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
						<h6>Basic</h6>
						<div className='example'>
							<button
								type='button'
								className='btn sm primary'
								onClick={openAlert}
							>
								<span>Toast 열기</span>
							</button>
							<Toast
								showToast={showToast}
								message='토스트 맛있다!'
								onChange={changedToast}
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

export default LibToast;
