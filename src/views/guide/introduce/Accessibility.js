import { useLocation } from 'react-router-dom';

import imgSrc from 'assets/images/visuals/openwax.png';

const Accessibility = () => {
	const params = useLocation();

	return (
		<>
			<h4 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h4>
			<div className='guide_content accessibility'>
				<div className='box'>
					<h5 className='sub_title'>
						Chrome 확장 프로그램 OpenWAX 사용
						<a
							href='https://chrome.google.com/webstore/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe?hl=ko'
							className='link'
							tite='크롬 웹스토어 이동'
						>
							다운로드
						</a>
					</h5>
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
