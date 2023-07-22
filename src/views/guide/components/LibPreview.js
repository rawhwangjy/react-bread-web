import { useLocation } from 'react-router-dom';

import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardData } from 'actions/board.action';

import Code from 'views/guide/Code';
import Preview from 'components/Preview';

const LibToggle = () => {
	const params = useLocation();

	const jsCode = `
import Toggle from 'components/Toggle';

const changeToggle = (nextState) => {
	console.log('토글 상태', nextState);
};

return (
	<Toggle onChange={changeToggle} />
);
	`;

	const boardView = useSelector((state) => state.boardStore.boardView);
	const dispatch = useDispatch();

	// Filelist
	let filelist;
	if (boardView.fileList) {
		filelist = JSON.parse(boardView.fileList);
	}
	const reqData = useMemo(() => {
		return { id: 21 };
	}, []);

	useEffect(() => {
		dispatch(fetchBoardData(reqData));
	}, [dispatch, reqData]);

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
							<Preview previewData={filelist} />
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

export default LibToggle;
