import Checkbox from 'components/Checkbox';
import { useState } from 'react';

const CookiePopup = ({ onChange }) => {
	const [cookieState, setCookieState] = useState(false);

	const changeCheckbox = (nextState) => {
		setCookieState(nextState);
	};

	const closePopup = () => {
		if (cookieState) {
			const date = new Date();
			date.setMinutes(date.getMinutes() + 60);
			document.cookie = `expires=true; expires=${date.toUTCString()}`;
		}
		onChange(false);
	};

	return (
		<div className='cookie_popup'>
			<div className='cookie_content'>
				<div className='content'>
					<div className='notice'>
						<p className='dot'>Storybook 적용 예정</p>
					</div>
					<div className='notice'>
						<p className='dot'>
							이 사이트는 React 프레임워크를 이용해 만들었습니다.
						</p>
						<a
							href='http://breadg.dothome.co.kr/'
							target='_blank'
							role='button'
							rel='noreferrer'
							className='btn md primary border'
						>
							Vue3 포트폴리오 사이트 바로가기
						</a>
					</div>
				</div>
				<div className='cookie_btns'>
					<Checkbox
						label='1시간동안 보지 않기'
						styles='circle'
						onChange={changeCheckbox}
					/>
					<button
						type='button'
						className='btn sm light'
						onClick={closePopup}
					>
						<span>확인</span>
					</button>
				</div>
			</div>
			<span className='dim' />
		</div>
	);
};

export default CookiePopup;
