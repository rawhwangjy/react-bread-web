import { useParams } from "react-router-dom";

const BoardList = () => {
  const params = useParams();

  return (
    <>
      <h1>BoardList 페이지</h1>
      <p>현재 들어온 board 이름 : {params.category}</p>
    </>
  );
};

export default BoardList;
