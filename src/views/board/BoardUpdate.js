import { useLocation } from 'react-router-dom';

const BoardUpdate = () => {
	const location = useLocation();

	return (
		<>
			<h1>BoardEdit 페이지</h1>
			<p>현재 들어온 board 이름 : {location.category}</p>
			<p>현재 들어온 페이지 id : {location.boardId}</p>
			Editing...
		</>
	);
};

export default BoardUpdate;
