import { useLocation } from 'react-router-dom';

const Convention = () => {
	const params = useLocation();

	return (
		<>
			<h3 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h3>
			<div className='guide_content convention'>
				<div className='box'>
					<div className='table_box'>
						<h3 className='sub_title'>속성의 선언 순서</h3>
						<table className='table'>
							<colgroup>
								<col style={{ width: '20%' }} />
								<col style={{ width: '20%' }} />
								<col style={{ width: 'auto' }} />
							</colgroup>
							<thead>
								<tr>
									<th>구분</th>
									<th>속성</th>
									<th>속성 값</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowSpan='3'>1. 위치</td>
									<td>position</td>
									<td>absolute, fixed, relative, static</td>
								</tr>
								<tr>
									<td className='td_line'>top, right, bottom, left</td>
									<td>length(px), %</td>
								</tr>
								<tr>
									<td className='td_line'>z-index</td>
									<td>number</td>
								</tr>
								<tr>
									<td rowSpan='2'>2. 넘침/흐름</td>
									<td>overflow</td>
									<td>visible, hidden, scroll, auto</td>
								</tr>
								<tr>
									<td className='td_line'>float</td>
									<td>left, right, none</td>
								</tr>
								<tr>
									<td rowSpan='2'>3. 표시</td>
									<td>display</td>
									<td>
										none, block, inline, inline-block, inline-table, list-item,
										table, table-caption, table-cell, table-column,
										table-column-group, table-footer-group, table-header-group,
										table-row, table-row-group, flex
									</td>
								</tr>
								<tr>
									<td className='td_line'>visibility</td>
									<td>visible, hidden, collapse</td>
								</tr>
								<tr>
									<td rowSpan='4'>4. 크기/간격</td>
									<td>width, max-width, min-width</td>
									<td>auto, length(px, em, rem), %</td>
								</tr>
								<tr>
									<td className='td_line'>height, max-height, min-height</td>
									<td>auto, length(px, em, rem), %</td>
								</tr>
								<tr>
									<td className='td_line'>margin</td>
									<td>auto, length(px, em, rem), %</td>
								</tr>
								<tr>
									<td className='td_line'>padding</td>
									<td>auto, length(px, em, rem), %</td>
								</tr>
								<tr>
									<td rowSpan='3'>5. 박스모양</td>
									<td>border</td>
									<td>border-width, border-style, border-color</td>
								</tr>
								<tr>
									<td className='td_line'>border-radius</td>
									<td>length(px, em, rem), %</td>
								</tr>
								<tr>
									<td className='td_line'>background</td>
									<td>
										background-color, background-image, background-repeat,
										background-attachment, background-position, background-size
									</td>
								</tr>
								<tr>
									<td rowSpan='4'>6. 글꼴/정렬</td>
									<td>color</td>
									<td>hex_number</td>
								</tr>
								<tr>
									<td className='td_line'>font</td>
									<td>
										font-style, font-variant, font-weigth,
										font-size/line-height, font-family, letter-spacing
									</td>
								</tr>
								<tr>
									<td className='td_line'>text-align</td>
									<td>left, right, center, justify</td>
								</tr>
								<tr>
									<td className='td_line'>vertical-align</td>
									<td>top, middle, bottom, baseline</td>
								</tr>
								<tr>
									<td>7. 기타</td>
									<td />
									<td>언급되지 않은 속성들은 후순위로 적용한다.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Convention;
