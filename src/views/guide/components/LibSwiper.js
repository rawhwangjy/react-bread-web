// import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Code from 'views/guide/Code';
import Swiper, { SwiperSlide } from 'components/Swiper';

const LibSwiper = () => {
	const params = useLocation();

	const jsCode = `
import Swiper, { SwiperSlide } from 'components/Swiper';
	
const options = {
	swiperTitles: ['AAA111', 'BBB222', 'CCC333', 'DDD444', 'EEE555'],
	pagination: true,
	navigation: true,
};

return (
	<Swiper options={options}>
		<SwiperSlide>첫번째 swiper</SwiperSlide>
		<SwiperSlide>두번째 swiper</SwiperSlide>
		<SwiperSlide>세번째 swiper</SwiperSlide>
		<SwiperSlide>네번째 swiper</SwiperSlide>
		<SwiperSlide>다섯번째 swiper</SwiperSlide>
	</Swiper>
);
	`;

	const options = {
		swiperTitles: ['AAA111', 'BBB222', 'CCC333', 'DDD444', 'EEE555'],
		pagination: true,
		navigation: true,
	};

	return (
		<>
			<h3 className='guide_title'>{params.pathname.replace(/^.*\//, '')}</h3>
			<div className='guide_content'>
				<div className='box'>
					<div className='api_box'>
						<h3>공통 API</h3>
						<table className='api_table'>
							<colgroup>
								<col className='width20' />
								<col className='width25' />
								<col className='widthAll' />
								<col className='width20' />
							</colgroup>
							<thead>
								<tr>
									<th scope='col'>Required</th>
									<th scope='col'>Options</th>
									<th scope='col'>Params</th>
									<th scope='col'>Default</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>options &gt; swiperTitles</th>
									<td>
										<span className='type_object'>Array</span>
									</td>
									<td className='td_center'>Swiper Tab Title</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>options &gt; pagination</th>
									<td>
										<span className='type_boolean'>Boolean</span>
									</td>
									<td className='td_center'>Indicator 유무</td>
								</tr>
								<tr>
									<td>
										<em className='icon_required'>선택</em>
									</td>
									<th scope='row'>options &gt; navigation</th>
									<td>
										<span className='type_boolean'>Boolean</span>
									</td>
									<td className='td_center'>좌우 버튼 유무</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='lib_box'>
						<h3>Basic</h3>
						<div className='example'>
							<Swiper options={options}>
								<SwiperSlide>첫번째 swiper</SwiperSlide>
								<SwiperSlide>두번째 swiper</SwiperSlide>
								<SwiperSlide>세번째 swiper</SwiperSlide>
								<SwiperSlide>네번째 swiper</SwiperSlide>
								<SwiperSlide>다섯번째 swiper</SwiperSlide>
							</Swiper>
						</div>
						<Code
							language='javascript'
							code={jsCode}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default LibSwiper;
