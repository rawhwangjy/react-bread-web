import { useState } from 'react';

const Select = ({ options, selectedValue, className, onChange }) => {
	const [openState, setOpenState] = useState(false);

	const clickSelect = () => {
		setOpenState((prevState) => !prevState);
	};

	const changeSelect = (e) => {
		setOpenState((prevState) => !prevState);
		onChange(e.target.innerText);
	};

	return (
		<div className={`select_wrap ${openState ? 'active' : ''} ${className}`}>
			<button
				type='button'
				className='selected'
				onClick={clickSelect}
			>
				<span>{selectedValue}</span>
			</button>
			<ul className='select_list'>
				{options.map((option, index) => {
					return (
						<li
							key={`option${index}`}
							className='option'
						>
							<button
								type='button'
								onClick={changeSelect}
							>
								<span>{option}</span>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Select;
