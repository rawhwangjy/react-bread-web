import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';

const LibModule = () => {
	const params = useLocation();

	const primaryCode = `
<!-- Extra Small -->
<button type='button' className='btn xs primary'>Button text</button>

<!-- Small -->
<button type='button' className='btn sm primary'>Button text</button>

<!-- Medium -->
<button type='button' className='btn md primary'>Button text</button>

<!-- Large -->
<button type='button' className='btn lg primary'>Button text</button>

<!-- Extra Large -->
<button type='button' className='btn xl primary'>Button text</button>
	`;
	const secondaryCode = `
<!-- Extra Small -->
<button type='button' className='btn xs secondary'>Button text</button>

<!-- Small -->
<button type='button' className='btn sm secondary'>Button text</button>

<!-- Medium -->
<button type='button' className='btn md secondary'>Button text</button>

<!-- Large -->
<button type='button' className='btn lg secondary'>Button text</button>

<!-- Extra Large -->
<button type='button' className='btn xl secondary'>Button text</button>
	`;
	const darkCode = `
<!-- Extra Small -->
<button type='button' className='btn xs dark'>Button text</button>

<!-- Small -->
<button type='button' className='btn sm dark'>Button text</button>

<!-- Medium -->
<button type='button' className='btn md dark'>Button text</button>

<!-- Large -->
<button type='button' className='btn lg dark'>Button text</button>

<!-- Extra Large -->
<button type='button' className='btn xl dark'>Button text</button>
	`;
	const lightCode = `
<!-- Extra Small -->
<button type='button' className='btn xs light'>Button text</button>

<!-- Small -->
<button type='button' className='btn sm light'>Button text</button>

<!-- Medium -->
<button type='button' className='btn md light'>Button text</button>

<!-- Large -->
<button type='button' className='btn lg light'>Button text</button>

<!-- Extra Large -->
<button type='button' className='btn xl light'>Button text</button>
	`;
	const borderCode = `
<!-- Extra Small -->
<button type='button' className='btn xs primary border'>Button text</button>

<!-- Small -->
<button type='button' className='btn sm primary border'>Button text</button>

<!-- Medium -->
<button type='button' className='btn md primary border'>Button text</button>

<!-- Large -->
<button type='button' className='btn lg primary border'>Button text</button>

<!-- Extra Large -->
<button type='button' className='btn xl primary border'>Button text</button>
	`;

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
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<em className='icon-required required'>필수</em>
									</td>
									<th scope='row'>Reset Class</th>
									<td>btn</td>
								</tr>
								<tr>
									<td>
										<em className='icon-required'>선택</em>
									</td>
									<th scope='row'>Size Class</th>
									<td>xs | sm | md | lg | xl | custom class</td>
								</tr>
								<tr>
									<td>
										<em className='icon-required'>선택</em>
									</td>
									<th scope='row'>Style Class</th>
									<td>primary | secondary | dark | light | custom class</td>
								</tr>
								<tr>
									<td>
										<em className='icon-required'>선택</em>
									</td>
									<th scope='row'>Border Radius Class</th>
									<td>border</td>
								</tr>
							</tbody>
						</table>
						<p className='notice_dot'>
							공통 버튼 디자인이 아닐 경우, "btn-" 접두사를 붙여 커스텀 클래스를
							작성할 수 있다.
						</p>
					</div>
					<div className='lib_box'>
						<h3>
							Size Class :
							<em className='font_primary'>xs | sm | md | lg | xl</em>+ Style
							Class :<em className='font_primary'>primary</em>
						</h3>
						<div className='example'>
							<ul className='flex_box'>
								<li>
									<em>
										Size : <span className='font_primary'>xs</span>
									</em>
									<em>
										Style : <span className='font_primary'>primary</span>
									</em>
									<button
										type='button'
										className='btn xs primary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>sm</span>
									</em>
									<em>
										Style : <span className='font_primary'>primary</span>
									</em>
									<button
										type='button'
										className='btn sm primary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>md</span>
									</em>
									<em>
										Style : <span className='font_primary'>primary</span>
									</em>
									<button
										type='button'
										className='btn md primary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>lg</span>
									</em>
									<em>
										Style : <span className='font_primary'>primary</span>
									</em>
									<button
										type='button'
										className='btn lg primary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>xl</span>
									</em>
									<em>
										Style : <span className='font_primary'>primary</span>
									</em>
									<button
										type='button'
										className='btn xl primary'
									>
										Button text
									</button>
								</li>
							</ul>
						</div>
						<Code
							language='javascript'
							code={primaryCode}
						/>
					</div>
					<div className='lib_box'>
						<h3>
							Size Class :
							<em className='font_primary'>xs | sm | md | lg | xl</em>+ Style
							Class :<em className='font_primary'>secondary</em>
						</h3>
						<div className='example'>
							<ul className='flex_box'>
								<li>
									<em>
										Size : <span className='font_primary'>xs</span>
									</em>
									<em>
										Style : <span className='font_primary'>secondary</span>
									</em>
									<button
										type='button'
										className='btn xs secondary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>sm</span>
									</em>
									<em>
										Style : <span className='font_primary'>secondary</span>
									</em>
									<button
										type='button'
										className='btn sm secondary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>md</span>
									</em>
									<em>
										Style : <span className='font_primary'>secondary</span>
									</em>
									<button
										type='button'
										className='btn md secondary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>lg</span>
									</em>
									<em>
										Style : <span className='font_primary'>secondary</span>
									</em>
									<button
										type='button'
										className='btn lg secondary'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>xl</span>
									</em>
									<em>
										Style : <span className='font_primary'>secondary</span>
									</em>
									<button
										type='button'
										className='btn xl secondary'
									>
										Button text
									</button>
								</li>
							</ul>
						</div>
						<Code
							language='javascript'
							code={secondaryCode}
						/>
					</div>
					<div className='lib_box'>
						<h3>
							Size Class :
							<em className='font_primary'>xs | sm | md | lg | xl</em>+ Style
							Class :<em className='font_primary'>dark</em>
						</h3>
						<div className='example'>
							<ul className='flex_box'>
								<li>
									<em>
										Size : <span className='font_primary'>xs</span>
									</em>
									<em>
										Style : <span className='font_primary'>dark</span>
									</em>
									<button
										type='button'
										className='btn xs dark'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>sm</span>
									</em>
									<em>
										Style : <span className='font_primary'>dark</span>
									</em>
									<button
										type='button'
										className='btn sm dark'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>md</span>
									</em>
									<em>
										Style : <span className='font_primary'>dark</span>
									</em>
									<button
										type='button'
										className='btn md dark'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>lg</span>
									</em>
									<em>
										Style : <span className='font_primary'>dark</span>
									</em>
									<button
										type='button'
										className='btn lg dark'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>xl</span>
									</em>
									<em>
										Style : <span className='font_primary'>dark</span>
									</em>
									<button
										type='button'
										className='btn xl dark'
									>
										Button text
									</button>
								</li>
							</ul>
						</div>
						<Code
							language='javascript'
							code={darkCode}
						/>
					</div>
					<div className='lib_box'>
						<h3>
							Size Class :
							<em className='font_primary'>xs | sm | md | lg | xl</em>+ Style
							Class :<em className='font_primary'>light</em>
						</h3>
						<div className='example'>
							<ul className='flex_box'>
								<li>
									<em>
										Size : <span className='font_primary'>xs</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn xs light'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>sm</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn sm light'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>md</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn md light'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>lg</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn lg light'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>xl</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn xl light'
									>
										Button text
									</button>
								</li>
							</ul>
						</div>
						<Code
							language='javascript'
							code={lightCode}
						/>
					</div>
					<div className='lib_box'>
						<h3>
							Size Class :
							<em className='font_primary'>xs | sm | md | lg | xl</em>+ Style
							Class :<em className='font_primary'>primary</em>+ Border Radius
							Class :<em className='font_primary'>border</em>
						</h3>
						<div className='example'>
							<ul className='flex_box'>
								<li>
									<em>
										Size : <span className='font_primary'>xs</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn xs primary border'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>sm</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn sm primary border'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>md</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn md primary border'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>lg</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn lg primary border'
									>
										Button text
									</button>
								</li>
								<li>
									<em>
										Size : <span className='font_primary'>xl</span>
									</em>
									<em>
										Style : <span className='font_primary'>light</span>
									</em>
									<button
										type='button'
										className='btn xl primary border'
									>
										Button text
									</button>
								</li>
							</ul>
						</div>
						<Code
							language='javascript'
							code={borderCode}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default LibModule;
