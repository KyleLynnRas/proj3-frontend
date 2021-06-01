import {Link } from "react-router-dom";
import {useState} from "react";
//Bulma
import {Navbar} from "react-bulma-components";
//icons
import {FaHome} from "react-icons/fa";
import {BsSearch} from "react-icons/bs";
import {MdBusinessCenter} from "react-icons/md";

function Header(props){

    //state for navBurger 
    const [burger, setBurger] = useState("burger is-dark")

    const burgerChange = () => {
        burger === "is-active is-dark" ? setBurger("burger is-dark") : setBurger("is-active is-dark")
    }

    return (
      <Navbar className="nav is-dark">
        <Navbar.Brand>
          <Navbar.Item>
            <Link className="nav-link" to="/">
              <FaHome className="nav-icon"/>Home
            </Link>
          </Navbar.Item>
          <Navbar.Burger className={burger} onClick={burgerChange} />
        </Navbar.Brand>
        <Navbar.Menu className={burger}>
          <Navbar.Container>
            <Navbar.Item >
              <Link className="nav-link" to="/jobs">
                <MdBusinessCenter className="nav-icon" />My Jobs
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link className="nav-link" to="/jobs/search">
                <BsSearch className="nav-icon" />Search Jobs
              </Link>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
};
  
export default Header;