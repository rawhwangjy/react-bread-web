import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Tabs, { Tab } from 'components/Tabs';

const LibTabs = () => {
	const params = useLocation();

	const jsCode = `
import Tabs, { Tab } from 'components/Tabs';

const tabTitles = ['Tab01', 'Tab02'];

return (
<Tabs tabTitles={tabTitles}>
	<Tab>
		<h3>탭의 제목을 써보겠습니다.</h3>
		<p>다양한 내용이 들어 갈 수 있습니다.</p>
		<ul>
			<li>리스트1</li>
			<li>리스트2</li>
		</ul>
	</Tab>
	<Tab>두번째 탭~</Tab>
</Tabs>
);
	`;

	const tabTitles = ['Tab01', 'Tab02'];

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
									<th scope='row'>tabTitles</th>
									<td>
										<span className='type_object'>Array</span>
									</td>
									<td className='td_center'>Tab List</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required required'>필수</em>
									</td>
									<th scope='row'>&lt;Tab&gt;&lt;/Tab&gt;</th>
									<td>
										<span className='type_string'>String</span>
									</td>
									<td className='td_center'>Tab Content</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='lib_box'>
						<h6>Basic</h6>
						<div className='example'>
							<Tabs tabTitles={tabTitles}>
								<Tab>
									<h3>탭의 제목을 써보겠습니다.</h3>
									<p>다양한 내용이 들어 갈 수 있습니다.</p>
									<ul>
										<li>리스트1</li>
										<li>리스트2</li>
									</ul>
								</Tab>
								<Tab>두번째 탭~</Tab>
							</Tabs>
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

export default LibTabs;
