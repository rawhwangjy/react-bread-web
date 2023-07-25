import { useState, useMemo, useEffect, useCallback } from 'react';

import Input from 'components/Input';
import Select from 'components/Select';
import Upload from 'components/Upload';
import Preview from 'components/Preview';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import useFilelistToObject from 'hooks/useFilelistToObject';

const BoardForm = ({
	selectData,
	boardData,
	onChangeSelect,
	onChangeTitle,
	onChangeContent,
	onChangeUpload,
}) => {
	// Filelist
	const [showBeforeFile, setShowBeforeFile] = useState(
		boardData ? true : false
	);

	const filelist = useFilelistToObject(boardData);

	// Select
	const options = useMemo(() => {
		return selectData.map((item) => item.category);
	}, [selectData]);

	const [selectedValue, setSelectedValue] = useState(options[0]);

	const changedSelect = useCallback(
		(nextState) => {
			setSelectedValue(nextState);
			onChangeSelect(nextState);
		},
		[onChangeSelect]
	);

	useEffect(() => {
		changedSelect(selectedValue);
	}, [changedSelect, selectedValue]);

	// Input

	const [titleValue, setTitleValue] = useState(
		boardData ? boardData.title : ''
	);

	const changedTitle = (nextState) => {
		setTitleValue(nextState);
		onChangeTitle(nextState);
	};

	// Editor
	const [contentValue, setContentValue] = useState(
		boardData ? boardData.content : ''
	);

	const changedContent = (nextState) => {
		setContentValue(nextState);
		onChangeContent(nextState);
	};

	// Attachment
	const changedUpload = (nextState) => {
		if (boardData) {
			setShowBeforeFile((prevState) => !prevState);
		}
		onChangeUpload(nextState);
	};

	return (
		<div className='form_area'>
			<div className='form_row flex'>
				<Select
					options={options}
					selectedValue={selectedValue}
					onChange={changedSelect}
				/>
				<Input
					currentValue={titleValue}
					label='제목'
					labelHide
					onChange={changedTitle}
				/>
			</div>
			<div className='form_row'>
				<div className='editor_wrap'>
					<ReactQuill
						theme='snow'
						className='quill_editor'
						value={contentValue}
						onChange={changedContent}
					/>
				</div>
			</div>
			<div className='form_row'>
				<Upload
					btnName='찾기'
					onChange={changedUpload}
				/>
				{showBeforeFile && filelist && <Preview previewData={filelist} />}
			</div>
		</div>
	);
};

export default BoardForm;
