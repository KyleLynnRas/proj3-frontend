import React from "react";
import {Link} from "react-router-dom";
//Bulma
import {Card, Button} from "react-bulma-components";
//icons
import {BsSearch} from "react-icons/bs";
import {HiOutlineSave} from "react-icons/hi";
import {CgNotes} from "react-icons/cg";

const Home = (props) => {
  return(
      <div className="home-container">
        <section className="home-title-container">
            <h1>npm start career</h1>
            <p>DevInitely the best way to stay organized in your dev job search</p>
        </section>
        <section className="auth-btns">
            <Link to="/auth/signup"><Button className="home-start-btn">Sign up</Button></Link>
            <Link to="/auth/login"><Button className="home-start-btn">Log in</Button></Link>
        </section>
        <section className="features-container">
            <Card className="feat-one">
                <Link to="/jobs/search" className="home-link">
                    <Card.Content className="home-card-content">
                        <BsSearch className="feat-icon" />
                        <h1>Search Remotive for dev jobs</h1>
                    </Card.Content>
                </Link>
            </Card>
            <Card className="feat-two">
                <Link to="/jobs" className="home-link">
                    <Card.Content className="home-card-content">
                        <HiOutlineSave className="feat-icon" />
                        <h1>Save your favorite jobs</h1>
                    </Card.Content>
                </Link>
            </Card>
            <Card className="feat-three">
                <Card.Content className="home-card-content">
                    <CgNotes className="feat-icon" />
                    <h1>Add notes to keep track of your progress</h1>
                </Card.Content>
            </Card>
        </section>
      </div>
  );
};

export default Home;