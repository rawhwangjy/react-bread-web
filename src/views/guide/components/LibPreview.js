import { useLocation } from 'react-router-dom';

import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Code from 'views/guide/Code';
import Preview from 'components/Preview';

import useFilelistToObject from 'hooks/useFilelistToObject';

import { fetchBoardData } from 'actions/board.action';

const LibToggle = () => {
	const params = useLocation();

	const jsCode = `
import Preview from 'components/Preview';

const dispatch = useDispatch();
const boardView = useSelector((state) => state.boardStore.boardView);

// Filelist
const filelist = useFilelistToObject(boardView);

const reqData = useMemo(() => {
	return { id: 26 };
}, []);

useEffect(() => {
	dispatch(fetchBoardData(reqData));
}, [dispatch, reqData]);

return (
	{filelist && <Preview previewData={filelist} />}
);
	`;

	const dispatch = useDispatch();
	const boardView = useSelector((state) => state.boardStore.boardView);

	// Filelist
	const filelist = useFilelistToObject(boardView);

	const reqData = useMemo(() => {
		return { id: 2 };
	}, []);

	useEffect(() => {
		dispatch(fetchBoardData(reqData));
	}, [dispatch, reqData]);

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
							{filelist && <Preview previewData={filelist} />}
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
