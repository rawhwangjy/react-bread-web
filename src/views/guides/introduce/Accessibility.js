import { useLocation } from 'react-router-dom';

import imgSrc from 'assets/images/visuals/openwax.png';

const Accessibility = () => {
	const params = useLocation();

	return (
		<>
			<h3 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h3>
			<div className='guide_content accessibility'>
				<div className='box'>
					<h3 className='sub_title'>
						Chrome 확장 프로그램 OpenWAX 사용
						<a
							href='https://chrome.google.com/webstore/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe?hl=ko'
							className='link'
							tite='크롬 웹스토어 이동'
						>
							다운로드
						</a>
					</h3>
					<span className='img_wrap'>
						<img
							src={imgSrc}
							alt='OpenWAX 아이콘'
						/>
					</span>
				</div>
			</div>
		</>
	);
};

export default Accessibility;
