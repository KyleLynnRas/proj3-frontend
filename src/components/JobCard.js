import React from "react";
import {Link} from "react-router-dom";

const JobCard = (props) => {
  return(
    <div className="job-container">
        <Link to={`/jobs/${props.id}`}><h1>{props.title}</h1></Link>
        <p>Type: {props.type}</p>
        <p>Salary: {props.salary}</p>
        <p>Location: {props.candidate_required_location}</p> 
    </div>
  )
};

export default JobCard;

 