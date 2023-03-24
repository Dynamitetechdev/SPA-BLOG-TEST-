import { Link } from "react-router-dom";

/**
 *
 * @notice The Header and Link Navigations Using Routers
 */
const Header = () => {
  return (
    <div className="header">
      <div className="top-nav">
        <div className="logo">
          <Link to="/">BlogNews</Link>
        </div>
        <li>
          <a href="https://github.com/Dynamitetechdev">Developer</a>
        </li>
      </div>
      <div className="bottom-nav">
        <h3>Select Contry</h3>
        <ul>
          <Link to="/usnews">US</Link>
          <Link to="/uknews">UK</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
