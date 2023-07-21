import useRandomIdMaker from 'hooks/useRandomIdMaker';

const Checkbox = ({
	label,
	labelHide,
	name,
	selectedValue,
	checked,
	disabled,
	styles,
	onChange,
}) => {
	const randomString = useRandomIdMaker();

	const onCheck = (e) => {
		onChange(e.target.value);
	};

	return (
		<div className={`checkbox_item ${styles}`}>
			<input
				type='checkbox'
				id={`check${randomString}`}
				name={name}
				value={label}
				checked={checked ? checked : selectedValue}
				disabled={disabled}
				onChange={onCheck}
			/>
			<label htmlFor={`check${randomString}`}>
				<span className={labelHide ? 'sr_only' : ''}>{label}</span>
			</label>
		</div>
	);
};

export default Checkbox;
