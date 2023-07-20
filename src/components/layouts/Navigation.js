import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

import ThemeToggle from 'components/ThemeToggle';
import logo from 'assets/images/visuals/logo.png';

const Navigation = () => {
	const [showSub, setShowSub] = useState(false);

	const categoryList = useSelector((state) => state.categoryStore.categoryList);

	const firstBoard = useMemo(() => {
		return categoryList[0]?.category;
	}, [categoryList]);

	return (
		<>
			<h1>
				<Link to='/'>
					<img
						src={logo}
						alt='메인 바로가기'
					/>
				</Link>
			</h1>
			<nav className='gnb_wrap'>
				<ul>
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
			/>
		</>
	);
};

export default Navigation;
