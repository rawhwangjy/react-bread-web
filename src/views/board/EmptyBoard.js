import { Link } from 'react-router-dom';

const EmptyBoard = () => {
	return (
		<div className='page_container'>
			<div className='title_area'>
				<h3 className='main_title'>게시판이 없습니다.</h3>
			</div>
			<div className='content_area'>
				<Link
					to='/category/create'
					type='button'
					className='btn lg primary'
				>
					카테고리 생성하기
				</Link>
			</div>
			<div className='footer_area right'>
				{/* <Link
					to='/category/create'
					type='button'
					className='btn lg primary'
				>
					카테고리 생성하기
				</Link> */}
			</div>
		</div>
	);
};

export default EmptyBoard;
