import { getRandomId } from 'utils/common.function';

const Toggle = ({ selectedValue, onChange }) => {
	const randomString = getRandomId();

	const onToggle = (e) => {
		onChange(e.target.checked);
	};

	return (
		<div className='tootle_wrap'>
			<div className='toggle_item'>
				<input
					type='checkbox'
					id={`toggle${randomString}`}
					name={randomString}
					onChange={onToggle}
					value={selectedValue}
				/>
				<label htmlFor={`toggle${randomString}`}>
					<span className='sr_only'>{selectedValue ? 'On' : 'Off'}</span>
				</label>
			</div>
		</div>
	);
};

export default Toggle;
