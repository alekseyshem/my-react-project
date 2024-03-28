import { useParams } from "react-router-dom";

const SecondPage = () => {
  const {id} = useParams();
  return <>{id}</>;
};

export default SecondPage;
