import { useLocation } from 'react-router-dom';

const Spec = () => {
	const params = useLocation();

	return (
		<>
			<h4 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h4>
			<div className='guide_content spec'>
				<div className='box'>
					<div className='static_list'>
						<ul>
							<li>
								<h5 className='sub_title'>타겟 디바이스</h5>
								<span>Mobile, Tablet, PC</span>
							</li>
							<li>
								<h5 className='sub_title'>최적화 해상도</h5>
								<ul className='dot_list'>
									<li>
										<em>Mobile</em>
										<span>min-width: 360px</span>
									</li>
									<li>
										<em>Tablet</em>
										<span>min-width: 768px</span>
									</li>
									<li>
										<em>PC</em>
										<span>min-width: 1280px</span>
									</li>
								</ul>
							</li>
							<li>
								<h5 className='sub_title'>분기 처리 정보</h5>
								<ul className='dot_list'>
									<li>
										<strong>미디어쿼리를 이용하여 분기 처리</strong>
									</li>
									<li>
										<strong>
											<a
												href='https://www.koreahtml5.kr/front/stats/browser/browserUseStats.do'
												target='_blank'
												title='새창열림'
												rel='noreferrer'
											>
												차세대 웹 기술 지원센터(KISA 산하)
											</a>
											해상도 데이터 기반 분기점 지정
										</strong>
									</li>
									<li>
										<em>Mobile : </em>
										<span>360px ~ 767px</span>
									</li>
									<li>
										<em>Tablet : </em>
										<span>768px ~ 1279px</span>
									</li>
									<li>
										<em>PC : </em>
										<span>1280px ~ 2560px</span>
									</li>
								</ul>
							</li>
							<li>
								<h5 className='sub_title'>환경 및 사용 기술</h5>
								<ul className='dot_list'>
									<li>
										<em>개발 환경</em>
										<span>Node, NPM</span>
									</li>
									<li>
										<em>백엔드</em>
										<span>
											[DB] Sequel Pro, <br />
											[RDBMS] MYSQL, <br />
											[SERVER] Expressjs
										</span>
									</li>
									<li>
										<em>프론트엔드</em>
										<span>
											React ^18.2.0, <br />
											React-DOM ^18.2.0, <br />
											React-Redux ^8.1.1, <br />
											SCSS
										</span>
									</li>
									<li>
										<em>형상관리</em>
										<span>Github</span>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Spec;
