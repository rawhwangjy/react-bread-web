import useRandomIdMaker from 'hooks/useRandomIdMaker';

const Radio = ({
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
		<div className={`radio_item ${styles}`}>
			<input
				type='radio'
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

export default Radio;
