import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cloneDeep } from 'lodash';

import ListFilter from 'views/project/components/ListFilter';
import ProjectListAll from 'views/project/components/ProjectListAll';
import Pagination from 'components/Pagination';

import { LocalKey } from 'utils/common.constants';

import { fetchProjectListData } from 'actions/project.action';

import { Button } from 'stories/Button.jsx';

const ProjectList = () => {
	const dispatch = useDispatch();

	// contant
	const WINDOW_WIDTH = window.innerWidth;

	// Store
	const [originProjectList, setOriginProjectList] = useState([]);
	let projectList = useSelector((state) => state.projectStore.projectList);
	const [mappingPojectList, setMappingPojectList] = useState([]);

	useEffect(() => {
		dispatch(fetchProjectListData());
	}, [dispatch]);

	useEffect(() => {
		if (originProjectList.length === 0) {
			setOriginProjectList(cloneDeep(projectList));
		}
	}, [originProjectList, projectList]);

	const dataSlicing = (targetData, startOffset, endOffset) => {
		return cloneDeep(targetData)
			.sort((a, b) => Number(b.id) - Number(a.id))
			.slice(startOffset, endOffset);
	};

	const dataSlicingInit = useCallback(() => {
		const slicedData = dataSlicing(projectList, 0, WINDOW_WIDTH > 768 ? 6 : 2);
		setMappingPojectList(slicedData);
	}, [projectList, WINDOW_WIDTH]);

	useEffect(() => {
		dataSlicingInit();
	}, [dataSlicingInit]);

	// 페이징
	const onPageMove = useCallback(
		(targetPage, startOffset, endOffset) => {
			const slicedData = dataSlicing(projectList, startOffset, endOffset);
			setMappingPojectList(slicedData);
			localStorage.setItem(LocalKey.lastPageNum, targetPage);
		},
		[projectList]
	);

	return (
		<div className='page_container'>
			<Button
				primary
				size='small'
				label='Sign up'
			/>
			<div className='title_area'>
				<h3 className='sr_only'>참여 프로젝트 목록</h3>
			</div>
			<div className='content_area'>
				<div className='project_area'>
					<ListFilter originProjectList={originProjectList} />
					<ProjectListAll mappingPojectList={mappingPojectList} />
					{originProjectList !== 0 && (
						<Pagination
							totalDataLength={projectList.length}
							dataPerPage={WINDOW_WIDTH > 768 ? 6 : 2}
							onChange={onPageMove}
						/>
					)}
				</div>
			</div>
			<div className='footer_area right'>
				{/* <Link
					to='/board/create'
					type='button'
					className='btn lg primary'
				>
					글쓰기
				</Link> */}
			</div>
		</div>
	);
};

export default ProjectList;
