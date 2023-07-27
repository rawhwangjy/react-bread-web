import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cloneDeep } from 'lodash';

import Pagination from 'components/Pagination';
import ListFilter from 'views/project/components/ListFilter';

import { LocalKey } from 'utils/common.constants';

import {
	fetchProjectListData,
	fetchProjectListYearData,
	fetchProjectListTypeData,
} from 'actions/project.action';

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

	const dataSlicingInit = useCallback(
		(startOffset, endOffset) => {
			const slicedData = dataSlicing(
				projectList,
				0,
				WINDOW_WIDTH > 768 ? 6 : 2
			);
			setMappingPojectList(slicedData);
		},
		[projectList, WINDOW_WIDTH]
	);

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
			<div className='title_area'>
				<h3 className='sr_only'>참여 프로젝트 목록</h3>
			</div>
			<div className='content_area'>
				<div className='project_area'>
					<ListFilter originProjectList={originProjectList} />
					<div className='project_list'>
						{mappingPojectList.map((project, index) => (
							<div
								className='project_wrap'
								key={`project${index}`}
							>
								<Link
									to={`${project.id}`}
									className='project'
								>
									<div
										className={`project_title ${
											project.typePc || project.typeMobile ? 'wBadge' : ''
										}`}
									>
										<h4>{project.title}</h4>
										<span className='types_badge'>
											{project.typePc && <span className='pc'>PC</span>}
											{project.typeMobile && (
												<span className='mobile'>모바일</span>
											)}
										</span>
									</div>
									<div className='date_area'>
										<span className='date'>
											<span aria-label='시작년도'>{project.startYear}.</span>
											<span aria-label='시작월'>
												{project.startMonth < 10
													? `0${project.startMonth}`
													: project.startMonth}
											</span>
										</span>{' '}
										~
										<span className='date'>
											<span aria-label='종료년도'>{project.endYear}.</span>
											<span aria-label='종료월'>
												{project.endMonth < 10
													? `0${project.endMonth}`
													: project.endMonth}
											</span>
										</span>
									</div>
									<span className='introduce'>{project.introduce}</span>
									<div className='companies'>
										<span>
											소속 : <strong>{project.company}</strong>
										</span>
										<span>
											발주사 : <strong>{project.orderCompany}</strong>
										</span>
									</div>
								</Link>
							</div>
						))}
					</div>
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
