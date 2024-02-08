import { useParams } from "react-router-dom";

const SecondPage = () => {
  const {id} = useParams();
  // console.log(id)
  return <>{id}</>;
};

export default SecondPage;
