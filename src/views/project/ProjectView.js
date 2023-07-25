import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from 'utils/common.constants';

import Swiper, { SwiperSlide } from 'components/Swiper';
import Tabs, { Tab } from 'components/Tabs';

import { fetchProjectData } from 'actions/project.action';

const ProjectView = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	// Store
	const projectDetail = useSelector((state) => state.projectStore.projectView);

	// Store // reqData
	const reqData = useMemo(() => {
		return {
			id,
		};
	}, [id]);

	useEffect(() => {
		dispatch(fetchProjectData(reqData));
	}, [dispatch, reqData]);

	const swiper = {
		pagination: true,
		navigation: true,
	};

	const tabTitles = useMemo(() => {
		const titleArray = [];
		if (projectDetail.fileListMobile) {
			titleArray.push('모바일');
		}
		if (projectDetail.fileListPc) {
			titleArray.push('PC');
		}
		return titleArray;
	}, [projectDetail.fileListMobile, projectDetail.fileListPc]);

	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>{projectDetail && projectDetail.title}</h3>
			</div>
			<div className='content_area'>
				<div className='project_area'>
					<table className='table_view'>
						<colgroup>
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
							<col style={{ width: '10%' }} />
						</colgroup>
						{projectDetail && (
							<tbody>
								<tr>
									<th scope='row'>프로젝트명</th>
									<td colSpan='5'>{projectDetail.title}</td>
									<th scope='row'>투입일</th>
									<td className='txt_center'>
										{projectDetail.startYear}.
										{projectDetail.startMonth < 10
											? `0${projectDetail.startMonth}`
											: projectDetail.startMonth}
									</td>
									<th scope='row'>종료일</th>
									<td className='txt_center'>
										{projectDetail.endYear}.
										{projectDetail.endMonth < 10
											? `0${projectDetail.endMonth}`
											: projectDetail.endMonth}
									</td>
								</tr>
								<tr>
									<th scope='row'>담당 역할</th>
									<td colSpan='3'>{projectDetail.role}</td>
									<th scope='row'>소속회사</th>
									<td colSpan='2'>{projectDetail.company}</td>
									<th scope='row'>발주처</th>
									<td colSpan='2'>{projectDetail.orderCompany}</td>
								</tr>
								<tr>
									<th scope='row'>
										프로젝트
										<br />
										내용
									</th>
									<td colSpan='9'>{projectDetail.introduce}</td>
								</tr>
								<tr>
									<th scope='row'>주요 업무</th>
									<td colSpan='9'>
										<ul className='jobs'>
											{projectDetail.jobs &&
												JSON.parse(projectDetail.jobs).map((job, index) => (
													<li key={`job${index}`}>
														<span>{job}</span>
													</li>
												))}
										</ul>
									</td>
								</tr>
								<tr>
									<th scope='row'>
										프로젝트
										<br />
										타입
									</th>
									<td colSpan='9'>
										<span className='types'>
											<span className='types_badge'>
												{projectDetail.typePc && <span className='pc'>PC</span>}
												{projectDetail.typeMobile && (
													<span className='mobile'>모바일</span>
												)}
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th scope='row'>사용 기술</th>
									<td colSpan='9'>
										<div className='skills'>
											{projectDetail.skills &&
												Object.entries(projectDetail.skills).map(
													([skill, isAvailable], index) =>
														isAvailable && (
															<span
																key={`job${index}`}
																className={`lang ${skill}`}
															>
																{skill}
															</span>
														)
												)}
										</div>
									</td>
								</tr>
								<tr>
									<td colSpan='10'>
										{(projectDetail.fileListMobile ||
											projectDetail.fileListPc) && (
											<Tabs tabTitles={tabTitles}>
												{projectDetail.fileListMobile && (
													<Tab>
														<Swiper options={swiper}>
															{JSON.parse(projectDetail.fileListMobile).map(
																(image, index) => (
																	<SwiperSlide key={`mobile${index}`}>
																		<span className='img_area mobile'>
																			<img
																				src={`${API_URL}/views/upload/${image.filename}`}
																				alt={image.originalname}
																			/>
																		</span>
																	</SwiperSlide>
																)
															)}
														</Swiper>
													</Tab>
												)}
												{projectDetail.fileListPc && (
													<Tab>
														<Swiper options={swiper}>
															{JSON.parse(projectDetail.fileListPc).map(
																(image, index) => (
																	<SwiperSlide key={`pc${index}`}>
																		<span className='img_area pc'>
																			<img
																				src={`${API_URL}/views/upload/${image.filename}`}
																				alt={image.originalname}
																			/>
																		</span>
																	</SwiperSlide>
																)
															)}
														</Swiper>
													</Tab>
												)}
											</Tabs>
										)}
										{!projectDetail.fileListMobile &&
											!projectDetail.fileListPc && (
												<p className='no_data'>첨부 파일이 없습니다.</p>
											)}
									</td>
								</tr>
							</tbody>
						)}
					</table>
				</div>
			</div>

			<div className='footer_area side'>
				<Link
					to='/project'
					type='button'
					className='btn lg light'
				>
					목록
				</Link>
			</div>
		</div>
	);
};

export default ProjectView;
