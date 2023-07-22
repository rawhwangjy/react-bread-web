import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cloneDeep } from 'lodash';

import Select from 'components/Select';

import {
	fetchProjectListData,
	fetchProjectListYearData,
	fetchProjectListTypeData,
} from 'actions/project.action';

const ProjectList = () => {
	const { category } = useParams();
	const dispatch = useDispatch();

	// Store
	const projectList = useSelector((state) => state.projectStore.projectList);
	const [originProjectList, setOriginProjectList] = useState([]);

	useEffect(() => {
		dispatch(fetchProjectListData());
	}, [dispatch]);

	// 전체
	const options = ['전체', '연도별', '타입별'];
	const [defaultValue, setDefaultValue] = useState(options[0]);
	const changedDefaultFilter = (nextState) => {
		setDefaultValue(nextState);
	};

	// 연도별
	useEffect(() => {
		if (originProjectList.length === 0) {
			setOriginProjectList(cloneDeep(projectList));
		}
	}, [originProjectList, projectList]);

	const yearOptions = useMemo(() => {
		const allYears = [];
		originProjectList.filter((project) => {
			return allYears.push(project.startYear);
		});
		const removeSame = new Set(allYears);
		const makeArray = [...removeSame];
		makeArray.sort((a, b) => {
			return Number(b) - Number(a);
		});
		makeArray.unshift('전체');
		return makeArray;
	}, [originProjectList]);

	const [yearValue, setYearValue] = useState(yearOptions[0]);

	const changedYearFilter = (nextState) => {
		setYearValue(nextState);
		if (nextState === '전체') {
			dispatch(fetchProjectListData());
		} else {
			// reqData
			const reqData = {
				year: nextState,
			};
			dispatch(fetchProjectListYearData(reqData));
		}
	};

	// 타입별
	const typeOptions = ['전체', 'PC', '모바일'];
	const [typeValue, setTypeValue] = useState(typeOptions[0]);

	const changedTypeFilter = (nextState) => {
		setTypeValue(nextState);
		if (nextState === '전체') {
			dispatch(fetchProjectListData());
		} else {
			// reqData
			const reqData = {
				type: nextState === 'PC' ? 'pc' : 'mobile',
			};
			dispatch(fetchProjectListTypeData(reqData));
		}
	};

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>{category}</h3>
			</div>
			<div className='content_area'>
				<div className='project_area'>
					<div className='project_filter'>
						<Select
							options={options}
							selectedValue={defaultValue}
							className={
								defaultValue === '연도별' || defaultValue === '타입별'
									? 'half_width'
									: ''
							}
							onChange={changedDefaultFilter}
						/>
						{defaultValue === '연도별' && (
							<Select
								options={yearOptions}
								selectedValue={yearValue}
								className='half_width'
								onChange={changedYearFilter}
							/>
						)}
						{defaultValue === '타입별' && (
							<Select
								options={typeOptions}
								selectedValue={typeValue}
								className='half_width'
								onChange={changedTypeFilter}
							/>
						)}
					</div>
					<div className='project_list'>
						{projectList.map((project, index) => (
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
											{project.typePc === 1 && <span className='pc'>PC</span>}
											{project.typeMobile === 1 && (
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
				</div>
			</div>
			<div className='footer_area right'>
				<Link
					to='/board/create'
					type='button'
					className='btn lg primary'
				>
					글쓰기
				</Link>
			</div>
		</div>
	);
};

export default ProjectList;
