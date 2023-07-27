import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'components/Select';

import {
	fetchProjectListData,
	fetchProjectListYearData,
	fetchProjectListTypeData,
} from 'actions/project.action';

const ListFilter = ({ originProjectList }) => {
	const dispatch = useDispatch();

	// 전체
	const options = ['전체', '연도별', '타입별'];
	const [defaultValue, setDefaultValue] = useState(options[0]);
	const changedDefaultFilter = (nextState) => {
		setDefaultValue(nextState);
		dispatch(fetchProjectListData());
	};

	// 연도별
	const yearOptions = useMemo(() => {
		const allYears = [];
		originProjectList.filter((project) => {
			return allYears.push(project.startYear);
		});
		const removeSame = new Set(allYears);
		const makeArray = [...removeSame];
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
	);
};

export default ListFilter;
