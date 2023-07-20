import { useState } from 'react';

import { getRandomId } from 'utils/common.function';

const Input = ({
	currentValue,
	label,
	labelHide,
	labelDelete,
	labelId,
	onChange,
}) => {
	const randomstring = getRandomId();
	const [showDelete, setShowDelete] = useState(false);

	const changeInput = (e) => {
		onChange(e.target.value);
		if (e.target.value) {
			setShowDelete(true);
		} else {
			setShowDelete(false);
		}
	};

	const clickDelete = () => {
		onChange('');
		setShowDelete(false);
	};

	let labelEle;
	if (!labelDelete) {
		labelEle = (
			<label
				htmlFor={`input${randomstring}`}
				className={`${labelHide ? 'sr_only' : ''}`}
			>
				<span>{label}</span>
			</label>
		);
	}

	return (
		<div className='input_wrap'>
			<div className='input_area'>
				{labelEle}
				<div className='input'>
					<input
						type='text'
						id={`${labelDelete && labelId ? labelId : 'input' + randomstring}`}
						value={currentValue}
						onChange={changeInput}
					/>
					<button
						type='button'
						className={`btn_delete ${showDelete ? 'active' : ''}`}
						onClick={clickDelete}
					>
						<span className='sr_only'>내용 삭제</span>
					</button>
				</div>
			</div>
			<div className='error_area'>
				<p>입력이 이상해요.</p>
			</div>
		</div>
	);
};

export default Input;
