import { useParams } from "react-router-dom";

const BoardEdit = () => {
  const params = useParams();

  return (
    <>
      <h1>BoardEdit 페이지</h1>
      <p>현재 들어온 board 이름 : {params.category}</p>
      <p>현재 들어온 페이지 id : {params.boardId}</p>
      Editing...
    </>
  );
};

export default BoardEdit;
