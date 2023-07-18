import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Input from 'components/Input';

const LibInput = () => {
	const params = useLocation();

	const jsCode = `
import Input from 'components/Input';

const [currentValue, setCurrentValue] = useState('');

const changedInput = (nextState) => {
	setCurrentValue(nextState);
};

return (
	<Input
		currentValue={currentValue}
		label='Input의 Label'
		onChange={changedInput}
	/>
);
	`;

	const [currentValue, setCurrentValue] = useState('');

	const changedInput = (nextState) => {
		setCurrentValue(nextState);
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
									<th scope='row'>currentValue</th>
									<td>
										<span className='type_object'>useState</span>
									</td>
									<td className='td_center'>현재 상태 값 Boolean</td>
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
									<th scope='row'>label</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'></td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>labelHide</th>
									<td>
										<span className='type_boolean'>Boolean</span>
									</td>
									<td className='td_center'>Label 숨김 여부</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>labelId + labelDelete</th>
									<td>
										<span className='type_string'>labelId : String</span>
										<span className='type_boolean'>labelDelete : Boolean</span>
									</td>
									<td className='td_left'>
										<div className='refer_wrap'>
											<span className='refer_title'>Label 삭제 여부</span>
										</div>
										<div className='refer_wrap'>
											<span className='refer_title'>
												Label이 &lt;Input&gt; 외부에 있을 경우, 해당 Label과
												연결되는 Label Id 추가 필수
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='lib_box'>
						<h3>Basic</h3>
						<div className='example'>
							<Input
								currentValue={currentValue}
								label='Input의 Label'
								onChange={changedInput}
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

export default LibInput;
