import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Upload from 'components/Upload';

const LibUpload = () => {
	const params = useLocation();

	const jsCode = `
import Upload from 'components/Upload';

const [uploadValue, setUploadValue] = useState([]);

const changedUpload = (nextState) => {
	setUploadValue(nextState);
	console.log('uploadValue', uploadValue);
};

return (
	<Upload
		btnName='찾기'
		onChange={changedUpload}
	/>
);
	`;

	const [currentValue, setCurrentValue] = useState('');

	const changedUpload = (nextState) => {
		setCurrentValue(nextState);
		console.log('currentValue', currentValue);
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
									<th scope='row'>btnName</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>버튼명</td>
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
						<h3>Basic</h3>
						<div className='example'>
							<Upload
								btnName='찾기'
								onChange={changedUpload}
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

export default LibUpload;
