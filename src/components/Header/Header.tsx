import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__item">HOME</Link>
    </div>
  );
};

export default Header;
