import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div>
      <p>
        Sorry, the page you visited does not exist.{" "}
        <Link to="/">Back Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
