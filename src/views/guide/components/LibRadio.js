import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Radio from 'components/Radio';

const LibRadio = () => {
	const params = useLocation();

	const jsCode = `
import Radio from 'components/Radio';

const changeRadio = (nextState) => {
	console.log('라디오 상태', nextState);
};

return (
	<Radio
		label='라디오1'
		name='radioArray'
		onChange={changeRadio}
	/>
	<Radio
		label='라디오2'
		name='radioArray'
		onChange={changeRadio}
	/>
);
	`;

	const changedRadio = (nextState) => {
		console.log('라디오 상태', nextState);
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
									<th scope='row'>name</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>default: &#123; label &#125;</td>
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
						<h3>Basic</h3>
						<div className='example'>
							<Radio
								label='라디오1'
								name='radioArray'
								onChange={changedRadio}
							/>
							<br />
							<Radio
								label='라디오2'
								name='radioArray'
								onChange={changedRadio}
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

export default LibRadio;
