import { useParams } from "react-router-dom";

const ProjectView = () => {
  const params = useParams();

  return (
    <>
      <h1>ProjectView 페이지</h1>
      <p>현재 들어온 페이지 projectId : {params.projectId}</p>
    </>
  );
};

export default ProjectView;
