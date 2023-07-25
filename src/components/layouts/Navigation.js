import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MobileMaxWidth } from 'utils/common.constants';

import ThemeToggle from 'components/ThemeToggle';
import logo from 'assets/images/visuals/logo.png';
import logoDark from 'assets/images/visuals/logo_dark.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fetchCategoryData } from 'actions/category.action';

const Navigation = ({ onChange }) => {
	const dispatch = useDispatch();
	const [showSub, setShowSub] = useState(false);

	const categoryList = useSelector((state) => state.categoryStore.categoryList);

	const firstBoard = useMemo(() => {
		return categoryList[0]?.category;
	}, [categoryList]);

	useEffect(() => {
		if (categoryList.length === 0) {
			dispatch(fetchCategoryData());
		}
	}, [categoryList, dispatch]);

	const [currentMode, setCurrentMode] = useState(false);
	const changeCurrentMode = (nextState) => {
		setCurrentMode(nextState);
	};

	// mobile
	const [isShowModal, subIsShowModal] = useState(false);

	const onClickIsShowAllMenu = () => {
		subIsShowModal((prevState) => !prevState);
		onChange(true);
	};

	const closeGnb = () => {
		subIsShowModal((prevState) => !prevState);
		onChange(false);
	};

	return (
		<>
			<h1>
				<Link to='/'>
					<img
						src={currentMode ? logoDark : logo}
						alt='메인 바로가기'
					/>
				</Link>
			</h1>
			{window.innerWidth > MobileMaxWidth && (
				<>
					<nav className='gnb_wrap'>
						<h2 className='sr_only'>사이트 네비게이션</h2>
						<ul>
							<li>
								<NavLink
									to='/me'
									activeclassname='active'
								>
									자기 소개
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/guide/introduce/spec'
									activeclassname='active'
								>
									소스 코드
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/project'
									activeclassname='active'
								>
									프로젝트
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/category'
									activeclassname='active'
								>
									카테고리
								</NavLink>
							</li>
							<li
								onMouseEnter={() => setShowSub(true)}
								onMouseLeave={() => setShowSub(false)}
							>
								<NavLink
									to={`/board/${firstBoard}`}
									activeclassname='active'
								>
									게시판
								</NavLink>
								{showSub && categoryList.length > 0 && (
									<ul className='sub_gnb_wrap'>
										{categoryList.map((item) => {
											return (
												<li key={`sub${item.id}`}>
													<Link
														to={`/board/${item.category}`}
														activeclassname='active'
													>
														{item.category}
													</Link>
												</li>
											);
										})}
									</ul>
								)}
							</li>
						</ul>
					</nav>
					<ThemeToggle
						leftItem='라이트 모드'
						rightItem='다크모드'
						onChange={changeCurrentMode}
					/>
				</>
			)}
			{window.innerWidth <= MobileMaxWidth && (
				<>
					<ThemeToggle
						leftItem='라이트 모드'
						rightItem='다크모드'
						onChange={changeCurrentMode}
					/>
					<div className='btn_more_area'>
						<button
							type='button'
							className={`btn_more_open ${isShowModal ? 'active' : ''}`}
							onClick={onClickIsShowAllMenu}
							aria-haspopup='true'
						>
							<FontAwesomeIcon
								icon='fa-solid fa-bars'
								aria-label={`전체 메뉴 ${isShowModal ? '열기' : '닫기'}`}
							/>
						</button>
					</div>
					{isShowModal && (
						<div
							className='modal_area'
							aria-expanded={isShowModal}
						>
							<h2 className='sr_only'>사이트 네비게이션</h2>
							<nav className='gnb_wrap'>
								<ul>
									<li>
										<NavLink
											to='/me'
											activeclassname='active'
											onClick={closeGnb}
										>
											자기 소개
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/guide/introduce/spec'
											activeclassname='active'
											onClick={closeGnb}
										>
											소스 코드
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/project'
											activeclassname='active'
											onClick={closeGnb}
										>
											프로젝트
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/category'
											activeclassname='active'
											onClick={closeGnb}
										>
											카테고리
										</NavLink>
									</li>
									<li>
										<NavLink
											to={`/board/${firstBoard}`}
											activeclassname='active'
											onClick={closeGnb}
										>
											게시판
										</NavLink>
										{categoryList.length > 0 && (
											<ul className='sub_gnb_wrap'>
												{categoryList.map((item) => {
													return (
														<li key={`sub${item.id}`}>
															<Link
																to={`/board/${item.category}`}
																activeclassname='active'
																onClick={closeGnb}
															>
																{item.category}
															</Link>
														</li>
													);
												})}
											</ul>
										)}
									</li>
								</ul>
							</nav>
							<button
								className='btn_mo_close'
								onClick={closeGnb}
							>
								<FontAwesomeIcon
									icon='fa-solid fa-xmark'
									aria-label='메뉴 닫기'
								/>
							</button>
							<div
								className='dim'
								onClick={closeGnb}
							/>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Navigation;
