import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Select from 'components/Select';

const LibSelect = () => {
	const params = useLocation();

	const jsCode = `
import Select from 'components/Select';

const options = ['2021', '2022', '2023'];
const [selectedValue, setSelectedValue] = useState(options[0]);

const changedSelect = (nextState) => {
	setSelectedValue(nextState);
	console.log('선택된 Select', nextState);
};

return (
	<Select
		options={options}
		selectedValue={selectedValue}
		onChange={changedSelect}
	/>
);
	`;

	const options = ['2021', '2022', '2023'];
	const [selectedValue, setSelectedValue] = useState(options[0]);

	const changedSelect = (nextState) => {
		setSelectedValue(nextState);
		console.log('선택된 Select', nextState);
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
									<th scope='row'>options</th>
									<td>
										<span className='type_object'>Array</span>
									</td>
									<td className='td_center'>Option List</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required required'>필수</em>
									</td>
									<th scope='row'>selectedValue</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>Init Selected</td>
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
							</tbody>
						</table>
					</div>
					<div className='lib_box'>
						<h6>Basic</h6>
						<div className='example'>
							<Select
								options={options}
								selectedValue={selectedValue}
								onChange={changedSelect}
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

export default LibSelect;
