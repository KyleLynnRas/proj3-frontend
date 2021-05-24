import {Link } from "react-router-dom";

function Header(props){
    return (
      <nav className="nav">
        <Link to="/jobs">
          <div>Main Page</div>
        </Link>
        <Link to="/jobs/search">
          <div>Search Jobs</div>
        </Link>
      </nav>
    );
};
  
export default Header;