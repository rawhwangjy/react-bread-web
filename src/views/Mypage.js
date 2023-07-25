import photo from 'assets/images/visuals/mypage.jpeg';
import photo_bg from 'assets/images/visuals/mypage_bg.jpg';

const Mypage = () => {
	return (
		<div className='page_container mypage'>
			<h3 className='sr_only'>자기 소개</h3>
			<div className='content_area'>
				<div className='top_area'>
					<div className='intro'>
						<div className='title'>
							<h4 className='sr_only'>인적 사항</h4>
							<strong className='title1'>
								<span>
									<span>프</span>
									<span>론</span>
									<span>트</span>
									<span>엔</span>
									<span>드</span>
								</span>
								<span>
									<span>개</span>
									<span>발</span>
									<span>자</span>
								</span>
							</strong>
							<strong className='title2'>
								<span>
									<span>황</span>
									<span>지</span>
									<span>영</span>
								</span>
							</strong>
							<strong className='title3'>
								<span>Lv.32 </span>
								<span>일할 때만 완벽주의자</span>
							</strong>
						</div>
						<div className='career'>
							<h4 className='sr_only'>경력 사항</h4>
							<p className='company1'>
								<span>(주)오픈오브젝트</span>
								<span>2019.06 ~ 2023.04</span>
							</p>
							<p className='company2'>
								<span>(주)윕스</span>
								<span>2016.04 ~ 2019.04</span>
							</p>
							<p className='company3'>
								<span>(주)아비도스</span>
								<span>2012.03 ~ 2014.04</span>
							</p>
						</div>
					</div>
					<div className='photo'>
						<span className='photo_wrap'>
							<img
								src={photo}
								alt='내 사진'
							/>
						</span>
					</div>
				</div>
				<hr />
				<div className='bottom_area'>
					<h4 className='contact'>개발 && 계발 사이트</h4>
					<div className='site'>
						<strong className='site_title'>블로그</strong>
						<a
							href='https://webduck.tistory.com/'
							target='_blank'
							rel='noreferrer'
						>
							https://webduck.tistory.com/
						</a>
					</div>
					<div className='site'>
						<strong className='site_title'>Github</strong>
						<a
							href='https://github.com/rawhwangjy'
							target='_blank'
							rel='noreferrer'
						>
							https://github.com/rawhwangjy
						</a>
					</div>
					<div className='site'>
						<strong className='site_title'>Vue3 버전 포트폴리오</strong>
						<a
							href='http://breadg.dothome.co.kr/'
							target='_blank'
							rel='noreferrer'
						>
							http://breadg.dothome.co.kr/
						</a>
					</div>
					<div className='banner'>
						<strong>중고 신입</strong>
						<img
							src={photo_bg}
							alt='타이어보다 싸다!'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mypage;
