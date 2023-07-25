import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Checkbox from 'components/Checkbox';

const LibCheckbox = () => {
	const params = useLocation();

	const jsCode = `
import Checkbox from 'components/Checkbox';

const changeCheckbox = (nextState) => {
	console.log('체크 상태', nextState);
};

return (
	<Checkbox
		label='체크박스'
		onChange={changeCheckbox}
	/>
	<Checkbox
		label='원형 체크박스 + checked'
		styles='circle'
		checked
		onChange={changeCheckbox}
	/>
	<Checkbox
		label='체크박스 Revese + disabled'
		styles='reverse'
		disabled
		onChange={changeCheckbox}
	/>
);
	`;

	const changedCheckbox = (nextState) => {
		console.log('체크 상태', nextState);
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
									<th scope='row'>label</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>Checkbox Title</td>
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
									<th scope='row'>styles</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>Checkbox Style</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>name</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>default: &#123;label&#125;</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>disabled</th>
									<td>
										<span className='type_boolean'>Boolean</span>
									</td>
									<td className='td_center'>disabled 여부</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>checked</th>
									<td>
										<span className='type_boolean'>Boolean</span>
									</td>
									<td className='td_center'>checked 여부</td>
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
							</tbody>
						</table>
					</div>
					<div className='lib_box'>
						<h6>Basic</h6>
						<div className='example'>
							<Checkbox
								label='체크박스'
								onChange={changedCheckbox}
							/>
						</div>
						<div className='example'>
							<Checkbox
								label='원형 체크박스 + checked'
								styles='circle'
								checked
								onChange={changedCheckbox}
							/>
						</div>
						<div className='example'>
							<Checkbox
								label='체크박스 Revese + disabled'
								styles='reverse'
								disabled
								onChange={changedCheckbox}
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

export default LibCheckbox;
