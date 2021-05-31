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
        <Link to= "/auth/signup">
          <div>Signup</div>
        </Link>
        <Link to='/auth/login'>
          <div>Log In</div>
        </Link>
      </nav>
    );
};
  
export default Header;