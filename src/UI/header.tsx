import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="top-nav">
        <div className="logo">
          <h1>BlogNews</h1>
        </div>
        <li>
          {" "}
          <a href="">Dev</a>{" "}
        </li>
      </div>
      <div className="bottom-nav ">
        <h3 className="font-bold underline">Select Contry</h3>
        <ul>
          <Link to="/usnews">US</Link>
          <Link to="/uknews">UK</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
