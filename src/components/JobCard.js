import React from "react";
import {Link} from "react-router-dom";
//Bulma
import {Card} from "react-bulma-components";

const JobCard = (props) => {
  return(
    <Card className="job-container">
        <Link to={`/jobs/${props.id}`} className="index-link">
          <h1 className="index-card-title">{props.title}</h1>
          <Card.Content className="index-card-content">
            <p>Type: {props.type}</p>
            <p>Salary: {props.salary}</p>
            <p>Location: {props.candidate_required_location}</p>
          </Card.Content>
        </Link>
    </Card>
  );
};

export default JobCard;

 